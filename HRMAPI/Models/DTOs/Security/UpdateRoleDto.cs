

namespace HRMAPI.Models.DTOs.Security;

public class UpdateRoleDto
{
    public List<RoleModuleDto> Permissions { get; set; } = new();
}
