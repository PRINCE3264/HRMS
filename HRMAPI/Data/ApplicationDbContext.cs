using HRMAPI.Interfaces.Services;
using Microsoft.EntityFrameworkCore;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    public DbSet<User> Users => Set<User>();
    public DbSet<UserPermission> UserPermissions => Set<UserPermission>();
    public DbSet<Employee> Employees => Set<Employee>();
    public DbSet<Department> Departments => Set<Department>();
    public DbSet<Designation> Designations => Set<Designation>();
    public DbSet<Branch> Branches => Set<Branch>();
    public DbSet<Team> Teams => Set<Team>();
    public DbSet<Attendance> Attendances => Set<Attendance>();
    public DbSet<BreakRecord> BreakRecords => Set<BreakRecord>();
    public DbSet<Shift> Shifts => Set<Shift>();
    public DbSet<ShiftAssignment> ShiftAssignments => Set<ShiftAssignment>();
    public DbSet<LeaveRequest> LeaveRequests => Set<LeaveRequest>();
    public DbSet<LeaveBalance> LeaveBalances => Set<LeaveBalance>();
    public DbSet<PayrollRecord> PayrollRecords => Set<PayrollRecord>();
    public DbSet<Payslip> Payslips => Set<Payslip>();
    public DbSet<PerformanceReview> PerformanceReviews => Set<PerformanceReview>();
    public DbSet<KPI> KPIs => Set<KPI>();
    public DbSet<TaskAssignment> TaskAssignments => Set<TaskAssignment>();
    public DbSet<Training> Trainings => Set<Training>();
    public DbSet<TrainingEnrollment> TrainingEnrollments => Set<TrainingEnrollment>();
    public DbSet<Onboarding> Onboardings => Set<Onboarding>();
    public DbSet<OnboardingTask> OnboardingTasks => Set<OnboardingTask>();
    public DbSet<JobOpening> JobOpenings => Set<JobOpening>();
    public DbSet<Candidate> Candidates => Set<Candidate>();
    public DbSet<Announcement> Announcements => Set<Announcement>();
    public DbSet<AnnouncementAttachment> AnnouncementAttachments => Set<AnnouncementAttachment>();
    public DbSet<Document> Documents => Set<Document>();
    public DbSet<Notification> Notifications => Set<Notification>();
    public DbSet<AuditLog> AuditLogs => Set<AuditLog>();
    public DbSet<SystemSetting> SystemSettings => Set<SystemSetting>();
    public DbSet<RolePermission> RolePermissions => Set<RolePermission>();
    public DbSet<DailyWorkUpdate> DailyWorkUpdates => Set<DailyWorkUpdate>();
    public DbSet<PerformanceFeedback> PerformanceFeedbacks => Set<PerformanceFeedback>();
    public DbSet<Interview> Interviews => Set<Interview>();
    public DbSet<Module> Modules => Set<Module>();
    public DbSet<Feature> Features => Set<Feature>();
    public DbSet<FeatureRole> FeatureRoles => Set<FeatureRole>();
    public DbSet<Role> Roles => Set<Role>();
    public DbSet<Project> Projects => Set<Project>();
    public DbSet<ProjectMember> ProjectMembers => Set<ProjectMember>();
    public DbSet<SalaryStructure> SalaryStructures => Set<SalaryStructure>();
    public DbSet<AttendanceRule> AttendanceRules => Set<AttendanceRule>();
    public DbSet<AttendanceCorrection> AttendanceCorrections => Set<AttendanceCorrection>();
    public DbSet<CompanyProfile> CompanyProfiles => Set<CompanyProfile>();
    public DbSet<NotificationPreference> NotificationPreferences => Set<NotificationPreference>();
    

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
    }
}
