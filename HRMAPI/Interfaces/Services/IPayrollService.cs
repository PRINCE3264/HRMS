using HRMAPI.Interfaces.Services;
using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Models.DTOs.Payroll;
using HRMAPI.Models.DTOs.Report;
using HRMAPI.Enums;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;

namespace HRMAPI.Interfaces.Services;

public interface IPayrollService
{
    Task<PaginatedResponse<PayrollRecordDto>> GetPayrollAsync(PaginationQuery query, string? month = null, int? year = null, string? status = null);
    Task<List<PayrollRecordDto>> GetByEmployeeAsync(Guid employeeId);
    Task<PayrollRecordDto> CreateAsync(CreatePayrollDto dto);
    Task<PayrollRecordDto> UpdateStatusAsync(Guid id, string status);
    Task<PayslipDto> GeneratePayslipAsync(Guid payrollId);
    Task<PayslipDto> GetPayslipAsync(Guid employeeId, string month, int year);
    Task<List<PayrollDeductionDto>> GetDeductionsAsync();
    Task<List<PayrollBonusDto>> GetBonusesAsync();
    Task<bool> DeleteAsync(Guid id);
    Task<List<SalaryStructureDto>> GetSalaryStructuresAsync(bool? activeOnly = null);
    Task<SalaryStructureDto> GetSalaryStructureAsync(Guid id);
    Task<SalaryStructureDto> GetEmployeeSalaryStructureAsync(Guid employeeId);
    Task<SalaryStructureDto> UpsertSalaryStructureAsync(UpsertSalaryStructureDto dto);
    Task<bool> DeactivateSalaryStructureAsync(Guid id);
    Task<PayrollReportDto> GetPayrollReportAsync(string? month = null, int? year = null);
    Task<PayrollReportDto> GetSalaryBreakdownAsync();
}
