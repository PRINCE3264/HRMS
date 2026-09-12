using System.Text.Json;
using HRMAPI.Helpers;
using HRMAPI.Models.DTOs.Common;

namespace HRMAPI.Middleware;

public class ExceptionMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ExceptionMiddleware> _logger;

    public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Unhandled exception in {Path}", context.Request.Path);

            var status = ex switch
            {
                KeyNotFoundException => StatusCodes.Status404NotFound,
                UnauthorizedAccessException => StatusCodes.Status401Unauthorized,
                InvalidOperationException or ArgumentException => StatusCodes.Status400BadRequest,
                _ => StatusCodes.Status500InternalServerError
            };

            var message = ex is KeyNotFoundException or InvalidOperationException or ArgumentException
                ? ex.Message
                : "An unexpected error occurred.";

            context.Response.StatusCode = status;
            context.Response.ContentType = "application/json; charset=utf-8";

            var body = ResponseHelper.Fail<object?>(message, new[] { ex.Message });
            await context.Response.WriteAsync(JsonSerializer.Serialize(body));
        }
    }
}