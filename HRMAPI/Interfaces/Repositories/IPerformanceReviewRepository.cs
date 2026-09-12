using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface IPerformanceReviewRepository : IRepository<PerformanceReview>
{
    Task<IEnumerable<PerformanceReview>> GetByEmployeeAsync(Guid employeeId);
}
