

namespace HRMAPI.Models.DTOs.Payroll;

public class PayrollBonusDto
{
    public string EmployeeName { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public string Month { get; set; } = string.Empty;
    public int Year { get; set; }
}
