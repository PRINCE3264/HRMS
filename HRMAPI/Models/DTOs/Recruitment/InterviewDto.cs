

namespace HRMAPI.Models.DTOs.Recruitment;

public class InterviewDto
{
    public Guid Id { get; set; }
    public Guid CandidateId { get; set; }
    public string? CandidateName { get; set; }
    public Guid JobId { get; set; }
    public string? JobTitle { get; set; }
    public Guid? InterviewerId { get; set; }
    public string? InterviewerName { get; set; }
    public DateTime ScheduledAt { get; set; }
    public string Round { get; set; } = string.Empty;
    public string InterviewType { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public int? DurationMinutes { get; set; }
    public string? MeetingLink { get; set; }
    public string? Feedback { get; set; }
    public int? Rating { get; set; }
    public DateTime CreatedAt { get; set; }
}
