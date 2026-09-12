

namespace HRMAPI.Models.DTOs.Attendance;

public class CreateShiftDto
{
    public string Name { get; set; } = string.Empty;
    public string StartTime { get; set; } = string.Empty;
    public string EndTime { get; set; } = string.Empty;
    public int BreakMinutes { get; set; }
    public string? Description { get; set; }
}
