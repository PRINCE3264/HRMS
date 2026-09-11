using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.DTOs.Common;
using HRMAPI.DTOs.Report;
using HRMAPI.DTOs.System;
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

    [HttpGet("company-profile")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<CompanyProfileDto>>> GetCompanyProfile()
    {
        var result = await _reportService.GetCompanyProfileAsync();
        return Ok(ApiResponse<CompanyProfileDto>.Ok(result));
    }

    [HttpPut("company-profile")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<CompanyProfileDto>>> UpsertCompanyProfile([FromBody] UpsertCompanyProfileDto dto)
    {
        var result = await _reportService.UpsertCompanyProfileAsync(dto);
        return Ok(ApiResponse<CompanyProfileDto>.Ok(result, "Company profile saved."));
    }

    [HttpGet("notification-preferences")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<List<NotificationPreferenceDto>>>> GetNotificationPreferences()
    {
        var result = await _reportService.GetNotificationPreferencesAsync();
        return Ok(ApiResponse<List<NotificationPreferenceDto>>.Ok(result));
    }

    [HttpPut("notification-preferences/{id:guid}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<NotificationPreferenceDto>>> UpdateNotificationPreference(Guid id, [FromBody] UpdateNotificationPreferenceDto dto)
    {
        var result = await _reportService.UpdateNotificationPreferenceAsync(id, dto, CurrentUserId);
        return Ok(ApiResponse<NotificationPreferenceDto>.Ok(result, "Notification preference updated."));
    }

    [HttpGet("email-sms-config")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<EmailSmsConfigDto>>> GetEmailSmsConfig()
    {
        var result = await _reportService.GetEmailSmsConfigAsync();
        return Ok(ApiResponse<EmailSmsConfigDto>.Ok(result));
    }

    [HttpPut("email-sms-config")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<EmailSmsConfigDto>>> SaveEmailSmsConfig([FromBody] SaveEmailSmsConfigDto dto)
    {
        var result = await _reportService.SaveEmailSmsConfigAsync(dto, CurrentUserId);
        return Ok(ApiResponse<EmailSmsConfigDto>.Ok(result, "Email/SMS configuration saved."));
    }
}