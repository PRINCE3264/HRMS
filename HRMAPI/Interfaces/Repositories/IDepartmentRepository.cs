using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface IDepartmentRepository : IRepository<Department>
{
    Task<Department?> GetByNameAsync(string name);
    Task<Department?> GetByCodeAsync(string code);
    Task<int> GetEmployeeCountAsync(Guid departmentId);
}
