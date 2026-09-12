

namespace HRMAPI.Models.DTOs.Report;

public class HrMetricsDto
{
    public string AvgTimeToHire { get; set; } = string.Empty;
    public decimal EmployeeSatisfaction { get; set; }
    public decimal AttendanceRate { get; set; }
    public int OpenPositions { get; set; }
    public int CandidatesInPipeline { get; set; }
    public int HiredThisMonth { get; set; }
    public int PendingLeaveRequests { get; set; }
}
