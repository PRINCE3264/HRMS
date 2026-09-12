using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Models.DTOs.Report;
using HRMAPI.Services;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Controllers;

[Route("api/dashboard")]
public class DashboardController : BaseController
{
    private readonly IReportService _reportService;

    public DashboardController(IReportService reportService)
    {
        _reportService = reportService;
    }

    [HttpGet("stats")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<DashboardStatsDto>>> GetStats()
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

    [HttpGet("upcoming-birthdays")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<UpcomingBirthdayDto>>>> GetUpcomingBirthdays([FromQuery] int days = 7)
    {
        var result = await _reportService.GetUpcomingBirthdaysAsync(days);
        return Ok(ApiResponse<List<UpcomingBirthdayDto>>.Ok(result));
    }
}
