using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface ISystemSettingRepository : IRepository<SystemSetting>
{
    Task<SystemSetting?> GetByKeyAsync(string key);
    Task<IEnumerable<SystemSetting>> GetByCategoryAsync(string category);
    Task<Dictionary<string, string>> GetAllAsDictionaryAsync();
}
