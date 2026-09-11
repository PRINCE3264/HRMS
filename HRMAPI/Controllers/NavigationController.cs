using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Enums;
using HRMAPI.Models;
using System.Security.Claims;
using System.Linq;
using System.Threading.Tasks;

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
        var role = User.FindFirst(ClaimTypes.Role)?.Value;

        if (string.IsNullOrEmpty(role))
        {
            return Ok(Array.Empty<object>());
        }

        var roleId = await _context.Roles
            .Where(r => r.Code == role)
            .Select(r => (Guid?)r.Id)
            .FirstOrDefaultAsync();

        var allowedFeatureIds = await _context.FeatureRoles
            .Where(fr => fr.Role == role
                || (fr.RoleId != null && fr.RoleId == roleId))
            .Select(fr => fr.FeatureId)
            .Distinct()
            .ToListAsync();
        var allowedSet = allowedFeatureIds.ToHashSet();

        var modules = await _context.Modules
            .Include(m => m.Features)
            .Where(m => !m.IsDeleted)
            .OrderBy(m => m.SortOrder)
            .ToListAsync();

        var result = modules.Select(m => new
        {
            m.Id,
            m.Name,
            m.Icon,
            m.RollId,
            DisplayOrder = m.SortOrder,
            Features = m.Features
                .Where(f => !f.IsDeleted && allowedSet.Contains(f.Id))
                .OrderBy(f => f.SortOrder)
                .Select(f => new
                {
                    f.Id,
                    f.Name,
                    Path = f.Url,
                    f.Icon,
                    f.RoleId,
                    DisplayOrder = f.SortOrder
                })
        }).Where(m => m.Features.Any());

        return Ok(result);
    }
}
