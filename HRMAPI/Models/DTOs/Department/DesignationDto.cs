

namespace HRMAPI.Models.DTOs.Department;

public class DesignationDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Level { get; set; } = string.Empty;
    public Guid? DepartmentId { get; set; }
    public string? DepartmentName { get; set; }
    public decimal? MinSalary { get; set; }
    public decimal? MaxSalary { get; set; }
    public int? TotalEmployees { get; set; }
    public int EmployeeCount { get; set; }
    public string Status { get; set; } = "ACTIVE";
}
