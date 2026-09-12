using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface IOnboardingRepository : IRepository<Onboarding>
{
    Task<Onboarding?> GetWithTasksAsync(Guid id);
    Task<IEnumerable<Onboarding>> GetByEmployeeAsync(Guid employeeId);
    Task<Onboarding?> GetActiveByEmployeeAsync(Guid employeeId);
}
