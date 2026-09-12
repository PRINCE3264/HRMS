using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface ILeaveBalanceRepository : IRepository<LeaveBalance>
{
    Task<LeaveBalance?> GetByEmployeeAndTypeAsync(Guid employeeId, Enums.LeaveType leaveType, int year);
    Task<IEnumerable<LeaveBalance>> GetByEmployeeAsync(Guid employeeId, int year);
}
