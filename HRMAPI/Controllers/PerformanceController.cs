using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Models.DTOs.Performance;
using HRMAPI.Services;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Controllers;

[Route("api/performance")]
public class PerformanceController : BaseController
{
    private readonly IPerformanceService _performanceService;
    private readonly IUserService _userService;

    public PerformanceController(IPerformanceService performanceService, IUserService userService)
    {
        _performanceService = performanceService;
        _userService = userService;
    }

    [HttpGet("reviews")]
    [Authorize(Roles = "ADMIN,HR,TL")]
    public async Task<ActionResult<ApiResponse<List<PerformanceReviewDto>>>> GetReviews([FromQuery] string? employeeId = null)
    {
        var result = await _performanceService.GetReviewsAsync(employeeId);
        return Ok(ApiResponse<List<PerformanceReviewDto>>.Ok(result));
    }

    [HttpGet("reviews/employee/{employeeId:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<PerformanceReviewDto>>>> GetReviewsByEmployee(Guid employeeId)
    {
        var result = await _performanceService.GetReviewsByEmployeeAsync(employeeId);
        return Ok(ApiResponse<List<PerformanceReviewDto>>.Ok(result));
    }

    [HttpGet("reviews/my")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<PerformanceReviewDto>>>> GetMyReviews()
    {
        var user = await _userService.GetByIdAsync(CurrentUserId);
        if (user?.EmployeeId == null)
            return BadRequest(ApiResponse<object>.Fail("User is not linked to an employee."));
        var result = await _performanceService.GetReviewsByEmployeeAsync(user.EmployeeId.Value);
        return Ok(ApiResponse<List<PerformanceReviewDto>>.Ok(result));
    }

    [HttpPost("reviews")]
    [Authorize(Roles = "ADMIN,HR,TL")]
    public async Task<ActionResult<ApiResponse<PerformanceReviewDto>>> CreateReview([FromBody] CreatePerformanceReviewDto dto)
    {
        var result = await _performanceService.CreateReviewAsync(dto, CurrentUserId);
        return Ok(ApiResponse<PerformanceReviewDto>.Ok(result, "Review created."));
    }

    [HttpPut("reviews/{id:guid}")]
    [Authorize(Roles = "ADMIN,HR,TL")]
    public async Task<ActionResult<ApiResponse<PerformanceReviewDto>>> UpdateReview(Guid id, [FromBody] CreatePerformanceReviewDto dto)
    {
        var result = await _performanceService.UpdateReviewAsync(id, dto);
        return Ok(ApiResponse<PerformanceReviewDto>.Ok(result, "Review updated."));
    }

    [HttpDelete("reviews/{id:guid}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<object>>> DeleteReview(Guid id)
    {
        var success = await _performanceService.DeleteReviewAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "Review deleted."));
    }

    [HttpGet("kpis")]
    [Authorize(Roles = "ADMIN,HR,TL")]
    public async Task<ActionResult<ApiResponse<List<KpiDto>>>> GetKpis([FromQuery] string? employeeId = null)
    {
        var result = await _performanceService.GetKpisAsync(employeeId);
        return Ok(ApiResponse<List<KpiDto>>.Ok(result));
    }

    [HttpGet("kpis/employee/{employeeId:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<KpiDto>>>> GetKpisByEmployee(Guid employeeId)
    {
        var result = await _performanceService.GetKpisByEmployeeAsync(employeeId);
        return Ok(ApiResponse<List<KpiDto>>.Ok(result));
    }

    [HttpGet("kpis/my")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<KpiDto>>>> GetMyKpis()
    {
        var user = await _userService.GetByIdAsync(CurrentUserId);
        if (user?.EmployeeId == null)
            return BadRequest(ApiResponse<object>.Fail("User is not linked to an employee."));
        var result = await _performanceService.GetKpisByEmployeeAsync(user.EmployeeId.Value);
        return Ok(ApiResponse<List<KpiDto>>.Ok(result));
    }

    [HttpPost("kpis")]
    [Authorize(Roles = "ADMIN,HR,TL")]
    public async Task<ActionResult<ApiResponse<KpiDto>>> CreateKpi([FromBody] CreateKpiDto dto)
    {
        var result = await _performanceService.CreateKpiAsync(dto);
        return Ok(ApiResponse<KpiDto>.Ok(result, "KPI created."));
    }

    [HttpPut("kpis/{id:guid}")]
    [Authorize(Roles = "ADMIN,HR,TL")]
    public async Task<ActionResult<ApiResponse<KpiDto>>> UpdateKpi(Guid id, [FromBody] CreateKpiDto dto)
    {
        var result = await _performanceService.UpdateKpiAsync(id, dto);
        return Ok(ApiResponse<KpiDto>.Ok(result, "KPI updated."));
    }

    [HttpDelete("kpis/{id:guid}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<object>>> DeleteKpi(Guid id)
    {
        var success = await _performanceService.DeleteKpiAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "KPI deleted."));
    }

    [HttpGet("feedback")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<List<PerformanceFeedbackDto>>>> GetFeedbacks([FromQuery] Guid? employeeId = null)
    {
        var result = await _performanceService.GetFeedbacksAsync(employeeId);
        return Ok(ApiResponse<List<PerformanceFeedbackDto>>.Ok(result));
    }

    [HttpGet("feedback/about-me")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<PerformanceFeedbackDto>>>> GetMyFeedbacks()
    {
        var user = await _userService.GetByIdAsync(CurrentUserId);
        if (user?.EmployeeId == null)
            return BadRequest(ApiResponse<object>.Fail("User is not linked to an employee."));
        var result = await _performanceService.GetFeedbacksAboutMeAsync(user.EmployeeId.Value);
        return Ok(ApiResponse<List<PerformanceFeedbackDto>>.Ok(result));
    }

    [HttpGet("feedback/by-me")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<PerformanceFeedbackDto>>>> GetFeedbacksByMe()
    {
        var user = await _userService.GetByIdAsync(CurrentUserId);
        if (user?.EmployeeId == null)
            return BadRequest(ApiResponse<object>.Fail("User is not linked to an employee."));
        var result = await _performanceService.GetFeedbacksByMeAsync(user.EmployeeId.Value);
        return Ok(ApiResponse<List<PerformanceFeedbackDto>>.Ok(result));
    }

    [HttpPost("feedback")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<PerformanceFeedbackDto>>> CreateFeedback([FromBody] CreateFeedbackDto dto)
    {
        var user = await _userService.GetByIdAsync(CurrentUserId);
        if (user?.EmployeeId == null)
            return BadRequest(ApiResponse<object>.Fail("User is not linked to an employee."));
        var result = await _performanceService.CreateFeedbackAsync(dto, user.EmployeeId.Value);
        return Ok(ApiResponse<PerformanceFeedbackDto>.Ok(result, "Feedback submitted."));
    }

    [HttpDelete("feedback/{id:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<object>>> DeleteFeedback(Guid id)
    {
        var success = await _performanceService.DeleteFeedbackAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "Feedback deleted."));
    }
}
