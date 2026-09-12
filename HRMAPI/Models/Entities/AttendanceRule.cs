using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

public class AttendanceRule
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required, MaxLength(150)]
    public string Name { get; set; } = string.Empty;

    public TimeOnly? LateThresholdTime { get; set; }

    public int GraceMinutes { get; set; } = 15;

    public decimal MinWorkHours { get; set; } = 8m;

    public int MaxBreakMinutes { get; set; } = 60;

    public decimal OvertimeAfterHours { get; set; } = 0m;

    public OvertimePolicy OvertimePolicy { get; set; } = OvertimePolicy.NONE;

    public bool AutoMarkAbsentOnNoCheckIn { get; set; } = true;

    [MaxLength(500)]
    public string? Description { get; set; }

    public bool IsActive { get; set; } = true;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
