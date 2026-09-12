using HRMAPI.Models.DTOs.Department;

namespace HRMAPI.Interfaces.Services;

public interface IDesignationService
{
    Task<List<DesignationDto>> GetDesignationsAsync();
    Task<DesignationDto> CreateDesignationAsync(CreateDesignationDto dto);
    Task<DesignationDto> UpdateDesignationAsync(Guid id, CreateDesignationDto dto);
    Task<bool> DeleteDesignationAsync(Guid id);
}