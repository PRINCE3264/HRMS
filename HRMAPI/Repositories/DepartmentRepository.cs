using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models;
using HRMAPI.Repositories.Interfaces;

namespace HRMAPI.Repositories;

public class DepartmentRepository : Repository<Department>, IDepartmentRepository
{
    public DepartmentRepository(ApplicationDbContext context) : base(context) { }

    public async Task<Department?> GetByNameAsync(string name) =>
        await _dbSet.FirstOrDefaultAsync(d => d.Name.ToLower() == name.ToLower());

    public async Task<Department?> GetByCodeAsync(string code) =>
        await _dbSet.FirstOrDefaultAsync(d => d.Code.ToLower() == code.ToLower());

    public async Task<int> GetEmployeeCountAsync(Guid departmentId) =>
        await _context.Employees.CountAsync(e => e.DepartmentId == departmentId);
}
