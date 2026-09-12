using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

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
