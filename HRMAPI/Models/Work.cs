using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models;

public class DailyWorkUpdate
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid EmployeeId { get; set; }

    public DateTime Date { get; set; } = DateTime.UtcNow.Date;

    [MaxLength(2000)]
    public string? TasksCompleted { get; set; }

    [MaxLength(2000)]
    public string? WorkSummary { get; set; }

    [MaxLength(2000)]
    public string? IssuesBlockers { get; set; }

    public decimal? HoursWorked { get; set; }

    public WorkUpdateStatus Status { get; set; } = WorkUpdateStatus.SUBMITTED;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(EmployeeId))]
    public virtual Employee Employee { get; set; } = null!;
}
