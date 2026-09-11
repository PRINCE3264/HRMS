using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using HRMAPI.Data;
using HRMAPI.Models;
using HRMAPI.Repositories.Interfaces;

namespace HRMAPI.Services;

public class JwtSettings
{
    public string Key { get; set; } = string.Empty;
    public string Issuer { get; set; } = string.Empty;
    public string Audience { get; set; } = string.Empty;
    public int ExpiryInMinutes { get; set; } = 60;
    public int RefreshExpiryInDays { get; set; } = 7;
}

public class PermissionClaim
{
    public string Module { get; set; } = string.Empty;
    public List<string> Actions { get; set; } = new();
}

public interface IAuthService
{
    Task<User?> AuthenticateAsync(string email, string password);
    Task<string> GenerateTokenAsync(User user);
    string GenerateRefreshToken();
    Task<User?> ValidateRefreshTokenAsync(string refreshToken);
}

public class AuthService : IAuthService
{
    private readonly IUserRepository _userRepository;
    private readonly IRolesService _rolesService;
    private readonly JwtSettings _jwt;

    public AuthService(IUserRepository userRepository, IRolesService rolesService, IOptions<JwtSettings> jwtSettings)
    {
        _userRepository = userRepository;
        _rolesService = rolesService;
        _jwt = jwtSettings.Value;
    }

    public async Task<User?> AuthenticateAsync(string email, string password)
    {
        var user = await _userRepository.GetByEmailAsync(email);
        if (user == null || !user.IsActive) return null;
        if (!BCrypt.Net.BCrypt.Verify(password, user.PasswordHash)) return null;
        user.LastLoginAt = DateTime.UtcNow;
        await _userRepository.UpdateAsync(user);
        return user;
    }

    public async Task<string> GenerateTokenAsync(User user)
    {
        var claims = new List<Claim>
        {
            new(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new(ClaimTypes.Name, user.Email),
            new(ClaimTypes.Email, user.Email),
            new(ClaimTypes.GivenName, $"{user.FirstName} {user.LastName}"),
            new(ClaimTypes.Role, user.Role.ToString())
        };

        var permissionMap = await _rolesService.GetEffectivePermissionMapAsync(user.Role.ToString());
        var grouped = permissionMap
            .Select(kv => new PermissionClaim
            {
                Module = kv.Key,
                Actions = kv.Value.ToList()
            }).ToList();

        claims.Add(new Claim("permissions", JsonSerializer.Serialize(grouped)));

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwt.Key));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        var expiry = DateTime.UtcNow.AddMinutes(_jwt.ExpiryInMinutes);

        var token = new JwtSecurityToken(
            issuer: _jwt.Issuer,
            audience: _jwt.Audience,
            claims: claims,
            expires: expiry,
            signingCredentials: creds);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    public string GenerateRefreshToken()
    {
        return Convert.ToBase64String(RandomNumberGenerator.GetBytes(64));
    }

    public async Task<User?> ValidateRefreshTokenAsync(string refreshToken)
    {
        var user = await _userRepository.GetByRefreshTokenAsync(refreshToken);
        if (user == null || user.RefreshTokenExpiry < DateTime.UtcNow) return null;
        return user;
    }
}

public static class RolePermissionDefaults
{
    public static readonly Dictionary<string, List<string>> ModulePermissions = new()
    {
        ["dashboard"] = new() { "VIEW" },
        ["employees"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE", "EXPORT" },
        ["departments"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
        ["designations"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
        ["branches"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
        ["teams"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
        ["attendance"] = new() { "VIEW", "UPDATE", "EXPORT" },
        ["leave"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE", "APPROVE", "EXPORT" },
        ["shifts"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
        ["payroll"] = new() { "VIEW", "CREATE", "UPDATE", "APPROVE", "EXPORT" },
        ["recruitment"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
        ["onboarding"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
        ["performance"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE", "EXPORT" },
        ["training"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
        ["documents"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
        ["announcements"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
        ["reports"] = new() { "VIEW", "EXPORT" },
        ["userManagement"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
        ["rolesPermissions"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
        ["systemSettings"] = new() { "VIEW", "UPDATE" },
        ["auditLogs"] = new() { "VIEW", "EXPORT" }
    };

    public static readonly Dictionary<string, Dictionary<string, List<string>>> RolePermissionMap = new()
    {
        ["ADMIN"] = new()
        {
            ["dashboard"] = new() { "VIEW" },
            ["employees"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE", "EXPORT" },
            ["departments"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
            ["designations"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
            ["branches"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
            ["teams"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
            ["attendance"] = new() { "VIEW", "UPDATE", "EXPORT" },
            ["leave"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE", "APPROVE", "EXPORT" },
            ["shifts"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
            ["payroll"] = new() { "VIEW", "CREATE", "UPDATE", "APPROVE", "EXPORT" },
            ["recruitment"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
            ["onboarding"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
            ["performance"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE", "EXPORT" },
            ["training"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
            ["documents"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
            ["announcements"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
            ["reports"] = new() { "VIEW", "EXPORT" },
            ["userManagement"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
            ["rolesPermissions"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
            ["systemSettings"] = new() { "VIEW", "UPDATE" },
            ["auditLogs"] = new() { "VIEW", "EXPORT" }
        },
        ["HR"] = new()
        {
            ["dashboard"] = new() { "VIEW" },
            ["employees"] = new() { "VIEW", "CREATE", "UPDATE", "EXPORT" },
            ["departments"] = new() { "VIEW" },
            ["designations"] = new() { "VIEW" },
            ["branches"] = new() { "VIEW" },
            ["teams"] = new() { "VIEW" },
            ["attendance"] = new() { "VIEW", "UPDATE", "EXPORT" },
            ["leave"] = new() { "VIEW", "CREATE", "UPDATE", "APPROVE", "EXPORT" },
            ["shifts"] = new() { "VIEW", "CREATE", "UPDATE" },
            ["payroll"] = new() { "VIEW", "CREATE", "UPDATE", "EXPORT" },
            ["recruitment"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
            ["onboarding"] = new() { "VIEW", "CREATE", "UPDATE" },
            ["performance"] = new() { "VIEW", "CREATE", "UPDATE", "EXPORT" },
            ["training"] = new() { "VIEW", "CREATE", "UPDATE" },
            ["documents"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
            ["announcements"] = new() { "VIEW", "CREATE", "UPDATE" },
            ["reports"] = new() { "VIEW", "EXPORT" }
        },
        ["TL"] = new()
        {
            ["dashboard"] = new() { "VIEW" },
            ["myTeam"] = new() { "VIEW" },
            ["teamAttendance"] = new() { "VIEW" },
            ["teamLeave"] = new() { "VIEW", "APPROVE" },
            ["teamTasks"] = new() { "VIEW", "CREATE", "UPDATE", "DELETE" },
            ["teamPerformance"] = new() { "VIEW", "CREATE", "UPDATE" },
            ["kpi"] = new() { "VIEW", "CREATE", "UPDATE" },
            ["teamReports"] = new() { "VIEW", "EXPORT" },
            ["announcements"] = new() { "VIEW" }
        },
        ["EMPLOYEE"] = new()
        {
            ["dashboard"] = new() { "VIEW" },
            ["myProfile"] = new() { "VIEW", "UPDATE" },
            ["myAttendance"] = new() { "VIEW" },
            ["checkInOut"] = new() { "CREATE" },
            ["myLeave"] = new() { "VIEW" },
            ["applyLeave"] = new() { "CREATE" },
            ["myPayslips"] = new() { "VIEW", "EXPORT" },
            ["myTasks"] = new() { "VIEW", "UPDATE" },
            ["myPerformance"] = new() { "VIEW" },
            ["myDocuments"] = new() { "VIEW", "CREATE" },
            ["announcements"] = new() { "VIEW" },
            ["notifications"] = new() { "VIEW" }
        }
    };
}
