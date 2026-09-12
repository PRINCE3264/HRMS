using HRMAPI.Models.DTOs.Report;

namespace HRMAPI.Models.DTOs.Payroll;

public class SalaryStructureDto
{
    public Guid Id { get; set; }
    public Guid EmployeeId { get; set; }
    public string? EmployeeName { get; set; }
    public string? EmployeeCode { get; set; }
    public decimal BasicSalary { get; set; }
    public decimal Hra { get; set; }
    public decimal Conveyance { get; set; }
    public decimal MedicalAllowance { get; set; }
    public decimal SpecialAllowance { get; set; }
    public decimal TotalEarnings { get; set; }
    public decimal PfPercent { get; set; }
    public decimal EsiPercent { get; set; }
    public decimal TdsPercent { get; set; }
    public decimal ProfessionalTax { get; set; }
    public decimal TotalDeductions { get; set; }
    public decimal NetPay { get; set; }
    public bool IsActive { get; set; }
    public DateTime EffectiveFrom { get; set; }
    public DateTime? EffectiveTo { get; set; }
}
