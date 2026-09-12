using HRMAPI.Interfaces.Services;
using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Performance;
using HRMAPI.Enums;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;
using TaskStatus = HRMAPI.Enums.TaskStatus;

namespace HRMAPI.Interfaces.Services;

public interface IPerformanceService
{
    Task<List<PerformanceReviewDto>> GetReviewsAsync(string? employeeId = null);
    Task<List<PerformanceReviewDto>> GetReviewsByEmployeeAsync(Guid employeeId);
    Task<PerformanceReviewDto> CreateReviewAsync(CreatePerformanceReviewDto dto, Guid reviewerId);
    Task<PerformanceReviewDto> UpdateReviewAsync(Guid id, CreatePerformanceReviewDto dto);
    Task<bool> DeleteReviewAsync(Guid id);

    Task<List<KpiDto>> GetKpisAsync(string? employeeId = null);
    Task<List<KpiDto>> GetKpisByEmployeeAsync(Guid employeeId);
    Task<KpiDto> CreateKpiAsync(CreateKpiDto dto);
    Task<KpiDto> UpdateKpiAsync(Guid id, CreateKpiDto dto);
    Task<bool> DeleteKpiAsync(Guid id);

    Task<List<TaskDto>> GetTasksForEmployeeAsync(Guid employeeId);
    Task<List<TaskDto>> GetTasksAssignedByAsync(Guid employeeId);
    Task<TaskDto> CreateTaskAsync(CreateTaskDto dto, Guid assignedById);
    Task<TaskDto> UpdateTaskStatusAsync(Guid id, string status);
    Task<TaskDto> ReviewTaskAsync(Guid id, ReviewTaskDto dto);
    Task<bool> DeleteTaskAsync(Guid id);

    Task<List<PerformanceFeedbackDto>> GetFeedbacksAsync(Guid? targetEmployeeId = null);
    Task<List<PerformanceFeedbackDto>> GetFeedbacksAboutMeAsync(Guid targetEmployeeId);
    Task<List<PerformanceFeedbackDto>> GetFeedbacksByMeAsync(Guid reviewerId);
    Task<PerformanceFeedbackDto> CreateFeedbackAsync(CreateFeedbackDto dto, Guid reviewerId);
    Task<bool> DeleteFeedbackAsync(Guid id);
}
