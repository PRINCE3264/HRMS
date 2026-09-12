using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

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
