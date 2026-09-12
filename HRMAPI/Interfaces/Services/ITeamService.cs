using HRMAPI.Models.DTOs.Department;

namespace HRMAPI.Interfaces.Services;

public interface ITeamService
{
    Task<List<TeamDto>> GetTeamsAsync();
    Task<TeamDto> CreateTeamAsync(CreateTeamDto dto);
    Task<bool> DeleteTeamAsync(Guid id);
}