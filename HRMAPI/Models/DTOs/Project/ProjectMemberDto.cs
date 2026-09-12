

namespace HRMAPI.Models.DTOs.Project;

public class ProjectMemberDto
{
    public Guid Id { get; set; }
    public Guid ProjectId { get; set; }
    public Guid EmployeeId { get; set; }
    public string EmployeeName { get; set; } = string.Empty;
    public string? Designation { get; set; }
    public string? TeamName { get; set; }
    public string? RoleInProject { get; set; }
    public string Status { get; set; } = "NOT_STARTED";
    public DateTime AssignedAt { get; set; }
    public string? AssignedByName { get; set; }
}
