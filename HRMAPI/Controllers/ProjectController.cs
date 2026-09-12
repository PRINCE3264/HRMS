using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Models.DTOs.Project;
using HRMAPI.Services;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Controllers;

[Route("api/projects")]
public class ProjectController : BaseController
{
    private readonly IProjectService _projectService;
    private readonly IUserService _userService;

    public ProjectController(IProjectService projectService, IUserService userService)
    {
        _projectService = projectService;
        _userService = userService;
    }

    private async Task<Guid> GetCurrentEmployeeIdAsync()
    {
        var user = await _userService.GetByIdAsync(CurrentUserId);
        return user?.EmployeeId ?? Guid.Empty;
    }

    [HttpGet]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<List<ProjectDto>>>> GetAll() =>
        Ok(ApiResponse<List<ProjectDto>>.Ok(await _projectService.GetAllProjectsAsync()));

    [HttpGet("assigned-to-me")]
    [Authorize(Roles = "TL")]
    public async Task<ActionResult<ApiResponse<List<ProjectDto>>>> GetAssignedToMe()
    {
        var employeeId = await GetCurrentEmployeeIdAsync();
        var result = await _projectService.GetProjectsForTeamLeadAsync(employeeId);
        return Ok(ApiResponse<List<ProjectDto>>.Ok(result));
    }

    [HttpGet("my")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<ProjectDto>>>> GetMyProjects()
    {
        var employeeId = await GetCurrentEmployeeIdAsync();
        var result = await _projectService.GetProjectsForEmployeeAsync(employeeId);
        return Ok(ApiResponse<List<ProjectDto>>.Ok(result));
    }

    [HttpGet("team-leads")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<List<EmployeeOptionDto>>>> GetTeamLeads() =>
        Ok(ApiResponse<List<EmployeeOptionDto>>.Ok(await _projectService.GetTeamLeadCandidatesAsync()));

    [HttpGet("{id:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<ProjectDto>>> Get(Guid id) =>
        Ok(ApiResponse<ProjectDto>.Ok(await _projectService.GetProjectAsync(id)));

    [HttpPost]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<ProjectDto>>> Create([FromBody] CreateProjectDto dto)
    {
        var employeeId = await GetCurrentEmployeeIdAsync();
        var result = await _projectService.CreateProjectAsync(dto, employeeId);
        return Ok(ApiResponse<ProjectDto>.Ok(result, "Project created."));
    }

    [HttpPut("{id:guid}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<ProjectDto>>> Update(Guid id, [FromBody] UpdateProjectDto dto)
    {
        var result = await _projectService.UpdateProjectAsync(id, dto);
        return Ok(ApiResponse<ProjectDto>.Ok(result, "Project updated."));
    }

    [HttpDelete("{id:guid}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<object>>> Delete(Guid id)
    {
        var success = await _projectService.DeleteProjectAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "Project deleted."));
    }

    [HttpPost("{id:guid}/assign-team-lead")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<ProjectDto>>> AssignTeamLead(Guid id, [FromBody] AssignTeamLeadDto dto)
    {
        var result = await _projectService.AssignTeamLeadAsync(id, dto.TeamLeadId);
        return Ok(ApiResponse<ProjectDto>.Ok(result, "Team lead assigned."));
    }

    [HttpGet("{id:guid}/members")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<ProjectMemberDto>>>> GetMembers(Guid id) =>
        Ok(ApiResponse<List<ProjectMemberDto>>.Ok(await _projectService.GetMembersAsync(id)));

    [HttpGet("{id:guid}/candidates")]
    [Authorize(Roles = "ADMIN,HR,TL")]
    public async Task<ActionResult<ApiResponse<List<EmployeeOptionDto>>>> GetCandidates(Guid id)
    {
        var employeeId = await GetCurrentEmployeeIdAsync();
        var result = await _projectService.GetAssignmentCandidatesAsync(id, employeeId, CurrentUserRole);
        return Ok(ApiResponse<List<EmployeeOptionDto>>.Ok(result));
    }

    [HttpPost("{id:guid}/members")]
    [Authorize(Roles = "ADMIN,HR,TL")]
    public async Task<ActionResult<ApiResponse<List<ProjectMemberDto>>>> AssignMembers(Guid id, [FromBody] AssignMembersDto dto)
    {
        var employeeId = await GetCurrentEmployeeIdAsync();
        var result = await _projectService.AssignMembersAsync(id, employeeId, CurrentUserRole, dto);
        return Ok(ApiResponse<List<ProjectMemberDto>>.Ok(result, "Team members assigned."));
    }

    [HttpDelete("{id:guid}/members/{employeeId:guid}")]
    [Authorize(Roles = "ADMIN,HR,TL")]
    public async Task<ActionResult<ApiResponse<List<ProjectMemberDto>>>> RemoveMember(Guid id, Guid employeeId)
    {
        var success = await _projectService.RemoveMemberAsync(id, employeeId);
        return Ok(ApiResponse<List<ProjectMemberDto>>.Ok(
            await _projectService.GetMembersAsync(id),
            success ? "Member removed." : "Member not found."));
    }
}