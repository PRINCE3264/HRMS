using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.DTOs.Common;
using HRMAPI.DTOs.User;
using HRMAPI.Services;

namespace HRMAPI.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;
    private readonly IUserService _userService;

    public AuthController(IAuthService authService, IUserService userService)
    {
        _authService = authService;
        _userService = userService;
    }

    [HttpPost("login")]
    [AllowAnonymous]
    public async Task<ActionResult<ApiResponse<LoginResponseDto>>> Login([FromBody] LoginRequestDto request)
    {
        var user = await _authService.AuthenticateAsync(request.Email, request.Password);
        if (user == null) return Unauthorized(ApiResponse<object>.Fail("Invalid email or password."));

        var token = await _authService.GenerateTokenAsync(user);
        var refreshToken = _authService.GenerateRefreshToken();
        user.RefreshToken = refreshToken;
        user.RefreshTokenExpiry = DateTime.UtcNow.AddDays(7);
        await _userService.UpdateUserAsync(user.Id, new UpdateUserDto());

        var userDto = await _userService.GetUserDtoAsync(user.Id);
        var response = new LoginResponseDto
        {
            User = userDto,
            Token = token,
            RefreshToken = refreshToken,
            ExpiresIn = 3600
        };
        return Ok(ApiResponse<LoginResponseDto>.Ok(response, "Login successful."));
    }

    [HttpPost("register")]
    [AllowAnonymous]
    public async Task<ActionResult<ApiResponse<UserDto>>> Register([FromBody] RegisterRequestDto request)
    {
        var user = await _userService.CreateUserAsync(request);
        var userDto = await _userService.GetUserDtoAsync(user.Id);
        return Ok(ApiResponse<UserDto>.Ok(userDto, "Registration successful."));
    }

    [HttpPost("refresh")]
    [AllowAnonymous]
    public async Task<ActionResult<ApiResponse<LoginResponseDto>>> RefreshToken([FromBody] RefreshTokenDto request)
    {
        var user = await _authService.ValidateRefreshTokenAsync(request.RefreshToken);
        if (user == null) return Unauthorized(ApiResponse<object>.Fail("Invalid or expired refresh token."));

        var token = await _authService.GenerateTokenAsync(user);
        var refreshToken = _authService.GenerateRefreshToken();
        user.RefreshToken = refreshToken;
        user.RefreshTokenExpiry = DateTime.UtcNow.AddDays(7);
        await _userService.UpdateUserAsync(user.Id, new UpdateUserDto());

        var response = new LoginResponseDto
        {
            User = await _userService.GetUserDtoAsync(user.Id),
            Token = token,
            RefreshToken = refreshToken,
            ExpiresIn = 3600
        };
        return Ok(ApiResponse<LoginResponseDto>.Ok(response));
    }

    [HttpPost("forgot-password")]
    [AllowAnonymous]
    public async Task<ActionResult<ApiResponse<object>>> ForgotPassword([FromBody] ForgotPasswordDto request)
    {
        var user = await _userService.GetByEmailAsync(request.Email);
        // Always return success to avoid user enumeration
        if (user != null)
        {
            var token = _authService.GenerateRefreshToken();
            user.RefreshToken = token;
            user.RefreshTokenExpiry = DateTime.UtcNow.AddHours(2);
            await _userService.UpdateUserAsync(user.Id, new UpdateUserDto());
        }
        return Ok(ApiResponse<object>.Ok(new { }, "If the email exists, a password reset link has been sent."));
    }

    [HttpPost("reset-password")]
    [AllowAnonymous]
    public async Task<ActionResult<ApiResponse<object>>> ResetPassword([FromBody] ResetPasswordDto request)
    {
        var user = await _authService.ValidateRefreshTokenAsync(request.Token);
        if (user == null) return BadRequest(ApiResponse<object>.Fail("Invalid or expired reset token."));

        await _userService.ChangePasswordAsync(user.Id, new ChangePasswordDto
        {
            CurrentPassword = "",
            NewPassword = request.NewPassword,
            ConfirmPassword = request.ConfirmPassword
        });

        user.RefreshToken = null;
        user.RefreshTokenExpiry = null;
        await _userService.UpdateUserAsync(user.Id, new UpdateUserDto());

        return Ok(ApiResponse<object>.Ok(new { }, "Password reset successful."));
    }

    [HttpPost("logout")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<object>>> Logout()
    {
        var userIdClaim = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier);
        if (Guid.TryParse(userIdClaim?.Value, out var userId))
        {
            await _userService.UpdateUserAsync(userId, new UpdateUserDto());
        }
        return Ok(ApiResponse<object>.Ok(new { }, "Logged out."));
    }
}
