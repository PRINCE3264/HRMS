using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models;

public class Training
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required, MaxLength(200)]
    public string Title { get; set; } = string.Empty;

    [MaxLength(2000)]
    public string? Description { get; set; }

    [Required, MaxLength(200)]
    public string Trainer { get; set; } = string.Empty;

    [MaxLength(200)]
    public string? Department { get; set; }

    public DateTime StartDate { get; set; }

    public DateTime EndDate { get; set; }

    [MaxLength(50)]
    public string? Duration { get; set; }

    [MaxLength(200)]
    public string? Location { get; set; }

    public int MaxParticipants { get; set; }

    public TrainingStatus Status { get; set; } = TrainingStatus.UPCOMING;

    public TrainingType Type { get; set; } = TrainingType.IN_HOUSE;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public virtual ICollection<TrainingEnrollment> Enrollments { get; set; } = new List<TrainingEnrollment>();
}

public class TrainingEnrollment
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid TrainingId { get; set; }

    public Guid EmployeeId { get; set; }

    public DateTime EnrolledAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(TrainingId))]
    public virtual Training Training { get; set; } = null!;

    [ForeignKey(nameof(EmployeeId))]
    public virtual Employee Employee { get; set; } = null!;
}

public class Onboarding
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid EmployeeId { get; set; }

    public DateTime StartDate { get; set; }

    public DateTime? EndDate { get; set; }

    public Guid? MentorId { get; set; }

    public OnboardingStatus Status { get; set; } = OnboardingStatus.NOT_STARTED;

    public decimal Progress { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(EmployeeId))]
    public virtual Employee Employee { get; set; } = null!;

    [ForeignKey(nameof(MentorId))]
    public virtual Employee? Mentor { get; set; }

    public virtual ICollection<OnboardingTask> Tasks { get; set; } = new List<OnboardingTask>();
}

public class OnboardingTask
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid OnboardingId { get; set; }

    [Required, MaxLength(200)]
    public string Title { get; set; } = string.Empty;

    [MaxLength(500)]
    public string? Description { get; set; }

    public bool IsCompleted { get; set; }

    public DateTime? CompletedAt { get; set; }

    [MaxLength(200)]
    public string? AssignedTo { get; set; }

    [ForeignKey(nameof(OnboardingId))]
    public virtual Onboarding Onboarding { get; set; } = null!;
}

