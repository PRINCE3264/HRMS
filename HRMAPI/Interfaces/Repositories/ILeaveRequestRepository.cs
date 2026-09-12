using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface ILeaveRequestRepository : IRepository<LeaveRequest>
{
    Task<IEnumerable<LeaveRequest>> GetByEmployeeAsync(Guid employeeId);
    Task<IEnumerable<LeaveRequest>> GetPendingAsync();
    Task<int> GetPendingCountAsync();
}
