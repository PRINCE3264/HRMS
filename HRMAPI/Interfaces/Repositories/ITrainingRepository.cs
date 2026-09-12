using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface ITrainingRepository : IRepository<Training>
{
    Task<Training?> GetWithEnrollmentsAsync(Guid id);
    Task<bool> IsEnrolledAsync(Guid trainingId, Guid employeeId);
    Task<int> GetEnrolledCountAsync(Guid trainingId);
}
