using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Enums;
using HRMAPI.Models;
using System.Security.Claims;

namespace HRMAPI.Controllers;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class NavigationController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public NavigationController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet("menu")]
    public async Task<IActionResult> GetMenu()
    {
        var roleClaim = User.FindFirst(ClaimTypes.Role)?.Value;
        if (string.IsNullOrEmpty(roleClaim) || !Enum.TryParse<UserRole>(roleClaim, true, out var userRole))
        {
            return Unauthorized(new { message = "Invalid role" });
        }

        var modules = await _context.AppModules
            .Include(m => m.Features)
                .ThenInclude(f => f.FeatureRoles)
            .Where(m => m.IsActive)
            .OrderBy(m => m.DisplayOrder)
            .ToListAsync();

        var result = modules.Select(m => new
        {
            m.Id,
            m.Name,
            m.Icon,
            m.DisplayOrder,
            Features = m.Features
                .Where(f => f.IsActive && f.FeatureRoles.Any(fr => fr.Role == userRole))
                .OrderBy(f => f.DisplayOrder)
                .Select(f => new
                {
                    f.Id,
                    f.Name,
                    f.Path,
                    f.Icon,
                    f.DisplayOrder
                })
        }).Where(m => m.Features.Any());

        return Ok(result);
    }
}

