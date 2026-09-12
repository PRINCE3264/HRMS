using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.Models.DTOs.Attendance;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Models.Entities;
using HRMAPI.Data;
using Microsoft.EntityFrameworkCore;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Controllers;

[Route("api/shifts")]
public class ShiftController : BaseController
{
    private readonly ApplicationDbContext _context;

    public ShiftController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<ShiftDto>>>> GetAll()
    {
        var shifts = await _context.Shifts.Where(s => s.IsActive).AsNoTracking().ToListAsync();
        return Ok(ApiResponse<List<ShiftDto>>.Ok(shifts.Select(MapToDto).ToList()));
    }

    [HttpPost]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<ShiftDto>>> Create([FromBody] CreateShiftDto dto)
    {
        var shift = new Shift
        {
            Name = dto.Name,
            StartTime = TimeOnly.Parse(dto.StartTime),
            EndTime = TimeOnly.Parse(dto.EndTime),
            BreakMinutes = dto.BreakMinutes,
            Description = dto.Description
        };
        await _context.Shifts.AddAsync(shift);
        await _context.SaveChangesAsync();
        return Ok(ApiResponse<ShiftDto>.Ok(MapToDto(shift), "Shift created."));
    }

    [HttpPut("{id:guid}")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<ShiftDto>>> Update(Guid id, [FromBody] CreateShiftDto dto)
    {
        var shift = await _context.Shifts.FindAsync(id) ?? throw new KeyNotFoundException("Shift not found.");
        shift.Name = dto.Name;
        shift.StartTime = TimeOnly.Parse(dto.StartTime);
        shift.EndTime = TimeOnly.Parse(dto.EndTime);
        shift.BreakMinutes = dto.BreakMinutes;
        shift.Description = dto.Description;
        await _context.SaveChangesAsync();
        return Ok(ApiResponse<ShiftDto>.Ok(MapToDto(shift), "Shift updated."));
    }

    [HttpDelete("{id:guid}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<object>>> Delete(Guid id)
    {
        var shift = await _context.Shifts.FindAsync(id) ?? throw new KeyNotFoundException("Shift not found.");
        shift.IsActive = false;
        await _context.SaveChangesAsync();
        return Ok(ApiResponse<object>.Ok(new { success = true }, "Shift deactivated."));
    }

    [HttpGet("assignments")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<ShiftAssignmentDto>>>> GetAssignments()
    {
        var assignments = await _context.ShiftAssignments
            .Include(sa => sa.Employee)
            .Include(sa => sa.Shift)
            .AsNoTracking()
            .ToListAsync();
        return Ok(ApiResponse<List<ShiftAssignmentDto>>.Ok(assignments.Select(MapAssignmentToDto).ToList()));
    }

    [HttpPost("assignments")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<ShiftAssignmentDto>>> CreateAssignment([FromBody] CreateShiftAssignmentDto dto)
    {
        var assignment = new ShiftAssignment
        {
            EmployeeId = dto.EmployeeId,
            ShiftId = dto.ShiftId,
            StartDate = dto.StartDate.Date,
            EndDate = dto.EndDate?.Date
        };
        await _context.ShiftAssignments.AddAsync(assignment);
        await _context.SaveChangesAsync();
        return Ok(ApiResponse<ShiftAssignmentDto>.Ok(MapAssignmentToDto(assignment), "Assignment created."));
    }

    private ShiftDto MapToDto(Shift s) => new()
    {
        Id = s.Id,
        Name = s.Name,
        StartTime = s.StartTime.ToString("HH:mm"),
        EndTime = s.EndTime.ToString("HH:mm"),
        BreakMinutes = s.BreakMinutes,
        Description = s.Description
    };

    private ShiftAssignmentDto MapAssignmentToDto(ShiftAssignment sa) => new()
    {
        Id = sa.Id,
        EmployeeId = sa.EmployeeId,
        EmployeeName = sa.Employee != null ? $"{sa.Employee.FirstName} {sa.Employee.LastName}" : null,
        ShiftId = sa.ShiftId,
        ShiftName = sa.Shift?.Name,
        StartDate = sa.StartDate,
        EndDate = sa.EndDate
    };
}
