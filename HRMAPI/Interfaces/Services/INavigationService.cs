using HRMAPI.Interfaces.Services;
using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Navigation;

namespace HRMAPI.Interfaces.Services;

public interface INavigationService
{
    Task<List<NavigationModuleDto>> GetMenuAsync(string role, Guid? roleId);
}
