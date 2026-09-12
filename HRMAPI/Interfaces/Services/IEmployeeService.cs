using HRMAPI.Interfaces.Services;
using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Models.DTOs.Employee;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;

namespace HRMAPI.Interfaces.Services;

public interface IEmployeeService
{
    Task<PaginatedResponse<EmployeeDto>> GetEmployeesAsync(PaginationQuery query, string? status = null, Guid? departmentId = null);
    Task<List<EmployeeDto>> GetAllEmployeesAsync();
    Task<EmployeeDto> GetEmployeeAsync(Guid id);
    Task<EmployeeDto> CreateEmployeeAsync(CreateEmployeeDto dto);
    Task<EmployeeDto> UpdateEmployeeAsync(Guid id, UpdateEmployeeDto dto);
    Task<bool> DeleteEmployeeAsync(Guid id);
    Task<EmployeeDto> SetEmploymentStatusAsync(Guid id, string status, DateTime? exitDate = null, string? exitReason = null);
    Task<List<EmployeeDto>> GetByDepartmentAsync(Guid departmentId);
    Task<List<EmployeeDto>> GetByTeamAsync(Guid teamId);
}
