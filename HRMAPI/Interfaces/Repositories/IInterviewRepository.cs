using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface IInterviewRepository : IRepository<Interview>
{
    Task<IEnumerable<Interview>> GetByCandidateAsync(Guid candidateId);
    Task<IEnumerable<Interview>> GetByJobAsync(Guid jobId);
    Task<IEnumerable<Interview>> GetByInterviewerAsync(Guid employeeId);
}
