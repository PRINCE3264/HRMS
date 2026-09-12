using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface IRolePermissionRepository : IRepository<RolePermission>
{
    Task<IEnumerable<RolePermission>> GetByRoleAsync(string role);
    Task<IEnumerable<RolePermission>> GetByRoleIdAsync(Guid roleId);
    Task ReplaceForRoleAsync(string role, Guid roleId, IEnumerable<RolePermission> permissions);
}
