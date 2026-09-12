using HRMAPI.Interfaces.Services;
using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Project;
using HRMAPI.Enums;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Services;

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
