using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.DTOs.Common;
using HRMAPI.DTOs.Report;
using HRMAPI.Services;

namespace HRMAPI.Controllers;

[Route("api/documents")]
public class DocumentController : BaseController
{
    private readonly IReportService _reportService;
    private readonly IUserService _userService;
    private readonly IWebHostEnvironment _env;

    public DocumentController(IReportService reportService, IUserService userService, IWebHostEnvironment env)
    {
        _reportService = reportService;
        _userService = userService;
        _env = env;
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<DocumentDto>>>> GetAll([FromQuery] string? employeeId = null, [FromQuery] string? category = null)
    {
        var result = await _reportService.GetDocumentsAsync(employeeId, category);
        return Ok(ApiResponse<List<DocumentDto>>.Ok(result));
    }

    [HttpGet("mine")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<DocumentDto>>>> GetMine()
    {
        var user = await _userService.GetByIdAsync(CurrentUserId);
        if (user?.EmployeeId == null)
            return BadRequest(ApiResponse<object>.Fail("User is not linked to an employee."));
        var result = await _reportService.GetDocumentsAsync(user.EmployeeId.Value.ToString(), null);
        return Ok(ApiResponse<List<DocumentDto>>.Ok(result));
    }

    [HttpPost("upload")]
    [Authorize]
    [DisableRequestSizeLimit]
    public async Task<ActionResult<ApiResponse<DocumentDto>>> Upload([FromForm] IFormFile file, [FromForm] Guid? employeeId, [FromForm] string? category)
    {
        if (file == null || file.Length == 0)
            return BadRequest(ApiResponse<object>.Fail("No file selected."));
        if (file.Length > 20 * 1024 * 1024)
            return BadRequest(ApiResponse<object>.Fail("File size must be under 20 MB."));

        var user = await _userService.GetByIdAsync(CurrentUserId);
        var isManager = CurrentUserRole == "ADMIN" || CurrentUserRole == "HR";
        var targetEmployeeId = employeeId ?? (isManager ? (Guid?)null : user?.EmployeeId);
        if (!isManager && targetEmployeeId == null)
            return BadRequest(ApiResponse<object>.Fail("User is not linked to an employee."));

        var uploadsDir = Path.Combine(_env.WebRootPath, "uploads", "documents");
        Directory.CreateDirectory(uploadsDir);
        var storedName = $"{Guid.NewGuid():N}{Path.GetExtension(file.FileName)}";
        var fullPath = Path.Combine(uploadsDir, storedName);
        await using (var stream = System.IO.File.Create(fullPath))
        {
            await file.CopyToAsync(stream);
        }

        var fileUrl = $"uploads/documents/{storedName}";
        var result = await _reportService.UploadDocumentAsync(
            CurrentUserId, targetEmployeeId, category ?? "OTHER", file.FileName, file.ContentType ?? "application/octet-stream", file.Length, fileUrl);
        return Ok(ApiResponse<DocumentDto>.Ok(result, "Document uploaded."));
    }

    [HttpGet("download/{id:guid}")]
    [Authorize]
    public async Task<IActionResult> Download(Guid id)
    {
        var doc = await _reportService.GetDocumentAsync(id);
        var relativePath = doc.FileUrl.Replace('/', Path.DirectorySeparatorChar);
        var fullPath = Path.Combine(_env.WebRootPath, relativePath);
        if (!System.IO.File.Exists(fullPath))
            return NotFound(ApiResponse<object>.Fail("File not found on server."));
        return PhysicalFile(fullPath, doc.Type ?? "application/octet-stream", doc.Name);
    }

    [HttpDelete("{id:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<object>>> Delete(Guid id)
    {
        var doc = await _reportService.GetDocumentAsync(id);
        var user = await _userService.GetByIdAsync(CurrentUserId);
        var isManager = CurrentUserRole == "ADMIN" || CurrentUserRole == "HR";
        var isOwner = user?.EmployeeId.HasValue == true && doc.EmployeeId == user.EmployeeId.Value;
        if (!isManager && !isOwner)
            return Forbid();

        var relativePath = doc.FileUrl.Replace('/', Path.DirectorySeparatorChar);
        var fullPath = Path.Combine(_env.WebRootPath, relativePath);
        if (System.IO.File.Exists(fullPath)) System.IO.File.Delete(fullPath);

        var success = await _reportService.DeleteDocumentAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "Document deleted."));
    }
}
