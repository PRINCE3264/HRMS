

namespace HRMAPI.Models.DTOs.Attendance;

public class AttendanceRuleDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? LateThresholdTime { get; set; }
    public int GraceMinutes { get; set; }
    public decimal MinWorkHours { get; set; }
    public int MaxBreakMinutes { get; set; }
    public decimal OvertimeAfterHours { get; set; }
    public string OvertimePolicy { get; set; } = string.Empty;
    public bool AutoMarkAbsentOnNoCheckIn { get; set; }
    public string? Description { get; set; }
    public bool IsActive { get; set; }
}
