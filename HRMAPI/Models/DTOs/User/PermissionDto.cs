

namespace HRMAPI.Models.DTOs.User;

public class PermissionDto
{
    public string Module { get; set; } = string.Empty;
    public List<string> Actions { get; set; } = new();
}
