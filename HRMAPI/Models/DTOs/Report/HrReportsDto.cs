

namespace HRMAPI.Models.DTOs.Report;

public class HrReportsDto
{
    public ChartDataDto HeadcountTrend { get; set; } = new();
    public ChartDataDto TurnoverReasons { get; set; } = new();
    public ChartDataDto HiringFunnel { get; set; } = new();
    public HrMetricsDto Metrics { get; set; } = new();
}
