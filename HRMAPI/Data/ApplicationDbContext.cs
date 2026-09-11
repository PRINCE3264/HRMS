using Microsoft.EntityFrameworkCore;
using HRMAPI.Models;

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
    

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // User
        modelBuilder.Entity<User>(e =>
        {
            e.HasIndex(u => u.Email).IsUnique();
            e.Property(u => u.Email).IsRequired().HasMaxLength(255);
            e.Property(u => u.PasswordHash).IsRequired();
            e.Property(u => u.Role).HasConversion<string>().HasMaxLength(20);
        });

        // UserPermission
        modelBuilder.Entity<UserPermission>(e =>
        {
            e.HasIndex(up => new { up.UserId, up.Module, up.Action }).IsUnique();
            e.Property(up => up.Action).HasConversion<string>().HasMaxLength(20);
        });

        // Employee
        modelBuilder.Entity<Employee>(e =>
        {
            e.HasIndex(emp => emp.EmployeeId).IsUnique();
            e.HasIndex(emp => emp.Email).IsUnique();
            e.Property(emp => emp.Salary).HasPrecision(18, 2);
            e.Property(emp => emp.Gender).HasConversion<string>().HasMaxLength(20);
            e.Property(emp => emp.MaritalStatus).HasConversion<string>().HasMaxLength(20);
            e.Property(emp => emp.EmploymentType).HasConversion<string>().HasMaxLength(20);
            e.Property(emp => emp.EmploymentStatus).HasConversion<string>().HasMaxLength(20);

            e.HasOne(emp => emp.Department).WithMany(d => d.Employees).HasForeignKey(emp => emp.DepartmentId).OnDelete(DeleteBehavior.Restrict);
            e.HasOne(emp => emp.Designation).WithMany(d => d.Employees).HasForeignKey(emp => emp.DesignationId).OnDelete(DeleteBehavior.Restrict);
            e.HasOne(emp => emp.Branch).WithMany(b => b.Employees).HasForeignKey(emp => emp.BranchId).OnDelete(DeleteBehavior.Restrict);
            e.HasOne(emp => emp.Team).WithMany(t => t.Members).HasForeignKey(emp => emp.TeamId).OnDelete(DeleteBehavior.SetNull);
            e.HasOne(emp => emp.ReportingManager).WithMany(m => m.DirectReports).HasForeignKey(emp => emp.ReportingManagerId).OnDelete(DeleteBehavior.SetNull);
        });

        // Department
        modelBuilder.Entity<Department>(e =>
        {
            e.HasIndex(d => d.Name).IsUnique();
            e.HasIndex(d => d.Code).IsUnique();
            e.HasOne(d => d.Head).WithMany().HasForeignKey(d => d.HeadId).OnDelete(DeleteBehavior.SetNull);
        });

        // Designation
        modelBuilder.Entity<Designation>(e =>
        {
            e.Property(d => d.MinSalary).HasPrecision(18, 2);
            e.Property(d => d.MaxSalary).HasPrecision(18, 2);
            e.HasOne(d => d.Department).WithMany(dep => dep.Designations).HasForeignKey(d => d.DepartmentId).OnDelete(DeleteBehavior.SetNull);
        });

        // Branch
        modelBuilder.Entity<Branch>(e =>
        {
            e.HasIndex(b => b.Name).IsUnique();
            e.HasIndex(b => b.Code).IsUnique();
        });

        // Team
        modelBuilder.Entity<Team>(e =>
        {
            e.HasOne(t => t.Department).WithMany(d => d.Teams).HasForeignKey(t => t.DepartmentId).OnDelete(DeleteBehavior.Restrict);
            e.HasOne(t => t.TeamLead).WithMany().HasForeignKey(t => t.TeamLeadId).OnDelete(DeleteBehavior.Restrict);
        });

        // Attendance
        modelBuilder.Entity<Attendance>(e =>
        {
            e.HasIndex(a => new { a.EmployeeId, a.Date }).IsUnique();
            e.HasOne(a => a.Employee).WithMany(emp => emp.Attendances).HasForeignKey(a => a.EmployeeId).OnDelete(DeleteBehavior.Cascade);
            e.Property(a => a.Latitude).HasPrecision(10, 7);
            e.Property(a => a.Longitude).HasPrecision(10, 7);
            e.Property(a => a.Status).HasConversion<string>().HasMaxLength(20);
        });

        // BreakRecord
        modelBuilder.Entity<BreakRecord>(e =>
        {
            e.Property(b => b.BreakType).HasConversion<string>().HasMaxLength(20);
            e.HasOne(b => b.Attendance).WithMany(a => a.Breaks).HasForeignKey(b => b.AttendanceId).OnDelete(DeleteBehavior.Cascade);
        });

        // Shift
        modelBuilder.Entity<Shift>(e =>
        {
            e.Property(s => s.StartTime).HasPrecision(0);
            e.Property(s => s.EndTime).HasPrecision(0);
        });

        // ShiftAssignment
        modelBuilder.Entity<ShiftAssignment>(e =>
        {
            e.HasOne(sa => sa.Employee).WithMany(emp => emp.ShiftAssignments).HasForeignKey(sa => sa.EmployeeId).OnDelete(DeleteBehavior.Cascade);
            e.HasOne(sa => sa.Shift).WithMany(s => s.ShiftAssignments).HasForeignKey(sa => sa.ShiftId).OnDelete(DeleteBehavior.Cascade);
        });

        // LeaveRequest
        modelBuilder.Entity<LeaveRequest>(e =>
        {
            e.Property(lr => lr.LeaveType).HasConversion<string>().HasMaxLength(20);
            e.Property(lr => lr.Status).HasConversion<string>().HasMaxLength(20);
            e.HasOne(lr => lr.Employee).WithMany(emp => emp.LeaveRequests).HasForeignKey(lr => lr.EmployeeId).OnDelete(DeleteBehavior.Cascade);
            e.HasOne(lr => lr.ApprovedBy).WithMany().HasForeignKey(lr => lr.ApprovedById).OnDelete(DeleteBehavior.SetNull);
        });

        // LeaveBalance
        modelBuilder.Entity<LeaveBalance>(e =>
        {
            e.HasIndex(lb => new { lb.EmployeeId, lb.LeaveType, lb.Year }).IsUnique();
            e.Property(lb => lb.LeaveType).HasConversion<string>().HasMaxLength(20);
            e.HasOne(lb => lb.Employee).WithMany().HasForeignKey(lb => lb.EmployeeId).OnDelete(DeleteBehavior.Cascade);
        });

        // PayrollRecord
        modelBuilder.Entity<PayrollRecord>(e =>
        {
            e.Property(pr => pr.BasicSalary).HasPrecision(18, 2);
            e.Property(pr => pr.Allowances).HasPrecision(18, 2);
            e.Property(pr => pr.Deductions).HasPrecision(18, 2);
            e.Property(pr => pr.NetPay).HasPrecision(18, 2);
            e.Property(pr => pr.Status).HasConversion<string>().HasMaxLength(20);
            e.HasOne(pr => pr.Employee).WithMany().HasForeignKey(pr => pr.EmployeeId).OnDelete(DeleteBehavior.Cascade);
        });

        // Payslip
        modelBuilder.Entity<Payslip>(e =>
        {
            e.Property(p => p.BasicSalary).HasPrecision(18, 2);
            e.Property(p => p.Hra).HasPrecision(18, 2);
            e.Property(p => p.Conveyance).HasPrecision(18, 2);
            e.Property(p => p.MedicalAllowance).HasPrecision(18, 2);
            e.Property(p => p.SpecialAllowance).HasPrecision(18, 2);
            e.Property(p => p.Pf).HasPrecision(18, 2);
            e.Property(p => p.Esi).HasPrecision(18, 2);
            e.Property(p => p.Tds).HasPrecision(18, 2);
            e.Property(p => p.ProfessionalTax).HasPrecision(18, 2);
            e.Property(p => p.TotalEarnings).HasPrecision(18, 2);
            e.Property(p => p.TotalDeductions).HasPrecision(18, 2);
            e.Property(p => p.NetPay).HasPrecision(18, 2);
            e.HasOne(p => p.Payroll).WithOne(pr => pr.Payslip).HasForeignKey<Payslip>(p => p.PayrollId).OnDelete(DeleteBehavior.Cascade);
            e.HasOne(p => p.Employee).WithMany().HasForeignKey(p => p.EmployeeId).OnDelete(DeleteBehavior.Cascade);
        });

        // PerformanceReview
        modelBuilder.Entity<PerformanceReview>(e =>
        {
            e.Property(pr => pr.OverallRating).HasPrecision(5, 2);
            e.Property(pr => pr.GoalsRating).HasPrecision(5, 2);
            e.Property(pr => pr.CompetencyRating).HasPrecision(5, 2);
            e.Property(pr => pr.Status).HasConversion<string>().HasMaxLength(20);
            e.HasOne(pr => pr.Employee).WithMany(emp => emp.PerformanceReviews).HasForeignKey(pr => pr.EmployeeId).OnDelete(DeleteBehavior.Cascade);
            e.HasOne(pr => pr.Reviewer).WithMany().HasForeignKey(pr => pr.ReviewerId).OnDelete(DeleteBehavior.Restrict);
        });

        // KPI
        modelBuilder.Entity<KPI>(e =>
        {
            e.Property(k => k.TargetValue).HasPrecision(18, 2);
            e.Property(k => k.CurrentValue).HasPrecision(18, 2);
            e.Property(k => k.Weight).HasPrecision(5, 2);
            e.HasOne(k => k.Employee).WithMany(emp => emp.KPIs).HasForeignKey(k => k.EmployeeId).OnDelete(DeleteBehavior.Cascade);
        });

        // TaskAssignment
        modelBuilder.Entity<TaskAssignment>(e =>
        {
            e.Property(t => t.Priority).HasConversion<string>().HasMaxLength(20);
            e.Property(t => t.Status).HasConversion<string>().HasMaxLength(20);
            e.HasOne(t => t.AssignedTo).WithMany(emp => emp.AssignedTasks).HasForeignKey(t => t.AssignedToId).OnDelete(DeleteBehavior.Restrict);
            e.HasOne(t => t.AssignedBy).WithMany(emp => emp.CreatedTasks).HasForeignKey(t => t.AssignedById).OnDelete(DeleteBehavior.Restrict);
        });

        // Training
        modelBuilder.Entity<Training>(e =>
        {
            e.Property(t => t.Status).HasConversion<string>().HasMaxLength(20);
            e.Property(t => t.Type).HasConversion<string>().HasMaxLength(20);
        });

        // TrainingEnrollment
        modelBuilder.Entity<TrainingEnrollment>(e =>
        {
            e.HasIndex(te => new { te.TrainingId, te.EmployeeId }).IsUnique();
            e.HasOne(te => te.Training).WithMany(t => t.Enrollments).HasForeignKey(te => te.TrainingId).OnDelete(DeleteBehavior.Cascade);
            e.HasOne(te => te.Employee).WithMany().HasForeignKey(te => te.EmployeeId).OnDelete(DeleteBehavior.Cascade);
        });

        // Onboarding
        modelBuilder.Entity<Onboarding>(e =>
        {
            e.Property(o => o.Progress).HasPrecision(5, 2);
            e.Property(o => o.Status).HasConversion<string>().HasMaxLength(20);
            e.HasOne(o => o.Employee).WithMany().HasForeignKey(o => o.EmployeeId).OnDelete(DeleteBehavior.Cascade);
            e.HasOne(o => o.Mentor).WithMany().HasForeignKey(o => o.MentorId).OnDelete(DeleteBehavior.SetNull);
        });

        // OnboardingTask
        modelBuilder.Entity<OnboardingTask>(e =>
        {
            e.HasOne(ot => ot.Onboarding).WithMany(o => o.Tasks).HasForeignKey(ot => ot.OnboardingId).OnDelete(DeleteBehavior.Cascade);
        });

        // JobOpening
        modelBuilder.Entity<JobOpening>(e =>
        {
            e.Property(j => j.Status).HasConversion<string>().HasMaxLength(20);
            e.Property(j => j.EmploymentType).HasConversion<string>().HasMaxLength(20);
            e.HasOne(j => j.Department).WithMany().HasForeignKey(j => j.DepartmentId).OnDelete(DeleteBehavior.Restrict);
            e.HasOne(j => j.Designation).WithMany().HasForeignKey(j => j.DesignationId).OnDelete(DeleteBehavior.Restrict);
            e.HasOne(j => j.Branch).WithMany().HasForeignKey(j => j.BranchId).OnDelete(DeleteBehavior.Restrict);
        });

        // Candidate
        modelBuilder.Entity<Candidate>(e =>
        {
            e.Property(c => c.Status).HasConversion<string>().HasMaxLength(30);
            e.HasOne(c => c.Job).WithMany(j => j.Candidates).HasForeignKey(c => c.JobId).OnDelete(DeleteBehavior.Cascade);
        });

        // Announcement
        modelBuilder.Entity<Announcement>(e =>
        {
            e.Property(a => a.Priority).HasConversion<string>().HasMaxLength(20);
            e.HasOne(a => a.Author).WithMany().HasForeignKey(a => a.AuthorId).OnDelete(DeleteBehavior.Restrict);
        });

        // AnnouncementAttachment
        modelBuilder.Entity<AnnouncementAttachment>(e =>
        {
            e.HasOne(aa => aa.Announcement).WithMany(a => a.Attachments).HasForeignKey(aa => aa.AnnouncementId).OnDelete(DeleteBehavior.Cascade);
        });

        // Document
        modelBuilder.Entity<Document>(e =>
        {
            e.Property(d => d.Category).HasConversion<string>().HasMaxLength(20);
            e.HasOne(d => d.Employee).WithMany().HasForeignKey(d => d.EmployeeId).OnDelete(DeleteBehavior.SetNull);
            e.HasOne(d => d.UploadedBy).WithMany().HasForeignKey(d => d.UploadedById).OnDelete(DeleteBehavior.Restrict);
        });

        // Notification
        modelBuilder.Entity<Notification>(e =>
        {
            e.Property(n => n.Type).HasConversion<string>().HasMaxLength(20);
            e.HasIndex(n => new { n.UserId, n.IsRead });
            e.HasOne(n => n.User).WithMany().HasForeignKey(n => n.UserId).OnDelete(DeleteBehavior.Cascade);
        });

        // AuditLog
        modelBuilder.Entity<AuditLog>(e =>
        {
            e.HasIndex(a => a.Timestamp);
            e.HasOne(a => a.User).WithMany().HasForeignKey(a => a.UserId).OnDelete(DeleteBehavior.Restrict);
        });

        // SystemSetting
        modelBuilder.Entity<SystemSetting>(e =>
        {
            e.HasIndex(s => s.Key).IsUnique();
            e.HasOne(s => s.UpdatedBy).WithMany().HasForeignKey(s => s.UpdatedById).OnDelete(DeleteBehavior.SetNull);
        });

        // RolePermission
        modelBuilder.Entity<RolePermission>(e =>
        {
            e.HasIndex(rp => new { rp.Role, rp.Module, rp.Action }).IsUnique();
            e.Property(rp => rp.Action).HasConversion<string>().HasMaxLength(20);
        });

        // DailyWorkUpdate
        modelBuilder.Entity<DailyWorkUpdate>(e =>
        {
            e.HasIndex(wu => new { wu.EmployeeId, wu.Date }).IsUnique();
            e.Property(wu => wu.Status).HasConversion<string>().HasMaxLength(20);
            e.Property(wu => wu.HoursWorked).HasPrecision(5, 2);
            e.HasOne(wu => wu.Employee).WithMany().HasForeignKey(wu => wu.EmployeeId).OnDelete(DeleteBehavior.Cascade);
        });

        // PerformanceFeedback
        modelBuilder.Entity<PerformanceFeedback>(e =>
        {
            e.Property(pf => pf.Category).HasConversion<string>().HasMaxLength(20);
            e.HasOne(pf => pf.TargetEmployee).WithMany().HasForeignKey(pf => pf.TargetEmployeeId).OnDelete(DeleteBehavior.Cascade);
            e.HasOne(pf => pf.Reviewer).WithMany().HasForeignKey(pf => pf.ReviewerId).OnDelete(DeleteBehavior.Restrict);
        });

        // Interview
        modelBuilder.Entity<Interview>(e =>
        {
            e.Property(i => i.Round).HasMaxLength(50);
            e.Property(i => i.InterviewType).HasConversion<string>().HasMaxLength(20);
            e.Property(i => i.Status).HasConversion<string>().HasMaxLength(20);
            e.HasOne(i => i.Candidate).WithMany().HasForeignKey(i => i.CandidateId).OnDelete(DeleteBehavior.Cascade);
            e.HasOne(i => i.Job).WithMany().HasForeignKey(i => i.JobId).OnDelete(DeleteBehavior.Cascade);
            e.HasOne(i => i.Interviewer).WithMany().HasForeignKey(i => i.InterviewerId).OnDelete(DeleteBehavior.SetNull);
        });

        // FeatureRole
        modelBuilder.Entity<FeatureRole>(e =>
        {
            e.HasIndex(fr => new { fr.FeatureId, fr.Role }).IsUnique();
            e.Property(fr => fr.Role).HasMaxLength(20);
            e.HasOne(fr => fr.Feature).WithMany().HasForeignKey(fr => fr.FeatureId).OnDelete(DeleteBehavior.Cascade);
        });
    }
}
