

namespace HRMAPI.Models.DTOs.Performance;

public class TaskDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public Guid AssignedToId { get; set; }
    public string? AssignedToName { get; set; }
    public Guid AssignedById { get; set; }
    public string? AssignedByName { get; set; }
    public string Priority { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public DateTime DueDate { get; set; }
    public DateTime? CompletedDate { get; set; }
    public decimal? EstimatedHours { get; set; }
    public decimal? ActualHours { get; set; }
    public int? Rating { get; set; }
    public string? ReviewComments { get; set; }
    public DateTime CreatedAt { get; set; }
}
