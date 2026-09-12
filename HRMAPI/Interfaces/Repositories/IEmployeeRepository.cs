using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface IEmployeeRepository : IRepository<Employee>
{
    Task<Employee?> GetByEmailAsync(string email);
    Task<Employee?> GetByEmployeeIdAsync(string employeeId);
    Task<Employee?> GetWithDetailsAsync(Guid id);
    Task<IEnumerable<Employee>> GetByDepartmentAsync(Guid departmentId);
    Task<IEnumerable<Employee>> GetByTeamAsync(Guid teamId);
    Task<IEnumerable<Employee>> SearchAsync(string query);
    Task<int> GetCountByDepartmentAsync(Guid departmentId);
    Task<int> GetCountByBranchAsync(Guid branchId);
    Task<string> GenerateEmployeeIdAsync();
}
