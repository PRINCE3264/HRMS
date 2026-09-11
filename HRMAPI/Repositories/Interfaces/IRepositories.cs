using HRMAPI.Models;

namespace HRMAPI.Repositories.Interfaces;

public interface IUserRepository : IRepository<User>
{
    Task<User?> GetByEmailAsync(string email);
    Task<User?> GetByRefreshTokenAsync(string refreshToken);
    Task<IEnumerable<User>> GetByRoleAsync(string role);
    Task<IEnumerable<User>> SearchAsync(string query);
    Task<User?> GetWithPermissionsAsync(Guid id);
    Task AddPermissionAsync(UserPermission permission);
    Task RemovePermissionsAsync(Guid userId);
}

public interface IEmployeeRepository : IRepository<Employee>
{
    Task<Employee?> GetByEmailAsync(string email);
    Task<Employee?> GetByEmployeeIdAsync(string employeeId);
    Task<Employee?> GetWithDetailsAsync(Guid id);
    Task<IEnumerable<Employee>> GetByDepartmentAsync(Guid departmentId);
    Task<IEnumerable<Employee>> GetByTeamAsync(Guid teamId);
    Task<IEnumerable<Employee>> SearchAsync(string query);
    Task<int> GetCountByDepartmentAsync(Guid departmentId);
    Task<int> GetCountByBranchAsync(Guid branchId);
    Task<string> GenerateEmployeeIdAsync();
}

public interface IDepartmentRepository : IRepository<Department>
{
    Task<Department?> GetByNameAsync(string name);
    Task<Department?> GetByCodeAsync(string code);
    Task<int> GetEmployeeCountAsync(Guid departmentId);
}

public interface IDesignationRepository : IRepository<Designation>
{
    Task<int> GetEmployeeCountAsync(Guid designationId);
}

public interface IBranchRepository : IRepository<Branch>
{
    Task<Branch?> GetByNameAsync(string name);
    Task<Branch?> GetByCodeAsync(string code);
    Task<int> GetEmployeeCountAsync(Guid branchId);
}

public interface ITeamRepository : IRepository<Team>
{
    Task<int> GetMemberCountAsync(Guid teamId);
}

public interface IAttendanceRepository : IRepository<Attendance>
{
    Task<Attendance?> GetByEmployeeAndDateAsync(Guid employeeId, DateTime date);
    Task<IEnumerable<Attendance>> GetByEmployeeAsync(Guid employeeId, DateTime? startDate, DateTime? endDate);
    Task<IEnumerable<Attendance>> GetByDateAsync(DateTime date);
    Task<int> GetPresentCountAsync(DateTime date);
    Task<int> GetAbsentCountAsync(DateTime date);
}

public interface IBreakRecordRepository : IRepository<BreakRecord>
{
    Task<BreakRecord?> GetActiveBreakAsync(Guid attendanceId);
}

public interface IShiftRepository : IRepository<Shift> { }

public interface IShiftAssignmentRepository : IRepository<ShiftAssignment>
{
    Task<ShiftAssignment?> GetActiveAssignmentAsync(Guid employeeId);
}

public interface ILeaveRequestRepository : IRepository<LeaveRequest>
{
    Task<IEnumerable<LeaveRequest>> GetByEmployeeAsync(Guid employeeId);
    Task<IEnumerable<LeaveRequest>> GetPendingAsync();
    Task<int> GetPendingCountAsync();
}

public interface ILeaveBalanceRepository : IRepository<LeaveBalance>
{
    Task<LeaveBalance?> GetByEmployeeAndTypeAsync(Guid employeeId, Enums.LeaveType leaveType, int year);
    Task<IEnumerable<LeaveBalance>> GetByEmployeeAsync(Guid employeeId, int year);
}

public interface IPayrollRecordRepository : IRepository<PayrollRecord>
{
    Task<IEnumerable<PayrollRecord>> GetByEmployeeAsync(Guid employeeId);
    Task<IEnumerable<PayrollRecord>> GetByMonthAsync(string month, int year);
    Task<PayrollRecord?> GetByEmployeeAndMonthAsync(Guid employeeId, string month, int year);
}

public interface IPayslipRepository : IRepository<Payslip>
{
    Task<Payslip?> GetByPayrollIdAsync(Guid payrollId);
}

public interface IPerformanceReviewRepository : IRepository<PerformanceReview>
{
    Task<IEnumerable<PerformanceReview>> GetByEmployeeAsync(Guid employeeId);
}

public interface IKPIRepository : IRepository<KPI>
{
    Task<IEnumerable<KPI>> GetByEmployeeAsync(Guid employeeId);
}

public interface ITaskAssignmentRepository : IRepository<TaskAssignment>
{
    Task<IEnumerable<TaskAssignment>> GetByAssignedToAsync(Guid employeeId);
    Task<IEnumerable<TaskAssignment>> GetByAssignedByAsync(Guid employeeId);
}

public interface ITrainingRepository : IRepository<Training>
{
    Task<Training?> GetWithEnrollmentsAsync(Guid id);
    Task<bool> IsEnrolledAsync(Guid trainingId, Guid employeeId);
    Task<int> GetEnrolledCountAsync(Guid trainingId);
}

public interface IOnboardingRepository : IRepository<Onboarding>
{
    Task<Onboarding?> GetWithTasksAsync(Guid id);
    Task<IEnumerable<Onboarding>> GetByEmployeeAsync(Guid employeeId);
    Task<Onboarding?> GetActiveByEmployeeAsync(Guid employeeId);
}

public interface IJobOpeningRepository : IRepository<JobOpening>
{
    Task<JobOpening?> GetWithCandidatesAsync(Guid id);
    Task<int> GetCandidateCountAsync(Guid jobId);
}

public interface ICandidateRepository : IRepository<Candidate>
{
    Task<IEnumerable<Candidate>> GetByJobAsync(Guid jobId);
}

public interface IAnnouncementRepository : IRepository<Announcement>
{
    Task<IEnumerable<Announcement>> GetActiveAsync();
    Task<IEnumerable<Announcement>> GetByAudienceAsync(string role);
}

public interface IDocumentRepository : IRepository<Document>
{
    Task<IEnumerable<Document>> GetByEmployeeAsync(Guid employeeId);
    Task<IEnumerable<Document>> GetByCategoryAsync(string category);
}

public interface INotificationRepository : IRepository<Notification>
{
    Task<IEnumerable<Notification>> GetByUserAsync(Guid userId, bool? isRead = null);
    Task<int> GetUnreadCountAsync(Guid userId);
    Task MarkAllAsReadAsync(Guid userId);
}

public interface IAuditLogRepository : IRepository<AuditLog>
{
    Task<IEnumerable<AuditLog>> GetByUserAsync(Guid userId);
    Task<IEnumerable<AuditLog>> GetByModuleAsync(string module);
    Task LogAsync(Guid userId, string action, string module, string? details, string? ipAddress);
}

public interface ISystemSettingRepository : IRepository<SystemSetting>
{
    Task<SystemSetting?> GetByKeyAsync(string key);
    Task<IEnumerable<SystemSetting>> GetByCategoryAsync(string category);
    Task<Dictionary<string, string>> GetAllAsDictionaryAsync();
}

public interface IRolePermissionRepository : IRepository<RolePermission>
{
    Task<IEnumerable<RolePermission>> GetByRoleAsync(string role);
    Task ReplaceForRoleAsync(string role, IEnumerable<RolePermission> permissions);
}

public interface IWorkUpdateRepository : IRepository<DailyWorkUpdate>
{
    Task<DailyWorkUpdate?> GetByEmployeeAndDateAsync(Guid employeeId, DateTime date);
    Task<IEnumerable<DailyWorkUpdate>> GetByEmployeeAsync(Guid employeeId);
    Task<IEnumerable<DailyWorkUpdate>> GetByDateAsync(DateTime date);
}

public interface IPerformanceFeedbackRepository : IRepository<PerformanceFeedback>
{
    Task<IEnumerable<PerformanceFeedback>> GetByTargetAsync(Guid targetEmployeeId);
    Task<IEnumerable<PerformanceFeedback>> GetByReviewerAsync(Guid reviewerId);
}

public interface IInterviewRepository : IRepository<Interview>
{
    Task<IEnumerable<Interview>> GetByCandidateAsync(Guid candidateId);
    Task<IEnumerable<Interview>> GetByJobAsync(Guid jobId);
    Task<IEnumerable<Interview>> GetByInterviewerAsync(Guid employeeId);
}

