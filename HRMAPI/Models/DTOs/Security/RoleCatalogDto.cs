

namespace HRMAPI.Models.DTOs.Security;

public class RoleCatalogDto
{
    public List<string> Modules { get; set; } = new();
    public List<string> Actions { get; set; } = new();
}
