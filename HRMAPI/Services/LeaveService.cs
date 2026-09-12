using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Models.DTOs.Leave;
using HRMAPI.Enums;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Services;



public class LeaveService : ILeaveService
{
    private readonly ILeaveRequestRepository _leaveRequestRepository;
    private readonly ILeaveBalanceRepository _leaveBalanceRepository;
    private readonly IEmployeeRepository _employeeRepository;
    private readonly IUserRepository _userRepository;
    private readonly ApplicationDbContext _context;

    public LeaveService(
        ILeaveRequestRepository leaveRequestRepository,
        ILeaveBalanceRepository leaveBalanceRepository,
        IEmployeeRepository employeeRepository,
        IUserRepository userRepository,
        ApplicationDbContext context)
    {
        _leaveRequestRepository = leaveRequestRepository;
        _leaveBalanceRepository = leaveBalanceRepository;
        _employeeRepository = employeeRepository;
        _userRepository = userRepository;
        _context = context;
    }

    public async Task<PaginatedResponse<LeaveRequestDto>> GetRequestsAsync(PaginationQuery query, string? status = null)
    {
        var dbQuery = _context.LeaveRequests
            .Include(lr => lr.Employee)
            .Include(lr => lr.ApprovedBy)
            .AsQueryable();

        if (!string.IsNullOrWhiteSpace(status))
        {
            var parsed = Enum.TryParse<LeaveStatus>(status, true, out var s) ? s : (LeaveStatus?)null;
            if (parsed.HasValue) dbQuery = dbQuery.Where(lr => lr.Status == parsed.Value);
        }

        if (!string.IsNullOrWhiteSpace(query.Search))
        {
            var search = query.Search.ToLower();
            dbQuery = dbQuery.Where(lr =>
                lr.Employee.FirstName.ToLower().Contains(search) ||
                lr.Employee.LastName.ToLower().Contains(search) ||
                lr.LeaveType.ToString().ToLower().Contains(search) ||
                lr.Status.ToString().ToLower().Contains(search));
        }

        var total = await dbQuery.CountAsync();
        var items = await dbQuery
            .OrderByDescending(lr => lr.CreatedAt)
            .Skip((query.Page - 1) * query.PageSize)
            .Take(query.PageSize)
            .ToListAsync();

        return new PaginatedResponse<LeaveRequestDto>
        {
            Items = items.Select(MapToDto).ToList(),
            Total = total,
            Page = query.Page,
            PageSize = query.PageSize
        };
    }

    public async Task<List<LeaveRequestDto>> GetByEmployeeAsync(Guid employeeId)
    {
        var requests = await _leaveRequestRepository.GetByEmployeeAsync(employeeId);
        return requests.Select(MapToDto).ToList();
    }

    public async Task<List<LeaveRequestDto>> GetPendingAsync()
    {
        var requests = await _leaveRequestRepository.GetPendingAsync();
        return requests.Select(MapToDto).ToList();
    }

    public async Task<LeaveRequestDto> ApplyAsync(Guid employeeId, CreateLeaveRequestDto dto)
    {
        var employee = await _employeeRepository.GetByIdAsync(employeeId)
            ?? throw new KeyNotFoundException("Employee not found.");

        if (dto.EndDate < dto.StartDate) throw new InvalidOperationException("End date cannot be before start date.");

        var leaveType = Enum.TryParse<LeaveType>(dto.LeaveType, true, out var lt)
            ? lt : LeaveType.ANNUAL;

        var totalDays = (dto.EndDate - dto.StartDate).Days + 1;
        var year = dto.StartDate.Year;

        // Check and deduct from balance
        var balance = await _leaveBalanceRepository.GetByEmployeeAndTypeAsync(employeeId, leaveType, year);
        if (leaveType != LeaveType.UNPAID)
        {
            if (balance == null)
            {
                throw new InvalidOperationException($"No leave balance found for {leaveType} in {year}.");
            }
            if (balance.Remaining < totalDays)
            {
                throw new InvalidOperationException($"Insufficient {leaveType} balance. Only {balance.Remaining} days remaining.");
            }
        }

        var request = new LeaveRequest
        {
            EmployeeId = employeeId,
            LeaveType = leaveType,
            StartDate = dto.StartDate.Date,
            EndDate = dto.EndDate.Date,
            TotalDays = totalDays,
            Reason = dto.Reason
        };

        var created = await _leaveRequestRepository.AddAsync(request);

        if (balance != null && leaveType != LeaveType.UNPAID)
        {
            balance.Taken += totalDays;
            balance.Remaining -= totalDays;
            await _leaveBalanceRepository.UpdateAsync(balance);
        }

        return MapToDto(created);
    }

    public async Task<LeaveRequestDto> ApproveOrRejectAsync(Guid id, ApproveLeaveDto dto, Guid approvedById)
    {
        var request = await _leaveRequestRepository.GetByIdAsync(id)
            ?? throw new KeyNotFoundException("Leave request not found.");

        if (request.Status != LeaveStatus.PENDING)
            throw new InvalidOperationException("Only pending requests can be approved/rejected.");

        var newStatus = Enum.TryParse<LeaveStatus>(dto.Status, true, out var s)
            ? s : throw new InvalidOperationException("Invalid status.");
        if (newStatus != LeaveStatus.APPROVED && newStatus != LeaveStatus.REJECTED)
            throw new InvalidOperationException("Only APPROVED or REJECTED status is allowed.");

        request.Status = newStatus;
        request.ApprovedById = approvedById;
        request.ApprovedAt = DateTime.UtcNow;
        request.Comments = dto.Comments;
        await _leaveRequestRepository.UpdateAsync(request);

        // If rejected, restore balance
        if (newStatus == LeaveStatus.REJECTED && request.LeaveType != LeaveType.UNPAID)
        {
            var balance = await _leaveBalanceRepository.GetByEmployeeAndTypeAsync(
                request.EmployeeId, request.LeaveType, request.StartDate.Year);
            if (balance != null)
            {
                balance.Taken -= request.TotalDays;
                balance.Remaining += request.TotalDays;
                await _leaveBalanceRepository.UpdateAsync(balance);
            }
        }

        return MapToDto(request);
    }

    public async Task<List<LeaveBalanceDto>> GetBalancesAsync(Guid employeeId)
    {
        var year = DateTime.UtcNow.Year;
        var balances = await _leaveBalanceRepository.GetByEmployeeAsync(employeeId, year);
        return balances.Select(b => new LeaveBalanceDto
        {
            LeaveType = b.LeaveType.ToString(),
            Entitled = b.Entitled,
            Taken = b.Taken,
            Remaining = b.Remaining
        }).ToList();
    }

    public async Task<bool> CancelAsync(Guid id)
    {
        var request = await _leaveRequestRepository.GetByIdAsync(id)
            ?? throw new KeyNotFoundException("Leave request not found.");
        if (request.Status != LeaveStatus.PENDING)
            throw new InvalidOperationException("Only pending requests can be cancelled.");

        if (request.LeaveType != LeaveType.UNPAID)
        {
            var balance = await _leaveBalanceRepository.GetByEmployeeAndTypeAsync(
                request.EmployeeId, request.LeaveType, request.StartDate.Year);
            if (balance != null)
            {
                balance.Taken -= request.TotalDays;
                balance.Remaining += request.TotalDays;
                await _leaveBalanceRepository.UpdateAsync(balance);
            }
        }

        request.Status = LeaveStatus.CANCELLED;
        await _leaveRequestRepository.UpdateAsync(request);
        return true;
    }

    private LeaveRequestDto MapToDto(LeaveRequest lr)
    {
        var employee = lr.Employee;
        var approver = lr.ApprovedBy;
        return new LeaveRequestDto
        {
            Id = lr.Id,
            EmployeeId = lr.EmployeeId,
            EmployeeName = employee != null ? $"{employee.FirstName} {employee.LastName}" : null,
            LeaveType = lr.LeaveType.ToString(),
            StartDate = lr.StartDate,
            EndDate = lr.EndDate,
            TotalDays = lr.TotalDays,
            Reason = lr.Reason,
            Status = lr.Status.ToString(),
            ApprovedBy = approver != null ? $"{approver.FirstName} {approver.LastName}" : null,
            ApprovedAt = lr.ApprovedAt,
            Comments = lr.Comments,
            CreatedAt = lr.CreatedAt
        };
    }
}

