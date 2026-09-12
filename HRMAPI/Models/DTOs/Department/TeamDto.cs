

namespace HRMAPI.Models.DTOs.Department;

public class TeamDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public Guid DepartmentId { get; set; }
    public string DepartmentName { get; set; } = string.Empty;
    public Guid TeamLeadId { get; set; }
    public string TeamLeadName { get; set; } = string.Empty;
    public int? TotalEmployees { get; set; }
    public int MemberCount { get; set; }
    public string Status { get; set; } = "ACTIVE";
}
