using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

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
