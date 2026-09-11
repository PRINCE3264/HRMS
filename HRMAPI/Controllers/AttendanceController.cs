using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.DTOs.Attendance;
using HRMAPI.DTOs.Common;
using HRMAPI.Services;

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
}
