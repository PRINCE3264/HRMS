

namespace HRMAPI.Models.DTOs.Performance;

public class CreateFeedbackDto
{
    public Guid TargetEmployeeId { get; set; }
    public string ReviewPeriod { get; set; } = string.Empty;
    public string Category { get; set; } = "PEER";
    public int Rating { get; set; }
    public string? Comments { get; set; }
}
