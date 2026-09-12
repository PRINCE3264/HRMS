using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.Models.DTOs.Attendance;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Services;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Controllers;

[Route("api/attendance")]
public class AttendanceController : BaseController
{
    private readonly IAttendanceService _attendanceService;
    private readonly IUserService _userService;

    public AttendanceController(IAttendanceService attendanceService, IUserService userService)
    {
        _attendanceService = attendanceService;
        _userService = userService;
    }

    private async Task<Guid> GetCurrentEmployeeIdAsync()
    {
        var user = await _userService.GetByIdAsync(CurrentUserId);
        return user?.EmployeeId ?? Guid.Empty;
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<ApiResponse<PaginatedResponse<AttendanceDto>>>> GetAll([FromQuery] PaginationQuery query, [FromQuery] DateTime? date = null)
    {
        var result = await _attendanceService.GetPaginatedAsync(query, date);
        return Ok(ApiResponse<PaginatedResponse<AttendanceDto>>.Ok(result));
    }

    [HttpGet("date/{date}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<AttendanceDto>>>> GetByDate(DateTime date)
    {
        var result = await _attendanceService.GetByDateAsync(date);
        return Ok(ApiResponse<List<AttendanceDto>>.Ok(result));
    }

    [HttpGet("employee/{employeeId:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<AttendanceDto>>>> GetByEmployee(Guid employeeId, [FromQuery] DateTime? startDate, [FromQuery] DateTime? endDate)
    {
        var result = await _attendanceService.GetByEmployeeAsync(employeeId, startDate, endDate);
        return Ok(ApiResponse<List<AttendanceDto>>.Ok(result));
    }

    [HttpGet("today")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<AttendanceDto>>> GetToday()
    {
        var employeeId = await GetCurrentEmployeeIdAsync();
        var result = await _attendanceService.GetTodayAttendanceAsync(employeeId);
        return Ok(ApiResponse<AttendanceDto>.Ok(result));
    }

    [HttpPost("check-in")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<AttendanceDto>>> CheckIn([FromBody] CheckInOutDto dto)
    {
        var employeeId = await GetCurrentEmployeeIdAsync();
        var result = await _attendanceService.CheckInAsync(employeeId, dto);
        return Ok(ApiResponse<AttendanceDto>.Ok(result, "Checked in."));
    }

    [HttpPost("check-out")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<AttendanceDto>>> CheckOut([FromBody] CheckInOutDto dto)
    {
        var employeeId = await GetCurrentEmployeeIdAsync();
        var result = await _attendanceService.CheckOutAsync(employeeId, dto);
        return Ok(ApiResponse<AttendanceDto>.Ok(result, "Checked out."));
    }

    [HttpPost("break/start")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<BreakRecordDto>>> StartBreak([FromBody] StartBreakDto dto)
    {
        var employeeId = await GetCurrentEmployeeIdAsync();
        var result = await _attendanceService.StartBreakAsync(employeeId, dto);
        return Ok(ApiResponse<BreakRecordDto>.Ok(result, "Break started."));
    }

    [HttpPost("break/end")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<BreakRecordDto>>> EndBreak()
    {
        var employeeId = await GetCurrentEmployeeIdAsync();
        var result = await _attendanceService.EndBreakAsync(employeeId);
        return Ok(ApiResponse<BreakRecordDto>.Ok(result, "Break ended."));
    }

    [HttpGet("summary/{employeeId:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<AttendanceSummaryDto>>> GetSummary(Guid employeeId, [FromQuery] DateTime? startDate, [FromQuery] DateTime? endDate)
    {
        var result = await _attendanceService.GetSummaryAsync(employeeId, startDate, endDate);
        return Ok(ApiResponse<AttendanceSummaryDto>.Ok(result));
    }

    [HttpGet("summary")]
    [Authorize(Roles = "ADMIN,HR,TL")]
    public async Task<ActionResult<ApiResponse<List<AttendanceSummaryDto>>>> GetTeamSummary([FromQuery] DateTime? startDate, [FromQuery] DateTime? endDate)
    {
        var result = await _attendanceService.GetTeamSummaryAsync(startDate, endDate);
        return Ok(ApiResponse<List<AttendanceSummaryDto>>.Ok(result));
    }

    [HttpGet("late-arrivals")]
    [Authorize(Roles = "ADMIN,HR,TL")]
    public async Task<ActionResult<ApiResponse<List<AttendanceDto>>>> GetLateArrivals([FromQuery] DateTime? startDate, [FromQuery] DateTime? endDate)
    {
        var result = await _attendanceService.GetLateArrivalsAsync(startDate, endDate);
        return Ok(ApiResponse<List<AttendanceDto>>.Ok(result));
    }

    [HttpGet("corrections")]
    [Authorize(Roles = "ADMIN,HR,TL")]
    public async Task<ActionResult<ApiResponse<List<AttendanceCorrectionDto>>>> GetCorrections([FromQuery] PaginationQuery query, [FromQuery] string? status = null, [FromQuery] Guid? employeeId = null)
    {
        var result = await _attendanceService.GetCorrectionsAsync(query, status, employeeId);
        return Ok(ApiResponse<List<AttendanceCorrectionDto>>.Ok(result));
    }

    [HttpPut("corrections/{id:guid}")]
    [Authorize(Roles = "ADMIN,HR,TL")]
    public async Task<ActionResult<ApiResponse<AttendanceCorrectionDto>>> ReviewCorrection(Guid id, [FromBody] UpdateAttendanceCorrectionDto dto)
    {
        var result = await _attendanceService.ReviewCorrectionAsync(id, dto, CurrentUserId);
        return Ok(ApiResponse<AttendanceCorrectionDto>.Ok(result, "Correction reviewed."));
    }

    [HttpPost("manual")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<AttendanceCorrectionDto>>> ManualCorrection([FromBody] CreateAttendanceCorrectionDto dto)
    {
        var result = await _attendanceService.CreateCorrectionAsync(dto, CurrentUserId);
        return Ok(ApiResponse<AttendanceCorrectionDto>.Ok(result, "Manual correction recorded for approval."));
    }

    [HttpGet("rules")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<List<AttendanceRuleDto>>>> GetRules([FromQuery] bool? activeOnly = null)
    {
        var result = await _attendanceService.GetRulesAsync(activeOnly);
        return Ok(ApiResponse<List<AttendanceRuleDto>>.Ok(result));
    }

    [HttpPost("rules")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<AttendanceRuleDto>>> CreateRule([FromBody] UpsertAttendanceRuleDto dto)
    {
        var result = await _attendanceService.UpsertRuleAsync(dto);
        return Ok(ApiResponse<AttendanceRuleDto>.Ok(result, "Attendance rule created."));
    }

    [HttpDelete("rules/{id:guid}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<object>>> DeleteRule(Guid id)
    {
        var success = await _attendanceService.DeleteRuleAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "Attendance rule deleted."));
    }
}
