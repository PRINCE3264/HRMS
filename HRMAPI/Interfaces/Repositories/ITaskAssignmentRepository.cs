using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface ITaskAssignmentRepository : IRepository<TaskAssignment>
{
    Task<IEnumerable<TaskAssignment>> GetByAssignedToAsync(Guid employeeId);
    Task<IEnumerable<TaskAssignment>> GetByAssignedByAsync(Guid employeeId);
}
