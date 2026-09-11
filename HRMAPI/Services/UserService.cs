using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.DTOs.User;
using HRMAPI.Models;
using HRMAPI.Repositories.Interfaces;
using HRMAPI.Services;

namespace HRMAPI.Services;

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

public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;
    private readonly IEmployeeRepository _employeeRepository;
    private readonly IRolesService _rolesService;
    private readonly ApplicationDbContext _context;

    public UserService(IUserRepository userRepository, IEmployeeRepository employeeRepository, IRolesService rolesService, ApplicationDbContext context)
    {
        _userRepository = userRepository;
        _employeeRepository = employeeRepository;
        _rolesService = rolesService;
        _context = context;
    }

    public async Task<User?> GetByIdAsync(Guid id) => await _userRepository.GetByIdAsync(id);

    public async Task<User?> GetByEmailAsync(string email) => await _userRepository.GetByEmailAsync(email);

    public async Task<IEnumerable<User>> GetAllAsync() => await _userRepository.GetAllAsync();

    public async Task<User> CreateUserAsync(RegisterRequestDto request)
    {
        var existing = await _userRepository.GetByEmailAsync(request.Email);
        if (existing != null) throw new InvalidOperationException("Email already exists.");

        var role = Enum.TryParse<Enums.UserRole>(request.Role, ignoreCase: true, out var parsed)
            ? parsed
            : Enums.UserRole.EMPLOYEE;

        var employee = await _employeeRepository.GetByEmailAsync(request.Email);

        var user = new User
        {
            FirstName = request.FirstName,
            LastName = request.LastName,
            Email = request.Email,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(request.Password),
            Role = role,
            Department = request.Department,
            Designation = request.Designation,
            EmployeeId = employee?.Id
        };

        return await _userRepository.AddAsync(user);
    }

    public async Task<UserDto> GetUserDtoAsync(Guid id)
    {
        var user = await _userRepository.GetByIdAsync(id);
        if (user == null) throw new KeyNotFoundException("User not found.");
        return await MapToDtoAsync(user);
    }

    public async Task<List<UserDto>> GetUserDtosAsync()
    {
        var users = await _userRepository.GetAllAsync();
        var result = new List<UserDto>();
        foreach (var user in users)
        {
            result.Add(await MapToDtoAsync(user));
        }
        return result;
    }

    public async Task<User> UpdateUserAsync(Guid id, UpdateUserDto dto)
    {
        var user = await _userRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("User not found.");
        if (dto.FirstName != null) user.FirstName = dto.FirstName;
        if (dto.LastName != null) user.LastName = dto.LastName;
        if (dto.Email != null)
        {
            var dup = await _userRepository.GetByEmailAsync(dto.Email);
            if (dup != null && dup.Id != id) throw new InvalidOperationException("Email already in use.");
            user.Email = dto.Email;
        }
        if (dto.Avatar != null) user.Avatar = dto.Avatar;
        if (dto.Department != null) user.Department = dto.Department;
        if (dto.Designation != null) user.Designation = dto.Designation;
        if (dto.Branch != null) user.Branch = dto.Branch;
        user.UpdatedAt = DateTime.UtcNow;
        await _userRepository.UpdateAsync(user);
        return user;
    }

    public async Task<bool> ChangePasswordAsync(Guid id, ChangePasswordDto dto)
    {
        var user = await _userRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("User not found.");
        if (!BCrypt.Net.BCrypt.Verify(dto.CurrentPassword, user.PasswordHash))
            throw new InvalidOperationException("Current password is incorrect.");
        if (dto.NewPassword != dto.ConfirmPassword)
            throw new InvalidOperationException("Passwords do not match.");
        user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.NewPassword);
        user.UpdatedAt = DateTime.UtcNow;
        await _userRepository.UpdateAsync(user);
        return true;
    }

    public async Task<bool> DeleteUserAsync(Guid id)
    {
        var user = await _userRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("User not found.");
        user.IsActive = false;
        user.UpdatedAt = DateTime.UtcNow;
        await _userRepository.UpdateAsync(user);
        return true;
    }

    public async Task<bool> ResetPasswordAsync(Guid id, string newPassword)
    {
        var user = await _userRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("User not found.");
        user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(newPassword);
        user.UpdatedAt = DateTime.UtcNow;
        await _userRepository.UpdateAsync(user);
        return true;
    }

    public async Task<bool> SetMfaAsync(Guid id, bool enabled)
    {
        var user = await _userRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("User not found.");
        user.MfaEnabled = enabled;
        user.UpdatedAt = DateTime.UtcNow;
        await _userRepository.UpdateAsync(user);
        return true;
    }

    private async Task<UserDto> MapToDtoAsync(User user)
    {
        var permissionMap = await _rolesService.GetEffectivePermissionMapAsync(user.Role.ToString());
        var permissions = permissionMap
            .Select(kv => new PermissionDto
            {
                Module = kv.Key,
                Actions = kv.Value.ToList()
            }).ToList();

        return new UserDto
        {
            Id = user.Id,
            Email = user.Email,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Role = user.Role.ToString(),
            Avatar = user.Avatar,
            Department = user.Department,
            Designation = user.Designation,
            Branch = user.Branch,
            EmployeeId = user.EmployeeId,
            Permissions = permissions
        };
    }
}
