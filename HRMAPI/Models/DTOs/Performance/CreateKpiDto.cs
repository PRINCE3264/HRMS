

namespace HRMAPI.Models.DTOs.Performance;

public class CreateKpiDto
{
    public Guid EmployeeId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public decimal TargetValue { get; set; }
    public string? Unit { get; set; }
    public decimal Weight { get; set; }
    public string Period { get; set; } = string.Empty;
}
