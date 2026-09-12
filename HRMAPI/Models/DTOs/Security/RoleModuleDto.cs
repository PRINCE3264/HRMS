

namespace HRMAPI.Models.DTOs.Security;

public class RoleModuleDto
{
    public string Module { get; set; } = string.Empty;
    public List<string> Actions { get; set; } = new();
}
