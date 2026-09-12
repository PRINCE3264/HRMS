using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Models.DTOs.User;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Controllers;

public interface IUserController
{
    Task<ActionResult<ApiResponse<List<UserDto>>>> GetAll();
    Task<ActionResult<ApiResponse<UserDto>>> Get(Guid id);
}

[Route("api/users")]
public class UserController : ControllerBase, IUserController
{
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<UserDto>>>> GetAll()
    {
        var users = await _userService.GetUserDtosAsync();
        return Ok(ApiResponse<List<UserDto>>.Ok(users));
    }

    [HttpGet("{id:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<UserDto>>> Get(Guid id)
    {
        var user = await _userService.GetUserDtoAsync(id);
        return Ok(ApiResponse<UserDto>.Ok(user));
    }

    [HttpGet("me")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<UserDto>>> GetMe()
    {
        var userIdClaim = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier);
        if (!Guid.TryParse(userIdClaim?.Value, out var userId))
            return Unauthorized(ApiResponse<object>.Fail("Invalid token."));
        var user = await _userService.GetUserDtoAsync(userId);
        return Ok(ApiResponse<UserDto>.Ok(user));
    }

    [HttpPut("{id:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<UserDto>>> Update(Guid id, [FromBody] UpdateUserDto dto)
    {
        var user = await _userService.UpdateUserAsync(id, dto);
        var userDto = await _userService.GetUserDtoAsync(user.Id);
        return Ok(ApiResponse<UserDto>.Ok(userDto, "User updated."));
    }

    [HttpPost("{id:guid}/change-password")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<object>>> ChangePassword(Guid id, [FromBody] ChangePasswordDto dto)
    {
        var success = await _userService.ChangePasswordAsync(id, dto);
        return Ok(ApiResponse<object>.Ok(new { success }, "Password changed."));
    }

    [HttpPost("{id:guid}/toggle-mfa")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<object>>> ToggleMfa(Guid id, [FromBody] bool enabled)
    {
        var success = await _userService.SetMfaAsync(id, enabled);
        return Ok(ApiResponse<object>.Ok(new { success }, "MFA setting updated."));
    }

    [HttpDelete("{id:guid}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<object>>> Delete(Guid id)
    {
        var success = await _userService.DeleteUserAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "User deactivated."));
    }
}
