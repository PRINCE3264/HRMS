using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Models.DTOs.Department;
using HRMAPI.Interfaces.Services;

namespace HRMAPI.Controllers;

[Route("api/departments")]
public class DepartmentController : BaseController
{
    private readonly IDepartmentService _departmentService;

    public DepartmentController(IDepartmentService departmentService)
    {
        _departmentService = departmentService;
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<DepartmentDto>>>> GetAll() =>
        Ok(ApiResponse<List<DepartmentDto>>.Ok(await _departmentService.GetDepartmentsAsync()));

    [HttpGet("{id:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<DepartmentDto>>> Get(Guid id) =>
        Ok(ApiResponse<DepartmentDto>.Ok(await _departmentService.GetDepartmentAsync(id)));

    [HttpPost]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<DepartmentDto>>> Create([FromBody] CreateDepartmentDto dto) =>
        Ok(ApiResponse<DepartmentDto>.Ok(await _departmentService.CreateDepartmentAsync(dto), "Department created."));

    [HttpPut("{id:guid}")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<DepartmentDto>>> Update(Guid id, [FromBody] CreateDepartmentDto dto) =>
        Ok(ApiResponse<DepartmentDto>.Ok(await _departmentService.UpdateDepartmentAsync(id, dto), "Department updated."));

    [HttpDelete("{id:guid}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<object>>> Delete(Guid id)
    {
        var success = await _departmentService.DeleteDepartmentAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "Department deactivated."));
    }
}