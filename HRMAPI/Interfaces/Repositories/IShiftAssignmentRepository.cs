using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface IShiftAssignmentRepository : IRepository<ShiftAssignment>
{
    Task<ShiftAssignment?> GetActiveAssignmentAsync(Guid employeeId);
}
