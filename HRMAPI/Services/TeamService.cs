using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Department;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;
using HRMAPI.Interfaces.Services;

namespace HRMAPI.Services;

public class TeamService : ITeamService
{
    private readonly ITeamRepository _teamRepository;
    private readonly ApplicationDbContext _context;

    public TeamService(
        ITeamRepository teamRepository,
        ApplicationDbContext context)
    {
        _teamRepository = teamRepository;
        _context = context;
    }

    public async Task<List<TeamDto>> GetTeamsAsync()
    {
        var teams = await _context.Teams
            .Include(t => t.Department)
            .Include(t => t.TeamLead)
            .AsNoTracking()
            .ToListAsync();

        return teams.Select(t => new TeamDto
        {
            Id = t.Id,
            Name = t.Name,
            DepartmentId = t.DepartmentId,
            DepartmentName = t.Department.Name,
            TeamLeadId = t.TeamLeadId,
            TeamLeadName = $"{t.TeamLead.FirstName} {t.TeamLead.LastName}",
            TotalEmployees = t.TotalEmployees,
            MemberCount = t.Members.Count,
            Status = t.IsActive ? "ACTIVE" : "INACTIVE"
        }).ToList();
    }

    public async Task<TeamDto> CreateTeamAsync(CreateTeamDto dto)
    {
        var team = new Team
        {
            Name = dto.Name,
            DepartmentId = dto.DepartmentId,
            TeamLeadId = dto.TeamLeadId
        };
        await _teamRepository.AddAsync(team);
        return (await GetTeamsAsync()).First(x => x.Id == team.Id);
    }

    public async Task<bool> DeleteTeamAsync(Guid id)
    {
        var team = await _teamRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("Team not found.");
        team.IsActive = false;
        team.UpdatedAt = DateTime.UtcNow;
        await _teamRepository.UpdateAsync(team);
        return true;
    }
}