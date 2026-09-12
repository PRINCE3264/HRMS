

namespace HRMAPI.Models.DTOs.Navigation;

public class NavigationModuleDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Icon { get; set; } = string.Empty;
    public string UserType { get; set; } = string.Empty;
    public Guid? RoleId { get; set; }
    public bool IsActive { get; set; } = true;
    public int? SortOrder { get; set; }
    public List<NavigationFeatureDto> Features { get; set; } = new();
}
