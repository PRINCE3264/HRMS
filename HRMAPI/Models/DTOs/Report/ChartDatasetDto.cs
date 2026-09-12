

namespace HRMAPI.Models.DTOs.Report;

public class ChartDatasetDto
{
    public string Label { get; set; } = string.Empty;
    public List<decimal> Data { get; set; } = new();
    public string? BackgroundColor { get; set; }
    public string? BorderColor { get; set; }
}
