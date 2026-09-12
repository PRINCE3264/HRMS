

namespace HRMAPI.Models.DTOs.Report;

public class AdminAnalyticsDto
{
    public ChartDataDto GenderDistribution { get; set; } = new();
    public ChartDataDto HeadcountTrend { get; set; } = new();
    public ChartDataDto TurnoverRate { get; set; } = new();
    public ChartDataDto SalaryBenchmark { get; set; } = new();
    public ChartDataDto AttendanceBreakdown { get; set; } = new();
    public ChartDataDto DepartmentAttendance { get; set; } = new();
    public ChartDataDto PayrollCategory { get; set; } = new();
    public ChartDataDto DepartmentPayroll { get; set; } = new();
    public HrMetricsDto Metrics { get; set; } = new();
}
