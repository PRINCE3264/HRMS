using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Models.DTOs.Department;
using HRMAPI.Interfaces.Services;

namespace HRMAPI.Controllers;

[Route("api/designations")]
public class DesignationController : BaseController
{
    private readonly IDesignationService _designationService;

    public DesignationController(IDesignationService designationService)
    {
        _designationService = designationService;
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<DesignationDto>>>> GetAll() =>
        Ok(ApiResponse<List<DesignationDto>>.Ok(await _designationService.GetDesignationsAsync()));

    [HttpPost]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<DesignationDto>>> Create([FromBody] CreateDesignationDto dto) =>
        Ok(ApiResponse<DesignationDto>.Ok(await _designationService.CreateDesignationAsync(dto), "Designation created."));

    [HttpPut("{id:guid}")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<DesignationDto>>> Update(Guid id, [FromBody] CreateDesignationDto dto) =>
        Ok(ApiResponse<DesignationDto>.Ok(await _designationService.UpdateDesignationAsync(id, dto), "Designation updated."));

    [HttpDelete("{id:guid}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<object>>> Delete(Guid id)
    {
        var success = await _designationService.DeleteDesignationAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "Designation deactivated."));
    }
}