using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface IJobOpeningRepository : IRepository<JobOpening>
{
    Task<JobOpening?> GetWithCandidatesAsync(Guid id);
    Task<int> GetCandidateCountAsync(Guid jobId);
}
