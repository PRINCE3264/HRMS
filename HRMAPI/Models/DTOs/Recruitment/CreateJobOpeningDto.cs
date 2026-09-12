

namespace HRMAPI.Models.DTOs.Recruitment;

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
