

namespace HRMAPI.Models.DTOs.Project;

public class CreateProjectDto
{
    public string Name { get; set; } = string.Empty;
    public string? ProjectCode { get; set; }
    public string? Description { get; set; }
    public Guid DepartmentId { get; set; }
    public Guid? TeamId { get; set; }
    public Guid? TeamLeadId { get; set; }
    public string Priority { get; set; } = "MEDIUM";
    public DateTime? StartDate { get; set; }
    public DateTime? EndDate { get; set; }
}
