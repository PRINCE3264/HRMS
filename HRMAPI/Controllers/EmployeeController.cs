using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Models.DTOs.Employee;
using HRMAPI.Services;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Controllers;

[Route("api/employees")]
public class EmployeeController : BaseController
{
    private readonly IEmployeeService _employeeService;

    public EmployeeController(IEmployeeService employeeService)
    {
        _employeeService = employeeService;
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<ApiResponse<PaginatedResponse<EmployeeDto>>>> GetAll([FromQuery] PaginationQuery query, [FromQuery] string? status = null, [FromQuery] Guid? departmentId = null)
    {
        var result = await _employeeService.GetEmployeesAsync(query, status, departmentId);
        return Ok(ApiResponse<PaginatedResponse<EmployeeDto>>.Ok(result));
    }

    [HttpGet("all")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<EmployeeDto>>>> GetAllList()
    {
        var result = await _employeeService.GetAllEmployeesAsync();
        return Ok(ApiResponse<List<EmployeeDto>>.Ok(result));
    }

    [HttpGet("department/{departmentId:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<EmployeeDto>>>> GetByDepartment(Guid departmentId)
    {
        var result = await _employeeService.GetByDepartmentAsync(departmentId);
        return Ok(ApiResponse<List<EmployeeDto>>.Ok(result));
    }

    [HttpGet("team/{teamId:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<EmployeeDto>>>> GetByTeam(Guid teamId)
    {
        var result = await _employeeService.GetByTeamAsync(teamId);
        return Ok(ApiResponse<List<EmployeeDto>>.Ok(result));
    }

    [HttpGet("{id:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<EmployeeDto>>> Get(Guid id)
    {
        var result = await _employeeService.GetEmployeeAsync(id);
        return Ok(ApiResponse<EmployeeDto>.Ok(result));
    }

    [HttpPost]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<EmployeeDto>>> Create([FromBody] CreateEmployeeDto dto)
    {
        var result = await _employeeService.CreateEmployeeAsync(dto);
        return Ok(ApiResponse<EmployeeDto>.Ok(result, "Employee created."));
    }

    [HttpPut("{id:guid}")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<EmployeeDto>>> Update(Guid id, [FromBody] UpdateEmployeeDto dto)
    {
        var result = await _employeeService.UpdateEmployeeAsync(id, dto);
        return Ok(ApiResponse<EmployeeDto>.Ok(result, "Employee updated."));
    }

    [HttpDelete("{id:guid}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<object>>> Delete(Guid id)
    {
        var success = await _employeeService.DeleteEmployeeAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "Employee deleted."));
    }

    [HttpPut("{id:guid}/status")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<EmployeeDto>>> SetStatus(Guid id, [FromBody] SetEmployeeStatusDto dto)
    {
        var result = await _employeeService.SetEmploymentStatusAsync(id, dto.Status, dto.ExitDate, dto.ExitReason);
        return Ok(ApiResponse<EmployeeDto>.Ok(result, "Employee status updated."));
    }
}
