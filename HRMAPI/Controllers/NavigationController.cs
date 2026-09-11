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
        var roleClaim = User.FindFirst(ClaimTypes.Role)?.Value;

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
            DisplayOrder = m.SortOrder,
            Features = m.Features
                .Where(f => !f.IsDeleted)
                .OrderBy(f => f.SortOrder)
                .Select(f => new
                {
                    f.Id,
                    f.Name,
                    Path = f.Url,
                    f.Icon,
                    DisplayOrder = f.SortOrder
                })
        }).Where(m => m.Features.Any());

        return Ok(result);
    }
}
