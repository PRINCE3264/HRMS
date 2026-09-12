using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Navigation;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Services;



public class NavigationService : INavigationService
{
    private readonly ApplicationDbContext _context;

    public NavigationService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<List<NavigationModuleDto>> GetMenuAsync(string role, Guid? roleId)
    {
        if (string.IsNullOrEmpty(role) && roleId == null)
            return new List<NavigationModuleDto>();

        if (roleId == null)
        {
            roleId = await _context.Roles
                .Where(r => r.Code == role)
                .Select(r => (Guid?)r.Id)
                .FirstOrDefaultAsync();
        }

        var featureRoles = await _context.FeatureRoles
            .Where(fr => fr.Role == role
                || (fr.RoleId != null && fr.RoleId == roleId))
            .ToListAsync();
        var capsByFeature = featureRoles
            .GroupBy(fr => fr.FeatureId)
            .ToDictionary(
                g => g.Key,
                g => new NavigationFeatureDto
                {
                    CanCreate = g.Any(fr => fr.CanCreate),
                    CanRead = g.Any(fr => fr.CanRead),
                    CanUpdate = g.Any(fr => fr.CanUpdate),
                    CanDelete = g.Any(fr => fr.CanDelete)
                });
        var allowedFeatureIds = capsByFeature.Keys.ToHashSet();

        if (allowedFeatureIds.Count == 0)
            return new List<NavigationModuleDto>();

        var modules = await _context.Modules
            .Include(m => m.Features)
            .Where(m => !m.IsDeleted && m.IsActive)
            .OrderBy(m => m.SortOrder)
            .ToListAsync();

        var result = modules.Select(m => new NavigationModuleDto
        {
            Id = m.Id,
            Name = m.Name,
            Icon = m.Icon,
            UserType = m.UserType,
            RoleId = m.RoleId,
            IsActive = m.IsActive,
            SortOrder = m.SortOrder,
            Features = m.Features
                .Where(f => !f.IsDeleted && f.IsActive && allowedFeatureIds.Contains(f.Id))
                .OrderBy(f => f.SortOrder)
                .Select(f =>
                {
                    var caps = capsByFeature[f.Id];
                    return new NavigationFeatureDto
                    {
                        Id = f.Id,
                        Name = f.Name,
                        Path = f.Url,
                        Icon = f.Icon,
                        Description = f.Description,
                        RoleId = f.RoleId,
                        IsActive = f.IsActive,
                        IsVisibleInSidebar = f.IsVisibleInSidebar,
                        SortOrder = f.SortOrder,
                        CanCreate = caps.CanCreate,
                        CanRead = caps.CanRead,
                        CanUpdate = caps.CanUpdate,
                        CanDelete = caps.CanDelete
                    };
                })
                .ToList()
        }).Where(m => m.Features.Count > 0).ToList();

        return result;
    }
}
