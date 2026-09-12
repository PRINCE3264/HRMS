using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

public class LeaveBalance
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid EmployeeId { get; set; }

    public LeaveType LeaveType { get; set; }

    public int Entitled { get; set; }

    public int Taken { get; set; }

    public int Remaining { get; set; }

    public int Year { get; set; }

    [ForeignKey(nameof(EmployeeId))]
    public virtual Employee Employee { get; set; } = null!;
}
