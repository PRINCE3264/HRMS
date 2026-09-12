

namespace HRMAPI.Models.DTOs.Payroll;

public class PayrollRecordDto
{
    public Guid Id { get; set; }
    public Guid EmployeeId { get; set; }
    public string? EmployeeName { get; set; }
    public string? Department { get; set; }
    public string Month { get; set; } = string.Empty;
    public int Year { get; set; }
    public decimal BasicSalary { get; set; }
    public decimal Allowances { get; set; }
    public decimal Deductions { get; set; }
    public decimal NetPay { get; set; }
    public string Status { get; set; } = string.Empty;
    public DateTime? PaidDate { get; set; }
    public DateTime CreatedAt { get; set; }
}
