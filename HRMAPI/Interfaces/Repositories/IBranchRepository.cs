using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface IBranchRepository : IRepository<Branch>
{
    Task<Branch?> GetByNameAsync(string name);
    Task<Branch?> GetByCodeAsync(string code);
    Task<int> GetEmployeeCountAsync(Guid branchId);
}
