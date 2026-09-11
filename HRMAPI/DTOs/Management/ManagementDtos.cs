namespace HRMAPI.DTOs.Management;

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
    public bool Active { get; set; }
    public bool HasAccount { get; set; }
    public string FullName => $"{FirstName} {LastName}";
}

public class TeamLeadManagementDto
{
    public Guid Id { get; set; }
    public string EmployeeCode { get; set; } = string.Empty;
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? Designation { get; set; }
    public string? Department { get; set; }
    public Guid? TeamId { get; set; }
    public string? TeamName { get; set; }
    public int TeamMembersCount { get; set; }
    public int ActiveProjectsCount { get; set; }
    public string? Role { get; set; }
    public bool Active { get; set; }
    public bool HasAccount { get; set; }
    public string FullName => $"{FirstName} {LastName}";
}