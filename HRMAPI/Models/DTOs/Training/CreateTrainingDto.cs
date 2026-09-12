

namespace HRMAPI.Models.DTOs.Training;

public class CreateTrainingDto
{
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string Trainer { get; set; } = string.Empty;
    public string? Department { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public string? Duration { get; set; }
    public string? Location { get; set; }
    public int MaxParticipants { get; set; }
    public string Type { get; set; } = "IN_HOUSE";
}
