using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.DTOs.Common;
using HRMAPI.DTOs.Department;
using HRMAPI.Services;

namespace HRMAPI.Controllers;

[Route("api/")]
public class DepartmentController : BaseController
{
    private readonly IDepartmentService _departmentService;

    public DepartmentController(IDepartmentService departmentService)
    {
        _departmentService = departmentService;
    }

    [HttpGet("departments")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<DepartmentDto>>>> GetAll() =>
        Ok(ApiResponse<List<DepartmentDto>>.Ok(await _departmentService.GetDepartmentsAsync()));

    [HttpGet("departments/{id:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<DepartmentDto>>> Get(Guid id) =>
        Ok(ApiResponse<DepartmentDto>.Ok(await _departmentService.GetDepartmentAsync(id)));

    [HttpPost("departments")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<DepartmentDto>>> Create([FromBody] CreateDepartmentDto dto) =>
        Ok(ApiResponse<DepartmentDto>.Ok(await _departmentService.CreateDepartmentAsync(dto), "Department created."));

    [HttpPut("departments/{id:guid}")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<DepartmentDto>>> Update(Guid id, [FromBody] CreateDepartmentDto dto) =>
        Ok(ApiResponse<DepartmentDto>.Ok(await _departmentService.UpdateDepartmentAsync(id, dto), "Department updated."));

    [HttpDelete("departments/{id:guid}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<object>>> Delete(Guid id)
    {
        var success = await _departmentService.DeleteDepartmentAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "Department deactivated."));
    }

    [HttpGet("designations")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<DesignationDto>>>> GetDesignations() =>
        Ok(ApiResponse<List<DesignationDto>>.Ok(await _departmentService.GetDesignationsAsync()));

    [HttpPost("designations")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<DesignationDto>>> CreateDesignation([FromBody] CreateDesignationDto dto) =>
        Ok(ApiResponse<DesignationDto>.Ok(await _departmentService.CreateDesignationAsync(dto), "Designation created."));

    [HttpPut("designations/{id:guid}")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<DesignationDto>>> UpdateDesignation(Guid id, [FromBody] CreateDesignationDto dto) =>
        Ok(ApiResponse<DesignationDto>.Ok(await _departmentService.UpdateDesignationAsync(id, dto), "Designation updated."));

    [HttpDelete("designations/{id:guid}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<object>>> DeleteDesignation(Guid id)
    {
        var success = await _departmentService.DeleteDesignationAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "Designation deactivated."));
    }

    [HttpGet("branches")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<BranchDto>>>> GetBranches() =>
        Ok(ApiResponse<List<BranchDto>>.Ok(await _departmentService.GetBranchesAsync()));

    [HttpPost("branches")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<BranchDto>>> CreateBranch([FromBody] CreateBranchDto dto) =>
        Ok(ApiResponse<BranchDto>.Ok(await _departmentService.CreateBranchAsync(dto), "Branch created."));

    [HttpPut("branches/{id:guid}")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<BranchDto>>> UpdateBranch(Guid id, [FromBody] CreateBranchDto dto) =>
        Ok(ApiResponse<BranchDto>.Ok(await _departmentService.UpdateBranchAsync(id, dto), "Branch updated."));

    [HttpDelete("branches/{id:guid}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<object>>> DeleteBranch(Guid id)
    {
        var success = await _departmentService.DeleteBranchAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "Branch deactivated."));
    }

    [HttpGet("teams")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<TeamDto>>>> GetTeams() =>
        Ok(ApiResponse<List<TeamDto>>.Ok(await _departmentService.GetTeamsAsync()));

    [HttpPost("teams")]
    [Authorize(Roles = "ADMIN,HR,TL")]
    public async Task<ActionResult<ApiResponse<TeamDto>>> CreateTeam([FromBody] CreateTeamDto dto) =>
        Ok(ApiResponse<TeamDto>.Ok(await _departmentService.CreateTeamAsync(dto), "Team created."));

    [HttpDelete("teams/{id:guid}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<object>>> DeleteTeam(Guid id)
    {
        var success = await _departmentService.DeleteTeamAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "Team deactivated."));
    }
}
