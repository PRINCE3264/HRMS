using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Models.DTOs.Management;
using HRMAPI.Services;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Controllers;

[Route("api/management")]
public class ManagementController : BaseController
{
    private readonly IManagementService _managementService;

    public ManagementController(IManagementService managementService)
    {
        _managementService = managementService;
    }

    [HttpGet("employees")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<List<ManagedEmployeeDto>>>> GetEmployees([FromQuery] string? role)
        => Ok(ApiResponse<List<ManagedEmployeeDto>>.Ok(await _managementService.GetEmployeesAsync(role)));

    [HttpGet("team-leads")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<List<TeamLeadManagementDto>>>> GetTeamLeads()
        => Ok(ApiResponse<List<TeamLeadManagementDto>>.Ok(await _managementService.GetTeamLeadsAsync()));

    [HttpGet("hr")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<List<ManagedEmployeeDto>>>> GetHrMembers()
        => Ok(ApiResponse<List<ManagedEmployeeDto>>.Ok(await _managementService.GetHrMembersAsync()));

    [HttpPut("role")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<ManagedEmployeeDto>>> AssignRole([FromBody] AssignRoleDto dto)
        => Ok(ApiResponse<ManagedEmployeeDto>.Ok(await _managementService.AssignRoleAsync(dto.EmployeeId, dto.Role)));
}