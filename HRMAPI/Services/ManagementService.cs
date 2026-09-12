using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Management;
using HRMAPI.Enums;
using HRMAPI.Models.Entities;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Services;



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
                RoleId = user?.RoleId,
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
        var users = await _context.Users
            .Where(u => u.Role == UserRole.TL && u.EmployeeId.HasValue)
            .AsNoTracking()
            .ToListAsync();
        var employeeIds = users.Select(u => u.EmployeeId!.Value).ToHashSet();

        var employees = await _context.Employees
            .Include(e => e.Department)
            .Include(e => e.Designation)
            .Include(e => e.Branch)
            .Include(e => e.Team)
            .Where(e => employeeIds.Contains(e.Id))
            .AsNoTracking()
            .ToListAsync();

        var teams = await _context.Teams
            .Include(t => t.Members)
            .Where(t => t.IsActive && employeeIds.Contains(t.TeamLeadId))
            .AsNoTracking()
            .ToListAsync();

        var teamByLead = teams
            .GroupBy(t => t.TeamLeadId)
            .ToDictionary(g => g.Key, g => g.First());
        var membersByLead = teams
            .GroupBy(t => t.TeamLeadId)
            .ToDictionary(g => g.Key,
                g => g.SelectMany(t => t.Members).Count(m => m.EmploymentStatus == EmploymentStatus.ACTIVE));

        var projectCounts = await _context.Projects
            .Where(p => !p.IsDeleted && p.TeamLeadId.HasValue && employeeIds.Contains(p.TeamLeadId.Value)
                && p.Status != ProjectStatus.CANCELLED && p.Status != ProjectStatus.COMPLETED)
            .GroupBy(p => p.TeamLeadId!.Value)
            .Select(g => new { TeamLeadId = g.Key, Count = g.Count() })
            .AsNoTracking()
            .ToListAsync();
        var projectCountByLead = projectCounts.ToDictionary(x => x.TeamLeadId, x => x.Count);

        var userByEmployee = users.ToDictionary(u => u.EmployeeId!.Value, u => u);

        var result = employees
            .OrderBy(e => e.FirstName)
            .ThenBy(e => e.LastName)
            .Select(e =>
            {
                userByEmployee.TryGetValue(e.Id, out var user);
                teamByLead.TryGetValue(e.Id, out var team);
                membersByLead.TryGetValue(e.Id, out int memberCount);
                projectCountByLead.TryGetValue(e.Id, out int projectCount);
                return new TeamLeadManagementDto
                {
                    Id = e.Id,
                    EmployeeCode = e.EmployeeId,
                    FirstName = e.FirstName,
                    LastName = e.LastName,
                    Email = e.Email,
                    Designation = e.Designation?.Title,
                    Department = e.Department?.Name,
                    TeamId = team?.Id,
                    TeamName = team?.Name,
                    TeamMembersCount = memberCount,
                    ActiveProjectsCount = projectCount,
                    Role = user?.Role.ToString(),
                    RoleId = user?.RoleId,
                    Active = e.EmploymentStatus == EmploymentStatus.ACTIVE,
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

    public async Task<ManagedEmployeeDto> AssignRoleAsync(Guid employeeId, string roleCode)
    {
        if (string.IsNullOrWhiteSpace(roleCode)) throw new ArgumentException("Role is required.");

        roleCode = roleCode.Trim().ToUpperInvariant();
        var allowedRoles = new[] { "TL", "HR", "EMPLOYEE" };
        if (!allowedRoles.Contains(roleCode))
            throw new ArgumentException("Role must be one of: TL, HR, EMPLOYEE.");

        var employee = await _context.Employees
            .Include(e => e.Department)
            .Include(e => e.Designation)
            .Include(e => e.Branch)
            .Include(e => e.Team)
            .FirstOrDefaultAsync(e => e.Id == employeeId)
            ?? throw new KeyNotFoundException("Employee not found.");

        var user = await _context.Users.FirstOrDefaultAsync(u => u.EmployeeId == employeeId)
            ?? throw new KeyNotFoundException("Employee has no login account yet.");

        var role = await _context.Roles.AsNoTracking()
            .FirstOrDefaultAsync(r => r.Code == roleCode)
            ?? throw new KeyNotFoundException($"Role '{roleCode}' does not exist.");

        user.Role = Enum.Parse<UserRole>(roleCode);
        user.RoleId = role.Id;
        _context.Users.Update(user);
        await _context.SaveChangesAsync();

        return new ManagedEmployeeDto
        {
            Id = employee.Id,
            EmployeeCode = employee.EmployeeId,
            FirstName = employee.FirstName,
            LastName = employee.LastName,
            Email = employee.Email,
            Phone = employee.Phone,
            Designation = employee.Designation?.Title,
            Department = employee.Department?.Name,
            Branch = employee.Branch?.Name,
            TeamName = employee.Team?.Name,
            Role = user.Role.ToString(),
            RoleId = user.RoleId,
            Active = employee.EmploymentStatus == EmploymentStatus.ACTIVE,
            HasAccount = true
        };
    }
}
