

namespace HRMAPI.Models.DTOs.Navigation;

public class NavigationFeatureDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Path { get; set; } = string.Empty;
    public string Icon { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public Guid? RoleId { get; set; }
    public bool IsActive { get; set; } = true;
    public bool IsVisibleInSidebar { get; set; } = true;
    public int? SortOrder { get; set; }
    public bool CanCreate { get; set; }
    public bool CanRead { get; set; }
    public bool CanUpdate { get; set; }
    public bool CanDelete { get; set; }
}
