using HRMAPI.Interfaces.Services;
using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Models.DTOs.Leave;
using HRMAPI.Enums;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;

namespace HRMAPI.Interfaces.Services;

public interface ILeaveService
{
    Task<PaginatedResponse<LeaveRequestDto>> GetRequestsAsync(PaginationQuery query, string? status = null);
    Task<List<LeaveRequestDto>> GetByEmployeeAsync(Guid employeeId);
    Task<List<LeaveRequestDto>> GetPendingAsync();
    Task<LeaveRequestDto> ApplyAsync(Guid employeeId, CreateLeaveRequestDto dto);
    Task<LeaveRequestDto> ApproveOrRejectAsync(Guid id, ApproveLeaveDto dto, Guid approvedById);
    Task<List<LeaveBalanceDto>> GetBalancesAsync(Guid employeeId);
    Task<bool> CancelAsync(Guid id);
}
