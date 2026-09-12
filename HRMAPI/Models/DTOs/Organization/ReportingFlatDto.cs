

namespace HRMAPI.Models.DTOs.Organization;

public class ReportingFlatDto
{
    public Guid Id { get; set; }
    public string EmployeeId { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string? Designation { get; set; }
    public string? Department { get; set; }
    public Guid? ManagerId { get; set; }
    public string? ManagerName { get; set; }
}
