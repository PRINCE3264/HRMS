

namespace HRMAPI.Models.DTOs.Recruitment;

public class CreateCandidateDto
{
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? Phone { get; set; }
    public Guid JobId { get; set; }
    public string? ResumeUrl { get; set; }
    public string? CoverLetter { get; set; }
    public string? Source { get; set; }
}
