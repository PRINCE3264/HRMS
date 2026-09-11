using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models;
using HRMAPI.Repositories.Interfaces;

namespace HRMAPI.Repositories;

public class TeamRepository : Repository<Team>, ITeamRepository
{
    public TeamRepository(ApplicationDbContext context) : base(context) { }

    public async Task<int> GetMemberCountAsync(Guid teamId) =>
        await _context.Employees.CountAsync(e => e.TeamId == teamId);
}
