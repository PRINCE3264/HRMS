

namespace HRMAPI.Models.DTOs.Project;

public class AddProjectMemberDto
{
    public Guid EmployeeId { get; set; }
    public string? RoleInProject { get; set; }
}
