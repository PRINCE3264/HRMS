

namespace HRMAPI.Models.DTOs.User;

public class RegisterRequestDto
{
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public string? ConfirmPassword { get; set; }
    public string? Role { get; set; }
    public string? PPT { get; set; }
    public string? Department { get; set; }
    public string? Designation { get; set; }
}
