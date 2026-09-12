

namespace HRMAPI.Models.DTOs.Report;

public class ChartDataDto
{
    public List<string> Labels { get; set; } = new();
    public List<ChartDatasetDto> Datasets { get; set; } = new();
}
