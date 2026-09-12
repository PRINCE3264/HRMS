using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface IKPIRepository : IRepository<KPI>
{
    Task<IEnumerable<KPI>> GetByEmployeeAsync(Guid employeeId);
}
