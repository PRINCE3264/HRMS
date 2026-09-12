using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface IPayslipRepository : IRepository<Payslip>
{
    Task<Payslip?> GetByPayrollIdAsync(Guid payrollId);
}
