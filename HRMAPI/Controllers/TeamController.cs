using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Models.DTOs.Department;
using HRMAPI.Interfaces.Services;

namespace HRMAPI.Controllers;

[Route("api/teams")]
public class TeamController : BaseController
{
    private readonly ITeamService _teamService;

    public TeamController(ITeamService teamService)
    {
        _teamService = teamService;
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<TeamDto>>>> GetAll() =>
        Ok(ApiResponse<List<TeamDto>>.Ok(await _teamService.GetTeamsAsync()));

    [HttpPost]
    [Authorize(Roles = "ADMIN,HR,TL")]
    public async Task<ActionResult<ApiResponse<TeamDto>>> Create([FromBody] CreateTeamDto dto) =>
        Ok(ApiResponse<TeamDto>.Ok(await _teamService.CreateTeamAsync(dto), "Team created."));

    [HttpDelete("{id:guid}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<object>>> Delete(Guid id)
    {
        var success = await _teamService.DeleteTeamAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "Team deactivated."));
    }
}