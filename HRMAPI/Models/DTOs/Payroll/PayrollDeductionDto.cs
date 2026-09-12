

namespace HRMAPI.Models.DTOs.Payroll;

public class PayrollDeductionDto
{
    public string Type { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public int EmployeeShare { get; set; }
}
