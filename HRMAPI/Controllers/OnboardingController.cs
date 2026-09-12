using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Models.DTOs.Training;
using HRMAPI.Services;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Controllers;

[Route("api/onboarding")]
public class OnboardingController : BaseController
{
    private readonly ITrainingService _trainingService;

    public OnboardingController(ITrainingService trainingService)
    {
        _trainingService = trainingService;
    }

    [HttpGet]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<List<OnboardingDto>>>> GetAll()
    {
        var result = await _trainingService.GetOnboardingsAsync();
        return Ok(ApiResponse<List<OnboardingDto>>.Ok(result));
    }

    [HttpGet("{id:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<OnboardingDto>>> Get(Guid id)
    {
        var result = await _trainingService.GetOnboardingAsync(id);
        return Ok(ApiResponse<OnboardingDto>.Ok(result));
    }

    [HttpPost]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<OnboardingDto>>> Create([FromBody] CreateOnboardingDto dto)
    {
        var result = await _trainingService.CreateOnboardingAsync(dto);
        return Ok(ApiResponse<OnboardingDto>.Ok(result, "Onboarding created."));
    }

    [HttpPut("tasks/{taskId:guid}")]
    [Authorize(Roles = "ADMIN,HR,TL")]
    public async Task<ActionResult<ApiResponse<OnboardingDto>>> UpdateTask(Guid taskId, [FromBody] bool isCompleted)
    {
        var result = await _trainingService.UpdateTaskStatusAsync(taskId, isCompleted);
        return Ok(ApiResponse<OnboardingDto>.Ok(result, "Task updated."));
    }
}
