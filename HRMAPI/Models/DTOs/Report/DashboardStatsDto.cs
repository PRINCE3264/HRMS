

namespace HRMAPI.Models.DTOs.Report;

public class DashboardStatsDto
{
    public int TotalEmployees { get; set; }
    public int ActiveEmployees { get; set; }
    public int PresentToday { get; set; }
    public int AbsentToday { get; set; }
    public int LateArrivalsToday { get; set; }
    public int OnLeaveToday { get; set; }
    public decimal TotalWorkHoursToday { get; set; }
    public decimal TotalOvertimeToday { get; set; }
    public int Departments { get; set; }
    public int PendingLeaves { get; set; }
    public int NewJoiners { get; set; }
    public int PendingRequests { get; set; }
    public int OpenPositions { get; set; }
    public int CandidatesInPipeline { get; set; }
    public int HiredThisMonth { get; set; }
    public int MonthlyPayrollNet { get; set; }
    public int PayrollProcessedThisMonth { get; set; }
    public decimal AverageAttendanceRate { get; set; }
    public decimal AveragePerformance { get; set; }
    public string CompanyName { get; set; } = string.Empty;
    public int Branches { get; set; }
    public int Teams { get; set; }
}
