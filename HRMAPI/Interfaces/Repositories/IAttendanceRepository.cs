using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface IAttendanceRepository : IRepository<Attendance>
{
    Task<Attendance?> GetByEmployeeAndDateAsync(Guid employeeId, DateTime date);
    Task<IEnumerable<Attendance>> GetByEmployeeAsync(Guid employeeId, DateTime? startDate, DateTime? endDate);
    Task<IEnumerable<Attendance>> GetByDateAsync(DateTime date);
    Task<int> GetPresentCountAsync(DateTime date);
    Task<int> GetAbsentCountAsync(DateTime date);
}
