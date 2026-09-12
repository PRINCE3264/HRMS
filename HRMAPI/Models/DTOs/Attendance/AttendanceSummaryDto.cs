

namespace HRMAPI.Models.DTOs.Attendance;

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
