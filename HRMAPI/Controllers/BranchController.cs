using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Models.DTOs.Department;
using HRMAPI.Interfaces.Services;

namespace HRMAPI.Controllers;

[Route("api/branches")]
public class BranchController : BaseController
{
    private readonly IBranchService _branchService;

    public BranchController(IBranchService branchService)
    {
        _branchService = branchService;
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<BranchDto>>>> GetAll() =>
        Ok(ApiResponse<List<BranchDto>>.Ok(await _branchService.GetBranchesAsync()));

    [HttpPost]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<BranchDto>>> Create([FromBody] CreateBranchDto dto) =>
        Ok(ApiResponse<BranchDto>.Ok(await _branchService.CreateBranchAsync(dto), "Branch created."));

    [HttpPut("{id:guid}")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<BranchDto>>> Update(Guid id, [FromBody] CreateBranchDto dto) =>
        Ok(ApiResponse<BranchDto>.Ok(await _branchService.UpdateBranchAsync(id, dto), "Branch updated."));

    [HttpDelete("{id:guid}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<object>>> Delete(Guid id)
    {
        var success = await _branchService.DeleteBranchAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "Branch deactivated."));
    }
}