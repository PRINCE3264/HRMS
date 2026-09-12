using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Models.DTOs.Report;
using HRMAPI.Services;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Controllers;

[Route("api/reports")]
public class ReportController : BaseController
{
    private readonly IReportService _reportService;

    public ReportController(IReportService reportService)
    {
        _reportService = reportService;
    }

    [HttpGet("dashboard-stats")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<DashboardStatsDto>>> GetDashboardStats()
    {
        var result = await _reportService.GetDashboardStatsAsync();
        return Ok(ApiResponse<DashboardStatsDto>.Ok(result));
    }

    [HttpGet("attendance-trend")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<ChartDataDto>>> GetAttendanceTrend([FromQuery] int days = 7)
    {
        var result = await _reportService.GetAttendanceTrendAsync(days);
        return Ok(ApiResponse<ChartDataDto>.Ok(result));
    }

    [HttpGet("department-distribution")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<ChartDataDto>>> GetDepartmentDistribution()
    {
        var result = await _reportService.GetDepartmentDistributionAsync();
        return Ok(ApiResponse<ChartDataDto>.Ok(result));
    }

    [HttpGet("payroll-trend")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<ChartDataDto>>> GetPayrollTrend([FromQuery] int months = 6)
    {
        var result = await _reportService.GetPayrollTrendAsync(months);
        return Ok(ApiResponse<ChartDataDto>.Ok(result));
    }

    [HttpGet("audit-logs")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<List<AuditLogDto>>>> GetAuditLogs([FromQuery] string? module = null)
    {
        var result = await _reportService.GetAuditLogsAsync(module);
        return Ok(ApiResponse<List<AuditLogDto>>.Ok(result));
    }

    [HttpGet("upcoming-birthdays")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<UpcomingBirthdayDto>>>> GetUpcomingBirthdays([FromQuery] int days = 7)
    {
        var result = await _reportService.GetUpcomingBirthdaysAsync(days);
        return Ok(ApiResponse<List<UpcomingBirthdayDto>>.Ok(result));
    }

    [HttpGet("admin-analytics")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<AdminAnalyticsDto>>> GetAdminAnalytics()
    {
        var result = await _reportService.GetAdminAnalyticsAsync();
        return Ok(ApiResponse<AdminAnalyticsDto>.Ok(result));
    }

    [HttpGet("hr-analytics")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<HrReportsDto>>> GetHrAnalytics()
    {
        var result = await _reportService.GetHrReportsAsync();
        return Ok(ApiResponse<HrReportsDto>.Ok(result));
    }
}
