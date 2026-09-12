

namespace HRMAPI.Models.DTOs.Recruitment;

public class CreateInterviewDto
{
    public Guid CandidateId { get; set; }
    public Guid JobId { get; set; }
    public Guid? InterviewerId { get; set; }
    public DateTime ScheduledAt { get; set; }
    public string Round { get; set; } = "SCREENING";
    public string InterviewType { get; set; } = "ONLINE";
    public int? DurationMinutes { get; set; }
    public string? MeetingLink { get; set; }
}
