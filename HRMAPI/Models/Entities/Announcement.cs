using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

public class Announcement
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required, MaxLength(200)]
    public string Title { get; set; } = string.Empty;

    [Required, MaxLength(5000)]
    public string Content { get; set; } = string.Empty;

    public Guid AuthorId { get; set; }

    public AnnouncementPriority Priority { get; set; } = AnnouncementPriority.MEDIUM;

    [MaxLength(500)]
    public string? TargetAudience { get; set; }

    public DateTime PublishedDate { get; set; } = DateTime.UtcNow;

    public DateTime? ExpiryDate { get; set; }

    public bool IsPinned { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(AuthorId))]
    public virtual User Author { get; set; } = null!;

    public virtual ICollection<AnnouncementAttachment> Attachments { get; set; } = new List<AnnouncementAttachment>();
}
