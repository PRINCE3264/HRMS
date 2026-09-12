using HRMAPI.Interfaces.Services;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using HRMAPI.Data;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;

namespace HRMAPI.Interfaces.Services;

public interface IAuthService
{
    Task<User?> AuthenticateAsync(string email, string password);
    Task<string> GenerateTokenAsync(User user);
    string GenerateRefreshToken();
    Task<User?> ValidateRefreshTokenAsync(string refreshToken);
}
