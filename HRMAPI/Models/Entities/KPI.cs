using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

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
