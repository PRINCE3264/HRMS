using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface IWorkUpdateRepository : IRepository<DailyWorkUpdate>
{
    Task<DailyWorkUpdate?> GetByEmployeeAndDateAsync(Guid employeeId, DateTime date);
    Task<IEnumerable<DailyWorkUpdate>> GetByEmployeeAsync(Guid employeeId);
    Task<IEnumerable<DailyWorkUpdate>> GetByDateAsync(DateTime date);
}
