

namespace HRMAPI.Models.DTOs.Training;

public class OnboardingTaskDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public bool IsCompleted { get; set; }
    public DateTime? CompletedAt { get; set; }
    public string? AssignedTo { get; set; }
}
