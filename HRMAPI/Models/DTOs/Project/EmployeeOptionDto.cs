

namespace HRMAPI.Models.DTOs.Project;

public class EmployeeOptionDto
{
    public Guid Id { get; set; }
    public string EmployeeId { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string? Designation { get; set; }
    public string? Department { get; set; }
    public string? TeamName { get; set; }
}
