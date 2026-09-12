

namespace HRMAPI.Models.DTOs.Report;

public class AnnouncementDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public Guid AuthorId { get; set; }
    public string? AuthorName { get; set; }
    public string? AuthorRole { get; set; }
    public string Priority { get; set; } = string.Empty;
    public List<string> TargetAudience { get; set; } = new();
    public DateTime PublishedDate { get; set; }
    public DateTime? ExpiryDate { get; set; }
    public bool IsPinned { get; set; }
    public List<string> Attachments { get; set; } = new();
}
