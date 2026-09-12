using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Models.DTOs.Report;
using HRMAPI.Services;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Controllers;

[Route("api/notifications")]
public class NotificationController : BaseController
{
    private readonly IReportService _reportService;

    public NotificationController(IReportService reportService)
    {
        _reportService = reportService;
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<NotificationDto>>>> GetAll([FromQuery] bool? isRead = null)
    {
        var result = await _reportService.GetNotificationsAsync(CurrentUserId, isRead);
        return Ok(ApiResponse<List<NotificationDto>>.Ok(result));
    }

    [HttpGet("unread-count")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<int>>> GetUnreadCount()
    {
        var count = await _reportService.GetUnreadNotificationsAsync(CurrentUserId);
        return Ok(ApiResponse<int>.Ok(count));
    }

    [HttpPut("{id:guid}/read")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<object>>> MarkRead(Guid id)
    {
        var success = await _reportService.MarkNotificationReadAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "Notification marked as read."));
    }

    [HttpPut("read-all")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<object>>> MarkAllRead()
    {
        var success = await _reportService.MarkAllNotificationsReadAsync(CurrentUserId);
        return Ok(ApiResponse<object>.Ok(new { success }, "All notifications marked as read."));
    }

    [HttpDelete("{id:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<object>>> Delete(Guid id)
    {
        var success = await _reportService.DeleteNotificationAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "Notification deleted."));
    }
}
