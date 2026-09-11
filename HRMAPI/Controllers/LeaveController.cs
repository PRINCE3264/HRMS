using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.DTOs.Common;
using HRMAPI.DTOs.Leave;
using HRMAPI.Services;

namespace HRMAPI.Controllers;

[Route("api/leave")]
public class LeaveController : BaseController
{
    private readonly ILeaveService _leaveService;
    private readonly IUserService _userService;

    public LeaveController(ILeaveService leaveService, IUserService userService)
    {
        _leaveService = leaveService;
        _userService = userService;
    }

    private async Task<Guid> GetCurrentEmployeeIdAsync()
    {
        var user = await _userService.GetByIdAsync(CurrentUserId);
        return user?.EmployeeId ?? Guid.Empty;
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<ApiResponse<PaginatedResponse<LeaveRequestDto>>>> GetAll([FromQuery] PaginationQuery query, [FromQuery] string? status = null)
    {
        var result = await _leaveService.GetRequestsAsync(query, status);
        return Ok(ApiResponse<PaginatedResponse<LeaveRequestDto>>.Ok(result));
    }

    [HttpGet("pending")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<LeaveRequestDto>>>> GetPending()
    {
        var result = await _leaveService.GetPendingAsync();
        return Ok(ApiResponse<List<LeaveRequestDto>>.Ok(result));
    }

    [HttpGet("my")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<LeaveRequestDto>>>> GetMyLeave()
    {
        var employeeId = await GetCurrentEmployeeIdAsync();
        var result = await _leaveService.GetByEmployeeAsync(employeeId);
        return Ok(ApiResponse<List<LeaveRequestDto>>.Ok(result));
    }

    [HttpGet("employee/{employeeId:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<LeaveRequestDto>>>> GetByEmployee(Guid employeeId)
    {
        var result = await _leaveService.GetByEmployeeAsync(employeeId);
        return Ok(ApiResponse<List<LeaveRequestDto>>.Ok(result));
    }

    [HttpPost("apply")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<LeaveRequestDto>>> Apply([FromBody] CreateLeaveRequestDto dto)
    {
        var employeeId = await GetCurrentEmployeeIdAsync();
        var result = await _leaveService.ApplyAsync(employeeId, dto);
        return Ok(ApiResponse<LeaveRequestDto>.Ok(result, "Leave applied."));
    }

    [HttpPost("{id:guid}/approve-or-reject")]
    [Authorize(Roles = "ADMIN,HR,TL")]
    public async Task<ActionResult<ApiResponse<LeaveRequestDto>>> ApproveOrReject(Guid id, [FromBody] ApproveLeaveDto dto)
    {
        var result = await _leaveService.ApproveOrRejectAsync(id, dto, CurrentUserId);
        return Ok(ApiResponse<LeaveRequestDto>.Ok(result, "Leave status updated."));
    }

    [HttpPost("{id:guid}/cancel")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<object>>> Cancel(Guid id)
    {
        var success = await _leaveService.CancelAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "Leave cancelled."));
    }

    [HttpGet("balances")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<LeaveBalanceDto>>>> GetBalances()
    {
        var employeeId = await GetCurrentEmployeeIdAsync();
        var result = await _leaveService.GetBalancesAsync(employeeId);
        return Ok(ApiResponse<List<LeaveBalanceDto>>.Ok(result));
    }

    [HttpGet("balances/employee/{employeeId:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<LeaveBalanceDto>>>> GetBalancesByEmployee(Guid employeeId)
    {
        var result = await _leaveService.GetBalancesAsync(employeeId);
        return Ok(ApiResponse<List<LeaveBalanceDto>>.Ok(result));
    }
}
