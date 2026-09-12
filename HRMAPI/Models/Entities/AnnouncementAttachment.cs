using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

public class AnnouncementAttachment
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid AnnouncementId { get; set; }

    [Required, MaxLength(500)]
    public string FileName { get; set; } = string.Empty;

    [Required, MaxLength(1000)]
    public string FileUrl { get; set; } = string.Empty;

    [ForeignKey(nameof(AnnouncementId))]
    public virtual Announcement Announcement { get; set; } = null!;
}
