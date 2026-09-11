using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.DTOs.Common;
using HRMAPI.DTOs.Security;
using HRMAPI.Services;

namespace HRMAPI.Controllers;

[Route("api/roles")]
public class RolesController : BaseController
{
    private readonly IRolesService _rolesService;

    public RolesController(IRolesService rolesService)
    {
        _rolesService = rolesService;
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<RoleDto>>>> GetRoles()
    {
        var result = await _rolesService.GetRolesAsync();
        return Ok(ApiResponse<List<RoleDto>>.Ok(result));
    }

    [HttpGet("modules")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<RoleCatalogDto>>> GetCatalog()
    {
        var result = await _rolesService.GetCatalogAsync();
        return Ok(ApiResponse<RoleCatalogDto>.Ok(result));
    }

    [HttpGet("{role}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<RoleDto>>> GetRole(string role)
    {
        var result = await _rolesService.GetRoleAsync(role);
        return Ok(ApiResponse<RoleDto>.Ok(result));
    }

    [HttpPut("{role}/permissions")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<RoleDto>>> UpdateRole(string role, [FromBody] UpdateRoleDto dto)
    {
        var result = await _rolesService.UpdateRolePermissionsAsync(role, dto.Permissions);
        return Ok(ApiResponse<RoleDto>.Ok(result, "Role permissions updated."));
    }

    [HttpDelete("{role}/permissions")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<object>>> ResetRole(string role)
    {
        var success = await _rolesService.ResetRolePermissionsAsync(role);
        return Ok(ApiResponse<object>.Ok(new { success }, "Role permissions reset to defaults."));
    }
}
