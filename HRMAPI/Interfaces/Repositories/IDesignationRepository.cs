using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface IDesignationRepository : IRepository<Designation>
{
    Task<int> GetEmployeeCountAsync(Guid designationId);
}
