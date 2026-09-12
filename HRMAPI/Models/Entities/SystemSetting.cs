using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HRMAPI.Models.Entities;

public class SystemSetting
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required, MaxLength(200)]
    public string Key { get; set; } = string.Empty;

    [MaxLength(2000)]
    public string Value { get; set; } = string.Empty;

    [Required, MaxLength(100)]
    public string Category { get; set; } = string.Empty;

    [MaxLength(500)]
    public string? Description { get; set; }

    public Guid? UpdatedById { get; set; }

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(UpdatedById))]
    public virtual User? UpdatedBy { get; set; }
}
