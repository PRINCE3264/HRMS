using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

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
