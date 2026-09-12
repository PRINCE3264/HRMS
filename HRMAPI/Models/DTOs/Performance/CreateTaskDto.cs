

namespace HRMAPI.Models.DTOs.Performance;

public class CreateTaskDto
{
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public Guid AssignedToId { get; set; }
    public string Priority { get; set; } = "MEDIUM";
    public DateTime DueDate { get; set; }
    public decimal? EstimatedHours { get; set; }
}
