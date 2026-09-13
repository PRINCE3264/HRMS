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
    private readonly IWebHostEnvironment _env;

    public EmployeeController(IEmployeeService employeeService, IWebHostEnvironment env)
    {
        _employeeService = employeeService;
        _env = env;
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

    [HttpPost("upload-avatar")]
    [Authorize(Roles = "ADMIN,HR")]
    [DisableRequestSizeLimit]
    public async Task<ActionResult<ApiResponse<object>>> UploadAvatar([FromForm] IFormFile file)
    {
        if (file == null || file.Length == 0)
            return BadRequest(ApiResponse<object>.Fail("No file selected."));
        if (file.Length > 5 * 1024 * 1024)
            return BadRequest(ApiResponse<object>.Fail("Image size must be under 5 MB."));

        var allowedExtensions = new[] { ".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".bmp" };
        var ext = Path.GetExtension(file.FileName).ToLowerInvariant();
        if (!allowedExtensions.Contains(ext))
            return BadRequest(ApiResponse<object>.Fail("Only image files are allowed."));

        var uploadsDir = Path.Combine(_env.WebRootPath ?? Path.Combine(_env.ContentRootPath, "wwwroot"), "uploads", "employees");
        Directory.CreateDirectory(uploadsDir);
        var storedName = $"{Guid.NewGuid():N}{ext}";
        var fullPath = Path.Combine(uploadsDir, storedName);
        await using (var stream = System.IO.File.Create(fullPath))
        {
            await file.CopyToAsync(stream);
        }

        var fileUrl = $"uploads/employees/{storedName}";
        return Ok(ApiResponse<object>.Ok(new { imageUrl = $"/{fileUrl}" }, "Avatar uploaded."));
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
