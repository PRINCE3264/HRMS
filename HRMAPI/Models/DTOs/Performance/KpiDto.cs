

namespace HRMAPI.Models.DTOs.Performance;

public class KpiDto
{
    public Guid Id { get; set; }
    public Guid EmployeeId { get; set; }
    public string? EmployeeName { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public decimal TargetValue { get; set; }
    public decimal CurrentValue { get; set; }
    public string? Unit { get; set; }
    public decimal Weight { get; set; }
    public string Period { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
}
