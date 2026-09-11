using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models;

public class PayrollRecord
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid EmployeeId { get; set; }

    [Required, MaxLength(20)]
    public string Month { get; set; } = string.Empty;

    public int Year { get; set; }

    public decimal BasicSalary { get; set; }

    public decimal Allowances { get; set; }

    public decimal Deductions { get; set; }

    public decimal NetPay { get; set; }

    public PayrollStatus Status { get; set; } = PayrollStatus.DRAFT;

    public DateTime? PaidDate { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(EmployeeId))]
    public virtual Employee Employee { get; set; } = null!;

    public virtual Payslip? Payslip { get; set; }
}

public class Payslip
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid PayrollId { get; set; }

    public Guid EmployeeId { get; set; }

    [Required, MaxLength(20)]
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

    [ForeignKey(nameof(PayrollId))]
    public virtual PayrollRecord Payroll { get; set; } = null!;

    [ForeignKey(nameof(EmployeeId))]
    public virtual Employee Employee { get; set; } = null!;
}

public class SalaryStructure
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

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

    public bool IsActive { get; set; } = true;

    public DateTime EffectiveFrom { get; set; } = DateTime.UtcNow;

    public DateTime? EffectiveTo { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(EmployeeId))]
    public virtual Employee Employee { get; set; } = null!;
}

