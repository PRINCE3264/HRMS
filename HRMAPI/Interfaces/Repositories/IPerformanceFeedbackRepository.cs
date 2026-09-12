using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface IPerformanceFeedbackRepository : IRepository<PerformanceFeedback>
{
    Task<IEnumerable<PerformanceFeedback>> GetByTargetAsync(Guid targetEmployeeId);
    Task<IEnumerable<PerformanceFeedback>> GetByReviewerAsync(Guid reviewerId);
}
