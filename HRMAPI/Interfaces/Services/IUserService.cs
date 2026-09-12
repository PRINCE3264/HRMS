using HRMAPI.Interfaces.Services;
using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.User;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;
using HRMAPI.Services;

namespace HRMAPI.Interfaces.Services;

public interface IUserService
{
    Task<User?> GetByIdAsync(Guid id);
    Task<User?> GetByEmailAsync(string email);
    Task<IEnumerable<User>> GetAllAsync();
    Task<User> CreateUserAsync(RegisterRequestDto request);
    Task<UserDto> GetUserDtoAsync(Guid id);
    Task<List<UserDto>> GetUserDtosAsync();
    Task<User> UpdateUserAsync(Guid id, UpdateUserDto dto);
    Task<bool> ChangePasswordAsync(Guid id, ChangePasswordDto dto);
    Task<bool> ResetPasswordAsync(Guid id, string newPassword);
    Task<bool> DeleteUserAsync(Guid id);
    Task<bool> SetMfaAsync(Guid id, bool enabled);
}
