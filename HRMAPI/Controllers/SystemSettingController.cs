using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.DTOs.Common;
using HRMAPI.DTOs.Report;
using HRMAPI.Services;

namespace HRMAPI.Controllers;

[Route("api/settings")]
public class SystemSettingController : BaseController
{
    private readonly IReportService _reportService;

    public SystemSettingController(IReportService reportService)
    {
        _reportService = reportService;
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<SystemSettingDto>>>> GetAll([FromQuery] string? category = null)
    {
        var result = await _reportService.GetSettingsAsync(category);
        return Ok(ApiResponse<List<SystemSettingDto>>.Ok(result));
    }

    [HttpPut("{id:guid}")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<SystemSettingDto>>> Update(Guid id, [FromBody] UpdateSystemSettingDto dto)
    {
        var result = await _reportService.UpdateSettingAsync(id, dto, CurrentUserId);
        return Ok(ApiResponse<SystemSettingDto>.Ok(result, "Setting updated."));
    }
}
