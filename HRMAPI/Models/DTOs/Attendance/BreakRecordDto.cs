

namespace HRMAPI.Models.DTOs.Attendance;

public class BreakRecordDto
{
    public Guid Id { get; set; }
    public DateTime StartTime { get; set; }
    public DateTime? EndTime { get; set; }
    public string BreakType { get; set; } = string.Empty;
    public decimal DurationMinutes { get; set; }
    public string? Reason { get; set; }
}
