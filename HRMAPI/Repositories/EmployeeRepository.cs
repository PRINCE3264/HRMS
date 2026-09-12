using HRMAPI.Interfaces.Services;
using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;

namespace HRMAPI.Repositories;

public class EmployeeRepository : Repository<Employee>, IEmployeeRepository
{
    public EmployeeRepository(ApplicationDbContext context) : base(context) { }

    public async Task<Employee?> GetByEmailAsync(string email) =>
        await _dbSet.FirstOrDefaultAsync(e => e.Email.ToLower() == email.ToLower());

    public async Task<Employee?> GetByEmployeeIdAsync(string employeeId) =>
        await _dbSet.FirstOrDefaultAsync(e => e.EmployeeId == employeeId);

    public async Task<Employee?> GetWithDetailsAsync(Guid id) =>
        await _dbSet.Include(e => e.Department)
            .Include(e => e.Designation)
            .Include(e => e.Branch)
            .Include(e => e.Team)
            .Include(e => e.ReportingManager)
            .FirstOrDefaultAsync(e => e.Id == id);

    public async Task<IEnumerable<Employee>> GetByDepartmentAsync(Guid departmentId) =>
        await _dbSet.Where(e => e.DepartmentId == departmentId).ToListAsync();

    public async Task<IEnumerable<Employee>> GetByTeamAsync(Guid teamId) =>
        await _dbSet.Where(e => e.TeamId == teamId).ToListAsync();

    public async Task<IEnumerable<Employee>> SearchAsync(string query) =>
        await _dbSet.Include(e => e.Department)
            .Include(e => e.Designation)
            .Include(e => e.Branch)
            .Where(e =>
                e.FirstName.Contains(query) ||
                e.LastName.Contains(query) ||
                e.EmployeeId.Contains(query) ||
                e.Email.Contains(query) ||
                e.Department.Name.Contains(query) ||
                e.Designation.Title.Contains(query))
            .ToListAsync();

    public async Task<int> GetCountByDepartmentAsync(Guid departmentId) =>
        await _dbSet.CountAsync(e => e.DepartmentId == departmentId);

    public async Task<int> GetCountByBranchAsync(Guid branchId) =>
        await _dbSet.CountAsync(e => e.BranchId == branchId);

    public async Task<string> GenerateEmployeeIdAsync()
    {
        var year = DateTime.UtcNow.ToString("yy");
        var count = await _dbSet.CountAsync() + 1;
        return $"EMP-{year}-{count:D4}";
    }
}
