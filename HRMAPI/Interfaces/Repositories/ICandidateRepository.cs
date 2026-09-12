using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface ICandidateRepository : IRepository<Candidate>
{
    Task<IEnumerable<Candidate>> GetByJobAsync(Guid jobId);
}
