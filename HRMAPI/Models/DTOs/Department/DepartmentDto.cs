

namespace HRMAPI.Models.DTOs.Department;

public class DepartmentDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Code { get; set; } = string.Empty;
    public string? Description { get; set; }
    public Guid? HeadId { get; set; }
    public string? HeadName { get; set; }
    public int EmployeeCount { get; set; }
    public string Status { get; set; } = "ACTIVE";
    public DateTime CreatedAt { get; set; }
}
