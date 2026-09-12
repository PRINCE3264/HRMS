using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Models.DTOs.Report;
using HRMAPI.Services;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Controllers;

[Route("api/announcements")]
public class AnnouncementController : BaseController
{
    private readonly IReportService _reportService;

    public AnnouncementController(IReportService reportService)
    {
        _reportService = reportService;
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<AnnouncementDto>>>> GetAll([FromQuery] string? role = null)
    {
        var result = await _reportService.GetAnnouncementsAsync(role);
        return Ok(ApiResponse<List<AnnouncementDto>>.Ok(result));
    }

    [HttpGet("{id:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<AnnouncementDto>>> Get(Guid id)
    {
        var result = await _reportService.GetAnnouncementAsync(id);
        return Ok(ApiResponse<AnnouncementDto>.Ok(result));
    }

    [HttpPost]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<AnnouncementDto>>> Create([FromBody] CreateAnnouncementDto dto)
    {
        var result = await _reportService.CreateAnnouncementAsync(dto, CurrentUserId);
        return Ok(ApiResponse<AnnouncementDto>.Ok(result, "Announcement published."));
    }

    [HttpPut("{id:guid}")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<AnnouncementDto>>> Update(Guid id, [FromBody] CreateAnnouncementDto dto)
    {
        var result = await _reportService.UpdateAnnouncementAsync(id, dto);
        return Ok(ApiResponse<AnnouncementDto>.Ok(result, "Announcement updated."));
    }

    [HttpDelete("{id:guid}")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<object>>> Delete(Guid id)
    {
        var success = await _reportService.DeleteAnnouncementAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "Announcement deleted."));
    }
}
