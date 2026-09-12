using System.Security.Claims;
using HRMAPI.Data;
using HRMAPI.Interfaces.Repositories;

namespace HRMAPI.Middleware;

public class AuditMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<AuditMiddleware> _logger;

    public AuditMiddleware(RequestDelegate next, ILogger<AuditMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context, IServiceScopeFactory scopeFactory, ILogger<AuditMiddleware> logger)
    {
        var method = context.Request.Method;
        var isMutation = method == HttpMethods.Post || method == HttpMethods.Put
                         || method == HttpMethods.Patch || method == HttpMethods.Delete;

        if (isMutation)
        {
            var userIdClaim = context.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var userId = Guid.TryParse(userIdClaim, out var parsedId) ? parsedId : Guid.Empty;

            if (userId != Guid.Empty)
            {
                var remoteIp = context.Connection.RemoteIpAddress?.ToString() ?? "unknown";
                var forward = context.Request.Headers["X-Forwarded-For"].FirstOrDefault();
                if (!string.IsNullOrEmpty(forward)) remoteIp = forward;

                var module = context.Request.RouteValues["controller"]?.ToString() ?? "Unknown";
                var details = $"{method} {context.Request.Path}";

                try
                {
                    using var scope = scopeFactory.CreateScope();
                    var auditLogRepository = scope.ServiceProvider.GetRequiredService<IAuditLogRepository>();
                    var db = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
                    await auditLogRepository.LogAsync(userId, method, module, details, remoteIp);
                    await db.SaveChangesAsync();
                }
                catch (Exception ex)
                {
                    _logger.LogWarning(ex, "AuditMiddleware failed for {Method} {Path}", method, context.Request.Path);
                }
            }
        }

        await _next(context);
    }
}