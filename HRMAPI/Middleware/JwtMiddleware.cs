using System.Security.Claims;
using Microsoft.Extensions.Options;
using HRMAPI.Helpers;
using HRMAPI.Services;

namespace HRMAPI.Middleware;

public class JwtMiddleware
{
    private readonly RequestDelegate _next;

    public JwtMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context, IOptions<JwtSettings> jwtOptions, ILogger<JwtMiddleware> logger)
    {
        if (context.User.Identity?.IsAuthenticated != true)
        {
            var header = context.Request.Headers.Authorization.ToString();
            if (!string.IsNullOrEmpty(header) && header.StartsWith("Bearer ", StringComparison.OrdinalIgnoreCase))
            {
                var token = header.Substring("Bearer ".Length).Trim();
                var principal = JwtHelper.ValidateToken(jwtOptions.Value, token);
                if (principal != null)
                {
                    context.User = principal;
                }
                else
                {
                    logger.LogWarning("Invalid JWT token rejected for {Path}", context.Request.Path);
                }
            }
        }

        await _next(context);
    }
}