using HRMAPI.Interfaces.Services;
using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;

namespace HRMAPI.Repositories;

public class BranchRepository : Repository<Branch>, IBranchRepository
{
    public BranchRepository(ApplicationDbContext context) : base(context) { }

    public async Task<Branch?> GetByNameAsync(string name) =>
        await _dbSet.FirstOrDefaultAsync(b => b.Name.ToLower() == name.ToLower());

    public async Task<Branch?> GetByCodeAsync(string code) =>
        await _dbSet.FirstOrDefaultAsync(b => b.Code.ToLower() == code.ToLower());

    public async Task<int> GetEmployeeCountAsync(Guid branchId) =>
        await _context.Employees.CountAsync(e => e.BranchId == branchId);
}
