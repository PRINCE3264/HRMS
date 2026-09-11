using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Enums;
using HRMAPI.Models;

namespace HRMAPI.Services;

public class DbInitializer
{
    private readonly ApplicationDbContext _context;

    public DbInitializer(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task SeedAsync()
    {
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
            _context.Designations.AddRange(
                new Designation { Title = "Software Engineer", Level = "Senior", DepartmentId = eng?.Id, MinSalary = 80000, MaxSalary = 180000 },
                new Designation { Title = "Software Engineer", Level = "Junior", DepartmentId = eng?.Id, MinSalary = 45000, MaxSalary = 90000 },
                new Designation { Title = "Team Lead", Level = "Lead", DepartmentId = eng?.Id, MinSalary = 120000, MaxSalary = 240000 },
                new Designation { Title = "HR Manager", Level = "Manager", DepartmentId = hr?.Id, MinSalary = 70000, MaxSalary = 140000 },
                new Designation { Title = "Recruiter", Level = "Junior", DepartmentId = hr?.Id, MinSalary = 40000, MaxSalary = 75000 });
            await _context.SaveChangesAsync();
        }

        // ============ Seed Branches ============
        if (!await _context.Branches.AnyAsync())
        {
            _context.Branches.AddRange(
                new Branch { Name = "Head Office", Code = "HQ", Address = "100 Business Park", City = "Mumbai", State = "Maharashtra", Country = "India", Phone = "+91-22-12345678", Email = "hq@hrmpro.com" },
                new Branch { Name = "Pune Office", Code = "PNQ", Address = "Tech Hub", City = "Pune", State = "Maharashtra", Country = "India", Phone = "+91-20-87654321", Email = "pune@hrmpro.com" });
            await _context.SaveChangesAsync();
        }

        // ============ Seed Employees ============
        if (!await _context.Employees.AnyAsync())
        {
            var eng = await _context.Departments.FirstOrDefaultAsync(d => d.Code == "ENG");
            var hr = await _context.Departments.FirstOrDefaultAsync(d => d.Code == "HR");
            var tlDes = await _context.Designations.FirstOrDefaultAsync(d => d.Title == "Team Lead");
            var seDes = await _context.Designations.FirstOrDefaultAsync(d => d.Title == "Software Engineer");
            var hrDes = await _context.Designations.FirstOrDefaultAsync(d => d.Title == "HR Manager");
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

            _context.Employees.AddRange(adminEmp, hrEmp, tlEmp, emp);
            await _context.SaveChangesAsync();
        }

        // ============ Seed Users ============
        if (!await _context.Users.AnyAsync())
        {
            var adminEmp = await _context.Employees.FirstOrDefaultAsync(e => e.Email == "admin@hrm.com");
            var hrEmp = await _context.Employees.FirstOrDefaultAsync(e => e.Email == "hr@hrm.com");
            var tlEmp = await _context.Employees.FirstOrDefaultAsync(e => e.Email == "tl@hrm.com");
            var emp = await _context.Employees.FirstOrDefaultAsync(e => e.Email == "emp@hrm.com");

            _context.Users.AddRange(
                new User
                {
                    FirstName = "Admin",
                    LastName = "User",
                    Email = "admin@hrm.com",
                    PasswordHash = BCrypt.Net.BCrypt.HashPassword("password123"),
                    Role = UserRole.ADMIN,
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
                    Department = "Engineering",
                    Designation = "Software Engineer",
                    EmployeeId = emp?.Id,
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
        // ============ Seed Navigation Modules & Features ============
        if (!await _context.AppModules.AnyAsync())
        {
            var adminModule = new AppModule { Id = Guid.NewGuid(), Name = "Admin Space", Icon = "admin_panel_settings", DisplayOrder = 1 };
            var hrModule = new AppModule { Id = Guid.NewGuid(), Name = "HR Space", Icon = "groups", DisplayOrder = 2 };
            var tlModule = new AppModule { Id = Guid.NewGuid(), Name = "Team Space", Icon = "workspaces", DisplayOrder = 3 };
            var empModule = new AppModule { Id = Guid.NewGuid(), Name = "My Space", Icon = "person", DisplayOrder = 4 };

            _context.AppModules.AddRange(adminModule, hrModule, tlModule, empModule);
            await _context.SaveChangesAsync();

            // Employee Features
            var myProfile = new AppFeature { Id = Guid.NewGuid(), ModuleId = empModule.Id, Name = "My Profile", Path = "/my-profile", Icon = "account_circle", DisplayOrder = 1 };
            var myAttendance = new AppFeature { Id = Guid.NewGuid(), ModuleId = empModule.Id, Name = "My Attendance", Path = "/my-attendance", Icon = "event_available", DisplayOrder = 2 };
            var checkInOut = new AppFeature { Id = Guid.NewGuid(), ModuleId = empModule.Id, Name = "Check In/Out", Path = "/check-in-out", Icon = "login", DisplayOrder = 3 };
            var applyLeave = new AppFeature { Id = Guid.NewGuid(), ModuleId = empModule.Id, Name = "Apply Leave", Path = "/apply-leave", Icon = "flight_takeoff", DisplayOrder = 4 };
            var myPayslips = new AppFeature { Id = Guid.NewGuid(), ModuleId = empModule.Id, Name = "My Payslips", Path = "/my-payslips", Icon = "receipt_long", DisplayOrder = 5 };

            _context.AppFeatures.AddRange(myProfile, myAttendance, checkInOut, applyLeave, myPayslips);

            // TL Features
            var teamAttendance = new AppFeature { Id = Guid.NewGuid(), ModuleId = tlModule.Id, Name = "Team Attendance", Path = "/team/attendance", Icon = "group", DisplayOrder = 1 };
            var teamTasks = new AppFeature { Id = Guid.NewGuid(), ModuleId = tlModule.Id, Name = "Team Tasks", Path = "/team/tasks", Icon = "task", DisplayOrder = 2 };

            _context.AppFeatures.AddRange(teamAttendance, teamTasks);

            // HR Features
            var recruitment = new AppFeature { Id = Guid.NewGuid(), ModuleId = hrModule.Id, Name = "Recruitment", Path = "/recruitment", Icon = "person_add", DisplayOrder = 1 };
            var payroll = new AppFeature { Id = Guid.NewGuid(), ModuleId = hrModule.Id, Name = "Payroll", Path = "/payroll", Icon = "payments", DisplayOrder = 2 };

            _context.AppFeatures.AddRange(recruitment, payroll);

            // Admin Features
            var empFeature = new AppFeature { Id = Guid.NewGuid(), ModuleId = adminModule.Id, Name = "Employees", Path = "/employees", Icon = "badge", DisplayOrder = 1 };
            var settings = new AppFeature { Id = Guid.NewGuid(), ModuleId = adminModule.Id, Name = "Settings", Path = "/settings", Icon = "settings", DisplayOrder = 2 };

            _context.AppFeatures.AddRange(empFeature, settings);
            await _context.SaveChangesAsync();

            // Feature Roles
            var allRoles = new[] { UserRole.EMPLOYEE, UserRole.TL, UserRole.HR, UserRole.ADMIN };
            
            // Everyone gets employee features
            foreach (var feature in new[] { myProfile, myAttendance, checkInOut, applyLeave, myPayslips })
            {
                foreach (var role in allRoles)
                {
                    _context.FeatureRoles.Add(new FeatureRole { FeatureId = feature.Id, Role = role });
                }
            }

            // TL and above gets team features
            foreach (var feature in new[] { teamAttendance, teamTasks })
            {
                _context.FeatureRoles.Add(new FeatureRole { FeatureId = feature.Id, Role = UserRole.TL });
                _context.FeatureRoles.Add(new FeatureRole { FeatureId = feature.Id, Role = UserRole.HR });
                _context.FeatureRoles.Add(new FeatureRole { FeatureId = feature.Id, Role = UserRole.ADMIN });
            }

            // HR and Admin get HR features
            foreach (var feature in new[] { recruitment, payroll })
            {
                _context.FeatureRoles.Add(new FeatureRole { FeatureId = feature.Id, Role = UserRole.HR });
                _context.FeatureRoles.Add(new FeatureRole { FeatureId = feature.Id, Role = UserRole.ADMIN });
            }

            // Only Admin gets admin features
            foreach (var feature in new[] { empFeature, settings })
            {
                _context.FeatureRoles.Add(new FeatureRole { FeatureId = feature.Id, Role = UserRole.ADMIN });
            }

            await _context.SaveChangesAsync();
        }
    }
}



