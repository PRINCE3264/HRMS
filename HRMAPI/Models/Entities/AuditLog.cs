using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HRMAPI.Models.Entities;

public class AuditLog
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid UserId { get; set; }

    [Required, MaxLength(100)]
    public string Action { get; set; } = string.Empty;

    [Required, MaxLength(100)]
    public string Module { get; set; } = string.Empty;

    [MaxLength(2000)]
    public string? Details { get; set; }

    [MaxLength(100)]
    public string? IpAddress { get; set; }

    public DateTime Timestamp { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(UserId))]
    public virtual User User { get; set; } = null!;
}
