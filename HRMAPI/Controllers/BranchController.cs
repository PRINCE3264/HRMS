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
    private readonly IWebHostEnvironment _env;

    public BranchController(IBranchService branchService, IWebHostEnvironment env)
    {
        _branchService = branchService;
        _env = env;
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<BranchDto>>>> GetAll() =>
        Ok(ApiResponse<List<BranchDto>>.Ok(await _branchService.GetBranchesAsync()));

    [HttpPost]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<BranchDto>>> Create([FromBody] CreateBranchDto dto) =>
        Ok(ApiResponse<BranchDto>.Ok(await _branchService.CreateBranchAsync(dto), "Branch created."));

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

        var uploadsDir = Path.Combine(_env.WebRootPath ?? Path.Combine(_env.ContentRootPath, "wwwroot"), "uploads", "branches");
        Directory.CreateDirectory(uploadsDir);
        var storedName = $"{Guid.NewGuid():N}{ext}";
        var fullPath = Path.Combine(uploadsDir, storedName);
        await using (var stream = System.IO.File.Create(fullPath))
        {
            await file.CopyToAsync(stream);
        }

        var fileUrl = $"uploads/branches/{storedName}";
        return Ok(ApiResponse<object>.Ok(new { imageUrl = $"/{fileUrl}" }, "Image uploaded."));
    }

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