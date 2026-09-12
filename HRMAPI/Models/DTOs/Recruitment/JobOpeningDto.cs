

namespace HRMAPI.Models.DTOs.Recruitment;

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
