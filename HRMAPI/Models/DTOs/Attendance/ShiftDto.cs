

namespace HRMAPI.Models.DTOs.Attendance;

public class ShiftDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string StartTime { get; set; } = string.Empty;
    public string EndTime { get; set; } = string.Empty;
    public int BreakMinutes { get; set; }
    public string? Description { get; set; }
}
