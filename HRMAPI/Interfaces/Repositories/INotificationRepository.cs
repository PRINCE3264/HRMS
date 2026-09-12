using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface INotificationRepository : IRepository<Notification>
{
    Task<IEnumerable<Notification>> GetByUserAsync(Guid userId, bool? isRead = null);
    Task<int> GetUnreadCountAsync(Guid userId);
    Task MarkAllAsReadAsync(Guid userId);
}
