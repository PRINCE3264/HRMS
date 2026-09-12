

namespace HRMAPI.Models.DTOs.Attendance;

public class StartBreakDto
{
    public string BreakType { get; set; } = "SHORT";
    public string? Reason { get; set; }
}
