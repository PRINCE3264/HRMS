

namespace HRMAPI.Models.DTOs.Report;

public class CreateAnnouncementDto
{
    public string Title { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public string Priority { get; set; } = "MEDIUM";
    public List<string> TargetAudience { get; set; } = new();
    public DateTime? ExpiryDate { get; set; }
}
