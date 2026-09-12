using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface IPayrollRecordRepository : IRepository<PayrollRecord>
{
    Task<IEnumerable<PayrollRecord>> GetByEmployeeAsync(Guid employeeId);
    Task<IEnumerable<PayrollRecord>> GetByMonthAsync(string month, int year);
    Task<PayrollRecord?> GetByEmployeeAndMonthAsync(Guid employeeId, string month, int year);
}
