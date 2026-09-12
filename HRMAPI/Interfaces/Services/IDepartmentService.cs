using HRMAPI.Models.DTOs.Department;

namespace HRMAPI.Interfaces.Services;

public interface IDepartmentService
{
    Task<List<DepartmentDto>> GetDepartmentsAsync();
    Task<DepartmentDto> GetDepartmentAsync(Guid id);
    Task<DepartmentDto> CreateDepartmentAsync(CreateDepartmentDto dto);
    Task<DepartmentDto> UpdateDepartmentAsync(Guid id, CreateDepartmentDto dto);
    Task<bool> DeleteDepartmentAsync(Guid id);
}