

namespace HRMAPI.Models.DTOs.Management;

public class ManagedEmployeeDto
{
    public Guid Id { get; set; }
    public string EmployeeCode { get; set; } = string.Empty;
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? Phone { get; set; }
    public string? Designation { get; set; }
    public string? Department { get; set; }
    public string? Branch { get; set; }
    public string? TeamName { get; set; }
    public string? Role { get; set; }
    public Guid? RoleId { get; set; }
    public bool Active { get; set; }
    public bool HasAccount { get; set; }
    public string FullName => $"{FirstName} {LastName}";
}
