using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

public class Attendance
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid EmployeeId { get; set; }

    public DateTime Date { get; set; }

    public DateTime? CheckIn { get; set; }

    public DateTime? CheckOut { get; set; }

    public decimal WorkHours { get; set; }

    public decimal Overtime { get; set; }

    public AttendanceStatus Status { get; set; } = AttendanceStatus.PRESENT;

    [MaxLength(200)]
    public string? Location { get; set; }

    public decimal? Latitude { get; set; }

    public decimal? Longitude { get; set; }

    [MaxLength(500)]
    public string? Notes { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(EmployeeId))]
    public virtual Employee Employee { get; set; } = null!;

    public virtual ICollection<BreakRecord> Breaks { get; set; } = new List<BreakRecord>();
}
