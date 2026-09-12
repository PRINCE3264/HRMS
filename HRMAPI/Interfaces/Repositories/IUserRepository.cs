using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface IUserRepository : IRepository<User>
{
    Task<User?> GetByEmailAsync(string email);
    Task<User?> GetByRefreshTokenAsync(string refreshToken);
    Task<IEnumerable<User>> GetByRoleAsync(string role);
    Task<IEnumerable<User>> GetByRoleIdAsync(Guid roleId);
    Task<IEnumerable<User>> SearchAsync(string query);
    Task<User?> GetWithPermissionsAsync(Guid id);
    Task AddPermissionAsync(UserPermission permission);
    Task RemovePermissionsAsync(Guid userId);
}
