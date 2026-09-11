namespace HRMAPI.DTOs.Performance;

public class PerformanceReviewDto
{
    public Guid Id { get; set; }
    public Guid EmployeeId { get; set; }
    public string? EmployeeName { get; set; }
    public Guid ReviewerId { get; set; }
    public string? ReviewerName { get; set; }
    public string Period { get; set; } = string.Empty;
    public decimal OverallRating { get; set; }
    public decimal GoalsRating { get; set; }
    public decimal CompetencyRating { get; set; }
    public string? Comments { get; set; }
    public string Status { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
}

public class CreatePerformanceReviewDto
{
    public Guid EmployeeId { get; set; }
    public string Period { get; set; } = string.Empty;
    public decimal OverallRating { get; set; }
    public decimal GoalsRating { get; set; }
    public decimal CompetencyRating { get; set; }
    public string? Comments { get; set; }
}

public class KpiDto
{
    public Guid Id { get; set; }
    public Guid EmployeeId { get; set; }
    public string? EmployeeName { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public decimal TargetValue { get; set; }
    public decimal CurrentValue { get; set; }
    public string? Unit { get; set; }
    public decimal Weight { get; set; }
    public string Period { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
}

public class CreateKpiDto
{
    public Guid EmployeeId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public decimal TargetValue { get; set; }
    public string? Unit { get; set; }
    public decimal Weight { get; set; }
    public string Period { get; set; } = string.Empty;
}

public class TaskDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public Guid AssignedToId { get; set; }
    public string? AssignedToName { get; set; }
    public Guid AssignedById { get; set; }
    public string? AssignedByName { get; set; }
    public string Priority { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public DateTime DueDate { get; set; }
    public DateTime? CompletedDate { get; set; }
    public decimal? EstimatedHours { get; set; }
    public decimal? ActualHours { get; set; }
    public int? Rating { get; set; }
    public string? ReviewComments { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class CreateTaskDto
{
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public Guid AssignedToId { get; set; }
    public string Priority { get; set; } = "MEDIUM";
    public DateTime DueDate { get; set; }
    public decimal? EstimatedHours { get; set; }
}

public class ReviewTaskDto
{
    public string Status { get; set; } = string.Empty;
    public int? Rating { get; set; }
    public string? ReviewComments { get; set; }
    public decimal? ActualHours { get; set; }
}

public class PerformanceFeedbackDto
{
    public Guid Id { get; set; }
    public Guid TargetEmployeeId { get; set; }
    public string? TargetEmployeeName { get; set; }
    public Guid ReviewerId { get; set; }
    public string? ReviewerName { get; set; }
    public string ReviewPeriod { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public int Rating { get; set; }
    public string? Comments { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class CreateFeedbackDto
{
    public Guid TargetEmployeeId { get; set; }
    public string ReviewPeriod { get; set; } = string.Empty;
    public string Category { get; set; } = "PEER";
    public int Rating { get; set; }
    public string? Comments { get; set; }
}

