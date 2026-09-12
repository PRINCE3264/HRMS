

namespace HRMAPI.Models.DTOs.User;

public class AdminResetPasswordDto
{
    public string NewPassword { get; set; } = string.Empty;
    public string? ConfirmPassword { get; set; }
}
