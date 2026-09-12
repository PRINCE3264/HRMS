using HRMAPI.Interfaces.Services;
using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;

namespace HRMAPI.Repositories;

public class UserRepository : Repository<User>, IUserRepository
{
    public UserRepository(ApplicationDbContext context) : base(context) { }

    public async Task<User?> GetByEmailAsync(string email) =>
        await _dbSet.FirstOrDefaultAsync(u => u.Email.ToLower() == email.ToLower());

    public async Task<User?> GetByRefreshTokenAsync(string refreshToken) =>
        await _dbSet.FirstOrDefaultAsync(u => u.RefreshToken == refreshToken);

    public async Task<IEnumerable<User>> GetByRoleAsync(string role) =>
        await _dbSet.Where(u => u.Role == Enum.Parse<Enums.UserRole>(role)).ToListAsync();

    public async Task<IEnumerable<User>> GetByRoleIdAsync(Guid roleId) =>
        await _dbSet.Where(u => u.RoleId == roleId).ToListAsync();

    public async Task<IEnumerable<User>> SearchAsync(string query) =>
        await _dbSet.Where(u =>
            u.FirstName.Contains(query) ||
            u.LastName.Contains(query) ||
            u.Email.Contains(query) ||
            u.Department!.Contains(query))
            .ToListAsync();

    public async Task<User?> GetWithPermissionsAsync(Guid id) =>
        await _dbSet.Include(u => u.Employee)
            .FirstOrDefaultAsync(u => u.Id == id);

    public async Task AddPermissionAsync(UserPermission permission)
    {
        await _context.UserPermissions.AddAsync(permission);
        await _context.SaveChangesAsync();
    }

    public async Task RemovePermissionsAsync(Guid userId)
    {
        var perms = await _context.UserPermissions.Where(p => p.UserId == userId).ToListAsync();
        if (perms.Count > 0)
        {
            _context.UserPermissions.RemoveRange(perms);
            await _context.SaveChangesAsync();
        }
    }
}
