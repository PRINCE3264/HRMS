namespace HRMAPI.DTOs.User;

public class LoginRequestDto
{
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}

public class RegisterRequestDto
{
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public string? ConfirmPassword { get; set; }
    public string? Role { get; set; }
    public string? Department { get; set; }
    public string? Designation { get; set; }
}

public class LoginResponseDto
{
    public UserDto User { get; set; } = null!;
    public string Token { get; set; } = string.Empty;
    public string RefreshToken { get; set; } = string.Empty;
    public int ExpiresIn { get; set; }
}

public class UserDto
{
    public Guid Id { get; set; }
    public string Email { get; set; } = string.Empty;
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
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

public class AdminResetPasswordDto
{
    public string NewPassword { get; set; } = string.Empty;
    public string? ConfirmPassword { get; set; }
}

public class PermissionDto
{
    public string Module { get; set; } = string.Empty;
    public List<string> Actions { get; set; } = new();
}

public class UpdateUserDto
{
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? Email { get; set; }
    public string? Avatar { get; set; }
    public string? Department { get; set; }
    public string? Designation { get; set; }
    public string? Branch { get; set; }
}

public class ChangePasswordDto
{
    public string CurrentPassword { get; set; } = string.Empty;
    public string NewPassword { get; set; } = string.Empty;
    public string? ConfirmPassword { get; set; }
}

public class ForgotPasswordDto
{
    public string Email { get; set; } = string.Empty;
}

public class ResetPasswordDto
{
    public string Token { get; set; } = string.Empty;
    public string NewPassword { get; set; } = string.Empty;
    public string? ConfirmPassword { get; set; }
}

public class RefreshTokenDto
{
    public string RefreshToken { get; set; } = string.Empty;
}

