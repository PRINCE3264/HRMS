

namespace HRMAPI.Models.DTOs.Recruitment;

public class CandidateDto
{
    public Guid Id { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? Phone { get; set; }
    public Guid JobId { get; set; }
    public string? JobTitle { get; set; }
    public string? ResumeUrl { get; set; }
    public string? CoverLetter { get; set; }
    public string? Source { get; set; }
    public string Status { get; set; } = string.Empty;
    public int? Rating { get; set; }
    public string? Notes { get; set; }
    public DateTime CreatedAt { get; set; }
}
