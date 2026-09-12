using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Security;
using HRMAPI.Enums;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Services;



public static class RolesCatalog
{
    public static readonly Dictionary<string, string> RoleDescriptions = new()
    {
        ["ADMIN"] = "Full system access to all modules, users, settings and audit logs.",
        ["HR"] = "Manages employees, leaves, payroll, recruitment, training and reports.",
        ["TL"] = "Manages a team - tasks, attendance, leave approvals and performance.",
        ["EMPLOYEE"] = "Self-service - attendance, leave, payslips, tasks and profile."
    };

    public static bool IsValidRole(string? role) =>
        RoleDescriptions.ContainsKey(role ?? string.Empty);
}

public class RolesService : IRolesService
{
    private readonly IRolePermissionRepository _rolePermissionRepository;
    private readonly ApplicationDbContext _context;

    public RolesService(IRolePermissionRepository rolePermissionRepository, ApplicationDbContext context)
    {
        _rolePermissionRepository = rolePermissionRepository;
        _context = context;
    }

    public async Task<List<RoleDto>> GetRolesAsync()
    {
        var result = new List<RoleDto>();
        foreach (var role in RolesCatalog.RoleDescriptions.Keys)
        {
            result.Add(await GetRoleAsync(role));
        }
        return result;
    }

    public async Task<RoleDto> GetRoleAsync(string role)
    {
        if (!RolesCatalog.IsValidRole(role)) throw new KeyNotFoundException("Role not found.");
        var effective = await GetEffectivePermissionMapAsync(role);
        return new RoleDto
        {
            Id = SeedRoles.ForCode(role) ?? Guid.Empty,
            Role = role,
            Description = RolesCatalog.RoleDescriptions[role],
            Permissions = effective
                .OrderBy(kv => kv.Key)
                .Select(kv => new RoleModuleDto
                {
                    Module = kv.Key,
                    Actions = kv.Value.OrderBy(a => a).ToList()
                }).ToList()
        };
    }

    public async Task<RoleDto> UpdateRolePermissionsAsync(string role, List<RoleModuleDto> permissions)
    {
        if (!RolesCatalog.IsValidRole(role)) throw new KeyNotFoundException("Role not found.");

        var roleId = SeedRoles.ForCode(role) ?? Guid.Empty;
        var rows = new List<RolePermission>();
        foreach (var module in permissions)
        {
            if (string.IsNullOrWhiteSpace(module.Module)) continue;
            foreach (var action in module.Actions)
            {
                if (!Enum.TryParse<PermissionAction>(action, true, out var parsed)) continue;
                rows.Add(new RolePermission { Role = role, RoleId = roleId, Module = module.Module, Action = parsed });
            }
        }

        await _rolePermissionRepository.ReplaceForRoleAsync(role, roleId, rows);
        return await GetRoleAsync(role);
    }

    public async Task<bool> ResetRolePermissionsAsync(string role)
    {
        if (!RolesCatalog.IsValidRole(role)) throw new KeyNotFoundException("Role not found.");
        var roleId = SeedRoles.ForCode(role) ?? Guid.Empty;
        await _rolePermissionRepository.ReplaceForRoleAsync(role, roleId, new List<RolePermission>());
        return true;
    }

    public async Task<Dictionary<string, List<string>>> GetEffectivePermissionMapAsync(string role)
    {
        var roleId = SeedRoles.ForCode(role) ?? Guid.Empty;
        var stored = await _rolePermissionRepository.GetByRoleIdAsync(roleId);
        if (!stored.Any()) stored = await _rolePermissionRepository.GetByRoleAsync(role);
        if (stored.Any())
        {
            return stored
                .GroupBy(rp => rp.Module)
                .ToDictionary(
                    g => g.Key,
                    g => g.Select(rp => rp.Action.ToString()).Distinct().OrderBy(a => a).ToList());
        }

        RolePermissionDefaults.RolePermissionMap.TryGetValue(role, out var defaults);
        return (defaults ?? new Dictionary<string, List<string>>())
            .ToDictionary(kv => kv.Key, kv => new List<string>(kv.Value));
    }

    public async Task<RoleCatalogDto> GetCatalogAsync()
    {
        var modules = await _context.RolePermissions
            .Select(rp => rp.Module)
            .Distinct()
            .OrderBy(m => m)
            .ToListAsync();

        foreach (var module in RolePermissionDefaults.ModulePermissions.Keys)
        {
            if (!modules.Contains(module)) modules.Add(module);
        }

        modules = modules.OrderBy(m => m).ToList();

        var actions = Enum.GetValues<PermissionAction>().Select(a => a.ToString()).ToList();
        return new RoleCatalogDto { Modules = modules, Actions = actions };
    }
}

