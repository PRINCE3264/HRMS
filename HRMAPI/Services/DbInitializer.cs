using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Enums;
using HRMAPI.Models.Entities;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Services;

public static class SeedRoles
{
    public static readonly Guid ADMIN = new("ac5d5af6-4750-4ab7-8751-41a84153439e");
    public static readonly Guid HR = new("5fac9c85-2352-4849-a40d-4a8f06bfc79c");
    public static readonly Guid TL = new("54e3bd74-0022-44e3-b2b4-aa5c1e7f5dbe");
    public static readonly Guid EMPLOYEE = new("563ef870-7f97-4109-b040-fad0c0764cee");

    public static Guid? ForCode(string role) => role switch
    {
        "ADMIN" => ADMIN,
        "HR" => HR,
        "TL" => TL,
        "EMPLOYEE" => EMPLOYEE,
        _ => null
    };

    public static List<Role> All() => new()
    {
        new Role { Id = ADMIN, Code = "ADMIN", Name = "Admin", Description = "Full system access" },
        new Role { Id = HR, Code = "HR", Name = "Hr", Description = "HR operations" },
        new Role { Id = TL, Code = "TL", Name = "Team Lead", Description = "Team management" },
        new Role { Id = EMPLOYEE, Code = "EMPLOYEE", Name = "Employee", Description = "Self-service" }
    };
}

public class DbInitializer
{
    private readonly ApplicationDbContext _context;

    public DbInitializer(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task SeedAsync()
    {
        // ============ Seed Roles ============
        if (!await _context.Roles.AnyAsync())
        {
            _context.Roles.AddRange(SeedRoles.All());
            await _context.SaveChangesAsync();
        }
        // ============ Seed Departments ============
        if (!await _context.Departments.AnyAsync())
        {
            _context.Departments.AddRange(
                new Department { Name = "Engineering", Code = "ENG", Description = "Software development & IT" },
                new Department { Name = "Human Resources", Code = "HR", Description = "HR operations" },
                new Department { Name = "Sales", Code = "SALES", Description = "Sales & accounts" },
                new Department { Name = "Marketing", Code = "MKT", Description = "Marketing & growth" },
                new Department { Name = "Finance", Code = "FIN", Description = "Finance & accounting" });
            await _context.SaveChangesAsync();
        }

        // ============ Seed Designations ============
        if (!await _context.Designations.AnyAsync())
        {
            var eng = await _context.Departments.FirstOrDefaultAsync(d => d.Code == "ENG");
            var hr = await _context.Departments.FirstOrDefaultAsync(d => d.Code == "HR");
            var sales = await _context.Departments.FirstOrDefaultAsync(d => d.Code == "SALES");
            _context.Designations.AddRange(
                new Designation { Title = "Software Engineer", Level = "Senior", DepartmentId = eng?.Id, MinSalary = 80000, MaxSalary = 180000 },
                new Designation { Title = "Software Engineer", Level = "Junior", DepartmentId = eng?.Id, MinSalary = 45000, MaxSalary = 90000 },
                new Designation { Title = "Team Lead", Level = "Lead", DepartmentId = eng?.Id, MinSalary = 120000, MaxSalary = 240000 },
                new Designation { Title = "HR Manager", Level = "Manager", DepartmentId = hr?.Id, MinSalary = 70000, MaxSalary = 140000 },
                new Designation { Title = "Recruiter", Level = "Junior", DepartmentId = hr?.Id, MinSalary = 40000, MaxSalary = 75000 },
                new Designation { Title = "Branch Manager", Level = "Manager", DepartmentId = sales?.Id, MinSalary = 90000, MaxSalary = 180000 });
            await _context.SaveChangesAsync();
        }

        // ============ Seed Company Profile ============
        if (!await _context.CompanyProfiles.AnyAsync())
        {
            _context.CompanyProfiles.Add(new CompanyProfile
            {
                CompanyName = "HRM Pro Pvt Ltd",
                Website = "https://www.hrmpro.com",
                Email = "admin@hrmpro.com",
                Phone = "+91-22-12345678",
                Address = "100 Business Park",
                City = "Mumbai",
                State = "Maharashtra",
                Country = "India",
                ZipCode = "400001",
                RegistrationNumber = "U74999MH2020PTC345678",
                TaxId = "GSTIN-27AAACH7409R1ZD",
                Currency = "INR",
                FiscalYearStart = "April",
                WorkingDays = "Mon - Sat",
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            });
            await _context.SaveChangesAsync();
        }

        // ============ Seed Branches ============
        if (!await _context.Branches.AnyAsync())
        {
            var company = await _context.CompanyProfiles.FirstOrDefaultAsync();
            var companyId = company?.Id ?? Guid.Empty;
            _context.Branches.AddRange(
                new Branch { Name = "Head Office", Code = "HQ", Address = "100 Business Park", City = "Mumbai", State = "Maharashtra", Country = "India", Phone = "+91-22-12345678", Email = "hq@hrmpro.com", CompanyId = companyId },
                new Branch { Name = "Pune Office", Code = "PNQ", Address = "Tech Hub", City = "Pune", State = "Maharashtra", Country = "India", Phone = "+91-20-87654321", Email = "pune@hrmpro.com", CompanyId = companyId });
            await _context.SaveChangesAsync();
        }

        // ============ Seed Employees ============
        if (!await _context.Employees.AnyAsync())
        {
            var eng = await _context.Departments.FirstOrDefaultAsync(d => d.Code == "ENG");
            var hr = await _context.Departments.FirstOrDefaultAsync(d => d.Code == "HR");
            var sales = await _context.Departments.FirstOrDefaultAsync(d => d.Code == "SALES");
            var tlDes = await _context.Designations.FirstOrDefaultAsync(d => d.Title == "Team Lead");
            var seDes = await _context.Designations.FirstOrDefaultAsync(d => d.Title == "Software Engineer");
            var hrDes = await _context.Designations.FirstOrDefaultAsync(d => d.Title == "HR Manager");
            var bmDes = await _context.Designations.FirstOrDefaultAsync(d => d.Title == "Branch Manager");
            var hq = await _context.Branches.FirstOrDefaultAsync(b => b.Code == "HQ");

            var adminEmp = new Employee
            {
                EmployeeId = "EMP-24-0001",
                FirstName = "Admin",
                LastName = "User",
                Email = "admin@hrm.com",
                Phone = "+91-9000000001",
                DepartmentId = hr?.Id ?? Guid.Empty,
                DesignationId = hrDes?.Id ?? Guid.Empty,
                BranchId = hq?.Id ?? Guid.Empty,
                JoiningDate = new DateTime(2023, 1, 1, 0, 0, 0, DateTimeKind.Utc),
                EmploymentType = EmploymentType.FULL_TIME,
                EmploymentStatus = EmploymentStatus.ACTIVE,
                Gender = Gender.MALE,
                Salary = 150000
            };

            var hrEmp = new Employee
            {
                EmployeeId = "EMP-24-0002",
                FirstName = "HR",
                LastName = "Manager",
                Email = "hr@hrm.com",
                Phone = "+91-9000000002",
                DepartmentId = hr?.Id ?? Guid.Empty,
                DesignationId = hrDes?.Id ?? Guid.Empty,
                BranchId = hq?.Id ?? Guid.Empty,
                JoiningDate = new DateTime(2023, 3, 15, 0, 0, 0, DateTimeKind.Utc),
                EmploymentType = EmploymentType.FULL_TIME,
                EmploymentStatus = EmploymentStatus.ACTIVE,
                Gender = Gender.FEMALE,
                Salary = 110000
            };

            var tlEmp = new Employee
            {
                EmployeeId = "EMP-24-0003",
                FirstName = "Team",
                LastName = "Lead",
                Email = "tl@hrm.com",
                Phone = "+91-9000000003",
                DepartmentId = eng?.Id ?? Guid.Empty,
                DesignationId = tlDes?.Id ?? Guid.Empty,
                BranchId = hq?.Id ?? Guid.Empty,
                JoiningDate = new DateTime(2022, 6, 1, 0, 0, 0, DateTimeKind.Utc),
                EmploymentType = EmploymentType.FULL_TIME,
                EmploymentStatus = EmploymentStatus.ACTIVE,
                Gender = Gender.MALE,
                Salary = 160000
            };

            var emp = new Employee
            {
                EmployeeId = "EMP-24-0004",
                FirstName = "Employee",
                LastName = "One",
                Email = "emp@hrm.com",
                Phone = "+91-9000000004",
                DepartmentId = eng?.Id ?? Guid.Empty,
                DesignationId = seDes?.Id ?? Guid.Empty,
                BranchId = hq?.Id ?? Guid.Empty,
                ReportingManagerId = null,
                JoiningDate = new DateTime(2024, 2, 1, 0, 0, 0, DateTimeKind.Utc),
                EmploymentType = EmploymentType.FULL_TIME,
                EmploymentStatus = EmploymentStatus.ACTIVE,
                Gender = Gender.FEMALE,
                Salary = 90000
            };

            var jamesEmp = new Employee
            {
                EmployeeId = "EMP-24-0005",
                FirstName = "James",
                LastName = "Roberts",
                Email = "james.roberts@hrm.com",
                Phone = "+1-555-0100",
                DepartmentId = sales?.Id ?? Guid.Empty,
                DesignationId = bmDes?.Id ?? Guid.Empty,
                BranchId = hq?.Id ?? Guid.Empty,
                ReportingManagerId = null,
                JoiningDate = new DateTime(2024, 5, 20, 0, 0, 0, DateTimeKind.Utc),
                EmploymentType = EmploymentType.FULL_TIME,
                EmploymentStatus = EmploymentStatus.ACTIVE,
                Gender = Gender.MALE,
                WorkLocation = "Head Office",
                Salary = 95000
            };

            _context.Employees.AddRange(adminEmp, hrEmp, tlEmp, emp, jamesEmp);
            await _context.SaveChangesAsync();
        }

        // ============ Seed Users ============
        if (!await _context.Users.AnyAsync())
        {
            var adminEmp = await _context.Employees.FirstOrDefaultAsync(e => e.Email == "admin@hrm.com");
            var hrEmp = await _context.Employees.FirstOrDefaultAsync(e => e.Email == "hr@hrm.com");
            var tlEmp = await _context.Employees.FirstOrDefaultAsync(e => e.Email == "tl@hrm.com");
            var emp = await _context.Employees.FirstOrDefaultAsync(e => e.Email == "emp@hrm.com");
            var jamesEmp = await _context.Employees.FirstOrDefaultAsync(e => e.Email == "james.roberts@hrm.com");

            _context.Users.AddRange(
                new User
                {
                    FirstName = "Admin",
                    LastName = "User",
                    Email = "admin@hrm.com",
                    PasswordHash = BCrypt.Net.BCrypt.HashPassword("password123"),
                    Role = UserRole.ADMIN,
                    RoleId = SeedRoles.ADMIN,
                    Department = "Human Resources",
                    Designation = "HR Manager",
                    EmployeeId = adminEmp?.Id,
                    IsActive = true
                },
                new User
                {
                    FirstName = "HR",
                    LastName = "Manager",
                    Email = "hr@hrm.com",
                    PasswordHash = BCrypt.Net.BCrypt.HashPassword("password123"),
                    Role = UserRole.HR,
                    RoleId = SeedRoles.HR,
                    Department = "Human Resources",
                    Designation = "HR Manager",
                    EmployeeId = hrEmp?.Id,
                    IsActive = true
                },
                new User
                {
                    FirstName = "Team",
                    LastName = "Lead",
                    Email = "tl@hrm.com",
                    PasswordHash = BCrypt.Net.BCrypt.HashPassword("password123"),
                    Role = UserRole.TL,
                    RoleId = SeedRoles.TL,
                    Department = "Engineering",
                    Designation = "Team Lead",
                    EmployeeId = tlEmp?.Id,
                    IsActive = true
                },
                new User
                {
                    FirstName = "Employee",
                    LastName = "One",
                    Email = "emp@hrm.com",
                    PasswordHash = BCrypt.Net.BCrypt.HashPassword("password123"),
                    Role = UserRole.EMPLOYEE,
                    RoleId = SeedRoles.EMPLOYEE,
                    Department = "Engineering",
                    Designation = "Software Engineer",
                    EmployeeId = emp?.Id,
                    IsActive = true
                },
                new User
                {
                    FirstName = "James",
                    LastName = "Roberts",
                    Email = "james.roberts@hrm.com",
                    PasswordHash = BCrypt.Net.BCrypt.HashPassword("password123"),
                    Role = UserRole.EMPLOYEE,
                    RoleId = SeedRoles.EMPLOYEE,
                    Department = "Sales",
                    Designation = "Branch Manager",
                    EmployeeId = jamesEmp?.Id,
                    IsActive = true
                });
            await _context.SaveChangesAsync();
        }

        // ============ Seed Shifts ============
        if (!await _context.Shifts.AnyAsync())
        {
            _context.Shifts.AddRange(
                new Shift { Name = "Morning Shift", StartTime = new TimeOnly(9, 0), EndTime = new TimeOnly(18, 0), BreakMinutes = 60, Description = "Standard day shift" },
                new Shift { Name = "Night Shift", StartTime = new TimeOnly(21, 0), EndTime = new TimeOnly(6, 0), BreakMinutes = 45, Description = "Night support shift" });
            await _context.SaveChangesAsync();
        }

        // ============ Seed Leave Balances for employees ============
        var employees = await _context.Employees.Where(e => !_context.LeaveBalances.Any(lb => lb.EmployeeId == e.Id)).ToListAsync();
        if (employees.Count > 0)
        {
            int year = DateTime.UtcNow.Year;
            var defaults = new Dictionary<LeaveType, int>
            {
                [LeaveType.ANNUAL] = 15,
                [LeaveType.SICK] = 10,
                [LeaveType.PERSONAL] = 5,
                [LeaveType.MATERNITY] = 90,
                [LeaveType.PATERNITY] = 15,
                [LeaveType.BEREAVEMENT] = 5
            };
            foreach (var emp in employees)
            {
                foreach (var item in defaults)
                {
                    _context.LeaveBalances.Add(new LeaveBalance
                    {
                        EmployeeId = emp.Id,
                        LeaveType = item.Key,
                        Entitled = item.Value,
                        Taken = 0,
                        Remaining = item.Value,
                        Year = year
                    });
                }
            }
            await _context.SaveChangesAsync();
        }

        // ============ Seed System Settings ============
        if (!await _context.SystemSettings.AnyAsync())
        {
            _context.SystemSettings.AddRange(
                new SystemSetting { Key = "CompanyName", Value = "HRM Pro Pvt. Ltd.", Category = "Company", Description = "Registered company name" },
                new SystemSetting { Key = "CompanyEmail", Value = "info@hrmpro.com", Category = "Company" },
                new SystemSetting { Key = "CompanyPhone", Value = "+91-22-12345678", Category = "Company" },
                new SystemSetting { Key = "GeofenceLatitude", Value = "19.0760", Category = "Geofence" },
                new SystemSetting { Key = "GeofenceLongitude", Value = "72.8777", Category = "Geofence" },
                new SystemSetting { Key = "GeofenceRadius", Value = "500", Category = "Geofence" },
                new SystemSetting { Key = "WorkStartTime", Value = "09:00", Category = "Shift" },
                new SystemSetting { Key = "WorkEndTime", Value = "18:00", Category = "Shift" },
                new SystemSetting { Key = "WeekDays", Value = "MONDAY,TUESDAY,WEDNESDAY,THURSDAY,FRIDAY", Category = "Policy" },
                new SystemSetting { Key = "AnnualLeaveDays", Value = "15", Category = "LeavePolicy" },
                new SystemSetting { Key = "SickLeaveDays", Value = "10", Category = "LeavePolicy" },
                new SystemSetting { Key = "EmailNotifications", Value = "true", Category = "Notifications" });
            await _context.SaveChangesAsync();
        }

        // ============ Seed Notification Preferences ============
        if (!await _context.NotificationPreferences.AnyAsync())
        {
            _context.NotificationPreferences.AddRange(
                new NotificationPreference { EventName = "LEAVE_REQUESTED", Description = "When an employee requests leave" },
                new NotificationPreference { EventName = "LEAVE_APPROVED", Description = "When a leave request is approved" },
                new NotificationPreference { EventName = "LEAVE_REJECTED", Description = "When a leave request is rejected" },
                new NotificationPreference { EventName = "ATTENDANCE_CORRECTION", Description = "When attendance is corrected or approved" },
                new NotificationPreference { EventName = "PAYROLL_PROCESSED", Description = "When monthly payroll is processed" },
                new NotificationPreference { EventName = "PAYSLIP_GENERATED", Description = "When a payslip is generated" },
                new NotificationPreference { EventName = "NEW_EMPLOYEE_JOINED", Description = "When a new employee joins" },
                new NotificationPreference { EventName = "BIRTHDAY", Description = "Employee birthday wishes" },
                new NotificationPreference { EventName = "ANNOUNCEMENT", Description = "Company announcements" },
                new NotificationPreference { EventName = "TASK_ASSIGNED", Description = "When a task is assigned" });
            await _context.SaveChangesAsync();
        }

        // ============ Seed Attendance Rules ============
        if (!await _context.AttendanceRules.AnyAsync())
        {
            _context.AttendanceRules.AddRange(
                new AttendanceRule
                {
                    Name = "Standard Office Policy",
                    LateThresholdTime = new TimeOnly(10, 0),
                    GraceMinutes = 15,
                    MinWorkHours = 8m,
                    MaxBreakMinutes = 60,
                    OvertimeAfterHours = 8m,
                    OvertimePolicy = OvertimePolicy.DAILY,
                    AutoMarkAbsentOnNoCheckIn = true,
                    Description = "Default attendance policy for all employees"
                },
                new AttendanceRule
                {
                    Name = "Flexible Shift Policy",
                    LateThresholdTime = new TimeOnly(11, 0),
                    GraceMinutes = 20,
                    MinWorkHours = 7m,
                    MaxBreakMinutes = 45,
                    OvertimeAfterHours = 8m,
                    OvertimePolicy = OvertimePolicy.NONE,
                    AutoMarkAbsentOnNoCheckIn = false,
                    Description = "Optional flexible working hours policy"
                });
            await _context.SaveChangesAsync();
        }

        // ============ Seed Email/SMS System Settings ============
        if (!await _context.SystemSettings.AnyAsync(s => s.Category == "EMAIL_SMS"))
        {
            var emailSmsSettings = new Dictionary<string, (string Value, string Description)>
            {
                ["SMTP_HOST"] = ("smtp.gmail.com", "SMTP server hostname"),
                ["SMTP_PORT"] = ("587", "SMTP server port"),
                ["SMTP_USERNAME"] = ("noreply@hrmpro.com", "SMTP username"),
                ["SMTP_PASSWORD"] = ("", "SMTP password (SMTP app password)"),
                ["SMTP_FROM"] = ("HRM Pro <noreply@hrmpro.com>", "From address for outgoing emails"),
                ["SMS_API_URL"] = ("https://api.smsprovider.com/send", "SMS gateway API endpoint"),
                ["SMS_API_KEY"] = ("", "SMS gateway API key"),
                ["SMS_SENDER_ID"] = ("HRMPRO", "SMS sender identifier")
            };
            foreach (var kvp in emailSmsSettings)
            {
                _context.SystemSettings.Add(new SystemSetting
                {
                    Key = kvp.Key,
                    Value = kvp.Value.Value,
                    Category = "EMAIL_SMS",
                    Description = kvp.Value.Description,
                    UpdatedAt = DateTime.UtcNow
                });
            }
            await _context.SaveChangesAsync();
        }

        // ============ Seed Navigation Modules, Features & Role Mappings ============
        if (await _context.Modules.AnyAsync() && !await _context.FeatureRoles.AnyAsync())
        {
            _context.FeatureRoles.RemoveRange(_context.FeatureRoles);
            _context.Features.RemoveRange(_context.Features);
            _context.Modules.RemoveRange(_context.Modules);
            await _context.SaveChangesAsync();
        }

        if (!await _context.Modules.AnyAsync())
        {
            var modules = new List<Module>();

            // 1. Dashboard (all roles)
            var dashboard = new Module
            {
                Id = Guid.NewGuid(),
                Name = "Dashboard",
                Code = "DASHBOARD",
                Description = "Overview dashboard",
                Icon = "fas fa-th-large",
                SortOrder = 1,
                IsDeleted = false
            };
            var dashboardFeature = new Feature
            {
                Id = Guid.NewGuid(),
                ModuleId = dashboard.Id,
                Code = "dashboard",
                Name = "Dashboard",
                Url = "dashboard",
                Icon = "fas fa-th-large",
                SortOrder = 1,
                IsDeleted = false
            };
            modules.Add(dashboard);

            // 2. People (Admin / HR)
            var people = new Module
            {
                Id = Guid.NewGuid(),
                Name = "People",
                Code = "PEOPLE",
                Description = "Employee and organization management",
                Icon = "fas fa-users",
                SortOrder = 2,
                IsDeleted = false
            };
            var peopleFeatures = new List<Feature>
            {
                new Feature { Id = Guid.NewGuid(), ModuleId = people.Id, Code = "employees", Name = "Employees", Url = "employees", Icon = "fas fa-user-tie", SortOrder = 1, IsDeleted = false },
                new Feature { Id = Guid.NewGuid(), ModuleId = people.Id, Code = "departments", Name = "Departments", Url = "departments", Icon = "fas fa-building", SortOrder = 2, IsDeleted = false },
                new Feature { Id = Guid.NewGuid(), ModuleId = people.Id, Code = "designations", Name = "Designations", Url = "designations", Icon = "fas fa-id-badge", SortOrder = 3, IsDeleted = false },
                new Feature { Id = Guid.NewGuid(), ModuleId = people.Id, Code = "branches", Name = "Branches", Url = "branches", Icon = "fas fa-map-marker-alt", SortOrder = 4, IsDeleted = false },
                new Feature { Id = Guid.NewGuid(), ModuleId = people.Id, Code = "teams", Name = "Teams", Url = "teams", Icon = "fas fa-user-friends", SortOrder = 5, IsDeleted = false }
            };
            modules.Add(people);

            // 3. Time & Attendance (Admin / HR)
            var timeAttendance = new Module
            {
                Id = Guid.NewGuid(),
                Name = "Time & Attendance",
                Code = "TIME_ATTENDANCE",
                Description = "Attendance and shift management",
                Icon = "fas fa-clock",
                SortOrder = 3,
                IsDeleted = false
            };
            var timeFeatures = new List<Feature>
            {
                new Feature { Id = Guid.NewGuid(), ModuleId = timeAttendance.Id, Code = "attendance", Name = "Attendance", Url = "attendance", Icon = "fas fa-calendar-check", SortOrder = 1, IsDeleted = false },
                new Feature { Id = Guid.NewGuid(), ModuleId = timeAttendance.Id, Code = "shifts", Name = "Shifts", Url = "shifts", Icon = "fas fa-business-time", SortOrder = 2, IsDeleted = false }
            };
            modules.Add(timeAttendance);

            // 4. Leave Management (Admin / HR)
            var leaveModule = new Module
            {
                Id = Guid.NewGuid(),
                Name = "Leave Management",
                Code = "LEAVE",
                Description = "Leave requests and balances",
                Icon = "fas fa-calendar-alt",
                SortOrder = 4,
                IsDeleted = false
            };
            var leaveFeature = new Feature
            {
                Id = Guid.NewGuid(),
                ModuleId = leaveModule.Id,
                Code = "leave",
                Name = "Leave",
                Url = "leave",
                Icon = "fas fa-calendar-alt",
                SortOrder = 1,
                IsDeleted = false
            };
            modules.Add(leaveModule);

            // 5. Finance (Admin / HR)
            var payrollModule = new Module
            {
                Id = Guid.NewGuid(),
                Name = "Finance",
                Code = "FINANCE",
                Description = "Payroll and financial records",
                Icon = "fas fa-wallet",
                SortOrder = 5,
                IsDeleted = false
            };
            var payrollFeature = new Feature
            {
                Id = Guid.NewGuid(),
                ModuleId = payrollModule.Id,
                Code = "payroll",
                Name = "Payroll",
                Url = "payroll",
                Icon = "fas fa-money-bill-wave",
                SortOrder = 1,
                IsDeleted = false
            };
            modules.Add(payrollModule);

            // 6. Recruitment (Admin / HR)
            var recruitmentModule = new Module
            {
                Id = Guid.NewGuid(),
                Name = "Recruitment",
                Code = "RECRUITMENT",
                Description = "Job openings, candidates and onboarding",
                Icon = "fas fa-user-tie",
                SortOrder = 6,
                IsDeleted = false
            };
            var recruitmentFeatures = new List<Feature>
            {
                new Feature { Id = Guid.NewGuid(), ModuleId = recruitmentModule.Id, Code = "recruitment", Name = "Job Openings", Url = "recruitment", Icon = "fas fa-briefcase", SortOrder = 1, IsDeleted = false },
                new Feature { Id = Guid.NewGuid(), ModuleId = recruitmentModule.Id, Code = "onboarding", Name = "Onboarding", Url = "onboarding", Icon = "fas fa-user-plus", SortOrder = 2, IsDeleted = false }
            };
            modules.Add(recruitmentModule);

            // 7. Performance & Growth (Admin / HR)
            var performanceModule = new Module
            {
                Id = Guid.NewGuid(),
                Name = "Performance & Growth",
                Code = "PERFORMANCE",
                Description = "Performance reviews, KPIs and training",
                Icon = "fas fa-chart-line",
                SortOrder = 7,
                IsDeleted = false
            };
            var performanceFeatures = new List<Feature>
            {
                new Feature { Id = Guid.NewGuid(), ModuleId = performanceModule.Id, Code = "performance", Name = "Performance", Url = "performance", Icon = "fas fa-star", SortOrder = 1, IsDeleted = false },
                new Feature { Id = Guid.NewGuid(), ModuleId = performanceModule.Id, Code = "training", Name = "Training", Url = "training", Icon = "fas fa-graduation-cap", SortOrder = 2, IsDeleted = false }
            };
            modules.Add(performanceModule);

            // 8. Resources (Admin / HR / TL / Employee)
            var resourcesModule = new Module
            {
                Id = Guid.NewGuid(),
                Name = "Resources",
                Code = "RESOURCES",
                Description = "Documents and announcements",
                Icon = "fas fa-folder-open",
                SortOrder = 8,
                IsDeleted = false
            };
            var resourcesFeatures = new List<Feature>
            {
                new Feature { Id = Guid.NewGuid(), ModuleId = resourcesModule.Id, Code = "documents", Name = "Documents", Url = "documents", Icon = "fas fa-file-alt", SortOrder = 1, IsDeleted = false },
                new Feature { Id = Guid.NewGuid(), ModuleId = resourcesModule.Id, Code = "announcements", Name = "Announcements", Url = "announcements", Icon = "fas fa-bullhorn", SortOrder = 2, IsDeleted = false }
            };
            modules.Add(resourcesModule);

            // 9. Reports (Admin / HR)
            var reportsModule = new Module
            {
                Id = Guid.NewGuid(),
                Name = "Reports",
                Code = "REPORTS",
                Description = "Analytics and reports",
                Icon = "fas fa-chart-bar",
                SortOrder = 9,
                IsDeleted = false
            };
            var reportsFeature = new Feature
            {
                Id = Guid.NewGuid(),
                ModuleId = reportsModule.Id,
                Code = "reports",
                Name = "Reports",
                Url = "reports",
                Icon = "fas fa-chart-bar",
                SortOrder = 1,
                IsDeleted = false
            };
            modules.Add(reportsModule);

            // 10. Administration (Admin only)
            var adminModule = new Module
            {
                Id = Guid.NewGuid(),
                Name = "Administration",
                Code = "ADMINISTRATION",
                Description = "User management, roles and settings",
                Icon = "fas fa-cogs",
                SortOrder = 10,
                IsDeleted = false
            };
            var adminFeatures = new List<Feature>
            {
                new Feature { Id = Guid.NewGuid(), ModuleId = adminModule.Id, Code = "users", Name = "User Management", Url = "users", Icon = "fas fa-user-cog", SortOrder = 1, IsDeleted = false },
                new Feature { Id = Guid.NewGuid(), ModuleId = adminModule.Id, Code = "roles", Name = "Roles & Permissions", Url = "roles", Icon = "fas fa-user-shield", SortOrder = 2, IsDeleted = false },
                new Feature { Id = Guid.NewGuid(), ModuleId = adminModule.Id, Code = "audit-logs", Name = "Audit Logs", Url = "audit-logs", Icon = "fas fa-history", SortOrder = 3, IsDeleted = false },
                new Feature { Id = Guid.NewGuid(), ModuleId = adminModule.Id, Code = "settings", Name = "System Settings", Url = "settings", Icon = "fas fa-sliders-h", SortOrder = 4, IsDeleted = false }
            };
            modules.Add(adminModule);

            // 11. My Team (TL only)
            var teamModule = new Module
            {
                Id = Guid.NewGuid(),
                Name = "My Team",
                Code = "MY_TEAM",
                Description = "Team management and monitoring",
                Icon = "fas fa-user-friends",
                SortOrder = 3,
                IsDeleted = false
            };
            var teamFeatures = new List<Feature>
            {
                new Feature { Id = Guid.NewGuid(), ModuleId = teamModule.Id, Code = "team", Name = "Team Overview", Url = "team", Icon = "fas fa-users", SortOrder = 1, IsDeleted = false },
                new Feature { Id = Guid.NewGuid(), ModuleId = teamModule.Id, Code = "team-attendance", Name = "Attendance", Url = "team/attendance", Icon = "fas fa-calendar-check", SortOrder = 2, IsDeleted = false },
                new Feature { Id = Guid.NewGuid(), ModuleId = teamModule.Id, Code = "team-leave", Name = "Leave Requests", Url = "team/leave", Icon = "fas fa-calendar-minus", SortOrder = 3, IsDeleted = false },
                new Feature { Id = Guid.NewGuid(), ModuleId = teamModule.Id, Code = "team-tasks", Name = "Tasks", Url = "team/tasks", Icon = "fas fa-tasks", SortOrder = 4, IsDeleted = false },
                new Feature { Id = Guid.NewGuid(), ModuleId = teamModule.Id, Code = "team-performance", Name = "Performance", Url = "team/performance", Icon = "fas fa-chart-line", SortOrder = 5, IsDeleted = false },
                new Feature { Id = Guid.NewGuid(), ModuleId = teamModule.Id, Code = "team-kpi", Name = "KPIs", Url = "team/kpi", Icon = "fas fa-bullseye", SortOrder = 6, IsDeleted = false },
                new Feature { Id = Guid.NewGuid(), ModuleId = teamModule.Id, Code = "team-reports", Name = "Reports", Url = "team/reports", Icon = "fas fa-chart-bar", SortOrder = 7, IsDeleted = false }
            };
            modules.Add(teamModule);

            // 12. My Space (Employee only)
            var mySpaceModule = new Module
            {
                Id = Guid.NewGuid(),
                Name = "My Space",
                Code = "MY_SPACE",
                Description = "Personal profile and attendance",
                Icon = "fas fa-id-card",
                SortOrder = 2,
                IsDeleted = false
            };
            var mySpaceFeatures = new List<Feature>
            {
                new Feature { Id = Guid.NewGuid(), ModuleId = mySpaceModule.Id, Code = "my-profile", Name = "My Profile", Url = "my-profile", Icon = "fas fa-user", SortOrder = 1, IsDeleted = false },
                new Feature { Id = Guid.NewGuid(), ModuleId = mySpaceModule.Id, Code = "my-attendance", Name = "My Attendance", Url = "my-attendance", Icon = "fas fa-calendar-check", SortOrder = 2, IsDeleted = false },
                new Feature { Id = Guid.NewGuid(), ModuleId = mySpaceModule.Id, Code = "check-in-out", Name = "Check In/Out", Url = "check-in-out", Icon = "fas fa-sign-in-alt", SortOrder = 3, IsDeleted = false },
                new Feature { Id = Guid.NewGuid(), ModuleId = mySpaceModule.Id, Code = "break-tracker", Name = "Break Tracker", Url = "break-tracker", Icon = "fas fa-coffee", SortOrder = 4, IsDeleted = false },
                new Feature { Id = Guid.NewGuid(), ModuleId = mySpaceModule.Id, Code = "daily-work-update", Name = "Daily Work Update", Url = "daily-work-update", Icon = "fas fa-edit", SortOrder = 5, IsDeleted = false }
            };
            modules.Add(mySpaceModule);

            // 13. My Leave (Employee only)
            var myLeaveModule = new Module
            {
                Id = Guid.NewGuid(),
                Name = "My Leave",
                Code = "MY_LEAVE",
                Description = "Personal leave management",
                Icon = "fas fa-calendar-alt",
                SortOrder = 5,
                IsDeleted = false
            };
            var myLeaveFeatures = new List<Feature>
            {
                new Feature { Id = Guid.NewGuid(), ModuleId = myLeaveModule.Id, Code = "my-leave", Name = "My Leave", Url = "my-leave", Icon = "fas fa-calendar-minus", SortOrder = 1, IsDeleted = false },
                new Feature { Id = Guid.NewGuid(), ModuleId = myLeaveModule.Id, Code = "apply-leave", Name = "Apply Leave", Url = "apply-leave", Icon = "fas fa-calendar-plus", SortOrder = 2, IsDeleted = false }
            };
            modules.Add(myLeaveModule);

            // 14. My Payroll (Employee only)
            var myPayrollModule = new Module
            {
                Id = Guid.NewGuid(),
                Name = "My Payroll",
                Code = "MY_PAYROLL",
                Description = "Payslips and salary details",
                Icon = "fas fa-wallet",
                SortOrder = 6,
                IsDeleted = false
            };
            var myPayrollFeature = new Feature
            {
                Id = Guid.NewGuid(),
                ModuleId = myPayrollModule.Id,
                Code = "my-payslips",
                Name = "My Payslips",
                Url = "my-payslips",
                Icon = "fas fa-money-check-alt",
                SortOrder = 1,
                IsDeleted = false
            };
            modules.Add(myPayrollModule);

            // 15. My Work (Employee only)
            var myWorkModule = new Module
            {
                Id = Guid.NewGuid(),
                Name = "My Work",
                Code = "MY_WORK",
                Description = "Personal tasks and performance",
                Icon = "fas fa-briefcase",
                SortOrder = 7,
                IsDeleted = false
            };
            var myWorkFeatures = new List<Feature>
            {
                new Feature { Id = Guid.NewGuid(), ModuleId = myWorkModule.Id, Code = "my-tasks", Name = "My Tasks", Url = "my-tasks", Icon = "fas fa-tasks", SortOrder = 1, IsDeleted = false },
                new Feature { Id = Guid.NewGuid(), ModuleId = myWorkModule.Id, Code = "my-performance", Name = "My Performance", Url = "my-performance", Icon = "fas fa-chart-line", SortOrder = 2, IsDeleted = false }
            };
            modules.Add(myWorkModule);

            // 16. My Resources (Employee only)
            var myResourcesModule = new Module
            {
                Id = Guid.NewGuid(),
                Name = "My Resources",
                Code = "MY_RESOURCES",
                Description = "Personal documents and resources",
                Icon = "fas fa-folder-open",
                SortOrder = 8,
                IsDeleted = false
            };
            var myResourcesFeatures = new List<Feature>
            {
                new Feature { Id = Guid.NewGuid(), ModuleId = myResourcesModule.Id, Code = "my-documents", Name = "My Documents", Url = "my-documents", Icon = "fas fa-file-alt", SortOrder = 1, IsDeleted = false },
                new Feature { Id = Guid.NewGuid(), ModuleId = myResourcesModule.Id, Code = "notifications", Name = "Notifications", Url = "notifications", Icon = "fas fa-bell", SortOrder = 2, IsDeleted = false }
            };
            modules.Add(myResourcesModule);

            _context.Modules.AddRange(modules);

            var allFeatures = new List<Feature>();
            allFeatures.Add(dashboardFeature);
            allFeatures.AddRange(peopleFeatures);
            allFeatures.AddRange(timeFeatures);
            allFeatures.Add(leaveFeature);
            allFeatures.Add(payrollFeature);
            allFeatures.AddRange(recruitmentFeatures);
            allFeatures.AddRange(performanceFeatures);
            allFeatures.AddRange(resourcesFeatures);
            allFeatures.Add(reportsFeature);
            allFeatures.AddRange(adminFeatures);
            allFeatures.AddRange(teamFeatures);
            allFeatures.AddRange(mySpaceFeatures);
            allFeatures.AddRange(myLeaveFeatures);
            allFeatures.Add(myPayrollFeature);
            allFeatures.AddRange(myWorkFeatures);
            allFeatures.AddRange(myResourcesFeatures);

            _context.Features.AddRange(allFeatures);
            await _context.SaveChangesAsync();

            // ============ Build Feature -> Role assignments ============
            var featureByCode = allFeatures.ToDictionary(f => f.Code);
            var roleAssignments = new Dictionary<string, List<string>>
            {
                // Admin gets all corporate modules
                [dashboardFeature.Code] = new() { "ADMIN", "HR", "TL", "EMPLOYEE" },

                [peopleFeatures[0].Code] = new() { "ADMIN", "HR" }, // employees
                [peopleFeatures[1].Code] = new() { "ADMIN", "HR" }, // departments
                [peopleFeatures[2].Code] = new() { "ADMIN" },       // designations
                [peopleFeatures[3].Code] = new() { "ADMIN" },       // branches
                [peopleFeatures[4].Code] = new() { "ADMIN", "HR" }, // teams

                [timeFeatures[0].Code] = new() { "ADMIN", "HR" },   // attendance
                [timeFeatures[1].Code] = new() { "ADMIN", "HR" },   // shifts

                [leaveFeature.Code] = new() { "ADMIN", "HR" },      // leave

                [payrollFeature.Code] = new() { "ADMIN", "HR" },    // payroll

                [recruitmentFeatures[0].Code] = new() { "ADMIN", "HR" }, // recruitment
                [recruitmentFeatures[1].Code] = new() { "ADMIN", "HR" }, // onboarding

                [performanceFeatures[0].Code] = new() { "ADMIN", "HR" }, // performance
                [performanceFeatures[1].Code] = new() { "ADMIN", "HR" }, // training

                [resourcesFeatures[0].Code] = new() { "ADMIN", "HR" },   // documents
                [resourcesFeatures[1].Code] = new() { "ADMIN", "HR", "TL", "EMPLOYEE" }, // announcements

                [reportsFeature.Code] = new() { "ADMIN", "HR" },    // reports

                [adminFeatures[0].Code] = new() { "ADMIN" },        // users
                [adminFeatures[1].Code] = new() { "ADMIN" },        // roles
                [adminFeatures[2].Code] = new() { "ADMIN" },        // audit-logs
                [adminFeatures[3].Code] = new() { "ADMIN" },        // settings

                [teamFeatures[0].Code] = new() { "TL" },            // team
                [teamFeatures[1].Code] = new() { "TL" },            // team-attendance
                [teamFeatures[2].Code] = new() { "TL" },            // team-leave
                [teamFeatures[3].Code] = new() { "TL" },            // team-tasks
                [teamFeatures[4].Code] = new() { "TL" },            // team-performance
                [teamFeatures[5].Code] = new() { "TL" },            // team-kpi
                [teamFeatures[6].Code] = new() { "TL" },            // team-reports

                [mySpaceFeatures[0].Code] = new() { "EMPLOYEE" },   // my-profile
                [mySpaceFeatures[1].Code] = new() { "EMPLOYEE" },   // my-attendance
                [mySpaceFeatures[2].Code] = new() { "EMPLOYEE" },   // check-in-out
                [mySpaceFeatures[3].Code] = new() { "EMPLOYEE" },   // break-tracker
                [mySpaceFeatures[4].Code] = new() { "EMPLOYEE" },   // daily-work-update

                [myLeaveFeatures[0].Code] = new() { "EMPLOYEE" },   // my-leave
                [myLeaveFeatures[1].Code] = new() { "EMPLOYEE" },   // apply-leave

                [myPayrollFeature.Code] = new() { "EMPLOYEE" },     // my-payslips

                [myWorkFeatures[0].Code] = new() { "EMPLOYEE" },    // my-tasks
                [myWorkFeatures[1].Code] = new() { "EMPLOYEE" },    // my-performance

                [myResourcesFeatures[0].Code] = new() { "EMPLOYEE" },   // my-documents
                [myResourcesFeatures[1].Code] = new() { "EMPLOYEE" },   // notifications
            };

            var featureRoles = new List<FeatureRole>();

            foreach (var assignment in roleAssignments)
            {
                if (featureByCode.TryGetValue(assignment.Key, out var feature))
                {
                    foreach (var role in assignment.Value)
                    {
                        featureRoles.Add(new FeatureRole
                        {
                            Id = Guid.NewGuid(),
                            FeatureId = feature.Id,
                            Role = role,
                            RoleId = SeedRoles.ForCode(role) ?? feature.RoleId
                        });
                    }
                }
            }

            _context.FeatureRoles.AddRange(featureRoles);
            await _context.SaveChangesAsync();
        }

        // ============ Seed Projects navigation (idempotent) ============
        await EnsureFeatureAsync(
            moduleCode: "PROJECTS",
            moduleName: "Projects",
            moduleIcon: "fas fa-project-diagram",
            moduleSortOrder: 11,
            featureCode: "projects",
            featureName: "Projects",
            featureUrl: "projects",
            featureIcon: "fas fa-project-diagram",
            featureSortOrder: 1,
            roles: new[] { "ADMIN", "HR" });

        await EnsureFeatureAsync(
            moduleCode: "MY_TEAM",
            moduleName: "My Team",
            moduleIcon: "fas fa-user-friends",
            moduleSortOrder: 3,
            featureCode: "team-projects",
            featureName: "Projects",
            featureUrl: "team/projects",
            featureIcon: "fas fa-project-diagram",
            featureSortOrder: 8,
            roles: new[] { "TL" });

        await EnsureFeatureAsync(
            moduleCode: "MY_WORK",
            moduleName: "My Work",
            moduleIcon: "fas fa-briefcase",
            moduleSortOrder: 7,
            featureCode: "my-projects",
            featureName: "My Projects",
            featureUrl: "my-projects",
            featureIcon: "fas fa-project-diagram",
            featureSortOrder: 3,
            roles: new[] { "EMPLOYEE" });

        // ============ Seed Management navigation (idempotent) ============
        await EnsureFeatureAsync(
            moduleCode: "MANAGEMENT",
            moduleName: "Management",
            moduleIcon: "fas fa-users-cog",
            moduleSortOrder: 12,
            featureCode: "employee-management",
            featureName: "Employee Management",
            featureUrl: "employee-management",
            featureIcon: "fas fa-users",
            featureSortOrder: 1,
            roles: new[] { "ADMIN" });

        await EnsureFeatureAsync(
            moduleCode: "MANAGEMENT",
            moduleName: "Management",
            moduleIcon: "fas fa-users-cog",
            moduleSortOrder: 12,
            featureCode: "tl-management",
            featureName: "TL Management",
            featureUrl: "tl-management",
            featureIcon: "fas fa-user-tie",
            featureSortOrder: 2,
            roles: new[] { "ADMIN" });

        await EnsureFeatureAsync(
            moduleCode: "MANAGEMENT",
            moduleName: "Management",
            moduleIcon: "fas fa-users-cog",
            moduleSortOrder: 12,
            featureCode: "hr-management",
            featureName: "HR Management",
            featureUrl: "hr-management",
            featureIcon: "fas fa-user-shield",
            featureSortOrder: 3,
            roles: new[] { "ADMIN" });

        // ============ Seed My Projects navigation (idempotent) ============
        await EnsureFeatureAsync(
            moduleCode: "MY_WORK",
            moduleName: "My Work",
            moduleIcon: "fas fa-briefcase",
            moduleSortOrder: 7,
            featureCode: "my-projects",
            featureName: "My Projects",
            featureUrl: "my-projects",
            featureIcon: "fas fa-project-diagram",
            featureSortOrder: 3,
            roles: new[] { "EMPLOYEE" });

        // ============ Seed Organization navigation (idempotent) ============
        await EnsureFeatureAsync(
            moduleCode: "ORGANIZATION",
            moduleName: "Organization",
            moduleIcon: "fas fa-sitemap",
            moduleSortOrder: 13,
            featureCode: "reporting-hierarchy",
            featureName: "Reporting Hierarchy",
            featureUrl: "reporting-hierarchy",
            featureIcon: "fas fa-network-wired",
            featureSortOrder: 1,
            roles: new[] { "ADMIN", "HR" });

        // ============ Seed Attendance Rules navigation ============
        await EnsureFeatureAsync(
            moduleCode: "TIME_ATTENDANCE",
            moduleName: "Time & Attendance",
            moduleIcon: "fas fa-calendar-check",
            moduleSortOrder: 2,
            featureCode: "attendance-corrections",
            featureName: "Attendance Corrections",
            featureUrl: "attendance/corrections",
            featureIcon: "fas fa-user-edit",
            featureSortOrder: 3,
            roles: new[] { "ADMIN", "HR" });

        await EnsureFeatureAsync(
            moduleCode: "TIME_ATTENDANCE",
            moduleName: "Time & Attendance",
            moduleIcon: "fas fa-calendar-check",
            moduleSortOrder: 2,
            featureCode: "attendance-summary",
            featureName: "Attendance Reports",
            featureUrl: "attendance/summary",
            featureIcon: "fas fa-chart-bar",
            featureSortOrder: 4,
            roles: new[] { "ADMIN", "HR" });

        await EnsureFeatureAsync(
            moduleCode: "TIME_ATTENDANCE",
            moduleName: "Time & Attendance",
            moduleIcon: "fas fa-calendar-check",
            moduleSortOrder: 2,
            featureCode: "attendance-rules",
            featureName: "Attendance Rules",
            featureUrl: "attendance/rules",
            featureIcon: "fas fa-sliders-h",
            featureSortOrder: 5,
            roles: new[] { "ADMIN", "HR" });

        // ============ Seed Payroll navigation ============
        await EnsureFeatureAsync(
            moduleCode: "FINANCE",
            moduleName: "Finance & Payroll",
            moduleIcon: "fas fa-coins",
            moduleSortOrder: 4,
            featureCode: "salary-structures",
            featureName: "Salary Structures",
            featureUrl: "payroll/salary-structures",
            featureIcon: "fas fa-calculator",
            featureSortOrder: 2,
            roles: new[] { "ADMIN", "HR" });

        await EnsureFeatureAsync(
            moduleCode: "FINANCE",
            moduleName: "Finance & Payroll",
            moduleIcon: "fas fa-coins",
            moduleSortOrder: 4,
            featureCode: "payroll-reports",
            featureName: "Payroll Reports",
            featureUrl: "payroll/reports",
            featureIcon: "fas fa-file-invoice-dollar",
            featureSortOrder: 3,
            roles: new[] { "ADMIN", "HR" });

        // ============ Seed System admin navigation ============
        await EnsureFeatureAsync(
            moduleCode: "ADMINISTRATION",
            moduleName: "Administration",
            moduleIcon: "fas fa-cogs",
            moduleSortOrder: 14,
            featureCode: "company-settings",
            featureName: "Company Settings",
            featureUrl: "settings/company",
            featureIcon: "fas fa-building",
            featureSortOrder: 5,
            roles: new[] { "ADMIN" });

        await EnsureFeatureAsync(
            moduleCode: "ADMINISTRATION",
            moduleName: "Administration",
            moduleIcon: "fas fa-cogs",
            moduleSortOrder: 14,
            featureCode: "email-sms-config",
            featureName: "Email/SMS Configuration",
            featureUrl: "settings/email-sms",
            featureIcon: "fas fa-envelope-open-text",
            featureSortOrder: 6,
            roles: new[] { "ADMIN" });

        await EnsureFeatureAsync(
            moduleCode: "ADMINISTRATION",
            moduleName: "Administration",
            moduleIcon: "fas fa-cogs",
            moduleSortOrder: 14,
            featureCode: "notification-settings",
            featureName: "Notification Settings",
            featureUrl: "settings/notifications",
            featureIcon: "fas fa-bell",
            featureSortOrder: 7,
            roles: new[] { "ADMIN" });

        // ============ Backfill role ids on existing navigation rows ============
        await BackfillRoleIdsAsync();
    }

    private static readonly string[] RolePriority = { "ADMIN", "HR", "TL", "EMPLOYEE" };

    private async Task BackfillRoleIdsAsync()
    {
        if (!await _context.Roles.AnyAsync())
        {
            _context.Roles.AddRange(SeedRoles.All());
            await _context.SaveChangesAsync();
        }

        var roleIdByCode = await _context.Roles.ToDictionaryAsync(r => r.Code, r => r.Id);

        // 1. FeatureRoles -> RoleId
        var featureRoles = await _context.FeatureRoles.ToListAsync();
        foreach (var fr in featureRoles.Where(fr => fr.RoleId == null || !_context.Roles.Any(r => r.Id == fr.RoleId)))
        {
            var code = fr.Role?.ToUpperInvariant();
            if (roleIdByCode.TryGetValue(code ?? "", out var rid))
                fr.RoleId = rid;
        }
        await _context.SaveChangesAsync();

        // 2. Features -> RoleId (primary/owner role from its FeatureRoles)
        var features = await _context.Features.ToListAsync();
        foreach (var feature in features)
        {
            if (_context.FeatureRoles.Any(fr => fr.FeatureId == feature.Id))
            {
                var primary = _context.FeatureRoles
                    .Where(fr => fr.FeatureId == feature.Id && fr.RoleId != null)
                    .OrderBy(fr => Array.IndexOf(RolePriority, fr.Role))
                    .FirstOrDefault();
                if (primary?.RoleId != null)
                    feature.RoleId = primary.RoleId;
            }
        }
        await _context.SaveChangesAsync();

        // 3. Modules -> RoleId (primary/owner role across its features)
        var modules = await _context.Modules.Include(m => m.Features).ToListAsync();
        foreach (var module in modules)
        {
            var roleIds = module.Features
                .Where(f => f.RoleId != null)
                .Select(f => f.RoleId!.Value)
                .Distinct()
                .ToList();
            if (roleIds.Count == 1)
            {
                module.RoleId = roleIds[0];
            }
            else if (roleIds.Count > 1)
            {
                module.RoleId = roleIds
                    .Select(rid => new { rid, pos = Array.IndexOf(RolePriority, roleIdByCode.FirstOrDefault(kv => kv.Value == rid).Key ?? string.Empty) })
                    .OrderBy(x => x.pos == -1 ? int.MaxValue : x.pos)
                    .First().rid;
            }
        }
        await _context.SaveChangesAsync();
    }

    private async Task EnsureFeatureAsync(
        string moduleCode,
        string moduleName,
        string moduleIcon,
        int moduleSortOrder,
        string featureCode,
        string featureName,
        string featureUrl,
        string featureIcon,
        int featureSortOrder,
        string[] roles)
    {
        if (await _context.Features.AnyAsync(f => f.Code == featureCode && !f.IsDeleted))
            return;

        var module = await _context.Modules.FirstOrDefaultAsync(m => m.Code == moduleCode);
        if (module == null)
        {
            module = new Module
            {
                Id = Guid.NewGuid(),
                Name = moduleName,
                Code = moduleCode,
                Description = moduleName,
                Icon = moduleIcon,
                SortOrder = moduleSortOrder,
                IsDeleted = false,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };
            _context.Modules.Add(module);
            await _context.SaveChangesAsync();
        }

        var feature = new Feature
        {
            Id = Guid.NewGuid(),
            ModuleId = module.Id,
            Code = featureCode,
            Name = featureName,
            Url = featureUrl,
            Icon = featureIcon,
            Description = featureName,
            SortOrder = featureSortOrder,
            IsDeleted = false,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };
        _context.Features.Add(feature);
        await _context.SaveChangesAsync();

        foreach (var role in roles)
        {
            _context.FeatureRoles.Add(new FeatureRole
            {
                Id = Guid.NewGuid(),
                FeatureId = feature.Id,
                Role = role,
                RoleId = SeedRoles.ForCode(role)
            });

            if (feature.RoleId == null)
                feature.RoleId = SeedRoles.ForCode(role);
        }
        await _context.SaveChangesAsync();
    }
}
