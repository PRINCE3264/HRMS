using HRMAPI.Interfaces.Services;
using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;

namespace HRMAPI.Repositories;

public class AttendanceRepository : Repository<Attendance>, IAttendanceRepository
{
    public AttendanceRepository(ApplicationDbContext context) : base(context) { }

    public async Task<Attendance?> GetByEmployeeAndDateAsync(Guid employeeId, DateTime date)
    {
        var day = date.Date;
        return await _dbSet.Include(a => a.Breaks)
            .FirstOrDefaultAsync(a => a.EmployeeId == employeeId && a.Date.Date == day);
    }

    public async Task<IEnumerable<Attendance>> GetByEmployeeAsync(Guid employeeId, DateTime? startDate, DateTime? endDate)
    {
        var query = _dbSet.Include(a => a.Breaks).Where(a => a.EmployeeId == employeeId);
        if (startDate.HasValue) query = query.Where(a => a.Date >= startDate.Value.Date);
        if (endDate.HasValue) query = query.Where(a => a.Date <= endDate.Value.Date);
        return await query.OrderByDescending(a => a.Date).ToListAsync();
    }

    public async Task<IEnumerable<Attendance>> GetByDateAsync(DateTime date) =>
        await _dbSet.Include(a => a.Employee).Where(a => a.Date.Date == date.Date).ToListAsync();

    public async Task<int> GetPresentCountAsync(DateTime date) =>
        await _dbSet.CountAsync(a => a.Date.Date == date.Date &&
            (a.Status == Enums.AttendanceStatus.PRESENT ||
             a.Status == Enums.AttendanceStatus.LATE ||
             a.Status == Enums.AttendanceStatus.HALF_DAY));

    public async Task<int> GetAbsentCountAsync(DateTime date) =>
        await _dbSet.CountAsync(a => a.Date.Date == date.Date && a.Status == Enums.AttendanceStatus.ABSENT);
}

public class BreakRecordRepository : Repository<BreakRecord>, IBreakRecordRepository
{
    public BreakRecordRepository(ApplicationDbContext context) : base(context) { }

    public async Task<BreakRecord?> GetActiveBreakAsync(Guid attendanceId) =>
        await _dbSet.FirstOrDefaultAsync(b => b.AttendanceId == attendanceId && b.EndTime == null);
}

public class ShiftRepository : Repository<Shift>, IShiftRepository
{
    public ShiftRepository(ApplicationDbContext context) : base(context) { }
}

public class ShiftAssignmentRepository : Repository<ShiftAssignment>, IShiftAssignmentRepository
{
    public ShiftAssignmentRepository(ApplicationDbContext context) : base(context) { }

    public async Task<ShiftAssignment?> GetActiveAssignmentAsync(Guid employeeId) =>
        await _dbSet.Include(sa => sa.Shift)
            .FirstOrDefaultAsync(sa => sa.EmployeeId == employeeId &&
                (sa.EndDate == null || sa.EndDate >= DateTime.UtcNow.Date));
}

public class LeaveRequestRepository : Repository<LeaveRequest>, ILeaveRequestRepository
{
    public LeaveRequestRepository(ApplicationDbContext context) : base(context) { }

    public async Task<IEnumerable<LeaveRequest>> GetByEmployeeAsync(Guid employeeId) =>
        await _dbSet.Include(lr => lr.ApprovedBy)
            .Where(lr => lr.EmployeeId == employeeId)
            .OrderByDescending(lr => lr.CreatedAt)
            .ToListAsync();

    public async Task<IEnumerable<LeaveRequest>> GetPendingAsync() =>
        await _dbSet.Include(lr => lr.Employee)
            .Where(lr => lr.Status == Enums.LeaveStatus.PENDING)
            .OrderBy(lr => lr.CreatedAt)
            .ToListAsync();

    public async Task<int> GetPendingCountAsync() =>
        await _dbSet.CountAsync(lr => lr.Status == Enums.LeaveStatus.PENDING);
}

public class LeaveBalanceRepository : Repository<LeaveBalance>, ILeaveBalanceRepository
{
    public LeaveBalanceRepository(ApplicationDbContext context) : base(context) { }

    public async Task<LeaveBalance?> GetByEmployeeAndTypeAsync(Guid employeeId, Enums.LeaveType leaveType, int year) =>
        await _dbSet.FirstOrDefaultAsync(lb =>
            lb.EmployeeId == employeeId && lb.LeaveType == leaveType && lb.Year == year);

    public async Task<IEnumerable<LeaveBalance>> GetByEmployeeAsync(Guid employeeId, int year) =>
        await _dbSet.Where(lb => lb.EmployeeId == employeeId && lb.Year == year).ToListAsync();
}

public class PayrollRecordRepository : Repository<PayrollRecord>, IPayrollRecordRepository
{
    public PayrollRecordRepository(ApplicationDbContext context) : base(context) { }

    public async Task<IEnumerable<PayrollRecord>> GetByEmployeeAsync(Guid employeeId) =>
        await _dbSet.Include(pr => pr.Employee)
            .Where(pr => pr.EmployeeId == employeeId)
            .OrderByDescending(pr => pr.Year).ThenByDescending(pr => pr.Month)
            .ToListAsync();

    public async Task<IEnumerable<PayrollRecord>> GetByMonthAsync(string month, int year) =>
        await _dbSet.Include(pr => pr.Employee)
            .Where(pr => pr.Month == month && pr.Year == year)
            .OrderBy(pr => pr.Employee.FirstName)
            .ToListAsync();

    public async Task<PayrollRecord?> GetByEmployeeAndMonthAsync(Guid employeeId, string month, int year) =>
        await _dbSet.FirstOrDefaultAsync(pr => pr.EmployeeId == employeeId && pr.Month == month && pr.Year == year);
}

public class PayslipRepository : Repository<Payslip>, IPayslipRepository
{
    public PayslipRepository(ApplicationDbContext context) : base(context) { }

    public async Task<Payslip?> GetByPayrollIdAsync(Guid payrollId) =>
        await _dbSet.Include(p => p.Employee).FirstOrDefaultAsync(p => p.PayrollId == payrollId);
}

public class PerformanceReviewRepository : Repository<PerformanceReview>, IPerformanceReviewRepository
{
    public PerformanceReviewRepository(ApplicationDbContext context) : base(context) { }

    public async Task<IEnumerable<PerformanceReview>> GetByEmployeeAsync(Guid employeeId) =>
        await _dbSet.Include(pr => pr.Reviewer)
            .Where(pr => pr.EmployeeId == employeeId)
            .OrderByDescending(pr => pr.CreatedAt)
            .ToListAsync();
}

public class KPIRepository : Repository<KPI>, IKPIRepository
{
    public KPIRepository(ApplicationDbContext context) : base(context) { }

    public async Task<IEnumerable<KPI>> GetByEmployeeAsync(Guid employeeId) =>
        await _dbSet.Where(k => k.EmployeeId == employeeId).OrderByDescending(k => k.CreatedAt).ToListAsync();
}

public class TaskAssignmentRepository : Repository<TaskAssignment>, ITaskAssignmentRepository
{
    public TaskAssignmentRepository(ApplicationDbContext context) : base(context) { }

    public async Task<IEnumerable<TaskAssignment>> GetByAssignedToAsync(Guid employeeId) =>
        await _dbSet.Include(t => t.AssignedBy)
            .Where(t => t.AssignedToId == employeeId)
            .OrderByDescending(t => t.CreatedAt)
            .ToListAsync();

    public async Task<IEnumerable<TaskAssignment>> GetByAssignedByAsync(Guid employeeId) =>
        await _dbSet.Include(t => t.AssignedTo)
            .Where(t => t.AssignedById == employeeId)
            .OrderByDescending(t => t.CreatedAt)
            .ToListAsync();
}

public class TrainingRepository : Repository<Training>, ITrainingRepository
{
    public TrainingRepository(ApplicationDbContext context) : base(context) { }

    public async Task<Training?> GetWithEnrollmentsAsync(Guid id) =>
        await _dbSet.Include(t => t.Enrollments).FirstOrDefaultAsync(t => t.Id == id);

    public async Task<bool> IsEnrolledAsync(Guid trainingId, Guid employeeId) =>
        await _context.TrainingEnrollments.AnyAsync(te => te.TrainingId == trainingId && te.EmployeeId == employeeId);

    public async Task<int> GetEnrolledCountAsync(Guid trainingId) =>
        await _context.TrainingEnrollments.CountAsync(te => te.TrainingId == trainingId);
}

public class OnboardingRepository : Repository<Onboarding>, IOnboardingRepository
{
    public OnboardingRepository(ApplicationDbContext context) : base(context) { }

    public async Task<Onboarding?> GetWithTasksAsync(Guid id) =>
        await _dbSet.Include(o => o.Employee)
            .Include(o => o.Mentor)
            .Include(o => o.Tasks)
            .FirstOrDefaultAsync(o => o.Id == id);

    public async Task<IEnumerable<Onboarding>> GetByEmployeeAsync(Guid employeeId) =>
        await _dbSet.Include(o => o.Tasks)
            .Where(o => o.EmployeeId == employeeId)
            .ToListAsync();

    public async Task<Onboarding?> GetActiveByEmployeeAsync(Guid employeeId) =>
        await _dbSet.Include(o => o.Tasks)
            .FirstOrDefaultAsync(o => o.EmployeeId == employeeId &&
                o.Status != Enums.OnboardingStatus.COMPLETED);
}

public class JobOpeningRepository : Repository<JobOpening>, IJobOpeningRepository
{
    public JobOpeningRepository(ApplicationDbContext context) : base(context) { }

    public async Task<JobOpening?> GetWithCandidatesAsync(Guid id) =>
        await _dbSet.Include(j => j.Department)
            .Include(j => j.Designation)
            .Include(j => j.Branch)
            .Include(j => j.Candidates)
            .FirstOrDefaultAsync(j => j.Id == id);

    public async Task<int> GetCandidateCountAsync(Guid jobId) =>
        await _context.Candidates.CountAsync(c => c.JobId == jobId);
}

public class CandidateRepository : Repository<Candidate>, ICandidateRepository
{
    public CandidateRepository(ApplicationDbContext context) : base(context) { }

    public async Task<IEnumerable<Candidate>> GetByJobAsync(Guid jobId) =>
        await _dbSet.Include(c => c.Job)
            .Where(c => c.JobId == jobId)
            .OrderByDescending(c => c.CreatedAt)
            .ToListAsync();
}

public class AnnouncementRepository : Repository<Announcement>, IAnnouncementRepository
{
    public AnnouncementRepository(ApplicationDbContext context) : base(context) { }

    public async Task<IEnumerable<Announcement>> GetActiveAsync() =>
        await _dbSet.Include(a => a.Author)
            .Include(a => a.Attachments)
            .Where(a => a.ExpiryDate == null || a.ExpiryDate >= DateTime.UtcNow)
            .OrderByDescending(a => a.IsPinned).ThenByDescending(a => a.PublishedDate)
            .ToListAsync();

    public async Task<IEnumerable<Announcement>> GetByAudienceAsync(string role) =>
        await _dbSet.Include(a => a.Author)
            .Where(a => a.TargetAudience == null ||
                a.TargetAudience.Contains(role) ||
                a.TargetAudience.Contains("ALL"))
            .OrderByDescending(a => a.IsPinned).ThenByDescending(a => a.PublishedDate)
            .ToListAsync();
}

public class DocumentRepository : Repository<Document>, IDocumentRepository
{
    public DocumentRepository(ApplicationDbContext context) : base(context) { }

    public async Task<IEnumerable<Document>> GetByEmployeeAsync(Guid employeeId) =>
        await _dbSet.Include(d => d.UploadedBy)
            .Where(d => d.EmployeeId == employeeId)
            .OrderByDescending(d => d.UploadedAt)
            .ToListAsync();

    public async Task<IEnumerable<Document>> GetByCategoryAsync(string category) =>
        await _dbSet.Include(d => d.Employee)
            .Where(d => d.Category == Enum.Parse<Enums.DocumentCategory>(category))
            .OrderByDescending(d => d.UploadedAt)
            .ToListAsync();
}

public class NotificationRepository : Repository<Notification>, INotificationRepository
{
    public NotificationRepository(ApplicationDbContext context) : base(context) { }

    public async Task<IEnumerable<Notification>> GetByUserAsync(Guid userId, bool? isRead = null)
    {
        var query = _dbSet.Where(n => n.UserId == userId);
        if (isRead.HasValue) query = query.Where(n => n.IsRead == isRead.Value);
        return await query.OrderByDescending(n => n.CreatedAt).ToListAsync();
    }

    public async Task<int> GetUnreadCountAsync(Guid userId) =>
        await _dbSet.CountAsync(n => n.UserId == userId && !n.IsRead);

    public async Task MarkAllAsReadAsync(Guid userId)
    {
        var unread = await _dbSet.Where(n => n.UserId == userId && !n.IsRead).ToListAsync();
        foreach (var n in unread) n.IsRead = true;
        await _context.SaveChangesAsync();
    }
}

public class AuditLogRepository : Repository<AuditLog>, IAuditLogRepository
{
    public AuditLogRepository(ApplicationDbContext context) : base(context) { }

    public async Task<IEnumerable<AuditLog>> GetByUserAsync(Guid userId) =>
        await _dbSet.Include(a => a.User)
            .Where(a => a.UserId == userId)
            .OrderByDescending(a => a.Timestamp)
            .ToListAsync();

    public async Task<IEnumerable<AuditLog>> GetByModuleAsync(string module) =>
        await _dbSet.Include(a => a.User)
            .Where(a => a.Module == module)
            .OrderByDescending(a => a.Timestamp)
            .ToListAsync();

    public async Task LogAsync(Guid userId, string action, string module, string? details, string? ipAddress)
    {
        var log = new AuditLog
        {
            UserId = userId,
            Action = action,
            Module = module,
            Details = details,
            IpAddress = ipAddress,
            Timestamp = DateTime.UtcNow
        };
        await AddAsync(log);
    }
}

public class SystemSettingRepository : Repository<SystemSetting>, ISystemSettingRepository
{
    public SystemSettingRepository(ApplicationDbContext context) : base(context) { }

    public async Task<SystemSetting?> GetByKeyAsync(string key) =>
        await _dbSet.FirstOrDefaultAsync(s => s.Key == key);

    public async Task<IEnumerable<SystemSetting>> GetByCategoryAsync(string category) =>
        await _dbSet.Where(s => s.Category == category).ToListAsync();

    public async Task<Dictionary<string, string>> GetAllAsDictionaryAsync() =>
        await _dbSet.ToDictionaryAsync(s => s.Key, s => s.Value);
}

public class RolePermissionRepository : Repository<RolePermission>, IRolePermissionRepository
{
    public RolePermissionRepository(ApplicationDbContext context) : base(context) { }

    public async Task<IEnumerable<RolePermission>> GetByRoleAsync(string role) =>
        await _dbSet.Where(rp => rp.Role == role).ToListAsync();

    public async Task<IEnumerable<RolePermission>> GetByRoleIdAsync(Guid roleId) =>
        await _dbSet.Where(rp => rp.RoleId == roleId).ToListAsync();

    public async Task ReplaceForRoleAsync(string role, Guid roleId, IEnumerable<RolePermission> permissions)
    {
        var existing = await _dbSet.Where(rp => rp.Role == role || rp.RoleId == roleId).ToListAsync();
        _dbSet.RemoveRange(existing);
        await _context.SaveChangesAsync();
        foreach (var p in permissions) { p.Role = role; p.RoleId = roleId; p.UpdatedAt = DateTime.UtcNow; }
        if (permissions.Any())
        {
            await _dbSet.AddRangeAsync(permissions);
            await _context.SaveChangesAsync();
        }
    }
}

public class WorkUpdateRepository : Repository<DailyWorkUpdate>, IWorkUpdateRepository
{
    public WorkUpdateRepository(ApplicationDbContext context) : base(context) { }

    public async Task<DailyWorkUpdate?> GetByEmployeeAndDateAsync(Guid employeeId, DateTime date) =>
        await _dbSet.FirstOrDefaultAsync(wu => wu.EmployeeId == employeeId && wu.Date.Date == date.Date);

    public async Task<IEnumerable<DailyWorkUpdate>> GetByEmployeeAsync(Guid employeeId) =>
        await _dbSet.Include(wu => wu.Employee)
            .Where(wu => wu.EmployeeId == employeeId)
            .OrderByDescending(wu => wu.Date)
            .ToListAsync();

    public async Task<IEnumerable<DailyWorkUpdate>> GetByDateAsync(DateTime date) =>
        await _dbSet.Include(wu => wu.Employee)
            .Where(wu => wu.Date.Date == date.Date)
            .OrderBy(wu => wu.Employee.FirstName)
            .ToListAsync();
}

public class PerformanceFeedbackRepository : Repository<PerformanceFeedback>, IPerformanceFeedbackRepository
{
    public PerformanceFeedbackRepository(ApplicationDbContext context) : base(context) { }

    public async Task<IEnumerable<PerformanceFeedback>> GetByTargetAsync(Guid targetEmployeeId) =>
        await _dbSet.Include(pf => pf.TargetEmployee)
            .Include(pf => pf.Reviewer)
            .Where(pf => pf.TargetEmployeeId == targetEmployeeId)
            .OrderByDescending(pf => pf.CreatedAt)
            .ToListAsync();

    public async Task<IEnumerable<PerformanceFeedback>> GetByReviewerAsync(Guid reviewerId) =>
        await _dbSet.Include(pf => pf.TargetEmployee)
            .Include(pf => pf.Reviewer)
            .Where(pf => pf.ReviewerId == reviewerId)
            .OrderByDescending(pf => pf.CreatedAt)
            .ToListAsync();
}

public class InterviewRepository : Repository<Interview>, IInterviewRepository
{
    public InterviewRepository(ApplicationDbContext context) : base(context) { }

    public async Task<IEnumerable<Interview>> GetByCandidateAsync(Guid candidateId) =>
        await _dbSet.Include(i => i.Candidate)
            .Include(i => i.Job)
            .Include(i => i.Interviewer)
            .Where(i => i.CandidateId == candidateId)
            .OrderBy(i => i.ScheduledAt)
            .ToListAsync();

    public async Task<IEnumerable<Interview>> GetByJobAsync(Guid jobId) =>
        await _dbSet.Include(i => i.Candidate)
            .Include(i => i.Job)
            .Include(i => i.Interviewer)
            .Where(i => i.JobId == jobId)
            .OrderBy(i => i.ScheduledAt)
            .ToListAsync();

    public async Task<IEnumerable<Interview>> GetByInterviewerAsync(Guid employeeId) =>
        await _dbSet.Include(i => i.Candidate)
            .Include(i => i.Job)
            .Include(i => i.Interviewer)
            .Where(i => i.InterviewerId == employeeId)
            .OrderBy(i => i.ScheduledAt)
            .ToListAsync();
}
