

namespace HRMAPI.Models.DTOs.Payroll;

public class CreatePayrollDto
{
    public Guid EmployeeId { get; set; }
    public string Month { get; set; } = string.Empty;
    public int Year { get; set; }
    public decimal BasicSalary { get; set; }
    public decimal Allowances { get; set; }
    public decimal Deductions { get; set; }
}
