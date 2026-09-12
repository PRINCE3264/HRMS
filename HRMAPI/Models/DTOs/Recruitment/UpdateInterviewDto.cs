

namespace HRMAPI.Models.DTOs.Recruitment;

public class UpdateInterviewDto
{
    public Guid? InterviewerId { get; set; }
    public DateTime? ScheduledAt { get; set; }
    public string? Round { get; set; }
    public string? InterviewType { get; set; }
    public int? DurationMinutes { get; set; }
    public string? MeetingLink { get; set; }
}
