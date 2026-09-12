using HRMAPI.Models.DTOs.Common;

namespace HRMAPI.Helpers;

public static class ResponseHelper
{
    public static ApiResponse<T> Ok<T>(T data, string? message = null) => ApiResponse<T>.Ok(data, message);

    public static ApiResponse<T> Fail<T>(string message, string[]? errors = null) => ApiResponse<T>.Fail(message, errors);
}