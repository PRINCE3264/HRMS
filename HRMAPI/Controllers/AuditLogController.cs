using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models;

namespace HRMAPI.Controllers;

[Authorize(Roles = "ADMIN")]
[ApiController]
[Route("api/[controller]")]
public class AuditLogController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public AuditLogController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetAuditLogs([FromQuery] int page = 1, [FromQuery] int pageSize = 50)
    {
        var query = _context.AuditLogs
            .Include(a => a.User)
            .OrderByDescending(a => a.Timestamp);

        var totalCount = await query.CountAsync();
        var logs = await query.Skip((page - 1) * pageSize).Take(pageSize)
            .Select(a => new
            {
                a.Id,
                a.UserId,
                UserName = a.User.FirstName + " " + a.User.LastName,
                a.Action,
                a.Module,
                a.Details,
                a.IpAddress,
                a.Timestamp
            })
            .ToListAsync();

        return Ok(new { TotalCount = totalCount, Items = logs });
    }
}

