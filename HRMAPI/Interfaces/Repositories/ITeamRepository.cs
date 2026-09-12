using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface ITeamRepository : IRepository<Team>
{
    Task<int> GetMemberCountAsync(Guid teamId);
}
