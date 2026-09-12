using HRMAPI.Interfaces.Services;
using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Management;
using HRMAPI.Enums;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Services;

public interface IManagementService
{
    Task<List<ManagedEmployeeDto>> GetEmployeesAsync(string? role);
    Task<List<TeamLeadManagementDto>> GetTeamLeadsAsync();
    Task<List<ManagedEmployeeDto>> GetHrMembersAsync();
    Task<ManagedEmployeeDto> AssignRoleAsync(Guid employeeId, string role);
}
