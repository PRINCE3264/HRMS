using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models;

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

public class Shift
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required, MaxLength(100)]
    public string Name { get; set; } = string.Empty;

    public TimeOnly StartTime { get; set; }

    public TimeOnly EndTime { get; set; }

    public int BreakMinutes { get; set; }

    [MaxLength(500)]
    public string? Description { get; set; }

    public bool IsActive { get; set; } = true;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public virtual ICollection<ShiftAssignment> ShiftAssignments { get; set; } = new List<ShiftAssignment>();
}

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

