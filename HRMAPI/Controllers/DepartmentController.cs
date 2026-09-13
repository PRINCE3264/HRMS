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
    private readonly IWebHostEnvironment _env;

    public DepartmentController(IDepartmentService departmentService, IWebHostEnvironment env)
    {
        _departmentService = departmentService;
        _env = env;
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

    [HttpPost("upload-image")]
    [Authorize(Roles = "ADMIN,HR")]
    [DisableRequestSizeLimit]
    public async Task<ActionResult<ApiResponse<object>>> UploadImage([FromForm] IFormFile file)
    {
        if (file == null || file.Length == 0)
            return BadRequest(ApiResponse<object>.Fail("No file selected."));
        if (file.Length > 5 * 1024 * 1024)
            return BadRequest(ApiResponse<object>.Fail("Image size must be under 5 MB."));

        var allowedExtensions = new[] { ".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".bmp" };
        var ext = Path.GetExtension(file.FileName).ToLowerInvariant();
        if (!allowedExtensions.Contains(ext))
            return BadRequest(ApiResponse<object>.Fail("Only image files are allowed."));

        var uploadsDir = Path.Combine(_env.WebRootPath ?? Path.Combine(_env.ContentRootPath, "wwwroot"), "uploads", "departments");
        Directory.CreateDirectory(uploadsDir);
        var storedName = $"{Guid.NewGuid():N}{ext}";
        var fullPath = Path.Combine(uploadsDir, storedName);
        await using (var stream = System.IO.File.Create(fullPath))
        {
            await file.CopyToAsync(stream);
        }

        var fileUrl = $"uploads/departments/{storedName}";
        return Ok(ApiResponse<object>.Ok(new { imageUrl = $"/{fileUrl}" }, "Image uploaded."));
    }

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