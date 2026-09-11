using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models;
using HRMAPI.Repositories.Interfaces;

namespace HRMAPI.Repositories;

public class DesignationRepository : Repository<Designation>, IDesignationRepository
{
    public DesignationRepository(ApplicationDbContext context) : base(context) { }

    public async Task<int> GetEmployeeCountAsync(Guid designationId) =>
        await _context.Employees.CountAsync(e => e.DesignationId == designationId);
}
