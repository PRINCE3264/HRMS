

namespace HRMAPI.Models.DTOs.User;

public class UserDto
{
    public Guid Id { get; set; }
    public string Email { get; set; } = string.Empty;
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public Guid RoleId { get; set; }
    public string? PPT { get; set; }
    public string? Avatar { get; set; }
    public string? Department { get; set; }
    public string? Designation { get; set; }
    public string? Branch { get; set; }
    public Guid? EmployeeId { get; set; }
    public bool IsActive { get; set; } = true;
    public bool MfaEnabled { get; set; }
    public DateTime? LastLoginAt { get; set; }
    public List<PermissionDto> Permissions { get; set; } = new();
}
