using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

public class ShiftAssignment
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid EmployeeId { get; set; }

    public Guid ShiftId { get; set; }

    public DateTime StartDate { get; set; }

    public DateTime? EndDate { get; set; }

    [ForeignKey(nameof(EmployeeId))]
    public virtual Employee Employee { get; set; } = null!;

    [ForeignKey(nameof(ShiftId))]
    public virtual Shift Shift { get; set; } = null!;
}
