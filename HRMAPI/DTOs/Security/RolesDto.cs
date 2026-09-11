namespace HRMAPI.DTOs.Security;

public class RoleModuleDto
{
    public string Module { get; set; } = string.Empty;
    public List<string> Actions { get; set; } = new();
}

public class RoleDto
{
    public string Role { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<RoleModuleDto> Permissions { get; set; } = new();
}

public class UpdateRoleDto
{
    public List<RoleModuleDto> Permissions { get; set; } = new();
}

public class RoleCatalogDto
{
    public List<string> Modules { get; set; } = new();
    public List<string> Actions { get; set; } = new();
}
