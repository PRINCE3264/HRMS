

namespace HRMAPI.Models.DTOs.User;

public class UpdateUserDto
{
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? Email { get; set; }
    public string? Avatar { get; set; }
    public string? Role { get; set; }
    public Guid? RoleId { get; set; }
    public string? PPT { get; set; }
    public string? Department { get; set; }
    public string? Designation { get; set; }
    public string? Branch { get; set; }
}
