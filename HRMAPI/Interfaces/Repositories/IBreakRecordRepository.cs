using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface IBreakRecordRepository : IRepository<BreakRecord>
{
    Task<BreakRecord?> GetActiveBreakAsync(Guid attendanceId);
}
