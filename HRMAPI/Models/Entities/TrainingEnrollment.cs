using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

public class TrainingEnrollment
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid TrainingId { get; set; }

    public Guid EmployeeId { get; set; }

    public DateTime EnrolledAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(TrainingId))]
    public virtual Training Training { get; set; } = null!;

    [ForeignKey(nameof(EmployeeId))]
    public virtual Employee Employee { get; set; } = null!;
}
