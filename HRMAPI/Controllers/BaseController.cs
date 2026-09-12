using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Controllers;

[ApiController]
[Authorize]
[Route("api/[controller]")]
public abstract class BaseController : ControllerBase
{
    protected Guid CurrentUserId
    {
        get
        {
            var claim = User.FindFirst(ClaimTypes.NameIdentifier);
            return Guid.TryParse(claim?.Value, out var id) ? id : Guid.Empty;
        }
    }

    protected string CurrentUserRole =>
        User.FindFirst(ClaimTypes.Role)?.Value ?? string.Empty;

    protected Guid CurrentUserRoleId
    {
        get
        {
            var claim = User.FindFirst("role_id");
            return Guid.TryParse(claim?.Value, out var id) ? id : Guid.Empty;
        }
    }

    protected string CurrentUserEmail =>
        User.FindFirst(ClaimTypes.Email)?.Value ?? string.Empty;
}
