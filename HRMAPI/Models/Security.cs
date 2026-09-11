using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models;

public class RolePermission
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required, MaxLength(20)]
    public string Role { get; set; } = string.Empty;

    [Required, MaxLength(100)]
    public string Module { get; set; } = string.Empty;

    public PermissionAction Action { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}

public class PerformanceFeedback
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid TargetEmployeeId { get; set; }

    public Guid ReviewerId { get; set; }

    [Required, MaxLength(50)]
    public string ReviewPeriod { get; set; } = string.Empty;

    public FeedbackCategory Category { get; set; } = FeedbackCategory.PEER;

    public int Rating { get; set; }

    [MaxLength(2000)]
    public string? Comments { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(TargetEmployeeId))]
    public virtual Employee TargetEmployee { get; set; } = null!;

    [ForeignKey(nameof(ReviewerId))]
    public virtual User Reviewer { get; set; } = null!;
}

public class Interview
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid CandidateId { get; set; }

    public Guid JobId { get; set; }

    public Guid? InterviewerId { get; set; }

    public DateTime ScheduledAt { get; set; }

    [Required, MaxLength(50)]
    public string Round { get; set; } = "SCREENING";

    public InterviewType InterviewType { get; set; } = InterviewType.ONLINE;

    public InterviewStatus Status { get; set; } = InterviewStatus.SCHEDULED;

    public int? DurationMinutes { get; set; }

    [MaxLength(500)]
    public string? MeetingLink { get; set; }

    [MaxLength(2000)]
    public string? Feedback { get; set; }

    public int? Rating { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(CandidateId))]
    public virtual Candidate Candidate { get; set; } = null!;

    [ForeignKey(nameof(JobId))]
    public virtual JobOpening Job { get; set; } = null!;

    [ForeignKey(nameof(InterviewerId))]
    public virtual Employee? Interviewer { get; set; }
}
