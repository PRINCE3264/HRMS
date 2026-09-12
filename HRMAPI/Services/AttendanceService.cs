using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Attendance;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Enums;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Services;



public class AttendanceService : IAttendanceService
{
    private readonly IAttendanceRepository _attendanceRepository;
    private readonly IBreakRecordRepository _breakRecordRepository;
    private readonly IEmployeeRepository _employeeRepository;
    private readonly IShiftAssignmentRepository _shiftAssignmentRepository;
    private readonly ApplicationDbContext _context;

    public AttendanceService(
        IAttendanceRepository attendanceRepository,
        IBreakRecordRepository breakRecordRepository,
        IEmployeeRepository employeeRepository,
        IShiftAssignmentRepository shiftAssignmentRepository,
        ApplicationDbContext context)
    {
        _attendanceRepository = attendanceRepository;
        _breakRecordRepository = breakRecordRepository;
        _employeeRepository = employeeRepository;
        _shiftAssignmentRepository = shiftAssignmentRepository;
        _context = context;
    }

    public async Task<AttendanceDto> CheckInAsync(Guid employeeId, CheckInOutDto dto)
    {
        var today = DateTime.UtcNow.Date;
        var existing = await _attendanceRepository.GetByEmployeeAndDateAsync(employeeId, today);
        if (existing?.CheckIn != null) throw new InvalidOperationException("Already checked in today.");

        var now = DateTime.UtcNow;
        var status = DetermineCheckInStatus(employeeId, now);

        var attendance = existing ?? new Attendance
        {
            EmployeeId = employeeId,
            Date = today,
            Status = AttendanceStatus.PRESENT
        };

        attendance.CheckIn = now;
        attendance.Location = dto.Location;
        attendance.Latitude = dto.Latitude;
        attendance.Longitude = dto.Longitude;
        attendance.Notes = dto.Notes;
        attendance.Status = status;

        if (existing == null)
        {
            await _attendanceRepository.AddAsync(attendance);
        }
        else
        {
            await _attendanceRepository.UpdateAsync(attendance);
        }

        return await MapToDtoAsync(attendance);
    }

    public async Task<AttendanceDto> CheckOutAsync(Guid employeeId, CheckInOutDto dto)
    {
        var today = DateTime.UtcNow.Date;
        var attendance = await _attendanceRepository.GetByEmployeeAndDateAsync(employeeId, today)
            ?? throw new InvalidOperationException("No check-in found for today.");

        if (attendance.CheckOut != null) throw new InvalidOperationException("Already checked out today.");

        // End any active break first
        var activeBreak = await _breakRecordRepository.GetActiveBreakAsync(attendance.Id);
        if (activeBreak != null)
        {
            activeBreak.EndTime = DateTime.UtcNow;
            activeBreak.DurationMinutes = (decimal)(activeBreak.EndTime.Value - activeBreak.StartTime).TotalMinutes;
            await _breakRecordRepository.UpdateAsync(activeBreak);
        }

        attendance.CheckOut = DateTime.UtcNow;
        var checkIn = attendance.CheckIn ?? DateTime.UtcNow;
        var checkOut = attendance.CheckOut ?? DateTime.UtcNow;
        attendance.WorkHours = CalculateWorkHours(checkIn, checkOut);
        attendance.Status = AttendanceStatus.PRESENT;
        await _attendanceRepository.UpdateAsync(attendance);

        return await MapToDtoAsync(attendance);
    }

    public async Task<AttendanceDto> GetTodayAttendanceAsync(Guid employeeId)
    {
        var today = DateTime.UtcNow.Date;
        var attendance = await _attendanceRepository.GetByEmployeeAndDateAsync(employeeId, today);
        if (attendance == null)
        {
            return new AttendanceDto
            {
                Id = Guid.Empty,
                EmployeeId = employeeId,
                Date = today,
                Status = AttendanceStatus.ABSENT.ToString()
            };
        }
        return await MapToDtoAsync(attendance);
    }

    public async Task<List<AttendanceDto>> GetByEmployeeAsync(Guid employeeId, DateTime? startDate, DateTime? endDate)
    {
        var records = await _attendanceRepository.GetByEmployeeAsync(employeeId, startDate, endDate);
        var result = new List<AttendanceDto>();
        foreach (var r in records) result.Add(await MapToDtoAsync(r));
        return result;
    }

    public async Task<List<AttendanceDto>> GetByDateAsync(DateTime date)
    {
        var records = await _attendanceRepository.GetByDateAsync(date);
        var result = new List<AttendanceDto>();
        foreach (var r in records) result.Add(await MapToDtoAsync(r));
        return result;
    }

    public async Task<PaginatedResponse<AttendanceDto>> GetPaginatedAsync(PaginationQuery query, DateTime? date = null)
    {
        var dbQuery = _context.Attendances
            .Include(a => a.Employee)
            .ThenInclude(e => e.Department)
            .AsQueryable();

        if (date.HasValue)
        {
            var d = date.Value.Date;
            dbQuery = dbQuery.Where(a => a.Date.Date == d);
        }

        if (!string.IsNullOrWhiteSpace(query.Search))
        {
            var search = query.Search.ToLower();
            dbQuery = dbQuery.Where(a =>
                a.Employee.FirstName.ToLower().Contains(search) ||
                a.Employee.LastName.ToLower().Contains(search) ||
                a.Employee.EmployeeId.ToLower().Contains(search) ||
                a.Status.ToString().ToLower().Contains(search));
        }

        var total = await dbQuery.CountAsync();
        var items = await dbQuery
            .OrderByDescending(a => a.Date)
            .Skip((query.Page - 1) * query.PageSize)
            .Take(query.PageSize)
            .ToListAsync();

        var result = new List<AttendanceDto>();
        foreach (var i in items) result.Add(await MapToDtoAsync(i));

        return new PaginatedResponse<AttendanceDto>
        {
            Items = result,
            Total = total,
            Page = query.Page,
            PageSize = query.PageSize
        };
    }

    public async Task<BreakRecordDto> StartBreakAsync(Guid employeeId, StartBreakDto dto)
    {
        var today = DateTime.UtcNow.Date;
        var attendance = await _attendanceRepository.GetByEmployeeAndDateAsync(employeeId, today)
            ?? throw new InvalidOperationException("No active attendance. Please check in first.");

        var active = await _breakRecordRepository.GetActiveBreakAsync(attendance.Id);
        if (active != null) throw new InvalidOperationException("A break is already active. End it first.");

        var breakType = Enum.TryParse<BreakType>(dto.BreakType, ignoreCase: true, out var bt)
            ? bt : BreakType.SHORT;

        var breakRecord = new BreakRecord
        {
            AttendanceId = attendance.Id,
            StartTime = DateTime.UtcNow,
            BreakType = breakType,
            Reason = dto.Reason
        };
        await _breakRecordRepository.AddAsync(breakRecord);

        return new BreakRecordDto
        {
            Id = breakRecord.Id,
            StartTime = breakRecord.StartTime,
            BreakType = breakRecord.BreakType.ToString(),
            Reason = breakRecord.Reason
        };
    }

    public async Task<BreakRecordDto> EndBreakAsync(Guid employeeId)
    {
        var today = DateTime.UtcNow.Date;
        var attendance = await _attendanceRepository.GetByEmployeeAndDateAsync(employeeId, today)
            ?? throw new InvalidOperationException("No active attendance.");

        var active = await _breakRecordRepository.GetActiveBreakAsync(attendance.Id)
            ?? throw new InvalidOperationException("No active break.");

        active.EndTime = DateTime.UtcNow;
        active.DurationMinutes = (decimal)(active.EndTime.Value - active.StartTime).TotalMinutes;
        await _breakRecordRepository.UpdateAsync(active);

        return new BreakRecordDto
        {
            Id = active.Id,
            StartTime = active.StartTime,
            EndTime = active.EndTime,
            BreakType = active.BreakType.ToString(),
            DurationMinutes = active.DurationMinutes,
            Reason = active.Reason
        };
    }

    private async Task<AttendanceDto> MapToDtoAsync(Attendance a)
    {
        var employee = a.Employee ?? await _employeeRepository.GetByIdAsync(a.EmployeeId);
        return new AttendanceDto
        {
            Id = a.Id,
            EmployeeId = a.EmployeeId,
            EmployeeName = employee != null ? $"{employee.FirstName} {employee.LastName}" : null,
            Date = a.Date,
            CheckIn = a.CheckIn,
            CheckOut = a.CheckOut,
            WorkHours = a.WorkHours,
            Overtime = a.Overtime,
            Status = a.Status.ToString(),
            Location = a.Location,
            Latitude = a.Latitude,
            Longitude = a.Longitude,
            Notes = a.Notes,
            Breaks = a.Breaks.Select(b => new BreakRecordDto
            {
                Id = b.Id,
                StartTime = b.StartTime,
                EndTime = b.EndTime,
                BreakType = b.BreakType.ToString(),
                DurationMinutes = b.DurationMinutes,
                Reason = b.Reason
            }).ToList()
        };
    }

    private AttendanceStatus DetermineCheckInStatus(Guid employeeId, DateTime now)
    {
        var assignment = _shiftAssignmentRepository.GetActiveAssignmentAsync(employeeId).Result;
        if (assignment?.Shift != null)
        {
            var shiftStart = assignment.Shift.StartTime;
            var graceMinutes = 15;
            if (TimeOnly.FromDateTime(now) > shiftStart.AddMinutes(graceMinutes))
            {
                return AttendanceStatus.LATE;
            }
        }
        return AttendanceStatus.PRESENT;
    }

    public async Task<AttendanceSummaryDto> GetSummaryAsync(Guid employeeId, DateTime? startDate, DateTime? endDate)
    {
        var start = startDate ?? DateTime.UtcNow.AddMonths(-1);
        var end = endDate ?? DateTime.UtcNow.Date;

        var records = await _context.Attendances
            .Include(a => a.Employee)
            .Where(a => a.EmployeeId == employeeId && a.Date.Date >= start.Date && a.Date.Date <= end.Date)
            .AsNoTracking()
            .ToListAsync();

        var totalDays = (int)(end.Date - start.Date).Days + 1;
        var worked = records.Where(r =>
            r.Status == AttendanceStatus.PRESENT || r.Status == AttendanceStatus.HALF_DAY || r.Status == AttendanceStatus.LATE);

        return BuildSummary(records, worked, totalDays);
    }

    public async Task<List<AttendanceSummaryDto>> GetTeamSummaryAsync(DateTime? startDate, DateTime? endDate)
    {
        var start = startDate ?? DateTime.UtcNow.AddMonths(-1);
        var end = endDate ?? DateTime.UtcNow.Date;

        var records = await _context.Attendances
            .Include(a => a.Employee)
            .Where(a => a.Date.Date >= start.Date && a.Date.Date <= end.Date)
            .AsNoTracking()
            .ToListAsync();

        var grouped = records.GroupBy(a => a.EmployeeId);
        var totalDays = (int)(end.Date - start.Date).Days + 1;
        var result = new List<AttendanceSummaryDto>();

        foreach (var group in grouped)
        {
            var emp = group.First().Employee;
            var worked = group.Where(r =>
                r.Status == AttendanceStatus.PRESENT || r.Status == AttendanceStatus.HALF_DAY || r.Status == AttendanceStatus.LATE);
            var summary = BuildSummary(group.ToList(), worked, totalDays);
            summary.EmployeeName = emp != null ? $"{emp.FirstName} {emp.LastName}" : string.Empty;
            summary.EmployeeCode = emp?.EmployeeId ?? string.Empty;
            result.Add(summary);
        }
        return result.OrderByDescending(s => s.PresentDays).ToList();
    }

    private static AttendanceSummaryDto BuildSummary(List<Attendance> records, IEnumerable<Attendance> worked, int totalDays)
    {
        var lateCount = records.Count(r => r.Status == AttendanceStatus.LATE);
        return new AttendanceSummaryDto
        {
            PresentDays = records.Count(r => r.Status == AttendanceStatus.PRESENT || r.Status == AttendanceStatus.HALF_DAY),
            AbsentDays = records.Count(r => r.Status == AttendanceStatus.ABSENT),
            LateDays = lateCount,
            EarlyDays = records.Count(r => r.CheckOut != null && TimeOnly.FromDateTime(r.CheckOut.Value).Hour < 17),
            LeaveDays = records.Count(r => r.Status == AttendanceStatus.ON_LEAVE),
            TotalWorkHours = worked.Sum(r => r.WorkHours),
            TotalOvertime = worked.Sum(r => r.Overtime),
            AttendancePercent = totalDays > 0
                ? (double)Math.Round((decimal)records.Count(r =>
                    r.Status == AttendanceStatus.PRESENT || r.Status == AttendanceStatus.HALF_DAY ||
                    r.Status == AttendanceStatus.LATE) / totalDays * 100, 1)
                : 0
        };
    }

    public async Task<List<AttendanceDto>> GetLateArrivalsAsync(DateTime? startDate, DateTime? endDate)
    {
        var start = startDate ?? DateTime.UtcNow.AddMonths(-1);
        var end = endDate ?? DateTime.UtcNow.Date;

        var records = await _context.Attendances
            .Include(a => a.Employee)
            .Where(a => a.Status == AttendanceStatus.LATE && a.Date.Date >= start.Date && a.Date.Date <= end.Date)
            .OrderByDescending(a => a.Date)
            .Take(100)
            .AsNoTracking()
            .ToListAsync();

        var result = new List<AttendanceDto>();
        foreach (var r in records) result.Add(await MapToDtoAsync(r));
        return result;
    }

    public async Task<List<AttendanceCorrectionDto>> GetCorrectionsAsync(PaginationQuery query, string? status = null, Guid? employeeId = null)
    {
        var dbQuery = _context.AttendanceCorrections
            .Include(c => c.Employee)
            .Include(c => c.RequestedBy)
            .Include(c => c.ApprovedBy)
            .Include(c => c.Attendance)
            .AsNoTracking()
            .AsQueryable();

        if (employeeId.HasValue) dbQuery = dbQuery.Where(c => c.EmployeeId == employeeId.Value);
        if (!string.IsNullOrWhiteSpace(status) && Enum.TryParse<AttendanceCorrectionStatus>(status, true, out var s))
        {
            dbQuery = dbQuery.Where(c => c.Status == s);
        }

        var items = await dbQuery.OrderByDescending(c => c.CreatedAt).ToListAsync();
        return items.Select(c => new AttendanceCorrectionDto
        {
            Id = c.Id,
            AttendanceId = c.AttendanceId,
            EmployeeId = c.EmployeeId,
            EmployeeName = c.Employee != null ? $"{c.Employee.FirstName} {c.Employee.LastName}" : null,
            EmployeeCode = c.Employee?.EmployeeId,
            Date = c.Attendance.Date,
            OriginalCheckIn = c.OriginalCheckIn,
            OriginalCheckOut = c.OriginalCheckOut,
            CorrectedCheckIn = c.CorrectedCheckIn,
            CorrectedCheckOut = c.CorrectedCheckOut,
            Reason = c.Reason,
            Status = c.Status.ToString(),
            RequestedById = c.RequestedById,
            RequestedByName = c.RequestedBy != null ? $"{c.RequestedBy.FirstName} {c.RequestedBy.LastName}" : null,
            ApprovedById = c.ApprovedById,
            ApprovedByName = c.ApprovedBy != null ? $"{c.ApprovedBy.FirstName} {c.ApprovedBy.LastName}" : null,
            RejectionReason = c.RejectionReason,
            CreatedAt = c.CreatedAt,
            ReviewedAt = c.ReviewedAt
        }).ToList();
    }

    public async Task<AttendanceCorrectionDto> CreateCorrectionAsync(CreateAttendanceCorrectionDto dto, Guid requestedBy)
    {
        Attendance attendance;
        if (dto.AttendanceId != Guid.Empty)
        {
            attendance = await _context.Attendances
                .Include(a => a.Employee)
                .FirstOrDefaultAsync(a => a.Id == dto.AttendanceId)
                ?? throw new KeyNotFoundException("Attendance record not found.");
        }
        else
        {
            var targetDate = dto.Date != default ? dto.Date.Date : DateTime.Today;
            attendance = await _context.Attendances
                .Include(a => a.Employee)
                .FirstOrDefaultAsync(a => a.EmployeeId == dto.EmployeeId && a.Date.Date == targetDate)
                ?? new Attendance
                {
                    EmployeeId = dto.EmployeeId,
                    Date = targetDate,
                    Status = AttendanceStatus.ABSENT
                };
            _context.Attendances.Add(attendance);
            await _context.SaveChangesAsync();
        }

        if (!dto.CorrectedCheckIn.HasValue && !dto.CorrectedCheckOut.HasValue)
        {
            throw new InvalidOperationException("Provide at least one corrected value.");
        }

        var correction = new AttendanceCorrection
        {
            AttendanceId = attendance.Id,
            EmployeeId = attendance.EmployeeId,
            OriginalCheckIn = attendance.CheckIn ?? attendance.Date,
            OriginalCheckOut = attendance.CheckOut ?? attendance.Date,
            CorrectedCheckIn = dto.CorrectedCheckIn,
            CorrectedCheckOut = dto.CorrectedCheckOut,
            Reason = dto.Reason,
            RequestedById = requestedBy,
            Status = AttendanceCorrectionStatus.PENDING
        };

        _context.AttendanceCorrections.Add(correction);
        await _context.SaveChangesAsync();

        var fresh = await _context.AttendanceCorrections
            .Include(c => c.Employee)
            .Include(c => c.RequestedBy)
            .Include(c => c.Attendance)
            .FirstOrDefaultAsync(c => c.Id == correction.Id);
        return MapCorrection(fresh!);
    }

    public async Task<AttendanceCorrectionDto> ReviewCorrectionAsync(Guid id, UpdateAttendanceCorrectionDto dto, Guid reviewedBy)
    {
        var correction = await _context.AttendanceCorrections
            .Include(c => c.Employee)
            .Include(c => c.RequestedBy)
            .Include(c => c.ApprovedBy)
            .Include(c => c.Attendance)
            .FirstOrDefaultAsync(c => c.Id == id)
            ?? throw new KeyNotFoundException("Correction request not found.");

        if (correction.Status != AttendanceCorrectionStatus.PENDING)
            throw new InvalidOperationException("Correction request already reviewed.");

        if (!Enum.TryParse<AttendanceCorrectionStatus>(dto.Status, true, out var status) || status == AttendanceCorrectionStatus.PENDING)
            throw new InvalidOperationException("Invalid status. Use APPROVED or REJECTED.");

        correction.Status = status;
        correction.ApprovedById = reviewedBy;
        correction.RejectionReason = dto.RejectionReason;
        correction.ReviewedAt = DateTime.UtcNow;

        if (status == AttendanceCorrectionStatus.APPROVED)
        {
            var attendance = await _context.Attendances.FindAsync(correction.AttendanceId);
            if (attendance != null)
            {
                if (correction.CorrectedCheckIn.HasValue) attendance.CheckIn = correction.CorrectedCheckIn.Value;
                if (correction.CorrectedCheckOut.HasValue) attendance.CheckOut = correction.CorrectedCheckOut.Value;
                var ci = attendance.CheckIn ?? attendance.Date;
                var co = attendance.CheckOut ?? attendance.Date;
                attendance.WorkHours = CalculateWorkHours(ci, co);
            }
        }
        await _context.SaveChangesAsync();

        var fresh = await _context.AttendanceCorrections
            .Include(c => c.Employee)
            .Include(c => c.RequestedBy)
            .Include(c => c.ApprovedBy)
            .Include(c => c.Attendance)
            .FirstOrDefaultAsync(c => c.Id == correction.Id);
        return MapCorrection(fresh!);
    }

    public async Task<List<AttendanceRuleDto>> GetRulesAsync(bool? activeOnly = null)
    {
        var query = _context.AttendanceRules.AsNoTracking().AsQueryable();
        if (activeOnly.HasValue) query = query.Where(r => r.IsActive == activeOnly.Value);
        var rules = await query.OrderBy(r => r.CreatedAt).ToListAsync();
        return rules.Select(r => new AttendanceRuleDto
        {
            Id = r.Id,
            Name = r.Name,
            LateThresholdTime = r.LateThresholdTime.HasValue ? r.LateThresholdTime.Value.ToString() : null,
            GraceMinutes = r.GraceMinutes,
            MinWorkHours = r.MinWorkHours,
            MaxBreakMinutes = r.MaxBreakMinutes,
            OvertimeAfterHours = r.OvertimeAfterHours,
            OvertimePolicy = r.OvertimePolicy.ToString(),
            AutoMarkAbsentOnNoCheckIn = r.AutoMarkAbsentOnNoCheckIn,
            Description = r.Description,
            IsActive = r.IsActive
        }).ToList();
    }

    public async Task<AttendanceRuleDto> UpsertRuleAsync(UpsertAttendanceRuleDto dto)
    {
        if (!Enum.TryParse<OvertimePolicy>(dto.OvertimePolicy, true, out var policy))
            policy = OvertimePolicy.NONE;

        TimeOnly? threshold = null;
        if (!string.IsNullOrWhiteSpace(dto.LateThresholdTime) && TimeOnly.TryParse(dto.LateThresholdTime, out var t))
            threshold = t;

        var rule = new AttendanceRule
        {
            Name = dto.Name,
            LateThresholdTime = threshold,
            GraceMinutes = dto.GraceMinutes,
            MinWorkHours = dto.MinWorkHours,
            MaxBreakMinutes = dto.MaxBreakMinutes,
            OvertimeAfterHours = dto.OvertimeAfterHours,
            OvertimePolicy = policy,
            AutoMarkAbsentOnNoCheckIn = dto.AutoMarkAbsentOnNoCheckIn,
            Description = dto.Description,
            IsActive = dto.IsActive,
            CreatedAt = DateTime.UtcNow
        };
        _context.AttendanceRules.Add(rule);
        await _context.SaveChangesAsync();

        var fresh = await _context.AttendanceRules.FindAsync(rule.Id);
        return (await GetRulesAsync(true)).First(r => r.Id == fresh!.Id);
    }

    public async Task<bool> DeleteRuleAsync(Guid id)
    {
        var rule = await _context.AttendanceRules.FindAsync(id)
            ?? throw new KeyNotFoundException("Attendance rule not found.");
        _context.AttendanceRules.Remove(rule);
        await _context.SaveChangesAsync();
        return true;
    }

    private static AttendanceCorrectionDto MapCorrection(AttendanceCorrection c) => new()
    {
        Id = c.Id,
        AttendanceId = c.AttendanceId,
        EmployeeId = c.EmployeeId,
        EmployeeName = c.Employee != null ? $"{c.Employee.FirstName} {c.Employee.LastName}" : null,
        EmployeeCode = c.Employee?.EmployeeId,
        Date = c.Attendance?.Date ?? DateTime.UtcNow,
        OriginalCheckIn = c.OriginalCheckIn,
        OriginalCheckOut = c.OriginalCheckOut,
        CorrectedCheckIn = c.CorrectedCheckIn,
        CorrectedCheckOut = c.CorrectedCheckOut,
        Reason = c.Reason,
        Status = c.Status.ToString(),
        RequestedById = c.RequestedById,
        RequestedByName = c.RequestedBy != null ? $"{c.RequestedBy.FirstName} {c.RequestedBy.LastName}" : null,
        ApprovedById = c.ApprovedById,
        ApprovedByName = c.ApprovedBy != null ? $"{c.ApprovedBy.FirstName} {c.ApprovedBy.LastName}" : null,
        RejectionReason = c.RejectionReason,
        CreatedAt = c.CreatedAt,
        ReviewedAt = c.ReviewedAt
    };

    private decimal CalculateWorkHours(DateTime checkIn, DateTime checkOut)
    {
        var hours = (decimal)(checkOut - checkIn).TotalHours;
        if (hours < 4) return hours;
        if (hours < 8) return hours - 0.5m;
        return hours - 1m;
    }
}

