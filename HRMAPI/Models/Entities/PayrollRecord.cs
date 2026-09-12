using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

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
