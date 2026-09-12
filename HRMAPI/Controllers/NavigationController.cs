using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.Services;
using System.Security.Claims;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Controllers;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class NavigationController : ControllerBase
{
    private readonly INavigationService _navigationService;

    public NavigationController(INavigationService navigationService)
    {
        _navigationService = navigationService;
    }

    [HttpGet("menu")]
    public async Task<IActionResult> GetMenu()
    {
        var role = User.FindFirst(ClaimTypes.Role)?.Value;
        var roleIdClaim = User.FindFirst("role_id")?.Value;
        Guid? roleId = Guid.TryParse(roleIdClaim, out var parsed) ? parsed : null;

        var result = await _navigationService.GetMenuAsync(role ?? string.Empty, roleId);
        return Ok(result);
    }
}
