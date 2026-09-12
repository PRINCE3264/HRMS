using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

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
