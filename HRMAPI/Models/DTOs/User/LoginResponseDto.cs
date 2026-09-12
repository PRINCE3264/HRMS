

namespace HRMAPI.Models.DTOs.User;

public class LoginResponseDto
{
    public UserDto User { get; set; } = null!;
    public string Token { get; set; } = string.Empty;
    public string RefreshToken { get; set; } = string.Empty;
    public int ExpiresIn { get; set; }
}
