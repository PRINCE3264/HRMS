namespace HRMAPI.DTOs.Recruitment;

public class JobOpeningDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public Guid DepartmentId { get; set; }
    public string? DepartmentName { get; set; }
    public Guid DesignationId { get; set; }
    public string? DesignationName { get; set; }
    public Guid BranchId { get; set; }
    public string? BranchName { get; set; }
    public string? EmploymentType { get; set; }
    public string? Experience { get; set; }
    public string? SalaryRange { get; set; }
    public string? Description { get; set; }
    public string? Requirements { get; set; }
    public int Vacancies { get; set; }
    public string Status { get; set; } = string.Empty;
    public DateTime PostedDate { get; set; }
    public DateTime? ClosingDate { get; set; }
    public int CandidateCount { get; set; }
}

public class CreateJobOpeningDto
{
    public string Title { get; set; } = string.Empty;
    public Guid DepartmentId { get; set; }
    public Guid DesignationId { get; set; }
    public Guid BranchId { get; set; }
    public string? EmploymentType { get; set; }
    public string? Experience { get; set; }
    public string? SalaryRange { get; set; }
    public string? Description { get; set; }
    public string? Requirements { get; set; }
    public int Vacancies { get; set; }
}

public class CandidateDto
{
    public Guid Id { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? Phone { get; set; }
    public Guid JobId { get; set; }
    public string? JobTitle { get; set; }
    public string? ResumeUrl { get; set; }
    public string? CoverLetter { get; set; }
    public string? Source { get; set; }
    public string Status { get; set; } = string.Empty;
    public int? Rating { get; set; }
    public string? Notes { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class CreateCandidateDto
{
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? Phone { get; set; }
    public Guid JobId { get; set; }
    public string? ResumeUrl { get; set; }
    public string? CoverLetter { get; set; }
    public string? Source { get; set; }
}

public class UpdateCandidateStatusDto
{
    public string Status { get; set; } = string.Empty;
    public string? Notes { get; set; }
    public int? Rating { get; set; }
}

public class InterviewDto
{
    public Guid Id { get; set; }
    public Guid CandidateId { get; set; }
    public string? CandidateName { get; set; }
    public Guid JobId { get; set; }
    public string? JobTitle { get; set; }
    public Guid? InterviewerId { get; set; }
    public string? InterviewerName { get; set; }
    public DateTime ScheduledAt { get; set; }
    public string Round { get; set; } = string.Empty;
    public string InterviewType { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public int? DurationMinutes { get; set; }
    public string? MeetingLink { get; set; }
    public string? Feedback { get; set; }
    public int? Rating { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class CreateInterviewDto
{
    public Guid CandidateId { get; set; }
    public Guid JobId { get; set; }
    public Guid? InterviewerId { get; set; }
    public DateTime ScheduledAt { get; set; }
    public string Round { get; set; } = "SCREENING";
    public string InterviewType { get; set; } = "ONLINE";
    public int? DurationMinutes { get; set; }
    public string? MeetingLink { get; set; }
}

public class UpdateInterviewDto
{
    public Guid? InterviewerId { get; set; }
    public DateTime? ScheduledAt { get; set; }
    public string? Round { get; set; }
    public string? InterviewType { get; set; }
    public int? DurationMinutes { get; set; }
    public string? MeetingLink { get; set; }
}

public class UpdateInterviewStatusDto
{
    public string Status { get; set; } = string.Empty;
    public string? Feedback { get; set; }
    public int? Rating { get; set; }
}

