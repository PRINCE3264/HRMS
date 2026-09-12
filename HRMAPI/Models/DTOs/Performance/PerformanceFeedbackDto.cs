

namespace HRMAPI.Models.DTOs.Performance;

public class PerformanceFeedbackDto
{
    public Guid Id { get; set; }
    public Guid TargetEmployeeId { get; set; }
    public string? TargetEmployeeName { get; set; }
    public Guid ReviewerId { get; set; }
    public string? ReviewerName { get; set; }
    public string ReviewPeriod { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public int Rating { get; set; }
    public string? Comments { get; set; }
    public DateTime CreatedAt { get; set; }
}
