using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Models.DTOs.Organization;
using HRMAPI.Models.DTOs.Report;
using HRMAPI.Models.DTOs.System;
using HRMAPI.Enums;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Services;



public class ReportService : IReportService
{
    private readonly IAuditLogRepository _auditLogRepository;
    private readonly ISystemSettingRepository _settingRepository;
    private readonly IAnnouncementRepository _announcementRepository;
    private readonly IDocumentRepository _documentRepository;
    private readonly INotificationRepository _notificationRepository;
    private readonly IEmployeeRepository _employeeRepository;
    private readonly IUserRepository _userRepository;
    private readonly ApplicationDbContext _context;

    public ReportService(
        IAuditLogRepository auditLogRepository,
        ISystemSettingRepository settingRepository,
        IAnnouncementRepository announcementRepository,
        IDocumentRepository documentRepository,
        INotificationRepository notificationRepository,
        IEmployeeRepository employeeRepository,
        IUserRepository userRepository,
        ApplicationDbContext context)
    {
        _auditLogRepository = auditLogRepository;
        _settingRepository = settingRepository;
        _announcementRepository = announcementRepository;
        _documentRepository = documentRepository;
        _notificationRepository = notificationRepository;
        _employeeRepository = employeeRepository;
        _userRepository = userRepository;
        _context = context;
    }

    public async Task<DashboardStatsDto> GetDashboardStatsAsync()
    {
        var today = DateTime.UtcNow.Date;
        var monthStart = new DateTime(today.Year, today.Month, 1);
        var monthEnd = monthStart.AddMonths(1).AddDays(-1);

        var todayAttendance = await _context.Attendances
            .Where(a => a.Date.Date == today)
            .AsNoTracking()
            .ToListAsync();

        var presentCount = todayAttendance.Count(a =>
            a.Status == AttendanceStatus.PRESENT ||
            a.Status == AttendanceStatus.LATE ||
            a.Status == AttendanceStatus.HALF_DAY);

        var reviews = await _context.PerformanceReviews
            .Where(p => p.Status == ReviewStatus.COMPLETED || p.Status == ReviewStatus.PUBLISHED)
            .AsNoTracking()
            .ToListAsync();
        var avgPerformance = reviews.Count > 0
            ? Math.Round(reviews.Average(p => p.OverallRating), 1)
            : 0m;

        var activeEmployees = await _context.Employees.CountAsync(e => e.EmploymentStatus == EmploymentStatus.ACTIVE);

        return new DashboardStatsDto
        {
            TotalEmployees = await _context.Employees.CountAsync(),
            ActiveEmployees = activeEmployees,
            PresentToday = presentCount,
            AbsentToday = todayAttendance.Count(a => a.Status == AttendanceStatus.ABSENT),
            LateArrivalsToday = todayAttendance.Count(a => a.Status == AttendanceStatus.LATE),
            OnLeaveToday = todayAttendance.Count(a => a.Status == AttendanceStatus.ON_LEAVE),
            TotalWorkHoursToday = todayAttendance.Where(a => a.CheckOut.HasValue).Sum(a => a.WorkHours),
            TotalOvertimeToday = todayAttendance.Sum(a => a.Overtime),
            Departments = await _context.Departments.CountAsync(d => d.IsActive),
            PendingLeaves = await _context.LeaveRequests.CountAsync(l => l.Status == LeaveStatus.PENDING),
            NewJoiners = await _context.Employees.CountAsync(e => e.JoiningDate >= today.AddDays(-30)),
            PendingRequests = await _context.Candidates.CountAsync(c => c.Status == CandidateStatus.NEW ||
                c.Status == CandidateStatus.SCREENING),
            OpenPositions = await _context.JobOpenings.CountAsync(j => j.Status == JobStatus.OPEN),
            CandidatesInPipeline = await _context.Candidates.CountAsync(c =>
                c.Status == CandidateStatus.SCREENING ||
                c.Status == CandidateStatus.INTERVIEW_SCHEDULED ||
                c.Status == CandidateStatus.INTERVIEWED),
            HiredThisMonth = await _context.Candidates.CountAsync(c =>
                c.Status == CandidateStatus.HIRED && c.CreatedAt >= monthStart),
            MonthlyPayrollNet = (int)(await _context.PayrollRecords
                .Where(p => p.Month == today.ToString("MMM") && p.Year == today.Year)
                .SumAsync(p => (decimal?)p.NetPay) ?? 0),
            PayrollProcessedThisMonth = await _context.PayrollRecords.CountAsync(p =>
                p.Month == today.ToString("MMM") && p.Year == today.Year &&
                p.Status == PayrollStatus.PROCESSED),
            AverageAttendanceRate = activeEmployees > 0
                ? Math.Round((decimal)presentCount / activeEmployees * 100, 1)
                : 0m,
            AveragePerformance = avgPerformance,
            CompanyName = await _context.CompanyProfiles
                .OrderByDescending(c => c.UpdatedAt)
                .Select(c => c.CompanyName)
                .FirstOrDefaultAsync() ?? "HRM Pro",
            Branches = await _context.Branches.CountAsync(b => b.IsActive),
            Teams = await _context.Teams.CountAsync(t => t.IsActive)
        };
    }

    public async Task<ChartDataDto> GetAttendanceTrendAsync(int days = 7)
    {
        var labels = new List<string>();
        var presentData = new List<decimal>();
        var absentData = new List<decimal>();
        var lateData = new List<decimal>();

        var startDate = DateTime.UtcNow.Date.AddDays(-(days - 1));
        for (var d = startDate; d <= DateTime.UtcNow.Date; d = d.AddDays(1))
        {
            labels.Add(d.ToString("MMM dd"));
            var dayRecords = await _context.Attendances.Where(a => a.Date.Date == d).ToListAsync();
            presentData.Add(dayRecords.Count(a =>
                a.Status == AttendanceStatus.PRESENT || a.Status == AttendanceStatus.HALF_DAY));
            absentData.Add(dayRecords.Count(a => a.Status == AttendanceStatus.ABSENT));
            lateData.Add(dayRecords.Count(a => a.Status == AttendanceStatus.LATE));
        }

        return new ChartDataDto
        {
            Labels = labels,
            Datasets = new List<ChartDatasetDto>
            {
                new() { Label = "Present", Data = presentData, BackgroundColor = "#10b981" },
                new() { Label = "Absent", Data = absentData, BackgroundColor = "#ef4444" },
                new() { Label = "Late", Data = lateData, BackgroundColor = "#f59e0b" }
            }
        };
    }

    public async Task<ChartDataDto> GetDepartmentDistributionAsync()
    {
        var departments = await _context.Departments
            .Include(d => d.Employees)
            .Where(d => d.IsActive)
            .AsNoTracking()
            .ToListAsync();

        return new ChartDataDto
        {
            Labels = departments.Select(d => d.Name).ToList(),
            Datasets = new List<ChartDatasetDto>
            {
                new()
                {
                    Label = "Employees",
                    Data = departments.Select(d => (decimal)d.Employees.Count).ToList(),
                    BackgroundColor = "#6366f1"
                }
            }
        };
    }

    public async Task<ChartDataDto> GetPayrollTrendAsync(int months = 6)
    {
        var labels = new List<string>();
        var grossData = new List<decimal>();
        var netData = new List<decimal>();
        var deductionData = new List<decimal>();

        for (var i = months - 1; i >= 0; i--)
        {
            var date = DateTime.UtcNow.AddMonths(-i);
            var label = date.ToString("MMM");
            labels.Add(label);
            var records = await _context.PayrollRecords
                .Where(p => p.Month == label && p.Year == date.Year)
                .ToListAsync();
            grossData.Add(records.Sum(r => r.BasicSalary + r.Allowances));
            deductionData.Add(records.Sum(r => r.Deductions));
            netData.Add(records.Sum(r => r.NetPay));
        }

        return new ChartDataDto
        {
            Labels = labels,
            Datasets = new List<ChartDatasetDto>
            {
                new() { Label = "Total Salary", Data = grossData, BackgroundColor = "#6366f1" },
                new() { Label = "Deductions", Data = deductionData, BackgroundColor = "#ef4444" },
                new() { Label = "Net Pay", Data = netData, BackgroundColor = "#10b981" }
            }
        };
    }

    public async Task<List<AuditLogDto>> GetAuditLogsAsync(string? module = null)
    {
        IEnumerable<AuditLog> logs = string.IsNullOrWhiteSpace(module)
            ? await _context.AuditLogs.Include(a => a.User).OrderByDescending(a => a.Timestamp).ToListAsync()
            : await _auditLogRepository.GetByModuleAsync(module);

        return logs.Select(a => new AuditLogDto
        {
            Id = a.Id,
            UserId = a.UserId,
            UserName = a.User != null ? $"{a.User.FirstName} {a.User.LastName}" : null,
            Action = a.Action,
            Module = a.Module,
            Details = a.Details,
            IpAddress = a.IpAddress,
            Timestamp = a.Timestamp
        }).ToList();
    }

    public async Task<List<SystemSettingDto>> GetSettingsAsync(string? category = null)
    {
        IEnumerable<SystemSetting> settings = string.IsNullOrWhiteSpace(category)
            ? await _context.SystemSettings.Include(s => s.UpdatedBy).AsNoTracking().ToListAsync()
            : await _settingRepository.GetByCategoryAsync(category);

        return settings.Select(s => new SystemSettingDto
        {
            Id = s.Id,
            Key = s.Key,
            Value = s.Value,
            Category = s.Category,
            Description = s.Description,
            UpdatedBy = s.UpdatedBy != null ? $"{s.UpdatedBy.FirstName} {s.UpdatedBy.LastName}" : null,
            UpdatedAt = s.UpdatedAt
        }).ToList();
    }

    public async Task<SystemSettingDto> UpdateSettingAsync(Guid id, UpdateSystemSettingDto dto, Guid updatedById)
    {
        var setting = await _settingRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("Setting not found.");
        setting.Value = dto.Value;
        if (dto.Description != null) setting.Description = dto.Description;
        setting.UpdatedById = updatedById;
        setting.UpdatedAt = DateTime.UtcNow;
        await _settingRepository.UpdateAsync(setting);

        var users = await _userRepository.GetByIdAsync(updatedById);
        return new SystemSettingDto
        {
            Id = setting.Id,
            Key = setting.Key,
            Value = setting.Value,
            Category = setting.Category,
            Description = setting.Description,
            UpdatedBy = users != null ? $"{users.FirstName} {users.LastName}" : null,
            UpdatedAt = setting.UpdatedAt
        };
    }

    public async Task<List<AnnouncementDto>> GetAnnouncementsAsync(string? role = null)
    {
        IEnumerable<Announcement> announcements = string.IsNullOrWhiteSpace(role)
            ? await _announcementRepository.GetActiveAsync()
            : await _announcementRepository.GetByAudienceAsync(role);

        return announcements.Select(MapAnnouncement).ToList();
    }

    public async Task<AnnouncementDto> GetAnnouncementAsync(Guid id)
    {
        var announcement = await _context.Announcements
            .Include(a => a.Author)
            .Include(a => a.Attachments)
            .FirstOrDefaultAsync(a => a.Id == id)
            ?? throw new KeyNotFoundException("Announcement not found.");
        return MapAnnouncement(announcement);
    }

    public async Task<AnnouncementDto> CreateAnnouncementAsync(CreateAnnouncementDto dto, Guid authorId)
    {
        var priority = Enum.TryParse<AnnouncementPriority>(dto.Priority, true, out var p)
            ? p : AnnouncementPriority.MEDIUM;

        var announcement = new Announcement
        {
            Title = dto.Title,
            Content = dto.Content,
            AuthorId = authorId,
            Priority = priority,
            TargetAudience = dto.TargetAudience.Count > 0 ? string.Join(",", dto.TargetAudience) : "ALL",
            PublishedDate = DateTime.UtcNow,
            ExpiryDate = dto.ExpiryDate
        };
        await _announcementRepository.AddAsync(announcement);
        return await GetAnnouncementAsync(announcement.Id);
    }

    public async Task<AnnouncementDto> UpdateAnnouncementAsync(Guid id, CreateAnnouncementDto dto)
    {
        var announcement = await _announcementRepository.GetByIdAsync(id)
            ?? throw new KeyNotFoundException("Announcement not found.");
        announcement.Title = dto.Title;
        announcement.Content = dto.Content;
        announcement.Priority = Enum.TryParse<AnnouncementPriority>(dto.Priority, true, out var p)
            ? p : announcement.Priority;
        announcement.TargetAudience = dto.TargetAudience.Count > 0 ? string.Join(",", dto.TargetAudience) : "ALL";
        announcement.ExpiryDate = dto.ExpiryDate;
        await _announcementRepository.UpdateAsync(announcement);
        return await GetAnnouncementAsync(id);
    }

    public async Task<bool> DeleteAnnouncementAsync(Guid id)
    {
        var announcement = await _announcementRepository.GetByIdAsync(id)
            ?? throw new KeyNotFoundException("Announcement not found.");
        await _announcementRepository.DeleteAsync(announcement);
        return true;
    }

    public async Task<List<DocumentDto>> GetDocumentsAsync(string? employeeId = null, string? category = null)
    {
        IEnumerable<Document> documents;
        if (Guid.TryParse(employeeId, out var empId))
        {
            documents = await _documentRepository.GetByEmployeeAsync(empId);
        }
        else if (!string.IsNullOrWhiteSpace(category))
        {
            documents = await _documentRepository.GetByCategoryAsync(category);
        }
        else
        {
            documents = await _context.Documents
                .Include(d => d.Employee)
                .Include(d => d.UploadedBy)
                .OrderByDescending(d => d.UploadedAt)
                .ToListAsync();
        }

        return documents.Select(d => new DocumentDto
        {
            Id = d.Id,
            Name = d.Name,
            Type = d.Type,
            Category = d.Category.ToString(),
            EmployeeId = d.EmployeeId,
            EmployeeName = d.Employee != null ? $"{d.Employee.FirstName} {d.Employee.LastName}" : null,
            UploadedById = d.UploadedById,
            UploadedByName = d.UploadedBy != null ? $"{d.UploadedBy.FirstName} {d.UploadedBy.LastName}" : null,
            UploadedAt = d.UploadedAt,
            FileSize = d.FileSize,
            FileUrl = d.FileUrl
        }).ToList();
    }

    public async Task<DocumentDto> GetDocumentAsync(Guid id)
    {
        var document = await _context.Documents
            .Include(d => d.Employee)
            .Include(d => d.UploadedBy)
            .FirstOrDefaultAsync(d => d.Id == id)
            ?? throw new KeyNotFoundException("Document not found.");
        return new DocumentDto
        {
            Id = document.Id,
            Name = document.Name,
            Type = document.Type,
            Category = document.Category.ToString(),
            EmployeeId = document.EmployeeId,
            EmployeeName = document.Employee != null ? $"{document.Employee.FirstName} {document.Employee.LastName}" : null,
            UploadedById = document.UploadedById,
            UploadedByName = document.UploadedBy != null ? $"{document.UploadedBy.FirstName} {document.UploadedBy.LastName}" : null,
            UploadedAt = document.UploadedAt,
            FileSize = document.FileSize,
            FileUrl = document.FileUrl
        };
    }

    public async Task<DocumentDto> UploadDocumentAsync(Guid uploadedById, Guid? employeeId, string category, string fileName, string contentType, long fileSize, string fileUrl)
    {
        var docCategory = Enum.TryParse<DocumentCategory>(category, true, out var c)
            ? c : DocumentCategory.OTHER;
        var document = new Document
        {
            Name = fileName,
            Type = contentType,
            Category = docCategory,
            EmployeeId = employeeId,
            UploadedById = uploadedById,
            FileSize = fileSize,
            FileUrl = fileUrl,
            UploadedAt = DateTime.UtcNow
        };
        await _documentRepository.AddAsync(document);
        var fresh = await _context.Documents
            .Include(d => d.Employee)
            .Include(d => d.UploadedBy)
            .FirstOrDefaultAsync(d => d.Id == document.Id);
        return new DocumentDto
        {
            Id = fresh!.Id,
            Name = fresh.Name,
            Type = fresh.Type,
            Category = fresh.Category.ToString(),
            EmployeeId = fresh.EmployeeId,
            EmployeeName = fresh.Employee != null ? $"{fresh.Employee.FirstName} {fresh.Employee.LastName}" : null,
            UploadedById = fresh.UploadedById,
            UploadedByName = fresh.UploadedBy != null ? $"{fresh.UploadedBy.FirstName} {fresh.UploadedBy.LastName}" : null,
            UploadedAt = fresh.UploadedAt,
            FileSize = fresh.FileSize,
            FileUrl = fresh.FileUrl
        };
    }

    public async Task<bool> DeleteDocumentAsync(Guid id)
    {
        var document = await _documentRepository.GetByIdAsync(id)
            ?? throw new KeyNotFoundException("Document not found.");
        await _documentRepository.DeleteAsync(document);
        return true;
    }

    public async Task<List<UpcomingBirthdayDto>> GetUpcomingBirthdaysAsync(int days = 7)
    {
        var today = DateTime.UtcNow.Date;
        var endDate = today.AddDays(days);
        var employees = await _context.Employees
            .Where(e => e.DateOfBirth.HasValue && e.EmploymentStatus == EmploymentStatus.ACTIVE)
            .AsNoTracking()
            .ToListAsync();

        var result = new List<UpcomingBirthdayDto>();
        foreach (var emp in employees)
        {
            var dob = emp.DateOfBirth!.Value;
            var thisYear = new DateTime(today.Year, dob.Month, dob.Day);
            var nextBirthday = thisYear < today ? thisYear.AddYears(1) : thisYear;
            if (nextBirthday > endDate) continue;

            result.Add(new UpcomingBirthdayDto
            {
                EmployeeId = emp.Id,
                EmployeeIdCode = emp.EmployeeId,
                Name = $"{emp.FirstName} {emp.LastName}",
                Avatar = emp.Avatar,
                Department = emp.Department?.Name ?? string.Empty,
                DateOfBirth = dob,
                BirthdayMonth = dob.Month,
                BirthdayDay = dob.Day,
                DaysUntil = (nextBirthday - today).Days,
                IsToday = nextBirthday == today
            });
        }
        return result.OrderBy(b => b.IsToday ? 0 : 1).ThenBy(b => b.DaysUntil).ToList();
    }

    public async Task<AdminAnalyticsDto> GetAdminAnalyticsAsync()
    {
        var employees = await _context.Employees
            .Include(e => e.Department)
            .Include(e => e.Designation)
            .AsNoTracking()
            .ToListAsync();

        var active = employees.Where(e => e.EmploymentStatus == EmploymentStatus.ACTIVE).ToList();
        var inactive = employees.Where(e => e.EmploymentStatus != EmploymentStatus.ACTIVE).ToList();

        var gender = new ChartDataDto
        {
            Labels = employees.Select(e => e.Gender?.ToString() ?? "Unspecified")
                .GroupBy(g => g)
                .Select(g => g.Key)
                .ToList(),
            Datasets = new List<ChartDatasetDto>
            {
                new()
                {
                    Label = "Employees",
                    Data = employees.Select(e => e.Gender?.ToString() ?? "Unspecified")
                        .GroupBy(g => g)
                        .Select(g => (decimal)g.Count())
                        .ToList(),
                    BackgroundColor = "#6366f1"
                }
            }
        };

        var total = employees.Count;
        var activeCount = active.Count;
        var inactiveRate = total > 0 ? Math.Round((decimal)inactive.Count / total * 100, 1) : 0m;
        var headcountTrend = BuildHeadcountTrend(employees, _context, 12);

        var turnover = new ChartDataDto();
        for (var i = 5; i >= 0; i--)
        {
            turnover.Labels.Add(DateTime.UtcNow.AddMonths(-i).ToString("MMM"));
            turnover.Datasets.Add(new ChartDatasetDto
            {
                Label = "Turnover %",
                Data = new List<decimal> { inactiveRate }
            });
        }

        var salaryRow = new List<decimal>();
        var designationLabels = new List<string>();
        foreach (var group in employees.Where(e => e.Salary.HasValue).GroupBy(e => e.Designation?.Title ?? "Unspecified"))
        {
            designationLabels.Add(group.Key);
            salaryRow.Add(Math.Round(group.Average(e => e.Salary!.Value), 2));
        }
        var salary = new ChartDataDto
        {
            Labels = designationLabels,
            Datasets = new List<ChartDatasetDto>
            {
                new() { Label = "Avg Salary", Data = salaryRow, BackgroundColor = "#10b981" }
            }
        };

        var today = DateTime.UtcNow.Date;
        var todayAttendance = await _context.Attendances.Where(a => a.Date.Date == today).ToListAsync();
        var present = todayAttendance.Count(a =>
            a.Status == AttendanceStatus.PRESENT || a.Status == AttendanceStatus.HALF_DAY || a.Status == AttendanceStatus.LATE);
        var absent = todayAttendance.Count(a => a.Status == AttendanceStatus.ABSENT);
        var onLeave = todayAttendance.Count(a => a.Status == AttendanceStatus.ON_LEAVE);
        var notMarked = Math.Max(0, activeCount - todayAttendance.Count);

        var attendanceBreakdown = new ChartDataDto
        {
            Labels = new List<string> { "Present", "Absent", "On Leave", "Not Marked" },
            Datasets = new List<ChartDatasetDto>
            {
                new()
                {
                    Label = "Today",
                    Data = new List<decimal> { present, absent, onLeave, notMarked },
                    BackgroundColor = "#10b981"
                }
            }
        };

        var days = 7;
        var startDate = today.AddDays(-(days - 1));
        var deptAttendance = new ChartDataDto();
        foreach (var dept in employees.Where(e => e.Department != null).GroupBy(e => e.Department!.Name))
        {
            var members = dept.Count();
            var presentDays = 0m;
            for (var d = startDate; d <= today; d = d.AddDays(1))
            {
                var dayIds = dept.Select(x => x.Id).ToHashSet();
                var dayPresent = await _context.Attendances.CountAsync(a =>
                    a.Date.Date == d && dayIds.Contains(a.EmployeeId) &&
                    (a.Status == AttendanceStatus.PRESENT || a.Status == AttendanceStatus.HALF_DAY || a.Status == AttendanceStatus.LATE));
                presentDays += dayPresent;
            }
            var rate = members * days > 0 ? Math.Round(presentDays / (members * days) * 100, 1) : 0m;
            deptAttendance.Labels.Add(dept.Key);
            deptAttendance.Datasets.Add(new ChartDatasetDto
            {
                Label = "Attendance %",
                Data = new List<decimal> { rate },
                BackgroundColor = "#8b5cf6"
            });
        }

        var payrollRecords = await _context.PayrollRecords.AsNoTracking().ToListAsync();
        var payrollCategory = new ChartDataDto
        {
            Labels = new List<string> { "Base Salary", "Allowances", "Deductions", "Net Pay" },
            Datasets = new List<ChartDatasetDto>
            {
                new()
                {
                    Label = "Amount",
                    Data = new List<decimal>
                    {
                        payrollRecords.Sum(r => r.BasicSalary),
                        payrollRecords.Sum(r => r.Allowances),
                        payrollRecords.Sum(r => r.Deductions),
                        payrollRecords.Sum(r => r.NetPay)
                    },
                    BackgroundColor = "#6366f1"
                }
            }
        };

        var deptPayroll = new ChartDataDto();
        foreach (var group in employees.GroupBy(e => e.Department?.Name ?? "Unspecified"))
        {
            var ids = group.Select(e => e.Id).ToHashSet();
            var sum = payrollRecords.Where(r => ids.Contains(r.EmployeeId)).Sum(r => r.NetPay);
            deptPayroll.Labels.Add(group.Key);
            deptPayroll.Datasets.Add(new ChartDatasetDto
            {
                Label = "Total Net Pay",
                Data = new List<decimal> { sum },
                BackgroundColor = "#f59e0b"
            });
        }

        var metrics = await BuildHrMetricsAsync(_context);

        return new AdminAnalyticsDto
        {
            GenderDistribution = gender,
            HeadcountTrend = headcountTrend,
            TurnoverRate = turnover,
            SalaryBenchmark = salary,
            AttendanceBreakdown = attendanceBreakdown,
            DepartmentAttendance = deptAttendance,
            PayrollCategory = payrollCategory,
            DepartmentPayroll = deptPayroll,
            Metrics = metrics
        };
    }

    public async Task<HrReportsDto> GetHrReportsAsync()
    {
        var employees = await _context.Employees.AsNoTracking().ToListAsync();
        var headcountTrend = BuildHeadcountTrend(employees, _context, 12);

        var turnoverReasons = new ChartDataDto();
        foreach (var group in employees.Where(e => e.EmploymentStatus != EmploymentStatus.ACTIVE)
            .GroupBy(e => e.EmploymentStatus.ToString()))
        {
            turnoverReasons.Labels.Add(group.Key);
            turnoverReasons.Datasets.Add(new ChartDatasetDto
            {
                Label = "Employees",
                Data = new List<decimal> { group.Count() },
                BackgroundColor = "#ef4444"
            });
        }

        var candidates = await _context.Candidates.AsNoTracking().ToListAsync();
        var funnelStages = new List<(string Label, int Count)>
        {
            ("Applications", candidates.Count(c => c.Status == CandidateStatus.NEW)),
            ("Screening", candidates.Count(c => c.Status == CandidateStatus.SCREENING)),
            ("Interviews", candidates.Count(c =>
                c.Status == CandidateStatus.INTERVIEW_SCHEDULED || c.Status == CandidateStatus.INTERVIEWED)),
            ("Offers", candidates.Count(c => c.Status == CandidateStatus.OFFERED)),
            ("Hired", candidates.Count(c => c.Status == CandidateStatus.HIRED))
        };
        var hiringFunnel = new ChartDataDto
        {
            Labels = funnelStages.Select(f => f.Label).ToList(),
            Datasets = new List<ChartDatasetDto>
            {
                new()
                {
                    Label = "Candidates",
                    Data = funnelStages.Select(f => (decimal)f.Count).ToList(),
                    BackgroundColor = "#06b6d4"
                }
            }
        };

        return new HrReportsDto
        {
            HeadcountTrend = headcountTrend,
            TurnoverReasons = turnoverReasons,
            HiringFunnel = hiringFunnel,
            Metrics = await BuildHrMetricsAsync(_context)
        };
    }

    private static ChartDataDto BuildHeadcountTrend(List<Employee> employees, ApplicationDbContext context, int months)
    {
        var trend = new ChartDataDto();
        var now = DateTime.UtcNow;
        for (var i = months - 1; i >= 0; i--)
        {
            var monthEnd = new DateTime(now.Year, now.Month, 1).AddMonths(-i).AddMonths(1).AddDays(-1);
            var count = employees.Count(e => e.JoiningDate <= monthEnd);
            trend.Labels.Add(monthEnd.ToString("MMM yy"));
            trend.Datasets.Add(new ChartDatasetDto
            {
                Label = "Headcount",
                Data = new List<decimal> { count },
                BackgroundColor = "#6366f1"
            });
        }
        return trend;
    }

    private static async Task<HrMetricsDto> BuildHrMetricsAsync(ApplicationDbContext context)
    {
        var now = DateTime.UtcNow;
        var active = await context.Employees.CountAsync(e => e.EmploymentStatus == EmploymentStatus.ACTIVE);
        var today = now.Date;

        var hired = await context.Candidates.CountAsync(c =>
            c.Status == CandidateStatus.HIRED && c.CreatedAt >= today.AddDays(-30));

        var interviewedHires = await context.Interviews
            .Include(i => i.Candidate)
            .Where(i => i.Candidate.Status == CandidateStatus.HIRED)
            .AsNoTracking()
            .ToListAsync();
        var avgDays = interviewedHires.Count > 0
            ? (int)Math.Round(interviewedHires.Average(i => (i.CreatedAt - i.Candidate.CreatedAt).TotalDays))
            : 0;

        var feedbackRatings = await context.PerformanceFeedbacks
            .Select(f => (decimal)f.Rating)
            .ToListAsync();
        var satisfaction = feedbackRatings.Count > 0
            ? Math.Round(feedbackRatings.Average() / 5m * 100, 1)
            : 0m;

        var todayAttendance = await context.Attendances.CountAsync(a => a.Date.Date == today &&
            (a.Status == AttendanceStatus.PRESENT || a.Status == AttendanceStatus.HALF_DAY ||
             a.Status == AttendanceStatus.LATE || a.Status == AttendanceStatus.ON_LEAVE));
        var attendanceRate = active > 0 && todayAttendance > 0
            ? Math.Round((decimal)todayAttendance / active * 100, 1)
            : 0m;

        var pipeline = await context.Candidates.CountAsync(c =>
            c.Status == CandidateStatus.SCREENING ||
            c.Status == CandidateStatus.INTERVIEW_SCHEDULED ||
            c.Status == CandidateStatus.INTERVIEWED);

        var openJobs = await context.JobOpenings.CountAsync(j => j.Status == JobStatus.OPEN);
        var pendingLeaves = await context.LeaveRequests.CountAsync(l => l.Status == LeaveStatus.PENDING);

        return new HrMetricsDto
        {
            AvgTimeToHire = $"{avgDays} days",
            EmployeeSatisfaction = satisfaction,
            AttendanceRate = attendanceRate,
            OpenPositions = openJobs,
            CandidatesInPipeline = pipeline,
            HiredThisMonth = hired,
            PendingLeaveRequests = pendingLeaves
        };
    }

    public async Task<List<NotificationDto>> GetNotificationsAsync(Guid userId, bool? isRead = null)
    {
        var notifications = await _notificationRepository.GetByUserAsync(userId, isRead);
        return notifications.Select(MapNotification).ToList();
    }

    public async Task<int> GetUnreadNotificationsAsync(Guid userId) =>
        await _notificationRepository.GetUnreadCountAsync(userId);

    public async Task<bool> MarkNotificationReadAsync(Guid id)
    {
        var notification = await _notificationRepository.GetByIdAsync(id)
            ?? throw new KeyNotFoundException("Notification not found.");
        notification.IsRead = true;
        await _notificationRepository.UpdateAsync(notification);
        return true;
    }

    public async Task<bool> MarkAllNotificationsReadAsync(Guid userId)
    {
        await _notificationRepository.MarkAllAsReadAsync(userId);
        return true;
    }

    public async Task<bool> DeleteNotificationAsync(Guid id)
    {
        var notification = await _notificationRepository.GetByIdAsync(id)
            ?? throw new KeyNotFoundException("Notification not found.");
        await _notificationRepository.DeleteAsync(notification);
        return true;
    }

    public async Task<Notification> CreateNotificationAsync(Guid userId, string title, string message, string type, string? link = null)
    {
        var notification = new Notification
        {
            UserId = userId,
            Title = title,
            Message = message,
            Type = Enum.TryParse<NotificationType>(type, true, out var nt) ? nt : NotificationType.INFO,
            Link = link
        };
        return await _notificationRepository.AddAsync(notification);
    }

    public async Task<List<ReportingNodeDto>> GetReportingHierarchyAsync()
    {
        var employees = await _context.Employees
            .Include(e => e.Designation)
            .Include(e => e.Department)
            .AsNoTracking()
            .ToListAsync();

        var lookup = employees.ToDictionary(e => e.Id);
        var nodes = employees.ToDictionary(e => e.Id, e => new ReportingNodeDto
        {
            Id = e.Id,
            EmployeeId = e.EmployeeId,
            Name = $"{e.FirstName} {e.LastName}",
            Avatar = e.Avatar,
            Designation = e.Designation?.Title,
            Department = e.Department?.Name,
            EmploymentStatus = e.EmploymentStatus.ToString()
        });

        foreach (var emp in employees.Where(e => e.ReportingManagerId.HasValue && e.ReportingManagerId.Value != e.Id))
        {
            if (nodes.ContainsKey(emp.Id) && nodes.ContainsKey(emp.ReportingManagerId!.Value))
            {
                nodes[emp.ReportingManagerId!.Value].Children.Add(nodes[emp.Id]);
            }
        }

        foreach (var node in nodes.Values)
        {
            node.DirectReportCount = node.Children.Count;
            node.Children = node.Children.OrderBy(c => c.Name).ToList();
        }

        return nodes.Values
            .Where(n => n.Children.Count > 0 || !lookup[n.Id].ReportingManagerId.HasValue)
            .OrderByDescending(n => n.Children.Count)
            .ToList();
    }

    public async Task<List<ReportingFlatDto>> GetReportingMapAsync()
    {
        var employees = await _context.Employees
            .Include(e => e.Designation)
            .Include(e => e.Department)
            .AsNoTracking()
            .ToListAsync();

        return employees.Select(e => new ReportingFlatDto
        {
            Id = e.Id,
            EmployeeId = e.EmployeeId,
            Name = $"{e.FirstName} {e.LastName}",
            Designation = e.Designation?.Title,
            Department = e.Department?.Name,
            ManagerId = e.ReportingManagerId,
            ManagerName = e.ReportingManagerId.HasValue
                ? employees.FirstOrDefault(m => m.Id == e.ReportingManagerId.Value) is { } mgr
                    ? $"{mgr.FirstName} {mgr.LastName}"
                    : null
                : null
        }).OrderBy(e => e.Name).ToList();
    }

    public async Task<CompanyProfileDto> GetCompanyProfileAsync()
    {
        var profile = await _context.CompanyProfiles.AsNoTracking().FirstOrDefaultAsync();
        return profile == null
            ? new CompanyProfileDto { CompanyName = "HRM Pro" }
            : MapCompanyProfile(profile);
    }

    public async Task<CompanyProfileDto> UpsertCompanyProfileAsync(UpsertCompanyProfileDto dto)
    {
        var profile = await _context.CompanyProfiles.FirstOrDefaultAsync();
        if (profile == null)
        {
            profile = new CompanyProfile
            {
                CompanyName = dto.CompanyName,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };
            _context.CompanyProfiles.Add(profile);
        }

        profile.CompanyName = dto.CompanyName;
        profile.Website = dto.Website;
        profile.Email = dto.Email;
        profile.Phone = dto.Phone;
        profile.Address = dto.Address;
        profile.City = dto.City;
        profile.State = dto.State;
        profile.Country = dto.Country;
        profile.ZipCode = dto.ZipCode;
        profile.RegistrationNumber = dto.RegistrationNumber;
        profile.TaxId = dto.TaxId;
        profile.Currency = dto.Currency;
        profile.LogoUrl = dto.LogoUrl;
        profile.FiscalYearStart = dto.FiscalYearStart;
        profile.WorkingDays = dto.WorkingDays;
        profile.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();
        return MapCompanyProfile(profile);
    }

    public async Task<List<NotificationPreferenceDto>> GetNotificationPreferencesAsync()
    {
        var prefs = await _context.NotificationPreferences.AsNoTracking().ToListAsync();
        return prefs.Select(p => new NotificationPreferenceDto
        {
            Id = p.Id,
            EventName = p.EventName,
            Description = p.Description,
            EmailEnabled = p.EmailEnabled,
            SmsEnabled = p.SmsEnabled,
            InAppEnabled = p.InAppEnabled,
            UpdatedAt = p.UpdatedAt
        }).ToList();
    }

    public async Task<NotificationPreferenceDto> UpdateNotificationPreferenceAsync(Guid id, UpdateNotificationPreferenceDto dto, Guid updatedBy)
    {
        var pref = await _context.NotificationPreferences.FindAsync(id)
            ?? throw new KeyNotFoundException("Notification preference not found.");
        pref.EmailEnabled = dto.EmailEnabled;
        pref.SmsEnabled = dto.SmsEnabled;
        pref.InAppEnabled = dto.InAppEnabled;
        pref.UpdatedById = updatedBy;
        pref.UpdatedAt = DateTime.UtcNow;
        await _context.SaveChangesAsync();
        return new NotificationPreferenceDto
        {
            Id = pref.Id,
            EventName = pref.EventName,
            Description = pref.Description,
            EmailEnabled = pref.EmailEnabled,
            SmsEnabled = pref.SmsEnabled,
            InAppEnabled = pref.InAppEnabled,
            UpdatedAt = pref.UpdatedAt
        };
    }

    public async Task<EmailSmsConfigDto> GetEmailSmsConfigAsync()
    {
        var settings = await _context.SystemSettings
            .Where(s => s.Category == "EMAIL_SMS")
            .AsNoTracking()
            .ToListAsync();
        return new EmailSmsConfigDto
        {
            Settings = settings.ToDictionary(s => s.Key, s => s.Value)
        };
    }

    public async Task<EmailSmsConfigDto> SaveEmailSmsConfigAsync(SaveEmailSmsConfigDto dto, Guid updatedBy)
    {
        foreach (var kvp in dto.Settings)
        {
            var setting = await _context.SystemSettings
                .FirstOrDefaultAsync(s => s.Category == "EMAIL_SMS" && s.Key == kvp.Key);
            if (setting == null)
            {
                _context.SystemSettings.Add(new SystemSetting
                {
                    Key = kvp.Key,
                    Value = kvp.Value,
                    Category = "EMAIL_SMS",
                    UpdatedById = updatedBy,
                    UpdatedAt = DateTime.UtcNow
                });
            }
            else
            {
                setting.Value = kvp.Value;
                setting.UpdatedById = updatedBy;
                setting.UpdatedAt = DateTime.UtcNow;
            }
        }
        await _context.SaveChangesAsync();
        return await GetEmailSmsConfigAsync();
    }

    private static CompanyProfileDto MapCompanyProfile(CompanyProfile p) => new()
    {
        Id = p.Id,
        CompanyName = p.CompanyName,
        Website = p.Website,
        Email = p.Email,
        Phone = p.Phone,
        Address = p.Address,
        City = p.City,
        State = p.State,
        Country = p.Country,
        ZipCode = p.ZipCode,
        RegistrationNumber = p.RegistrationNumber,
        TaxId = p.TaxId,
        Currency = p.Currency,
        LogoUrl = p.LogoUrl,
        FiscalYearStart = p.FiscalYearStart,
        WorkingDays = p.WorkingDays
    };

    private AnnouncementDto MapAnnouncement(Announcement a) => new()
    {
        Id = a.Id,
        Title = a.Title,
        Content = a.Content,
        AuthorId = a.AuthorId,
        AuthorName = a.Author != null ? $"{a.Author.FirstName} {a.Author.LastName}" : null,
        AuthorRole = a.Author?.Role.ToString(),
        Priority = a.Priority.ToString(),
        TargetAudience = string.IsNullOrWhiteSpace(a.TargetAudience) ? new List<string>() : a.TargetAudience.Split(',').ToList(),
        PublishedDate = a.PublishedDate,
        ExpiryDate = a.ExpiryDate,
        IsPinned = a.IsPinned,
        Attachments = a.Attachments.Select(x => x.FileUrl).ToList()
    };

    private NotificationDto MapNotification(Notification n) => new()
    {
        Id = n.Id,
        UserId = n.UserId,
        Title = n.Title,
        Message = n.Message,
        Type = n.Type.ToString(),
        IsRead = n.IsRead,
        CreatedAt = n.CreatedAt,
        Link = n.Link
    };
}

