using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models;

public class PerformanceReview
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid EmployeeId { get; set; }

    public Guid ReviewerId { get; set; }

    [Required, MaxLength(50)]
    public string Period { get; set; } = string.Empty;

    public decimal OverallRating { get; set; }

    public decimal GoalsRating { get; set; }

    public decimal CompetencyRating { get; set; }

    [MaxLength(2000)]
    public string? Comments { get; set; }

    public ReviewStatus Status { get; set; } = ReviewStatus.DRAFT;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(EmployeeId))]
    public virtual Employee Employee { get; set; } = null!;

    [ForeignKey(nameof(ReviewerId))]
    public virtual User Reviewer { get; set; } = null!;
}

public class KPI
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid EmployeeId { get; set; }

    [Required, MaxLength(200)]
    public string Title { get; set; } = string.Empty;

    [MaxLength(1000)]
    public string? Description { get; set; }

    public decimal TargetValue { get; set; }

    public decimal CurrentValue { get; set; }

    [MaxLength(50)]
    public string? Unit { get; set; }

    public decimal Weight { get; set; }

    [Required, MaxLength(50)]
    public string Period { get; set; } = string.Empty;

    [MaxLength(50)]
    public string Status { get; set; } = "ACTIVE";

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(EmployeeId))]
    public virtual Employee Employee { get; set; } = null!;
}

public class TaskAssignment
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required, MaxLength(200)]
    public string Title { get; set; } = string.Empty;

    [MaxLength(2000)]
    public string? Description { get; set; }

    public Guid AssignedToId { get; set; }

    public Guid AssignedById { get; set; }

    public TaskPriority Priority { get; set; } = TaskPriority.MEDIUM;

    public HRMAPI.Enums.TaskStatus Status { get; set; } = HRMAPI.Enums.TaskStatus.TODO;

    public DateTime DueDate { get; set; }

    public DateTime? CompletedDate { get; set; }

    public decimal? EstimatedHours { get; set; }

    public decimal? ActualHours { get; set; }

    public int? Rating { get; set; }

    [MaxLength(1000)]
    public string? ReviewComments { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(AssignedToId))]
    public virtual Employee AssignedTo { get; set; } = null!;

    [ForeignKey(nameof(AssignedById))]
    public virtual Employee AssignedBy { get; set; } = null!;
}

