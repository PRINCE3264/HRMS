using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

public class TaskAssignment
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required, MaxLength(200)]
    public string Title { get; set; } = string.Empty;

    [MaxLength(2000)]
    public string? Description { get; set; }

    public Guid AssignedToId { get; set; }

    public Guid AssignedById { get; set; }

    public TaskPriority Priority { get; set; } = TaskPriority.MEDIUM;

    public HRMAPI.Enums.TaskStatus Status { get; set; } = HRMAPI.Enums.TaskStatus.TODO;

    public DateTime DueDate { get; set; }

    public DateTime? CompletedDate { get; set; }

    public decimal? EstimatedHours { get; set; }

    public decimal? ActualHours { get; set; }

    public int? Rating { get; set; }

    [MaxLength(1000)]
    public string? ReviewComments { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(AssignedToId))]
    public virtual Employee AssignedTo { get; set; } = null!;

    [ForeignKey(nameof(AssignedById))]
    public virtual Employee AssignedBy { get; set; } = null!;
}
