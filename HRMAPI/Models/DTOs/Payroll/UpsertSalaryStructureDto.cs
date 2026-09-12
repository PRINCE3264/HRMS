using HRMAPI.Models.DTOs.Report;

namespace HRMAPI.Models.DTOs.Payroll;

public class UpsertSalaryStructureDto
{
    public Guid EmployeeId { get; set; }
    public decimal BasicSalary { get; set; }
    public decimal Hra { get; set; }
    public decimal Conveyance { get; set; }
    public decimal MedicalAllowance { get; set; }
    public decimal SpecialAllowance { get; set; }
    public decimal PfPercent { get; set; } = 12m;
    public decimal EsiPercent { get; set; } = 1m;
    public decimal TdsPercent { get; set; } = 5m;
    public decimal ProfessionalTax { get; set; } = 200m;
    public DateTime EffectiveFrom { get; set; } = DateTime.UtcNow;
}
