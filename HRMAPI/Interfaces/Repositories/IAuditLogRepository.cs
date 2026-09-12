using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface IAuditLogRepository : IRepository<AuditLog>
{
    Task<IEnumerable<AuditLog>> GetByUserAsync(Guid userId);
    Task<IEnumerable<AuditLog>> GetByModuleAsync(string module);
    Task LogAsync(Guid userId, string action, string module, string? details, string? ipAddress);
}
