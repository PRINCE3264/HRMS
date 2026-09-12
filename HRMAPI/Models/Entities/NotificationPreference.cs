using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HRMAPI.Models.Entities;

public class NotificationPreference
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required, MaxLength(100)]
    public string EventName { get; set; } = string.Empty;

    [MaxLength(200)]
    public string? Description { get; set; }

    public bool EmailEnabled { get; set; } = true;

    public bool SmsEnabled { get; set; } = false;

    public bool InAppEnabled { get; set; } = true;

    public Guid? UpdatedById { get; set; }

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(UpdatedById))]
    public virtual User? UpdatedBy { get; set; }
}
