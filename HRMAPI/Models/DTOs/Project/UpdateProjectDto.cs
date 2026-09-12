

namespace HRMAPI.Models.DTOs.Project;

public class UpdateProjectDto
{
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public Guid DepartmentId { get; set; }
    public Guid? TeamId { get; set; }
    public Guid? TeamLeadId { get; set; }
    public string Status { get; set; } = "NOT_STARTED";
    public string Priority { get; set; } = "MEDIUM";
    public DateTime? StartDate { get; set; }
    public DateTime? EndDate { get; set; }
}
