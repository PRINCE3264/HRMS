using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.DTOs.Common;
using HRMAPI.DTOs.Work;
using HRMAPI.Services;

namespace HRMAPI.Controllers;

[Route("api/work-updates")]
public class WorkUpdateController : BaseController
{
    private readonly IWorkUpdateService _workUpdateService;
    private readonly Services.IUserService _userService;

    public WorkUpdateController(IWorkUpdateService workUpdateService, Services.IUserService userService)
    {
        _workUpdateService = workUpdateService;
        _userService = userService;
    }

    [HttpGet]
    [Authorize(Roles = "ADMIN,HR,TL")]
    public async Task<ActionResult<ApiResponse<List<DailyWorkUpdateDto>>>> GetByDate([FromQuery] DateTime? date = null)
    {
        var result = await _workUpdateService.GetUpdatesByDateAsync(date?.Date ?? DateTime.UtcNow.Date);
        return Ok(ApiResponse<List<DailyWorkUpdateDto>>.Ok(result));
    }

    [HttpGet("my")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<DailyWorkUpdateDto>>>> GetMine()
    {
        var user = await _userService.GetByIdAsync(CurrentUserId);
        if (user?.EmployeeId == null)
            return BadRequest(ApiResponse<object>.Fail("User is not linked to an employee."));
        var result = await _workUpdateService.GetMyUpdatesAsync(user.EmployeeId.Value);
        return Ok(ApiResponse<List<DailyWorkUpdateDto>>.Ok(result));
    }

    [HttpGet("employee/{employeeId:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<DailyWorkUpdateDto>>>> GetByEmployee(Guid employeeId)
    {
        var result = await _workUpdateService.GetUpdatesByEmployeeAsync(employeeId);
        return Ok(ApiResponse<List<DailyWorkUpdateDto>>.Ok(result));
    }

    [HttpPost("submit")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<DailyWorkUpdateDto>>> Submit([FromBody] CreateDailyWorkUpdateDto dto)
    {
        var user = await _userService.GetByIdAsync(CurrentUserId);
        if (user?.EmployeeId == null)
            return BadRequest(ApiResponse<object>.Fail("User is not linked to an employee."));
        var result = await _workUpdateService.SubmitAsync(user.EmployeeId.Value, dto);
        return Ok(ApiResponse<DailyWorkUpdateDto>.Ok(result, "Daily work update submitted."));
    }

    [HttpPut("{id:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<DailyWorkUpdateDto>>> Update(Guid id, [FromBody] UpdateDailyWorkUpdateDto dto)
    {
        var user = await _userService.GetByIdAsync(CurrentUserId);
        if (user?.EmployeeId == null)
            return BadRequest(ApiResponse<object>.Fail("User is not linked to an employee."));
        var result = await _workUpdateService.UpdateAsync(id, user.EmployeeId.Value, dto);
        return Ok(ApiResponse<DailyWorkUpdateDto>.Ok(result, "Work update updated."));
    }

    [HttpDelete("{id:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<object>>> Delete(Guid id)
    {
        Guid? employeeId = null;
        if (CurrentUserRole != "ADMIN" && CurrentUserRole != "HR" && CurrentUserRole != "TL")
        {
            var user = await _userService.GetByIdAsync(CurrentUserId);
            employeeId = user?.EmployeeId;
        }
        var success = await _workUpdateService.DeleteAsync(id, employeeId);
        return Ok(ApiResponse<object>.Ok(new { success }, "Work update deleted."));
    }
}
