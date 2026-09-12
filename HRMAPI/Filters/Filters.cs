using HRMAPI.Interfaces.Services;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Primitives;
using System.Security.Claims;
using HRMAPI.Interfaces.Repositories;

namespace HRMAPI.Filters;

/// <summary>
/// Action filter that records all mutating requests to the audit log.
/// Attach to controllers or actions with [ServiceFilter(typeof(AuditLogFilter))].
/// </summary>
public class AuditLogFilter : IAsyncActionFilter
{
    private readonly IAuditLogRepository _auditLogRepository;
    private readonly ILogger<AuditLogFilter> _logger;

    public AuditLogFilter(IAuditLogRepository auditLogRepository, ILogger<AuditLogFilter> logger)
    {
        _auditLogRepository = auditLogRepository;
        _logger = logger;
    }

    public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
    {
        var method = context.HttpContext.Request.Method;
        var isMutation = method == HttpMethods.Post || method == HttpMethods.Put || method == HttpMethods.Patch || method == HttpMethods.Delete;

        if (isMutation)
        {
            var userIdClaim = context.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
            var userId = Guid.TryParse(userIdClaim?.Value, out var uid) ? uid : Guid.Empty;

            var remoteIp = context.HttpContext.Connection.RemoteIpAddress?.ToString() ?? "unknown";
            if (context.HttpContext.Request.Headers.TryGetValue("X-Forwarded-For", out StringValues forwarded) && forwarded.Count > 0)
            {
                remoteIp = forwarded[0]!;
            }

            var controller = context.RouteData.Values["controller"]?.ToString() ?? "Unknown";
            var action = context.RouteData.Values["action"]?.ToString() ?? string.Empty;
            var details = $"{controller}.{action}";

            try
            {
                await _auditLogRepository.LogAsync(userId, method, controller, details, remoteIp);
            }
            catch (Exception ex)
            {
                _logger.LogWarning(ex, "Failed to write audit log for {Method} {Controller}.{Action}", method, controller, action);
            }
        }

        await next();
    }
}

/// <summary>
/// Global exception filter that converts exceptions into a friendly ApiResponse.
/// </summary>
public class GlobalExceptionFilter : IAsyncExceptionFilter
{
    private readonly ILogger<GlobalExceptionFilter> _logger;

    public GlobalExceptionFilter(ILogger<GlobalExceptionFilter> logger)
    {
        _logger = logger;
    }

    public async Task OnExceptionAsync(ExceptionContext context)
    {
        var exception = context.Exception;

        _logger.LogError(exception, "Unhandled exception in {Path}", context.HttpContext.Request.Path);

        var statusCode = exception switch
        {
            KeyNotFoundException _ => StatusCodes.Status404NotFound,
            UnauthorizedAccessException _ => StatusCodes.Status401Unauthorized,
            InvalidOperationException _ => StatusCodes.Status400BadRequest,
            ArgumentException _ => StatusCodes.Status400BadRequest,
            _ => StatusCodes.Status500InternalServerError
        };

        var message = exception switch
        {
            KeyNotFoundException or InvalidOperationException or ArgumentException => exception.Message,
            _ => "An unexpected error occurred."
        };

        context.Result = new Microsoft.AspNetCore.Mvc.ObjectResult(new Models.DTOs.Common.ApiResponse<object?>
        {
            Success = false,
            Message = message,
            Errors = new[] { exception.Message }
        })
        {
            StatusCode = statusCode
        };
        context.ExceptionHandled = true;

        await Task.CompletedTask;
    }
}
