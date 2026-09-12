using HRMAPI.Interfaces.Services;
using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Work;
using HRMAPI.Enums;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;

namespace HRMAPI.Interfaces.Services;

public interface IWorkUpdateService
{
    Task<List<DailyWorkUpdateDto>> GetMyUpdatesAsync(Guid employeeId);
    Task<List<DailyWorkUpdateDto>> GetUpdatesByEmployeeAsync(Guid employeeId);
    Task<List<DailyWorkUpdateDto>> GetUpdatesByDateAsync(DateTime date);
    Task<DailyWorkUpdateDto> SubmitAsync(Guid employeeId, CreateDailyWorkUpdateDto dto);
    Task<DailyWorkUpdateDto> UpdateAsync(Guid id, Guid employeeId, UpdateDailyWorkUpdateDto dto);
    Task<bool> DeleteAsync(Guid id, Guid? requesterEmployeeId = null);
}
