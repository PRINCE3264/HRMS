using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Models.DTOs.Recruitment;
using HRMAPI.Services;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Controllers;

[Route("api/recruitment")]
public class RecruitmentController : BaseController
{
    private readonly IRecruitmentService _recruitmentService;

    public RecruitmentController(IRecruitmentService recruitmentService)
    {
        _recruitmentService = recruitmentService;
    }

    [HttpGet("jobs")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<JobOpeningDto>>>> GetJobs([FromQuery] string? status = null)
    {
        var result = await _recruitmentService.GetJobOpeningsAsync(status);
        return Ok(ApiResponse<List<JobOpeningDto>>.Ok(result));
    }

    [HttpGet("jobs/{id:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<JobOpeningDto>>> GetJob(Guid id)
    {
        var result = await _recruitmentService.GetJobOpeningAsync(id);
        return Ok(ApiResponse<JobOpeningDto>.Ok(result));
    }

    [HttpPost("jobs")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<JobOpeningDto>>> CreateJob([FromBody] CreateJobOpeningDto dto)
    {
        var result = await _recruitmentService.CreateJobOpeningAsync(dto);
        return Ok(ApiResponse<JobOpeningDto>.Ok(result, "Job opening created."));
    }

    [HttpPut("jobs/{id:guid}")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<JobOpeningDto>>> UpdateJob(Guid id, [FromBody] CreateJobOpeningDto dto)
    {
        var result = await _recruitmentService.UpdateJobOpeningAsync(id, dto);
        return Ok(ApiResponse<JobOpeningDto>.Ok(result, "Job opening updated."));
    }

    [HttpDelete("jobs/{id:guid}")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<object>>> DeleteJob(Guid id)
    {
        var success = await _recruitmentService.DeleteJobOpeningAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "Job opening deleted."));
    }

    [HttpGet("candidates")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<CandidateDto>>>> GetCandidates([FromQuery] string? jobId = null, [FromQuery] string? status = null)
    {
        var result = await _recruitmentService.GetCandidatesAsync(jobId, status);
        return Ok(ApiResponse<List<CandidateDto>>.Ok(result));
    }

    [HttpPost("candidates")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<CandidateDto>>> CreateCandidate([FromBody] CreateCandidateDto dto)
    {
        var result = await _recruitmentService.CreateCandidateAsync(dto);
        return Ok(ApiResponse<CandidateDto>.Ok(result, "Candidate added."));
    }

    [HttpPut("candidates/{id:guid}")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<CandidateDto>>> UpdateCandidate(Guid id, [FromBody] UpdateCandidateStatusDto dto)
    {
        var result = await _recruitmentService.UpdateCandidateStatusAsync(id, dto);
        return Ok(ApiResponse<CandidateDto>.Ok(result, "Candidate updated."));
    }

    [HttpDelete("candidates/{id:guid}")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<object>>> DeleteCandidate(Guid id)
    {
        var success = await _recruitmentService.DeleteCandidateAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "Candidate deleted."));
    }

    [HttpGet("interviews")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<InterviewDto>>>> GetInterviews(
        [FromQuery] Guid? candidateId = null, [FromQuery] Guid? jobId = null, [FromQuery] Guid? interviewerId = null)
    {
        var result = await _recruitmentService.GetInterviewsAsync(candidateId, jobId, interviewerId);
        return Ok(ApiResponse<List<InterviewDto>>.Ok(result));
    }

    [HttpGet("interviews/{id:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<InterviewDto>>> GetInterview(Guid id)
    {
        var result = await _recruitmentService.GetInterviewAsync(id);
        return Ok(ApiResponse<InterviewDto>.Ok(result));
    }

    [HttpPost("interviews")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<InterviewDto>>> CreateInterview([FromBody] CreateInterviewDto dto)
    {
        var result = await _recruitmentService.CreateInterviewAsync(dto);
        return Ok(ApiResponse<InterviewDto>.Ok(result, "Interview scheduled."));
    }

    [HttpPut("interviews/{id:guid}")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<InterviewDto>>> UpdateInterview(Guid id, [FromBody] UpdateInterviewDto dto)
    {
        var result = await _recruitmentService.UpdateInterviewAsync(id, dto);
        return Ok(ApiResponse<InterviewDto>.Ok(result, "Interview updated."));
    }

    [HttpPut("interviews/{id:guid}/status")]
    [Authorize(Roles = "ADMIN,HR,TL")]
    public async Task<ActionResult<ApiResponse<InterviewDto>>> UpdateInterviewStatus(Guid id, [FromBody] UpdateInterviewStatusDto dto)
    {
        var result = await _recruitmentService.UpdateInterviewStatusAsync(id, dto);
        return Ok(ApiResponse<InterviewDto>.Ok(result, "Interview status updated."));
    }

    [HttpDelete("interviews/{id:guid}")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<object>>> DeleteInterview(Guid id)
    {
        var success = await _recruitmentService.DeleteInterviewAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "Interview deleted."));
    }
}
