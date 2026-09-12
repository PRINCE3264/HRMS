

namespace HRMAPI.Models.DTOs.Organization;

public class ReportingNodeDto
{
    public Guid Id { get; set; }
    public string EmployeeId { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string? Avatar { get; set; }
    public string? Designation { get; set; }
    public string? Department { get; set; }
    public string EmploymentStatus { get; set; } = string.Empty;
    public int DirectReportCount { get; set; }
    public List<ReportingNodeDto> Children { get; set; } = new();
}
