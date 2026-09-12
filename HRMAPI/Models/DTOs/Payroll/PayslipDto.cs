

namespace HRMAPI.Models.DTOs.Payroll;

public class PayslipDto
{
    public Guid Id { get; set; }
    public Guid PayrollId { get; set; }
    public Guid EmployeeId { get; set; }
    public string? EmployeeName { get; set; }
    public string Month { get; set; } = string.Empty;
    public int Year { get; set; }
    public decimal BasicSalary { get; set; }
    public decimal Hra { get; set; }
    public decimal Conveyance { get; set; }
    public decimal MedicalAllowance { get; set; }
    public decimal SpecialAllowance { get; set; }
    public decimal Pf { get; set; }
    public decimal Esi { get; set; }
    public decimal Tds { get; set; }
    public decimal ProfessionalTax { get; set; }
    public decimal TotalEarnings { get; set; }
    public decimal TotalDeductions { get; set; }
    public decimal NetPay { get; set; }
}
