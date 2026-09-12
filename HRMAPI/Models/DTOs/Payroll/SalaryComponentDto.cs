using HRMAPI.Models.DTOs.Report;

namespace HRMAPI.Models.DTOs.Payroll;

public class SalaryComponentDto
{
    public string Name { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public string? Percentage { get; set; }
}
