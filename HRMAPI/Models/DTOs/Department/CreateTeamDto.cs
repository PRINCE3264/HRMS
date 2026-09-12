

namespace HRMAPI.Models.DTOs.Department;

public class CreateTeamDto
{
    public string Name { get; set; } = string.Empty;
    public Guid DepartmentId { get; set; }
    public Guid TeamLeadId { get; set; }
}
