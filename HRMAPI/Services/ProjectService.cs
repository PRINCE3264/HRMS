using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.DTOs.Project;
using HRMAPI.Enums;
using HRMAPI.Models;

namespace HRMAPI.Services;

public interface IProjectService
{
    Task<List<ProjectDto>> GetAllProjectsAsync();
    Task<List<ProjectDto>> GetProjectsForTeamLeadAsync(Guid teamLeadId);
    Task<List<ProjectDto>> GetProjectsForEmployeeAsync(Guid employeeId);
    Task<ProjectDto> GetProjectAsync(Guid id);
    Task<ProjectDto> CreateProjectAsync(CreateProjectDto dto, Guid createdById);
    Task<ProjectDto> UpdateProjectAsync(Guid id, UpdateProjectDto dto);
    Task<bool> DeleteProjectAsync(Guid id);
    Task<ProjectDto> AssignTeamLeadAsync(Guid id, Guid? teamLeadId);
    Task<List<EmployeeOptionDto>> GetTeamLeadCandidatesAsync();
    Task<List<ProjectMemberDto>> GetMembersAsync(Guid id);
    Task<List<EmployeeOptionDto>> GetAssignmentCandidatesAsync(Guid projectId, Guid callerEmployeeId, string currentRole);
    Task<List<ProjectMemberDto>> AssignMembersAsync(Guid projectId, Guid callerEmployeeId, string currentRole, AssignMembersDto dto);
    Task<List<ProjectMemberDto>> AddMemberAsync(Guid projectId, Guid callerEmployeeId, string currentRole, AddProjectMemberDto dto);
    Task<bool> RemoveMemberAsync(Guid projectId, Guid employeeId);
}

public class ProjectService : IProjectService
{
    private readonly ApplicationDbContext _context;

    public ProjectService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<List<ProjectDto>> GetAllProjectsAsync()
    {
        var projects = await _context.Projects
            .Include(p => p.Department)
            .Include(p => p.Team)
            .Include(p => p.TeamLead)
            .Include(p => p.CreatedBy)
            .Include(p => p.Members)
            .Where(p => !p.IsDeleted)
            .OrderByDescending(p => p.CreatedAt)
            .AsNoTracking()
            .ToListAsync();

        return projects.Select(MapToDto).ToList();
    }

    public async Task<List<ProjectDto>> GetProjectsForTeamLeadAsync(Guid teamLeadId)
    {
        var projects = await _context.Projects
            .Include(p => p.Department)
            .Include(p => p.Team)
            .Include(p => p.TeamLead)
            .Include(p => p.CreatedBy)
            .Include(p => p.Members)
            .Where(p => !p.IsDeleted && p.TeamLeadId == teamLeadId)
            .OrderByDescending(p => p.CreatedAt)
            .AsNoTracking()
            .ToListAsync();

        return projects.Select(MapToDto).ToList();
    }

    public async Task<List<ProjectDto>> GetProjectsForEmployeeAsync(Guid employeeId)
    {
        var projectIds = await _context.ProjectMembers
            .Where(pm => pm.EmployeeId == employeeId)
            .Select(pm => pm.ProjectId)
            .Distinct()
            .ToListAsync();

        var projects = await _context.Projects
            .Include(p => p.Department)
            .Include(p => p.Team)
            .Include(p => p.TeamLead)
            .Include(p => p.CreatedBy)
            .Include(p => p.Members)
            .Where(p => !p.IsDeleted && projectIds.Contains(p.Id))
            .OrderByDescending(p => p.CreatedAt)
            .AsNoTracking()
            .ToListAsync();

        return projects.Select(MapToDto).ToList();
    }

    public async Task<ProjectDto> GetProjectAsync(Guid id)
    {
        var project = await _context.Projects
            .Include(p => p.Department)
            .Include(p => p.Team)
            .Include(p => p.TeamLead)
            .Include(p => p.CreatedBy)
            .Include(p => p.Members)
            .FirstOrDefaultAsync(p => p.Id == id && !p.IsDeleted)
            ?? throw new KeyNotFoundException("Project not found.");

        return MapToDto(project);
    }

    public async Task<ProjectDto> CreateProjectAsync(CreateProjectDto dto, Guid createdById)
    {
        if (string.IsNullOrWhiteSpace(dto.Name))
            throw new InvalidOperationException("Project name is required.");

        var project = new Project
        {
            Name = dto.Name.Trim(),
            ProjectCode = string.IsNullOrWhiteSpace(dto.ProjectCode)
                ? GenerateProjectCode()
                : dto.ProjectCode.Trim().ToUpper(),
            Description = dto.Description,
            DepartmentId = dto.DepartmentId,
            TeamId = dto.TeamId,
            TeamLeadId = dto.TeamLeadId,
            Priority = ParsePriority(dto.Priority),
            StartDate = dto.StartDate ?? DateTime.UtcNow.Date,
            EndDate = dto.EndDate,
            CreatedById = createdById
        };

        if (project.TeamLeadId.HasValue)
        {
            await SyncTeamFromTeamLeadAsync(project);
        }

        _context.Projects.Add(project);
        await _context.SaveChangesAsync();

        return await GetProjectAsync(project.Id);
    }

    public async Task<ProjectDto> UpdateProjectAsync(Guid id, UpdateProjectDto dto)
    {
        var project = await _context.Projects
            .FirstOrDefaultAsync(p => p.Id == id && !p.IsDeleted)
            ?? throw new KeyNotFoundException("Project not found.");

        if (string.IsNullOrWhiteSpace(dto.Name))
            throw new InvalidOperationException("Project name is required.");

        project.Name = dto.Name.Trim();
        project.Description = dto.Description;
        project.DepartmentId = dto.DepartmentId;
        project.TeamId = dto.TeamId;
        project.TeamLeadId = dto.TeamLeadId;
        project.Status = ParseStatus(dto.Status);
        project.Priority = ParsePriority(dto.Priority);
        project.StartDate = dto.StartDate ?? DateTime.UtcNow.Date;
        project.EndDate = dto.EndDate;
        project.UpdatedAt = DateTime.UtcNow;

        if (project.TeamLeadId.HasValue)
        {
            await SyncTeamFromTeamLeadAsync(project);
        }

        await _context.SaveChangesAsync();
        return await GetProjectAsync(id);
    }

    public async Task<bool> DeleteProjectAsync(Guid id)
    {
        var project = await _context.Projects
            .FirstOrDefaultAsync(p => p.Id == id && !p.IsDeleted)
            ?? throw new KeyNotFoundException("Project not found.");

        project.IsDeleted = true;
        project.UpdatedAt = DateTime.UtcNow;
        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<ProjectDto> AssignTeamLeadAsync(Guid id, Guid? teamLeadId)
    {
        var project = await _context.Projects
            .FirstOrDefaultAsync(p => p.Id == id && !p.IsDeleted)
            ?? throw new KeyNotFoundException("Project not found.");

        if (teamLeadId.HasValue)
        {
            var isValidTeamLead = await _context.Employees
                .Where(e => e.Id == teamLeadId.Value && e.EmploymentStatus == EmploymentStatus.ACTIVE)
                .AnyAsync();
            if (!isValidTeamLead)
                throw new InvalidOperationException("Selected team lead does not exist.");

            project.TeamLeadId = teamLeadId;
            await SyncTeamFromTeamLeadAsync(project);
        }
        else
        {
            project.TeamLeadId = null;
            project.TeamId = null;
        }

        project.UpdatedAt = DateTime.UtcNow;
        await _context.SaveChangesAsync();
        return await GetProjectAsync(id);
    }

    public async Task<List<EmployeeOptionDto>> GetTeamLeadCandidatesAsync()
    {
        var teamLeadIds = await _context.Teams
            .Where(t => t.IsActive)
            .Select(t => t.TeamLeadId)
            .Distinct()
            .ToListAsync();

        var employees = await _context.Employees
            .Include(e => e.Department)
            .Include(e => e.Designation)
            .Include(e => e.Team)
            .Where(e => e.EmploymentStatus == EmploymentStatus.ACTIVE
                && (teamLeadIds.Contains(e.Id)
                    || (e.Designation != null && (e.Designation.Title.Contains("Team Lead")
                        || e.Designation.Title.Contains("Lead")))))
            .OrderBy(e => e.FirstName)
            .AsNoTracking()
            .ToListAsync();

        return employees.Select(e => new EmployeeOptionDto
        {
            Id = e.Id,
            EmployeeId = e.EmployeeId,
            Name = $"{e.FirstName} {e.LastName}",
            Designation = e.Designation?.Title,
            Department = e.Department?.Name,
            TeamName = e.Team?.Name
        }).ToList();
    }

    public async Task<List<ProjectMemberDto>> GetMembersAsync(Guid id)
    {
        await GetProjectAsync(id);

        var members = await _context.ProjectMembers
            .Include(pm => pm.Employee).ThenInclude(e => e.Designation)
            .Include(pm => pm.Employee).ThenInclude(e => e.Team)
            .Include(pm => pm.AssignedBy)
            .Where(pm => pm.ProjectId == id)
            .OrderBy(pm => pm.AssignedAt)
            .AsNoTracking()
            .ToListAsync();

        return members.Select(m => new ProjectMemberDto
        {
            Id = m.Id,
            ProjectId = m.ProjectId,
            EmployeeId = m.EmployeeId,
            EmployeeName = $"{m.Employee.FirstName} {m.Employee.LastName}",
            Designation = m.Employee.Designation?.Title,
            TeamName = m.Employee.Team?.Name,
            RoleInProject = m.RoleInProject,
            Status = m.Status.ToString(),
            AssignedAt = m.AssignedAt,
            AssignedByName = m.AssignedBy != null ? $"{m.AssignedBy.FirstName} {m.AssignedBy.LastName}" : null
        }).ToList();
    }

    public async Task<List<EmployeeOptionDto>> GetAssignmentCandidatesAsync(Guid projectId, Guid callerEmployeeId, string currentRole)
    {
        var project = await _context.Projects
            .FirstOrDefaultAsync(p => p.Id == projectId && !p.IsDeleted)
            ?? throw new KeyNotFoundException("Project not found.");

        var existingMembers = await _context.ProjectMembers
            .Where(pm => pm.ProjectId == projectId)
            .Select(pm => pm.EmployeeId)
            .ToListAsync();

        if (project.TeamLeadId == callerEmployeeId || currentRole == "TL")
        {
            var teamIds = await _context.Teams
                .Where(t => t.IsActive && t.TeamLeadId == callerEmployeeId)
                .Select(t => t.Id)
                .ToListAsync();

            var candidates = await _context.Employees
                .Include(e => e.Department)
                .Include(e => e.Designation)
                .Include(e => e.Team)
                .Where(e => e.EmploymentStatus == EmploymentStatus.ACTIVE
                    && e.Id != callerEmployeeId
                    && teamIds.Contains(e.TeamId ?? Guid.Empty)
                    && !existingMembers.Contains(e.Id))
                .OrderBy(e => e.FirstName)
                .AsNoTracking()
                .ToListAsync();

            return candidates.Select(e => new EmployeeOptionDto
            {
                Id = e.Id,
                EmployeeId = e.EmployeeId,
                Name = $"{e.FirstName} {e.LastName}",
                Designation = e.Designation?.Title,
                Department = e.Department?.Name,
                TeamName = e.Team?.Name
            }).ToList();
        }

        var allActive = await _context.Employees
            .Include(e => e.Department)
            .Include(e => e.Designation)
            .Include(e => e.Team)
            .Where(e => e.EmploymentStatus == EmploymentStatus.ACTIVE && !existingMembers.Contains(e.Id))
            .OrderBy(e => e.FirstName)
            .AsNoTracking()
            .ToListAsync();

        return allActive.Select(e => new EmployeeOptionDto
        {
            Id = e.Id,
            EmployeeId = e.EmployeeId,
            Name = $"{e.FirstName} {e.LastName}",
            Designation = e.Designation?.Title,
            Department = e.Department?.Name,
            TeamName = e.Team?.Name
        }).ToList();
    }

    public async Task<List<ProjectMemberDto>> AssignMembersAsync(Guid projectId, Guid callerEmployeeId, string currentRole, AssignMembersDto dto)
    {
        var project = await _context.Projects
            .FirstOrDefaultAsync(p => p.Id == projectId && !p.IsDeleted)
            ?? throw new KeyNotFoundException("Project not found.");

        if (currentRole == "TL" && project.TeamLeadId != null && project.TeamLeadId != callerEmployeeId)
            throw new UnauthorizedAccessException("Only the assigned team lead of this project can assign members.");

        var existing = await _context.ProjectMembers
            .Where(pm => pm.ProjectId == projectId)
            .Select(pm => pm.EmployeeId)
            .ToListAsync();

        List<Guid> validEmployeeIds;

        if (project.TeamLeadId == callerEmployeeId)
        {
            var teamIds = await _context.Teams
                .Where(t => t.IsActive && t.TeamLeadId == callerEmployeeId)
                .Select(t => t.Id)
                .ToListAsync();

            validEmployeeIds = await _context.Employees
                .Where(e => e.EmploymentStatus == EmploymentStatus.ACTIVE
                    && dto.EmployeeIds.Contains(e.Id)
                    && teamIds.Contains(e.TeamId ?? Guid.Empty))
                .Select(e => e.Id)
                .ToListAsync();
        }
        else
        {
            validEmployeeIds = await _context.Employees
                .Where(e => e.EmploymentStatus == EmploymentStatus.ACTIVE && dto.EmployeeIds.Contains(e.Id))
                .Select(e => e.Id)
                .ToListAsync();
        }

        foreach (var employeeId in validEmployeeIds.Distinct())
        {
            if (existing.Contains(employeeId)) continue;

            _context.ProjectMembers.Add(new ProjectMember
            {
                ProjectId = projectId,
                EmployeeId = employeeId,
                AssignedById = callerEmployeeId
            });
        }

        await _context.SaveChangesAsync();
        return await GetMembersAsync(projectId);
    }

    public async Task<List<ProjectMemberDto>> AddMemberAsync(Guid projectId, Guid callerEmployeeId, string currentRole, AddProjectMemberDto dto)
    {
        var project = await _context.Projects
            .FirstOrDefaultAsync(p => p.Id == projectId && !p.IsDeleted)
            ?? throw new KeyNotFoundException("Project not found.");

        var duplicate = await _context.ProjectMembers
            .AnyAsync(pm => pm.ProjectId == projectId && pm.EmployeeId == dto.EmployeeId);
        if (duplicate)
            throw new InvalidOperationException("Employee is already a member of this project.");

        if (currentRole == "TL" && project.TeamLeadId != null && project.TeamLeadId != callerEmployeeId)
            throw new UnauthorizedAccessException("Only the assigned team lead of this project can assign members.");

        var employee = await _context.Employees
            .FirstOrDefaultAsync(e => e.Id == dto.EmployeeId && e.EmploymentStatus == EmploymentStatus.ACTIVE)
            ?? throw new InvalidOperationException("Employee not found or inactive.");

        if (project.TeamLeadId == callerEmployeeId)
        {
            var teamIds = await _context.Teams
                .Where(t => t.IsActive && t.TeamLeadId == callerEmployeeId)
                .Select(t => t.Id)
                .ToListAsync();

            if (!teamIds.Contains(employee.TeamId ?? Guid.Empty))
                throw new UnauthorizedAccessException("The employee is not part of your team.");
        }

        _context.ProjectMembers.Add(new ProjectMember
        {
            ProjectId = projectId,
            EmployeeId = employee.Id,
            AssignedById = callerEmployeeId,
            RoleInProject = dto.RoleInProject
        });

        await _context.SaveChangesAsync();
        return await GetMembersAsync(projectId);
    }

    public async Task<bool> RemoveMemberAsync(Guid projectId, Guid employeeId)
    {
        var member = await _context.ProjectMembers
            .FirstOrDefaultAsync(pm => pm.ProjectId == projectId && pm.EmployeeId == employeeId)
            ?? throw new KeyNotFoundException("Project member not found.");

        _context.ProjectMembers.Remove(member);
        await _context.SaveChangesAsync();
        return true;
    }

    private async Task SyncTeamFromTeamLeadAsync(Project project)
    {
        var team = await _context.Teams
            .FirstOrDefaultAsync(t => t.IsActive && t.TeamLeadId == project.TeamLeadId);
        if (team != null)
        {
            project.TeamId = team.Id;
        }
    }

    private static string GenerateProjectCode()
    {
        const string chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
        var random = new Random();
        var suffix = new string(Enumerable.Repeat(chars, 6).Select(s => s[random.Next(s.Length)]).ToArray());
        return $"PRJ-{DateTime.UtcNow:yyyyMMdd}-{suffix}";
    }

    private static ProjectStatus ParseStatus(string? status)
    {
        if (Enum.TryParse<ProjectStatus>(status, true, out var parsed)) return parsed;
        return ProjectStatus.NOT_STARTED;
    }

    private static ProjectPriority ParsePriority(string? priority)
    {
        if (Enum.TryParse<ProjectPriority>(priority, true, out var parsed)) return parsed;
        return ProjectPriority.MEDIUM;
    }

    private static ProjectDto MapToDto(Project p)
    {
        var memberStatuses = p.Members.Select(m => m.Status).ToList();
        return new ProjectDto
        {
            Id = p.Id,
            ProjectCode = p.ProjectCode,
            Name = p.Name,
            Description = p.Description,
            DepartmentId = p.DepartmentId,
            DepartmentName = p.Department?.Name,
            TeamId = p.TeamId,
            TeamName = p.Team?.Name,
            TeamLeadId = p.TeamLeadId,
            TeamLeadName = p.TeamLead != null ? $"{p.TeamLead.FirstName} {p.TeamLead.LastName}" : null,
            Status = p.Status.ToString(),
            Priority = p.Priority.ToString(),
            StartDate = p.StartDate,
            EndDate = p.EndDate,
            CreatedByName = p.CreatedBy != null ? $"{p.CreatedBy.FirstName} {p.CreatedBy.LastName}" : null,
            MemberCount = memberStatuses.Count,
            CompletedMemberCount = memberStatuses.Count(s => s == ProjectMemberStatus.COMPLETED),
            CreatedAt = p.CreatedAt
        };
    }
}