using HRMAPI.Interfaces.Services;
using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Security;
using HRMAPI.Enums;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;

namespace HRMAPI.Interfaces.Services;

public interface IRolesService
{
    Task<List<RoleDto>> GetRolesAsync();
    Task<RoleDto> GetRoleAsync(string role);
    Task<RoleDto> UpdateRolePermissionsAsync(string role, List<RoleModuleDto> permissions);
    Task<bool> ResetRolePermissionsAsync(string role);
    Task<Dictionary<string, List<string>>> GetEffectivePermissionMapAsync(string role);
    Task<RoleCatalogDto> GetCatalogAsync();
}
