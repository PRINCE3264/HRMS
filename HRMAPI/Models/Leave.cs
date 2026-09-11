using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models;

public class LeaveRequest
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid EmployeeId { get; set; }

    public LeaveType LeaveType { get; set; }

    public DateTime StartDate { get; set; }

    public DateTime EndDate { get; set; }

    public int TotalDays { get; set; }

    [Required, MaxLength(500)]
    public string Reason { get; set; } = string.Empty;

    public LeaveStatus Status { get; set; } = LeaveStatus.PENDING;

    public Guid? ApprovedById { get; set; }

    public DateTime? ApprovedAt { get; set; }

    [MaxLength(500)]
    public string? Comments { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(EmployeeId))]
    public virtual Employee Employee { get; set; } = null!;

    [ForeignKey(nameof(ApprovedById))]
    public virtual User? ApprovedBy { get; set; }
}

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

