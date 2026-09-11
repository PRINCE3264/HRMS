using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models;

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

public class Document
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required, MaxLength(200)]
    public string Name { get; set; } = string.Empty;

    [Required, MaxLength(50)]
    public string Type { get; set; } = string.Empty;

    public DocumentCategory Category { get; set; }

    public Guid? EmployeeId { get; set; }

    public Guid UploadedById { get; set; }

    public DateTime UploadedAt { get; set; } = DateTime.UtcNow;

    public long FileSize { get; set; }

    [Required, MaxLength(1000)]
    public string FileUrl { get; set; } = string.Empty;

    [ForeignKey(nameof(EmployeeId))]
    public virtual Employee? Employee { get; set; }

    [ForeignKey(nameof(UploadedById))]
    public virtual User UploadedBy { get; set; } = null!;
}

public class Notification
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid UserId { get; set; }

    [Required, MaxLength(200)]
    public string Title { get; set; } = string.Empty;

    [Required, MaxLength(1000)]
    public string Message { get; set; } = string.Empty;

    public NotificationType Type { get; set; } = NotificationType.INFO;

    public bool IsRead { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    [MaxLength(500)]
    public string? Link { get; set; }

    [ForeignKey(nameof(UserId))]
    public virtual User User { get; set; } = null!;
}

