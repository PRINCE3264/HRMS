using HRMAPI.Interfaces.Services;
using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Recruitment;
using HRMAPI.Enums;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;

namespace HRMAPI.Interfaces.Services;

public interface IRecruitmentService
{
    Task<List<JobOpeningDto>> GetJobOpeningsAsync(string? status = null);
    Task<JobOpeningDto> GetJobOpeningAsync(Guid id);
    Task<JobOpeningDto> CreateJobOpeningAsync(CreateJobOpeningDto dto);
    Task<JobOpeningDto> UpdateJobOpeningAsync(Guid id, CreateJobOpeningDto dto);
    Task<bool> DeleteJobOpeningAsync(Guid id);

    Task<List<CandidateDto>> GetCandidatesAsync(string? jobId = null, string? status = null);
    Task<CandidateDto> CreateCandidateAsync(CreateCandidateDto dto);
    Task<CandidateDto> UpdateCandidateStatusAsync(Guid id, UpdateCandidateStatusDto dto);
    Task<bool> DeleteCandidateAsync(Guid id);

    Task<List<InterviewDto>> GetInterviewsAsync(Guid? candidateId = null, Guid? jobId = null, Guid? interviewerId = null);
    Task<InterviewDto> GetInterviewAsync(Guid id);
    Task<InterviewDto> CreateInterviewAsync(CreateInterviewDto dto);
    Task<InterviewDto> UpdateInterviewAsync(Guid id, UpdateInterviewDto dto);
    Task<InterviewDto> UpdateInterviewStatusAsync(Guid id, UpdateInterviewStatusDto dto);
    Task<bool> DeleteInterviewAsync(Guid id);
}
