namespace HRMAPI.DTOs.Attendance;

public class AttendanceCorrectionDto
{
    public Guid Id { get; set; }
    public Guid AttendanceId { get; set; }
    public Guid EmployeeId { get; set; }
    public string? EmployeeName { get; set; }
    public string? EmployeeCode { get; set; }
    public DateTime Date { get; set; }
    public DateTime OriginalCheckIn { get; set; }
    public DateTime OriginalCheckOut { get; set; }
    public DateTime? CorrectedCheckIn { get; set; }
    public DateTime? CorrectedCheckOut { get; set; }
    public string Reason { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public Guid RequestedById { get; set; }
    public string? RequestedByName { get; set; }
    public Guid? ApprovedById { get; set; }
    public string? ApprovedByName { get; set; }
    public string? RejectionReason { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime? ReviewedAt { get; set; }
}

public class CreateAttendanceCorrectionDto
{
    public Guid AttendanceId { get; set; }
    public Guid EmployeeId { get; set; }
    public DateTime Date { get; set; }
    public DateTime? CorrectedCheckIn { get; set; }
    public DateTime? CorrectedCheckOut { get; set; }
    public string Reason { get; set; } = string.Empty;
}

public class UpdateAttendanceCorrectionDto
{
    public string Status { get; set; } = string.Empty;
    public string? RejectionReason { get; set; }
}

public class AttendanceSummaryDto
{
    public string EmployeeName { get; set; } = string.Empty;
    public string EmployeeCode { get; set; } = string.Empty;
    public int PresentDays { get; set; }
    public int AbsentDays { get; set; }
    public int LateDays { get; set; }
    public int EarlyDays { get; set; }
    public int LeaveDays { get; set; }
    public decimal TotalWorkHours { get; set; }
    public decimal TotalOvertime { get; set; }
    public double AttendancePercent { get; set; }
}

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