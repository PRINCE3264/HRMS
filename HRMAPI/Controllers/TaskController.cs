using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.DTOs.Common;
using HRMAPI.DTOs.Performance;
using HRMAPI.Services;

namespace HRMAPI.Controllers;

[Route("api/tasks")]
public class TaskController : BaseController
{
    private readonly IPerformanceService _performanceService;
    private readonly IUserService _userService;

    public TaskController(IPerformanceService performanceService, IUserService userService)
    {
        _performanceService = performanceService;
        _userService = userService;
    }

    private async Task<Guid> GetCurrentEmployeeIdAsync()
    {
        var user = await _userService.GetByIdAsync(CurrentUserId);
        return user?.EmployeeId ?? Guid.Empty;
    }

    [HttpGet("my")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<TaskDto>>>> GetMyTasks()
    {
        var employeeId = await GetCurrentEmployeeIdAsync();
        var result = await _performanceService.GetTasksForEmployeeAsync(employeeId);
        return Ok(ApiResponse<List<TaskDto>>.Ok(result));
    }

    [HttpGet("assigned-by")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<TaskDto>>>> GetAssignedByMe()
    {
        var employeeId = await GetCurrentEmployeeIdAsync();
        var result = await _performanceService.GetTasksAssignedByAsync(employeeId);
        return Ok(ApiResponse<List<TaskDto>>.Ok(result));
    }

    [HttpGet("employee/{employeeId:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<TaskDto>>>> GetByEmployee(Guid employeeId)
    {
        var result = await _performanceService.GetTasksForEmployeeAsync(employeeId);
        return Ok(ApiResponse<List<TaskDto>>.Ok(result));
    }

    [HttpPost]
    [Authorize]
    public async Task<ActionResult<ApiResponse<TaskDto>>> Create([FromBody] CreateTaskDto dto)
    {
        var employeeId = await GetCurrentEmployeeIdAsync();
        var result = await _performanceService.CreateTaskAsync(dto, employeeId);
        return Ok(ApiResponse<TaskDto>.Ok(result, "Task created."));
    }

    [HttpPut("{id:guid}/status")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<TaskDto>>> UpdateStatus(Guid id, [FromBody] string status)
    {
        var result = await _performanceService.UpdateTaskStatusAsync(id, status);
        return Ok(ApiResponse<TaskDto>.Ok(result, "Task status updated."));
    }

    [HttpPut("{id:guid}/review")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<TaskDto>>> Review(Guid id, [FromBody] ReviewTaskDto dto)
    {
        var result = await _performanceService.ReviewTaskAsync(id, dto);
        return Ok(ApiResponse<TaskDto>.Ok(result, "Task reviewed."));
    }

    [HttpDelete("{id:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<object>>> Delete(Guid id)
    {
        var success = await _performanceService.DeleteTaskAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "Task deleted."));
    }
}
