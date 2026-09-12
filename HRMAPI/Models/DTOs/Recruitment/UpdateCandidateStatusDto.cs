

namespace HRMAPI.Models.DTOs.Recruitment;

public class UpdateCandidateStatusDto
{
    public string Status { get; set; } = string.Empty;
    public string? Notes { get; set; }
    public int? Rating { get; set; }
}
