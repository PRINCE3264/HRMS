

namespace HRMAPI.Models.DTOs.Recruitment;

public class UpdateInterviewStatusDto
{
    public string Status { get; set; } = string.Empty;
    public string? Feedback { get; set; }
    public int? Rating { get; set; }
}
