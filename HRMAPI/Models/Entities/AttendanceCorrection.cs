using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

public class AttendanceCorrection
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid AttendanceId { get; set; }

    public Guid EmployeeId { get; set; }

    public DateTime OriginalCheckIn { get; set; }

    public DateTime OriginalCheckOut { get; set; }

    public DateTime? CorrectedCheckIn { get; set; }

    public DateTime? CorrectedCheckOut { get; set; }

    [Required, MaxLength(500)]
    public string Reason { get; set; } = string.Empty;

    public AttendanceCorrectionStatus Status { get; set; } = AttendanceCorrectionStatus.PENDING;

    public Guid RequestedById { get; set; }

    public Guid? ApprovedById { get; set; }

    public string? RejectionReason { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime? ReviewedAt { get; set; }

    [ForeignKey(nameof(AttendanceId))]
    public virtual Attendance Attendance { get; set; } = null!;

    [ForeignKey(nameof(EmployeeId))]
    public virtual Employee Employee { get; set; } = null!;

    [ForeignKey(nameof(RequestedById))]
    public virtual User RequestedBy { get; set; } = null!;

    [ForeignKey(nameof(ApprovedById))]
    public virtual User? ApprovedBy { get; set; }
}
