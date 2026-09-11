using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.DTOs.Management;
using HRMAPI.Enums;
using HRMAPI.Models;

namespace HRMAPI.Services;

public interface IManagementService
{
    Task<List<ManagedEmployeeDto>> GetEmployeesAsync(string? role);
    Task<List<TeamLeadManagementDto>> GetTeamLeadsAsync();
    Task<List<ManagedEmployeeDto>> GetHrMembersAsync();
}

public class ManagementService : IManagementService
{
    private readonly ApplicationDbContext _context;

    public ManagementService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<List<ManagedEmployeeDto>> GetEmployeesAsync(string? role)
    {
        UserRole? roleFilter = null;
        if (!string.IsNullOrWhiteSpace(role) && role != "ALL" && Enum.TryParse<UserRole>(role, true, out var parsed))
            roleFilter = parsed;

        var employees = await _context.Employees
            .Include(e => e.Department)
            .Include(e => e.Designation)
            .Include(e => e.Branch)
            .Include(e => e.Team)
            .AsNoTracking()
            .ToListAsync();

        var users = await _context.Users.AsNoTracking().ToListAsync();
        var userByEmployee = users
            .Where(u => u.EmployeeId.HasValue)
            .ToDictionary(u => u.EmployeeId!.Value, u => u);

        var result = employees.Select(e =>
        {
            userByEmployee.TryGetValue(e.Id, out var user);
            return new ManagedEmployeeDto
            {
                Id = e.Id,
                EmployeeCode = e.EmployeeId,
                FirstName = e.FirstName,
                LastName = e.LastName,
                Email = e.Email,
                Phone = e.Phone,
                Designation = e.Designation?.Title,
                Department = e.Department?.Name,
                Branch = e.Branch?.Name,
                TeamName = e.Team?.Name,
                Role = user?.Role.ToString(),
                Active = e.EmploymentStatus == EmploymentStatus.ACTIVE,
                HasAccount = user != null
            };
        }).ToList();

        if (roleFilter.HasValue)
        {
            var roleName = roleFilter.Value.ToString();
            result = result.Where(e => e.Role == roleName).ToList();
        }

        return result
            .OrderByDescending(e => e.Role == "ADMIN")
            .ThenByDescending(e => e.Role == "HR")
            .ThenByDescending(e => e.Role == "TL")
            .ThenByDescending(e => e.Role == "EMPLOYEE")
            .ThenBy(e => e.FirstName)
            .ThenBy(e => e.LastName)
            .ToList();
    }

    public async Task<List<TeamLeadManagementDto>> GetTeamLeadsAsync()
    {
        var teams = await _context.Teams
            .Include(t => t.Department)
            .Include(t => t.TeamLead)
                .ThenInclude(tl => tl.Designation)
            .Include(t => t.Members)
            .Where(t => t.IsActive)
            .AsNoTracking()
            .ToListAsync();

        var users = await _context.Users.AsNoTracking().ToListAsync();
        var userByEmployee = users
            .Where(u => u.EmployeeId.HasValue)
            .ToDictionary(u => u.EmployeeId!.Value, u => u);

        var projectCounts = await _context.Projects
            .Where(p => !p.IsDeleted && p.TeamLeadId.HasValue
                && p.Status != ProjectStatus.CANCELLED && p.Status != ProjectStatus.COMPLETED)
            .GroupBy(p => p.TeamLeadId!.Value)
            .Select(g => new { TeamLeadId = g.Key, Count = g.Count() })
            .AsNoTracking()
            .ToListAsync();

        var projectCountByLead = projectCounts.ToDictionary(x => x.TeamLeadId, x => x.Count);

        var result = teams
            .OrderBy(t => t.TeamLead.FirstName)
            .ThenBy(t => t.TeamLead.LastName)
            .Select(t =>
            {
                var tl = t.TeamLead;
                userByEmployee.TryGetValue(tl.Id, out var user);
                projectCountByLead.TryGetValue(tl.Id, out var projectCount);
                return new TeamLeadManagementDto
                {
                    Id = tl.Id,
                    EmployeeCode = tl.EmployeeId,
                    FirstName = tl.FirstName,
                    LastName = tl.LastName,
                    Email = tl.Email,
                    Designation = tl.Designation?.Title,
                    Department = t.Department?.Name,
                    TeamId = t.Id,
                    TeamName = t.Name,
                    TeamMembersCount = t.Members.Count(m => m.EmploymentStatus == EmploymentStatus.ACTIVE),
                    ActiveProjectsCount = projectCount,
                    Role = user?.Role.ToString(),
                    Active = tl.EmploymentStatus == EmploymentStatus.ACTIVE,
                    HasAccount = user != null
                };
            })
            .ToList();

        return result;
    }

    public async Task<List<ManagedEmployeeDto>> GetHrMembersAsync()
    {
        return await GetEmployeesAsync(UserRole.HR.ToString());
    }
}