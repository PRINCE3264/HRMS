

namespace HRMAPI.Models.DTOs.Project;

public class ProjectDto
{
    public Guid Id { get; set; }
    public string ProjectCode { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public Guid DepartmentId { get; set; }
    public string? DepartmentName { get; set; }
    public Guid? TeamId { get; set; }
    public string? TeamName { get; set; }
    public Guid? TeamLeadId { get; set; }
    public string? TeamLeadName { get; set; }
    public string Status { get; set; } = "NOT_STARTED";
    public string Priority { get; set; } = "MEDIUM";
    public DateTime StartDate { get; set; }
    public DateTime? EndDate { get; set; }
    public string? CreatedByName { get; set; }
    public int MemberCount { get; set; }
    public int CompletedMemberCount { get; set; }
    public DateTime CreatedAt { get; set; }
}
