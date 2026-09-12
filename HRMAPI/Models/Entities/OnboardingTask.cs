using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

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
