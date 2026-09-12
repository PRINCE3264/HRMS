

namespace HRMAPI.Models.DTOs.Attendance;

public class UpsertAttendanceRuleDto
{
    public string Name { get; set; } = string.Empty;
    public string? LateThresholdTime { get; set; }
    public int GraceMinutes { get; set; } = 15;
    public decimal MinWorkHours { get; set; } = 8m;
    public int MaxBreakMinutes { get; set; } = 60;
    public decimal OvertimeAfterHours { get; set; } = 0m;
    public string OvertimePolicy { get; set; } = "NONE";
    public bool AutoMarkAbsentOnNoCheckIn { get; set; } = true;
    public string? Description { get; set; }
    public bool IsActive { get; set; } = true;
}
