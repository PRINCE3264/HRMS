

namespace HRMAPI.Models.DTOs.Department;

public class BranchDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Code { get; set; } = string.Empty;
    public string? Address { get; set; }
    public string City { get; set; } = string.Empty;
    public string State { get; set; } = string.Empty;
    public string Country { get; set; } = string.Empty;
    public string? Phone { get; set; }
    public string? Email { get; set; }
    public Guid? CompanyId { get; set; }
    public int EmployeeCount { get; set; }
    public string Status { get; set; } = "ACTIVE";
}
