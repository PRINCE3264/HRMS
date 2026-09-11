using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.DTOs.Attendance;
using HRMAPI.DTOs.Common;
using HRMAPI.Enums;
using HRMAPI.Models;
using HRMAPI.Repositories.Interfaces;

namespace HRMAPI.Services;

public interface IAttendanceService
{
    Task<AttendanceDto> CheckInAsync(Guid employeeId, CheckInOutDto dto);
    Task<AttendanceDto> CheckOutAsync(Guid employeeId, CheckInOutDto dto);
    Task<AttendanceDto> GetTodayAttendanceAsync(Guid employeeId);
    Task<List<AttendanceDto>> GetByEmployeeAsync(Guid employeeId, DateTime? startDate, DateTime? endDate);
    Task<List<AttendanceDto>> GetByDateAsync(DateTime date);
    Task<PaginatedResponse<AttendanceDto>> GetPaginatedAsync(PaginationQuery query, DateTime? date = null);
    Task<BreakRecordDto> StartBreakAsync(Guid employeeId, StartBreakDto dto);
    Task<BreakRecordDto> EndBreakAsync(Guid employeeId);
}

public class AttendanceService : IAttendanceService
{
    private readonly IAttendanceRepository _attendanceRepository;
    private readonly IBreakRecordRepository _breakRecordRepository;
    private readonly IEmployeeRepository _employeeRepository;
    private readonly IShiftAssignmentRepository _shiftAssignmentRepository;
    private readonly ApplicationDbContext _context;

    public AttendanceService(
        IAttendanceRepository attendanceRepository,
        IBreakRecordRepository breakRecordRepository,
        IEmployeeRepository employeeRepository,
        IShiftAssignmentRepository shiftAssignmentRepository,
        ApplicationDbContext context)
    {
        _attendanceRepository = attendanceRepository;
        _breakRecordRepository = breakRecordRepository;
        _employeeRepository = employeeRepository;
        _shiftAssignmentRepository = shiftAssignmentRepository;
        _context = context;
    }

    public async Task<AttendanceDto> CheckInAsync(Guid employeeId, CheckInOutDto dto)
    {
        var today = DateTime.UtcNow.Date;
        var existing = await _attendanceRepository.GetByEmployeeAndDateAsync(employeeId, today);
        if (existing?.CheckIn != null) throw new InvalidOperationException("Already checked in today.");

        var now = DateTime.UtcNow;
        var status = DetermineCheckInStatus(employeeId, now);

        var attendance = existing ?? new Attendance
        {
            EmployeeId = employeeId,
            Date = today,
            Status = AttendanceStatus.PRESENT
        };

        attendance.CheckIn = now;
        attendance.Location = dto.Location;
        attendance.Latitude = dto.Latitude;
        attendance.Longitude = dto.Longitude;
        attendance.Notes = dto.Notes;
        attendance.Status = status;

        if (existing == null)
        {
            await _attendanceRepository.AddAsync(attendance);
        }
        else
        {
            await _attendanceRepository.UpdateAsync(attendance);
        }

        return await MapToDtoAsync(attendance);
    }

    public async Task<AttendanceDto> CheckOutAsync(Guid employeeId, CheckInOutDto dto)
    {
        var today = DateTime.UtcNow.Date;
        var attendance = await _attendanceRepository.GetByEmployeeAndDateAsync(employeeId, today)
            ?? throw new InvalidOperationException("No check-in found for today.");

        if (attendance.CheckOut != null) throw new InvalidOperationException("Already checked out today.");

        // End any active break first
        var activeBreak = await _breakRecordRepository.GetActiveBreakAsync(attendance.Id);
        if (activeBreak != null)
        {
            activeBreak.EndTime = DateTime.UtcNow;
            activeBreak.DurationMinutes = (decimal)(activeBreak.EndTime.Value - activeBreak.StartTime).TotalMinutes;
            await _breakRecordRepository.UpdateAsync(activeBreak);
        }

        attendance.CheckOut = DateTime.UtcNow;
        var checkIn = attendance.CheckIn ?? DateTime.UtcNow;
        var checkOut = attendance.CheckOut ?? DateTime.UtcNow;
        attendance.WorkHours = CalculateWorkHours(checkIn, checkOut);
        attendance.Status = AttendanceStatus.PRESENT;
        await _attendanceRepository.UpdateAsync(attendance);

        return await MapToDtoAsync(attendance);
    }

    public async Task<AttendanceDto> GetTodayAttendanceAsync(Guid employeeId)
    {
        var today = DateTime.UtcNow.Date;
        var attendance = await _attendanceRepository.GetByEmployeeAndDateAsync(employeeId, today);
        if (attendance == null)
        {
            return new AttendanceDto
            {
                Id = Guid.Empty,
                EmployeeId = employeeId,
                Date = today,
                Status = AttendanceStatus.ABSENT.ToString()
            };
        }
        return await MapToDtoAsync(attendance);
    }

    public async Task<List<AttendanceDto>> GetByEmployeeAsync(Guid employeeId, DateTime? startDate, DateTime? endDate)
    {
        var records = await _attendanceRepository.GetByEmployeeAsync(employeeId, startDate, endDate);
        var result = new List<AttendanceDto>();
        foreach (var r in records) result.Add(await MapToDtoAsync(r));
        return result;
    }

    public async Task<List<AttendanceDto>> GetByDateAsync(DateTime date)
    {
        var records = await _attendanceRepository.GetByDateAsync(date);
        var result = new List<AttendanceDto>();
        foreach (var r in records) result.Add(await MapToDtoAsync(r));
        return result;
    }

    public async Task<PaginatedResponse<AttendanceDto>> GetPaginatedAsync(PaginationQuery query, DateTime? date = null)
    {
        var dbQuery = _context.Attendances
            .Include(a => a.Employee)
            .ThenInclude(e => e.Department)
            .AsQueryable();

        if (date.HasValue)
        {
            var d = date.Value.Date;
            dbQuery = dbQuery.Where(a => a.Date.Date == d);
        }

        if (!string.IsNullOrWhiteSpace(query.Search))
        {
            var search = query.Search.ToLower();
            dbQuery = dbQuery.Where(a =>
                a.Employee.FirstName.ToLower().Contains(search) ||
                a.Employee.LastName.ToLower().Contains(search) ||
                a.Employee.EmployeeId.ToLower().Contains(search) ||
                a.Status.ToString().ToLower().Contains(search));
        }

        var total = await dbQuery.CountAsync();
        var items = await dbQuery
            .OrderByDescending(a => a.Date)
            .Skip((query.Page - 1) * query.PageSize)
            .Take(query.PageSize)
            .ToListAsync();

        var result = new List<AttendanceDto>();
        foreach (var i in items) result.Add(await MapToDtoAsync(i));

        return new PaginatedResponse<AttendanceDto>
        {
            Items = result,
            Total = total,
            Page = query.Page,
            PageSize = query.PageSize
        };
    }

    public async Task<BreakRecordDto> StartBreakAsync(Guid employeeId, StartBreakDto dto)
    {
        var today = DateTime.UtcNow.Date;
        var attendance = await _attendanceRepository.GetByEmployeeAndDateAsync(employeeId, today)
            ?? throw new InvalidOperationException("No active attendance. Please check in first.");

        var active = await _breakRecordRepository.GetActiveBreakAsync(attendance.Id);
        if (active != null) throw new InvalidOperationException("A break is already active. End it first.");

        var breakType = Enum.TryParse<BreakType>(dto.BreakType, ignoreCase: true, out var bt)
            ? bt : BreakType.SHORT;

        var breakRecord = new BreakRecord
        {
            AttendanceId = attendance.Id,
            StartTime = DateTime.UtcNow,
            BreakType = breakType,
            Reason = dto.Reason
        };
        await _breakRecordRepository.AddAsync(breakRecord);

        return new BreakRecordDto
        {
            Id = breakRecord.Id,
            StartTime = breakRecord.StartTime,
            BreakType = breakRecord.BreakType.ToString(),
            Reason = breakRecord.Reason
        };
    }

    public async Task<BreakRecordDto> EndBreakAsync(Guid employeeId)
    {
        var today = DateTime.UtcNow.Date;
        var attendance = await _attendanceRepository.GetByEmployeeAndDateAsync(employeeId, today)
            ?? throw new InvalidOperationException("No active attendance.");

        var active = await _breakRecordRepository.GetActiveBreakAsync(attendance.Id)
            ?? throw new InvalidOperationException("No active break.");

        active.EndTime = DateTime.UtcNow;
        active.DurationMinutes = (decimal)(active.EndTime.Value - active.StartTime).TotalMinutes;
        await _breakRecordRepository.UpdateAsync(active);

        return new BreakRecordDto
        {
            Id = active.Id,
            StartTime = active.StartTime,
            EndTime = active.EndTime,
            BreakType = active.BreakType.ToString(),
            DurationMinutes = active.DurationMinutes,
            Reason = active.Reason
        };
    }

    private async Task<AttendanceDto> MapToDtoAsync(Attendance a)
    {
        var employee = a.Employee ?? await _employeeRepository.GetByIdAsync(a.EmployeeId);
        return new AttendanceDto
        {
            Id = a.Id,
            EmployeeId = a.EmployeeId,
            EmployeeName = employee != null ? $"{employee.FirstName} {employee.LastName}" : null,
            Date = a.Date,
            CheckIn = a.CheckIn,
            CheckOut = a.CheckOut,
            WorkHours = a.WorkHours,
            Overtime = a.Overtime,
            Status = a.Status.ToString(),
            Location = a.Location,
            Latitude = a.Latitude,
            Longitude = a.Longitude,
            Notes = a.Notes,
            Breaks = a.Breaks.Select(b => new BreakRecordDto
            {
                Id = b.Id,
                StartTime = b.StartTime,
                EndTime = b.EndTime,
                BreakType = b.BreakType.ToString(),
                DurationMinutes = b.DurationMinutes,
                Reason = b.Reason
            }).ToList()
        };
    }

    private AttendanceStatus DetermineCheckInStatus(Guid employeeId, DateTime now)
    {
        var assignment = _shiftAssignmentRepository.GetActiveAssignmentAsync(employeeId).Result;
        if (assignment?.Shift != null)
        {
            var shiftStart = assignment.Shift.StartTime;
            var graceMinutes = 15;
            if (TimeOnly.FromDateTime(now) > shiftStart.AddMinutes(graceMinutes))
            {
                return AttendanceStatus.LATE;
            }
        }
        return AttendanceStatus.PRESENT;
    }

    private decimal CalculateWorkHours(DateTime checkIn, DateTime checkOut)
    {
        var hours = (decimal)(checkOut - checkIn).TotalHours;
        if (hours < 4) return hours;
        if (hours < 8) return hours - 0.5m;
        return hours - 1m;
    }
}
