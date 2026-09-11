using HRMAPI.DTOs.Report;

namespace HRMAPI.DTOs.Payroll;

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

public class SalaryComponentDto
{
    public string Name { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public string? Percentage { get; set; }
}

public class PayrollReportDto
{
    public decimal TotalBasic { get; set; }
    public decimal TotalEarnings { get; set; }
    public decimal TotalDeductions { get; set; }
    public decimal TotalNetPay { get; set; }
    public int EmployeeCount { get; set; }
    public int ProcessedCount { get; set; }
    public decimal AverageSalary { get; set; }
    public decimal HighestSalary { get; set; }
    public decimal LowestSalary { get; set; }
    public List<SalaryComponentDto> EarningsComponents { get; set; } = new();
    public List<SalaryComponentDto> DeductionComponents { get; set; } = new();
    public ChartDataDto Chart { get; set; } = new();
}