

namespace HRMAPI.Models.DTOs.Security;

public class RoleDto
{
    public Guid Id { get; set; }
    public string Role { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<RoleModuleDto> Permissions { get; set; } = new();
}
