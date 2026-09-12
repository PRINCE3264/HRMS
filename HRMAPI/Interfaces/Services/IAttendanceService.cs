using HRMAPI.Interfaces.Services;
using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Attendance;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Enums;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;

namespace HRMAPI.Interfaces.Services;

public interface IAttendanceService
{
    Task<AttendanceDto> CheckInAsync(Guid employeeId, CheckInOutDto dto);
    Task<AttendanceDto> CheckOutAsync(Guid employeeId, CheckInOutDto dto);
    Task<AttendanceDto> GetTodayAttendanceAsync(Guid employeeId);
    Task<List<AttendanceDto>> GetByEmployeeAsync(Guid employeeId, DateTime? startDate, DateTime? endDate);
    Task<List<AttendanceDto>> GetByDateAsync(DateTime date);
    Task<PaginatedResponse<AttendanceDto>> GetPaginatedAsync(PaginationQuery query, DateTime? date = null);
    Task<BreakRecordDto> StartBreakAsync(Guid employeeId, StartBreakDto dto);
    Task<BreakRecordDto> EndBreakAsync(Guid employeeId);
    Task<AttendanceSummaryDto> GetSummaryAsync(Guid employeeId, DateTime? startDate, DateTime? endDate);
    Task<List<AttendanceSummaryDto>> GetTeamSummaryAsync(DateTime? startDate, DateTime? endDate);
    Task<List<AttendanceDto>> GetLateArrivalsAsync(DateTime? startDate, DateTime? endDate);
    Task<List<AttendanceCorrectionDto>> GetCorrectionsAsync(PaginationQuery query, string? status = null, Guid? employeeId = null);
    Task<AttendanceCorrectionDto> CreateCorrectionAsync(CreateAttendanceCorrectionDto dto, Guid requestedBy);
    Task<AttendanceCorrectionDto> ReviewCorrectionAsync(Guid id, UpdateAttendanceCorrectionDto dto, Guid reviewedBy);
    Task<List<AttendanceRuleDto>> GetRulesAsync(bool? activeOnly = null);
    Task<AttendanceRuleDto> UpsertRuleAsync(UpsertAttendanceRuleDto dto);
    Task<bool> DeleteRuleAsync(Guid id);
}
