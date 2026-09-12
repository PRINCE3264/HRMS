using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

public class BreakRecord
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid AttendanceId { get; set; }

    public DateTime StartTime { get; set; }

    public DateTime? EndTime { get; set; }

    public BreakType BreakType { get; set; } = BreakType.SHORT;

    public decimal DurationMinutes { get; set; }

    [MaxLength(200)]
    public string? Reason { get; set; }

    [ForeignKey(nameof(AttendanceId))]
    public virtual Attendance Attendance { get; set; } = null!;
}
