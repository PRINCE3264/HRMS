using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Performance;
using HRMAPI.Enums;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;
using TaskStatus = HRMAPI.Enums.TaskStatus;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Services;



public class PerformanceService : IPerformanceService
{
    private readonly IPerformanceReviewRepository _reviewRepository;
    private readonly IKPIRepository _kpiRepository;
    private readonly ITaskAssignmentRepository _taskRepository;
    private readonly IPerformanceFeedbackRepository _feedbackRepository;
    private readonly IEmployeeRepository _employeeRepository;
    private readonly IUserRepository _userRepository;
    private readonly ApplicationDbContext _context;

    public PerformanceService(
        IPerformanceReviewRepository reviewRepository,
        IKPIRepository kpiRepository,
        ITaskAssignmentRepository taskRepository,
        IPerformanceFeedbackRepository feedbackRepository,
        IEmployeeRepository employeeRepository,
        IUserRepository userRepository,
        ApplicationDbContext context)
    {
        _reviewRepository = reviewRepository;
        _kpiRepository = kpiRepository;
        _taskRepository = taskRepository;
        _feedbackRepository = feedbackRepository;
        _employeeRepository = employeeRepository;
        _userRepository = userRepository;
        _context = context;
    }

    public async Task<List<PerformanceReviewDto>> GetReviewsAsync(string? employeeId = null)
    {
        var dbQuery = _context.PerformanceReviews
            .Include(pr => pr.Employee)
            .Include(pr => pr.Reviewer)
            .AsQueryable();
        if (Guid.TryParse(employeeId, out var empId)) dbQuery = dbQuery.Where(pr => pr.EmployeeId == empId);
        var reviews = await dbQuery.OrderByDescending(pr => pr.CreatedAt).ToListAsync();
        return reviews.Select(MapToDto).ToList();
    }

    public async Task<List<PerformanceReviewDto>> GetReviewsByEmployeeAsync(Guid employeeId)
    {
        var reviews = await _reviewRepository.GetByEmployeeAsync(employeeId);
        return reviews.Select(MapToDto).ToList();
    }

    public async Task<PerformanceReviewDto> CreateReviewAsync(CreatePerformanceReviewDto dto, Guid reviewerId)
    {
        var review = new PerformanceReview
        {
            EmployeeId = dto.EmployeeId,
            ReviewerId = reviewerId,
            Period = dto.Period,
            OverallRating = dto.OverallRating,
            GoalsRating = dto.GoalsRating,
            CompetencyRating = dto.CompetencyRating,
            Comments = dto.Comments,
            Status = ReviewStatus.COMPLETED
        };
        await _reviewRepository.AddAsync(review);
        return (await GetReviewsAsync(null)).First(r => r.Id == review.Id);
    }

    public async Task<PerformanceReviewDto> UpdateReviewAsync(Guid id, CreatePerformanceReviewDto dto)
    {
        var review = await _reviewRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("Review not found.");
        review.EmployeeId = dto.EmployeeId;
        review.Period = dto.Period;
        review.OverallRating = dto.OverallRating;
        review.GoalsRating = dto.GoalsRating;
        review.CompetencyRating = dto.CompetencyRating;
        review.Comments = dto.Comments;
        await _reviewRepository.UpdateAsync(review);
        return (await GetReviewsAsync(null)).First(r => r.Id == id);
    }

    public async Task<bool> DeleteReviewAsync(Guid id)
    {
        var review = await _reviewRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("Review not found.");
        await _reviewRepository.DeleteAsync(review);
        return true;
    }

    public async Task<List<KpiDto>> GetKpisAsync(string? employeeId = null)
    {
        var dbQuery = _context.KPIs.Include(k => k.Employee).AsQueryable();
        if (Guid.TryParse(employeeId, out var empId)) dbQuery = dbQuery.Where(k => k.EmployeeId == empId);
        var kpis = await dbQuery.OrderByDescending(k => k.CreatedAt).ToListAsync();
        return kpis.Select(MapKpiToDto).ToList();
    }

    public async Task<List<KpiDto>> GetKpisByEmployeeAsync(Guid employeeId)
    {
        var kpis = await _kpiRepository.GetByEmployeeAsync(employeeId);
        return kpis.Select(MapKpiToDto).ToList();
    }

    public async Task<KpiDto> CreateKpiAsync(CreateKpiDto dto)
    {
        var kpi = new KPI
        {
            EmployeeId = dto.EmployeeId,
            Title = dto.Title,
            Description = dto.Description,
            TargetValue = dto.TargetValue,
            CurrentValue = 0,
            Unit = dto.Unit,
            Weight = dto.Weight,
            Period = dto.Period
        };
        await _kpiRepository.AddAsync(kpi);
        return (await GetKpisAsync(null)).First(k => k.Id == kpi.Id);
    }

    public async Task<KpiDto> UpdateKpiAsync(Guid id, CreateKpiDto dto)
    {
        var kpi = await _kpiRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("KPI not found.");
        kpi.EmployeeId = dto.EmployeeId;
        kpi.Title = dto.Title;
        kpi.Description = dto.Description;
        kpi.TargetValue = dto.TargetValue;
        kpi.Unit = dto.Unit;
        kpi.Weight = dto.Weight;
        kpi.Period = dto.Period;
        await _kpiRepository.UpdateAsync(kpi);
        return (await GetKpisAsync(null)).First(k => k.Id == id);
    }

    public async Task<bool> DeleteKpiAsync(Guid id)
    {
        var kpi = await _kpiRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("KPI not found.");
        await _kpiRepository.DeleteAsync(kpi);
        return true;
    }

    public async Task<List<TaskDto>> GetTasksForEmployeeAsync(Guid employeeId)
    {
        var tasks = await _taskRepository.GetByAssignedToAsync(employeeId);
        return await MapTasksToDtoAsync(tasks);
    }

    public async Task<List<TaskDto>> GetTasksAssignedByAsync(Guid employeeId)
    {
        var tasks = await _taskRepository.GetByAssignedByAsync(employeeId);
        return await MapTasksToDtoAsync(tasks);
    }

    public async Task<TaskDto> CreateTaskAsync(CreateTaskDto dto, Guid assignedById)
    {
        var priority = Enum.TryParse<TaskPriority>(dto.Priority, true, out var p) ? p : TaskPriority.MEDIUM;
        var task = new TaskAssignment
        {
            Title = dto.Title,
            Description = dto.Description,
            AssignedToId = dto.AssignedToId,
            AssignedById = assignedById,
            Priority = priority,
            Status = TaskStatus.TODO,
            DueDate = dto.DueDate,
            EstimatedHours = dto.EstimatedHours
        };
        await _taskRepository.AddAsync(task);
        return (await GetTasksAssignedByAsync(assignedById)).First(t => t.Id == task.Id);
    }

    public async Task<TaskDto> UpdateTaskStatusAsync(Guid id, string status)
    {
        var task = await _taskRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("Task not found.");
        var newStatus = Enum.TryParse<TaskStatus>(status, true, out var s) ? s : throw new InvalidOperationException("Invalid status.");
        task.Status = newStatus;
        task.CompletedDate = newStatus == TaskStatus.COMPLETED ? DateTime.UtcNow : task.CompletedDate;
        await _taskRepository.UpdateAsync(task);
        return (await GetTasksForEmployeeAsync(task.AssignedToId)).First(t => t.Id == id);
    }

    public async Task<TaskDto> ReviewTaskAsync(Guid id, ReviewTaskDto dto)
    {
        var task = await _taskRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("Task not found.");
        if (dto.Status != null)
        {
            var newStatus = Enum.TryParse<TaskStatus>(dto.Status, true, out var s) ? s : throw new InvalidOperationException("Invalid status.");
            task.Status = newStatus;
            task.CompletedDate = newStatus == TaskStatus.COMPLETED ? DateTime.UtcNow : task.CompletedDate;
        }
        if (dto.Rating.HasValue) task.Rating = dto.Rating.Value;
        if (dto.ReviewComments != null) task.ReviewComments = dto.ReviewComments;
        if (dto.ActualHours.HasValue) task.ActualHours = dto.ActualHours.Value;
        await _taskRepository.UpdateAsync(task);
        return (await GetTasksForEmployeeAsync(task.AssignedToId)).First(t => t.Id == id);
    }

    public async Task<bool> DeleteTaskAsync(Guid id)
    {
        var task = await _taskRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("Task not found.");
        await _taskRepository.DeleteAsync(task);
        return true;
    }

    public async Task<List<PerformanceFeedbackDto>> GetFeedbacksAsync(Guid? targetEmployeeId = null)
    {
        var query = _context.PerformanceFeedbacks
            .Include(pf => pf.TargetEmployee)
            .Include(pf => pf.Reviewer)
            .AsQueryable();
        if (targetEmployeeId.HasValue) query = query.Where(pf => pf.TargetEmployeeId == targetEmployeeId.Value);
        var feedbacks = await query.OrderByDescending(pf => pf.CreatedAt).ToListAsync();
        return feedbacks.Select(MapFeedback).ToList();
    }

    public async Task<List<PerformanceFeedbackDto>> GetFeedbacksAboutMeAsync(Guid targetEmployeeId)
    {
        var feedbacks = await _feedbackRepository.GetByTargetAsync(targetEmployeeId);
        return feedbacks.Select(MapFeedback).ToList();
    }

    public async Task<List<PerformanceFeedbackDto>> GetFeedbacksByMeAsync(Guid reviewerId)
    {
        var feedbacks = await _feedbackRepository.GetByReviewerAsync(reviewerId);
        return feedbacks.Select(MapFeedback).ToList();
    }

    public async Task<PerformanceFeedbackDto> CreateFeedbackAsync(CreateFeedbackDto dto, Guid reviewerId)
    {
        var category = Enum.TryParse<FeedbackCategory>(dto.Category, true, out var c)
            ? c : FeedbackCategory.PEER;
        var feedback = new PerformanceFeedback
        {
            TargetEmployeeId = dto.TargetEmployeeId,
            ReviewerId = reviewerId,
            ReviewPeriod = dto.ReviewPeriod,
            Category = category,
            Rating = Math.Clamp(dto.Rating, 1, 5),
            Comments = dto.Comments
        };
        await _feedbackRepository.AddAsync(feedback);
        return (await GetFeedbacksAsync(null)).First(f => f.Id == feedback.Id);
    }

    public async Task<bool> DeleteFeedbackAsync(Guid id)
    {
        var feedback = await _feedbackRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("Feedback not found.");
        await _feedbackRepository.DeleteAsync(feedback);
        return true;
    }

    private PerformanceFeedbackDto MapFeedback(PerformanceFeedback pf) => new()
    {
        Id = pf.Id,
        TargetEmployeeId = pf.TargetEmployeeId,
        TargetEmployeeName = pf.TargetEmployee != null ? $"{pf.TargetEmployee.FirstName} {pf.TargetEmployee.LastName}" : null,
        ReviewerId = pf.ReviewerId,
        ReviewerName = pf.Reviewer != null ? $"{pf.Reviewer.FirstName} {pf.Reviewer.LastName}" : null,
        ReviewPeriod = pf.ReviewPeriod,
        Category = pf.Category.ToString(),
        Rating = pf.Rating,
        Comments = pf.Comments,
        CreatedAt = pf.CreatedAt
    };

    private PerformanceReviewDto MapToDto(PerformanceReview pr) => new()
    {
        Id = pr.Id,
        EmployeeId = pr.EmployeeId,
        EmployeeName = pr.Employee != null ? $"{pr.Employee.FirstName} {pr.Employee.LastName}" : null,
        ReviewerId = pr.ReviewerId,
        ReviewerName = pr.Reviewer != null ? $"{pr.Reviewer.FirstName} {pr.Reviewer.LastName}" : null,
        Period = pr.Period,
        OverallRating = pr.OverallRating,
        GoalsRating = pr.GoalsRating,
        CompetencyRating = pr.CompetencyRating,
        Comments = pr.Comments,
        Status = pr.Status.ToString(),
        CreatedAt = pr.CreatedAt
    };

    private KpiDto MapKpiToDto(KPI k) => new()
    {
        Id = k.Id,
        EmployeeId = k.EmployeeId,
        EmployeeName = k.Employee != null ? $"{k.Employee.FirstName} {k.Employee.LastName}" : null,
        Title = k.Title,
        Description = k.Description,
        TargetValue = k.TargetValue,
        CurrentValue = k.CurrentValue,
        Unit = k.Unit,
        Weight = k.Weight,
        Period = k.Period,
        Status = k.Status
    };

    private async Task<List<TaskDto>> MapTasksToDtoAsync(IEnumerable<TaskAssignment> tasks)
    {
        var result = new List<TaskDto>();
        foreach (var t in tasks)
        {
            var assignedTo = t.AssignedTo ?? await _employeeRepository.GetByIdAsync(t.AssignedToId);
            var assignedBy = t.AssignedBy ?? await _employeeRepository.GetByIdAsync(t.AssignedById);
            result.Add(new TaskDto
            {
                Id = t.Id,
                Title = t.Title,
                Description = t.Description,
                AssignedToId = t.AssignedToId,
                AssignedToName = assignedTo != null ? $"{assignedTo.FirstName} {assignedTo.LastName}" : null,
                AssignedById = t.AssignedById,
                AssignedByName = assignedBy != null ? $"{assignedBy.FirstName} {assignedBy.LastName}" : null,
                Priority = t.Priority.ToString(),
                Status = t.Status.ToString(),
                DueDate = t.DueDate,
                CompletedDate = t.CompletedDate,
                EstimatedHours = t.EstimatedHours,
                ActualHours = t.ActualHours,
                Rating = t.Rating,
                ReviewComments = t.ReviewComments,
                CreatedAt = t.CreatedAt
            });
        }
        return result;
    }
}

