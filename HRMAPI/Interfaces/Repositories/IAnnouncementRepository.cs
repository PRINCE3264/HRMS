using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface IAnnouncementRepository : IRepository<Announcement>
{
    Task<IEnumerable<Announcement>> GetActiveAsync();
    Task<IEnumerable<Announcement>> GetByAudienceAsync(string role);
}
