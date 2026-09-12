using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Recruitment;
using HRMAPI.Enums;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Services;



public class RecruitmentService : IRecruitmentService
{
    private readonly IJobOpeningRepository _jobOpeningRepository;
    private readonly ICandidateRepository _candidateRepository;
    private readonly IInterviewRepository _interviewRepository;
    private readonly ApplicationDbContext _context;

    public RecruitmentService(IJobOpeningRepository jobOpeningRepository, ICandidateRepository candidateRepository, IInterviewRepository interviewRepository, ApplicationDbContext context)
    {
        _jobOpeningRepository = jobOpeningRepository;
        _candidateRepository = candidateRepository;
        _interviewRepository = interviewRepository;
        _context = context;
    }

    public async Task<List<JobOpeningDto>> GetJobOpeningsAsync(string? status = null)
    {
        var query = _context.JobOpenings
            .Include(j => j.Department)
            .Include(j => j.Designation)
            .Include(j => j.Branch)
            .AsQueryable();

        if (!string.IsNullOrWhiteSpace(status))
        {
            var parsed = Enum.TryParse<JobStatus>(status, true, out var s) ? s : (JobStatus?)null;
            if (parsed.HasValue) query = query.Where(j => j.Status == parsed.Value);
        }

        var jobs = await query.OrderByDescending(j => j.PostedDate).ToListAsync();
        var result = new List<JobOpeningDto>();
        foreach (var j in jobs)
        {
            result.Add(new JobOpeningDto
            {
                Id = j.Id,
                Title = j.Title,
                DepartmentId = j.DepartmentId,
                DepartmentName = j.Department.Name,
                DesignationId = j.DesignationId,
                DesignationName = j.Designation.Title,
                BranchId = j.BranchId,
                BranchName = j.Branch.Name,
                EmploymentType = j.EmploymentType.ToString(),
                Experience = j.Experience,
                SalaryRange = j.SalaryRange,
                Description = j.Description,
                Requirements = j.Requirements,
                Vacancies = j.Vacancies,
                Status = j.Status.ToString(),
                PostedDate = j.PostedDate,
                ClosingDate = j.ClosingDate,
                CandidateCount = j.Candidates.Count
            });
        }
        return result;
    }

    public async Task<JobOpeningDto> GetJobOpeningAsync(Guid id)
    {
        var job = await _jobOpeningRepository.GetWithCandidatesAsync(id)
            ?? throw new KeyNotFoundException("Job opening not found.");
        return new JobOpeningDto
        {
            Id = job.Id,
            Title = job.Title,
            DepartmentId = job.DepartmentId,
            DepartmentName = job.Department.Name,
            DesignationId = job.DesignationId,
            DesignationName = job.Designation.Title,
            BranchId = job.BranchId,
            BranchName = job.Branch.Name,
            EmploymentType = job.EmploymentType.ToString(),
            Experience = job.Experience,
            SalaryRange = job.SalaryRange,
            Description = job.Description,
            Requirements = job.Requirements,
            Vacancies = job.Vacancies,
            Status = job.Status.ToString(),
            PostedDate = job.PostedDate,
            ClosingDate = job.ClosingDate,
            CandidateCount = job.Candidates.Count
        };
    }

    public async Task<JobOpeningDto> CreateJobOpeningAsync(CreateJobOpeningDto dto)
    {
        var employmentType = Enum.TryParse<EmploymentType>(dto.EmploymentType, true, out var et)
            ? et : EmploymentType.FULL_TIME;
        var job = new JobOpening
        {
            Title = dto.Title,
            DepartmentId = dto.DepartmentId,
            DesignationId = dto.DesignationId,
            BranchId = dto.BranchId,
            EmploymentType = employmentType,
            Experience = dto.Experience,
            SalaryRange = dto.SalaryRange,
            Description = dto.Description,
            Requirements = dto.Requirements,
            Vacancies = dto.Vacancies,
            Status = JobStatus.OPEN,
            PostedDate = DateTime.UtcNow
        };
        await _jobOpeningRepository.AddAsync(job);
        return await GetJobOpeningAsync(job.Id);
    }

    public async Task<JobOpeningDto> UpdateJobOpeningAsync(Guid id, CreateJobOpeningDto dto)
    {
        var job = await _jobOpeningRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("Job opening not found.");
        job.Title = dto.Title;
        job.DepartmentId = dto.DepartmentId;
        job.DesignationId = dto.DesignationId;
        job.BranchId = dto.BranchId;
        job.EmploymentType = Enum.TryParse<EmploymentType>(dto.EmploymentType, true, out var et) ? et : job.EmploymentType;
        job.Experience = dto.Experience;
        job.SalaryRange = dto.SalaryRange;
        job.Description = dto.Description;
        job.Requirements = dto.Requirements;
        job.Vacancies = dto.Vacancies;
        await _jobOpeningRepository.UpdateAsync(job);
        return await GetJobOpeningAsync(id);
    }

    public async Task<bool> DeleteJobOpeningAsync(Guid id)
    {
        var job = await _jobOpeningRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("Job opening not found.");
        await _jobOpeningRepository.DeleteAsync(job);
        return true;
    }

    public async Task<List<CandidateDto>> GetCandidatesAsync(string? jobId = null, string? status = null)
    {
        var query = _context.Candidates.Include(c => c.Job).AsQueryable();
        if (Guid.TryParse(jobId, out var jId)) query = query.Where(c => c.JobId == jId);
        if (!string.IsNullOrWhiteSpace(status))
        {
            var parsed = Enum.TryParse<CandidateStatus>(status, true, out var s) ? s : (CandidateStatus?)null;
            if (parsed.HasValue) query = query.Where(c => c.Status == parsed.Value);
        }
        var candidates = await query.OrderByDescending(c => c.CreatedAt).ToListAsync();
        return candidates.Select(MapToDto).ToList();
    }

    public async Task<CandidateDto> CreateCandidateAsync(CreateCandidateDto dto)
    {
        var candidate = new Candidate
        {
            FirstName = dto.FirstName,
            LastName = dto.LastName,
            Email = dto.Email,
            Phone = dto.Phone,
            JobId = dto.JobId,
            ResumeUrl = dto.ResumeUrl,
            CoverLetter = dto.CoverLetter,
            Source = dto.Source,
            Status = CandidateStatus.NEW
        };
        await _candidateRepository.AddAsync(candidate);
        return (await GetCandidatesAsync(null, null)).First(c => c.Id == candidate.Id);
    }

    public async Task<CandidateDto> UpdateCandidateStatusAsync(Guid id, UpdateCandidateStatusDto dto)
    {
        var candidate = await _candidateRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("Candidate not found.");
        var status = Enum.TryParse<CandidateStatus>(dto.Status, true, out var s) ? s : throw new InvalidOperationException("Invalid status.");
        candidate.Status = status;
        if (dto.Notes != null) candidate.Notes = dto.Notes;
        if (dto.Rating.HasValue) candidate.Rating = dto.Rating.Value;
        await _candidateRepository.UpdateAsync(candidate);
        return (await GetCandidatesAsync(null, null)).First(c => c.Id == id);
    }

    public async Task<bool> DeleteCandidateAsync(Guid id)
    {
        var candidate = await _candidateRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("Candidate not found.");
        await _candidateRepository.DeleteAsync(candidate);
        return true;
    }

    public async Task<List<InterviewDto>> GetInterviewsAsync(Guid? candidateId = null, Guid? jobId = null, Guid? interviewerId = null)
    {
        var query = _context.Interviews
            .Include(i => i.Candidate)
            .Include(i => i.Job)
            .Include(i => i.Interviewer)
            .AsQueryable();
        if (candidateId.HasValue) query = query.Where(i => i.CandidateId == candidateId.Value);
        if (jobId.HasValue) query = query.Where(i => i.JobId == jobId.Value);
        if (interviewerId.HasValue) query = query.Where(i => i.InterviewerId == interviewerId.Value);
        var interviews = await query.OrderBy(i => i.ScheduledAt).ToListAsync();
        return interviews.Select(MapInterview).ToList();
    }

    public async Task<InterviewDto> GetInterviewAsync(Guid id)
    {
        var interview = await _context.Interviews
            .Include(i => i.Candidate)
            .Include(i => i.Job)
            .Include(i => i.Interviewer)
            .FirstOrDefaultAsync(i => i.Id == id)
            ?? throw new KeyNotFoundException("Interview not found.");
        return MapInterview(interview);
    }

    public async Task<InterviewDto> CreateInterviewAsync(CreateInterviewDto dto)
    {
        var candidate = await _candidateRepository.GetByIdAsync(dto.CandidateId)
            ?? throw new KeyNotFoundException("Candidate not found.");
        var interviewType = Enum.TryParse<InterviewType>(dto.InterviewType, true, out var it)
            ? it : InterviewType.ONLINE;
        var interview = new Interview
        {
            CandidateId = dto.CandidateId,
            JobId = dto.JobId,
            InterviewerId = dto.InterviewerId,
            ScheduledAt = dto.ScheduledAt,
            Round = string.IsNullOrWhiteSpace(dto.Round) ? "SCREENING" : dto.Round,
            InterviewType = interviewType,
            Status = InterviewStatus.SCHEDULED,
            DurationMinutes = dto.DurationMinutes,
            MeetingLink = dto.MeetingLink
        };
        await _interviewRepository.AddAsync(interview);

        var status = candidate.Status;
        if (status != CandidateStatus.INTERVIEWED && status != CandidateStatus.HIRED && status != CandidateStatus.REJECTED)
        {
            candidate.Status = CandidateStatus.INTERVIEW_SCHEDULED;
            await _candidateRepository.UpdateAsync(candidate);
        }
        return await GetInterviewAsync(interview.Id);
    }

    public async Task<InterviewDto> UpdateInterviewAsync(Guid id, UpdateInterviewDto dto)
    {
        var interview = await _interviewRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("Interview not found.");
        if (dto.InterviewerId.HasValue) interview.InterviewerId = dto.InterviewerId;
        if (dto.ScheduledAt.HasValue) interview.ScheduledAt = dto.ScheduledAt.Value;
        if (!string.IsNullOrWhiteSpace(dto.Round)) interview.Round = dto.Round;
        if (!string.IsNullOrWhiteSpace(dto.InterviewType))
        {
            interview.InterviewType = Enum.TryParse<InterviewType>(dto.InterviewType, true, out var it)
                ? it : interview.InterviewType;
        }
        if (dto.DurationMinutes.HasValue) interview.DurationMinutes = dto.DurationMinutes;
        if (dto.MeetingLink != null) interview.MeetingLink = dto.MeetingLink;
        interview.UpdatedAt = DateTime.UtcNow;
        await _interviewRepository.UpdateAsync(interview);
        return await GetInterviewAsync(id);
    }

    public async Task<InterviewDto> UpdateInterviewStatusAsync(Guid id, UpdateInterviewStatusDto dto)
    {
        var interview = await _interviewRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("Interview not found.");
        var status = Enum.TryParse<InterviewStatus>(dto.Status, true, out var s)
            ? s : throw new InvalidOperationException("Invalid interview status.");
        interview.Status = status;
        if (dto.Feedback != null) interview.Feedback = dto.Feedback;
        if (dto.Rating.HasValue) interview.Rating = dto.Rating;
        interview.UpdatedAt = DateTime.UtcNow;
        await _interviewRepository.UpdateAsync(interview);

        if (status == InterviewStatus.COMPLETED)
        {
            var candidate = await _candidateRepository.GetByIdAsync(interview.CandidateId);
            if (candidate != null && candidate.Status != CandidateStatus.OFFERED && candidate.Status != CandidateStatus.HIRED)
            {
                candidate.Status = CandidateStatus.INTERVIEWED;
                await _candidateRepository.UpdateAsync(candidate);
            }
        }
        else if (status == InterviewStatus.CANCELLED)
        {
            var candidate = await _candidateRepository.GetByIdAsync(interview.CandidateId);
            if (candidate != null && candidate.Status == CandidateStatus.INTERVIEW_SCHEDULED)
            {
                candidate.Status = CandidateStatus.SCREENING;
                await _candidateRepository.UpdateAsync(candidate);
            }
        }
        return await GetInterviewAsync(id);
    }

    public async Task<bool> DeleteInterviewAsync(Guid id)
    {
        var interview = await _interviewRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("Interview not found.");
        await _interviewRepository.DeleteAsync(interview);
        return true;
    }

    private InterviewDto MapInterview(Interview i) => new()
    {
        Id = i.Id,
        CandidateId = i.CandidateId,
        CandidateName = i.Candidate != null ? $"{i.Candidate.FirstName} {i.Candidate.LastName}" : null,
        JobId = i.JobId,
        JobTitle = i.Job?.Title,
        InterviewerId = i.InterviewerId,
        InterviewerName = i.Interviewer != null ? $"{i.Interviewer.FirstName} {i.Interviewer.LastName}" : null,
        ScheduledAt = i.ScheduledAt,
        Round = i.Round,
        InterviewType = i.InterviewType.ToString(),
        Status = i.Status.ToString(),
        DurationMinutes = i.DurationMinutes,
        MeetingLink = i.MeetingLink,
        Feedback = i.Feedback,
        Rating = i.Rating,
        CreatedAt = i.CreatedAt
    };

    private CandidateDto MapToDto(Candidate c) => new()
    {
        Id = c.Id,
        FirstName = c.FirstName,
        LastName = c.LastName,
        Email = c.Email,
        Phone = c.Phone,
        JobId = c.JobId,
        JobTitle = c.Job?.Title,
        ResumeUrl = c.ResumeUrl,
        CoverLetter = c.CoverLetter,
        Source = c.Source,
        Status = c.Status.ToString(),
        Rating = c.Rating,
        Notes = c.Notes,
        CreatedAt = c.CreatedAt
    };
}

