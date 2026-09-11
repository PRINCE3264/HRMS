using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.DTOs.Work;
using HRMAPI.Enums;
using HRMAPI.Models;
using HRMAPI.Repositories.Interfaces;

namespace HRMAPI.Services;

public interface IWorkUpdateService
{
    Task<List<DailyWorkUpdateDto>> GetMyUpdatesAsync(Guid employeeId);
    Task<List<DailyWorkUpdateDto>> GetUpdatesByEmployeeAsync(Guid employeeId);
    Task<List<DailyWorkUpdateDto>> GetUpdatesByDateAsync(DateTime date);
    Task<DailyWorkUpdateDto> SubmitAsync(Guid employeeId, CreateDailyWorkUpdateDto dto);
    Task<DailyWorkUpdateDto> UpdateAsync(Guid id, Guid employeeId, UpdateDailyWorkUpdateDto dto);
    Task<bool> DeleteAsync(Guid id, Guid? requesterEmployeeId = null);
}

public class WorkUpdateService : IWorkUpdateService
{
    private readonly IWorkUpdateRepository _workUpdateRepository;
    private readonly ApplicationDbContext _context;

    public WorkUpdateService(IWorkUpdateRepository workUpdateRepository, ApplicationDbContext context)
    {
        _workUpdateRepository = workUpdateRepository;
        _context = context;
    }

    public async Task<List<DailyWorkUpdateDto>> GetMyUpdatesAsync(Guid employeeId)
    {
        var updates = await _workUpdateRepository.GetByEmployeeAsync(employeeId);
        return updates.Select(MapToDto).ToList();
    }

    public async Task<List<DailyWorkUpdateDto>> GetUpdatesByEmployeeAsync(Guid employeeId)
    {
        var updates = await _workUpdateRepository.GetByEmployeeAsync(employeeId);
        return updates.Select(MapToDto).ToList();
    }

    public async Task<List<DailyWorkUpdateDto>> GetUpdatesByDateAsync(DateTime date)
    {
        var updates = await _workUpdateRepository.GetByDateAsync(date);
        return updates.Select(MapToDto).ToList();
    }

    public async Task<DailyWorkUpdateDto> SubmitAsync(Guid employeeId, CreateDailyWorkUpdateDto dto)
    {
        var existing = await _workUpdateRepository.GetByEmployeeAndDateAsync(employeeId, DateTime.UtcNow.Date);
        if (existing != null)
        {
            existing.TasksCompleted = dto.TasksCompleted;
            existing.WorkSummary = dto.WorkSummary;
            existing.IssuesBlockers = dto.IssuesBlockers;
            existing.HoursWorked = dto.HoursWorked;
            existing.Status = WorkUpdateStatus.REVISED;
            existing.UpdatedAt = DateTime.UtcNow;
            await _workUpdateRepository.UpdateAsync(existing);
            return (await GetMyUpdatesAsync(employeeId)).First(u => u.Id == existing.Id);
        }

        var update = new DailyWorkUpdate
        {
            EmployeeId = employeeId,
            Date = DateTime.UtcNow.Date,
            TasksCompleted = dto.TasksCompleted,
            WorkSummary = dto.WorkSummary,
            IssuesBlockers = dto.IssuesBlockers,
            HoursWorked = dto.HoursWorked,
            Status = WorkUpdateStatus.SUBMITTED
        };
        await _workUpdateRepository.AddAsync(update);
        return (await GetMyUpdatesAsync(employeeId)).First(u => u.Id == update.Id);
    }

    public async Task<DailyWorkUpdateDto> UpdateAsync(Guid id, Guid employeeId, UpdateDailyWorkUpdateDto dto)
    {
        var update = await _workUpdateRepository.GetByIdAsync(id)
            ?? throw new KeyNotFoundException("Work update not found.");
        if (update.EmployeeId != employeeId) throw new InvalidOperationException("You can only edit your own work updates.");
        if (dto.TasksCompleted != null) update.TasksCompleted = dto.TasksCompleted;
        if (dto.WorkSummary != null) update.WorkSummary = dto.WorkSummary;
        if (dto.IssuesBlockers != null) update.IssuesBlockers = dto.IssuesBlockers;
        if (dto.HoursWorked.HasValue) update.HoursWorked = dto.HoursWorked;
        if (!string.IsNullOrWhiteSpace(dto.Status) &&
            Enum.TryParse<WorkUpdateStatus>(dto.Status, true, out var status)) update.Status = status;
        update.UpdatedAt = DateTime.UtcNow;
        await _workUpdateRepository.UpdateAsync(update);
        return (await GetMyUpdatesAsync(employeeId)).First(u => u.Id == id);
    }

    public async Task<bool> DeleteAsync(Guid id, Guid? requesterEmployeeId = null)
    {
        var update = await _workUpdateRepository.GetByIdAsync(id)
            ?? throw new KeyNotFoundException("Work update not found.");
        if (requesterEmployeeId.HasValue && update.EmployeeId != requesterEmployeeId.Value)
            throw new InvalidOperationException("You can only delete your own work updates.");
        await _workUpdateRepository.DeleteAsync(update);
        return true;
    }

    private DailyWorkUpdateDto MapToDto(DailyWorkUpdate wu) => new()
    {
        Id = wu.Id,
        EmployeeId = wu.EmployeeId,
        EmployeeName = wu.Employee != null ? $"{wu.Employee.FirstName} {wu.Employee.LastName}" : null,
        EmployeeDesignation = wu.Employee?.Designation?.Title,
        Date = wu.Date,
        TasksCompleted = wu.TasksCompleted,
        WorkSummary = wu.WorkSummary,
        IssuesBlockers = wu.IssuesBlockers,
        HoursWorked = wu.HoursWorked,
        Status = wu.Status.ToString(),
        CreatedAt = wu.CreatedAt,
        UpdatedAt = wu.UpdatedAt
    };
}
