using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Models.DTOs.Training;
using HRMAPI.Services;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Controllers;

[Route("api/trainings")]
public class TrainingController : BaseController
{
    private readonly ITrainingService _trainingService;
    private readonly IUserService _userService;

    public TrainingController(ITrainingService trainingService, IUserService userService)
    {
        _trainingService = trainingService;
        _userService = userService;
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<TrainingDto>>>> GetAll()
    {
        var result = await _trainingService.GetTrainingsAsync();
        return Ok(ApiResponse<List<TrainingDto>>.Ok(result));
    }

    [HttpPost]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<TrainingDto>>> Create([FromBody] CreateTrainingDto dto)
    {
        var result = await _trainingService.CreateTrainingAsync(dto);
        return Ok(ApiResponse<TrainingDto>.Ok(result, "Training created."));
    }

    [HttpPut("{id:guid}")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<TrainingDto>>> Update(Guid id, [FromBody] CreateTrainingDto dto)
    {
        var result = await _trainingService.UpdateTrainingAsync(id, dto);
        return Ok(ApiResponse<TrainingDto>.Ok(result, "Training updated."));
    }

    [HttpDelete("{id:guid}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<object>>> Delete(Guid id)
    {
        var success = await _trainingService.DeleteTrainingAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "Training deleted."));
    }

    [HttpPost("{id:guid}/enroll")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<TrainingDto>>> Enroll(Guid id)
    {
        var user = await _userService.GetByIdAsync(CurrentUserId);
        if (user?.EmployeeId == null)
            return BadRequest(ApiResponse<object>.Fail("User is not linked to an employee."));
        var result = await _trainingService.EnrollAsync(id, user.EmployeeId.Value);
        return Ok(ApiResponse<TrainingDto>.Ok(result, "Enrolled."));
    }
}
