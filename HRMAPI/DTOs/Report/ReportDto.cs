namespace HRMAPI.DTOs.Report;

public class DashboardStatsDto
{
    public int TotalEmployees { get; set; }
    public int ActiveEmployees { get; set; }
    public int PresentToday { get; set; }
    public int AbsentToday { get; set; }
    public int LateArrivalsToday { get; set; }
    public int OnLeaveToday { get; set; }
    public decimal TotalWorkHoursToday { get; set; }
    public decimal TotalOvertimeToday { get; set; }
    public int Departments { get; set; }
    public int PendingLeaves { get; set; }
    public int NewJoiners { get; set; }
    public int PendingRequests { get; set; }
    public int OpenPositions { get; set; }
    public int CandidatesInPipeline { get; set; }
    public int HiredThisMonth { get; set; }
    public int MonthlyPayrollNet { get; set; }
    public int PayrollProcessedThisMonth { get; set; }
    public decimal AverageAttendanceRate { get; set; }
    public decimal AveragePerformance { get; set; }
    public string CompanyName { get; set; } = string.Empty;
    public int Branches { get; set; }
    public int Teams { get; set; }
}

public class ChartDataDto
{
    public List<string> Labels { get; set; } = new();
    public List<ChartDatasetDto> Datasets { get; set; } = new();
}

public class ChartDatasetDto
{
    public string Label { get; set; } = string.Empty;
    public List<decimal> Data { get; set; } = new();
    public string? BackgroundColor { get; set; }
    public string? BorderColor { get; set; }
}

public class AuditLogDto
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public string? UserName { get; set; }
    public string Action { get; set; } = string.Empty;
    public string Module { get; set; } = string.Empty;
    public string? Details { get; set; }
    public string? IpAddress { get; set; }
    public DateTime Timestamp { get; set; }
}

public class SystemSettingDto
{
    public Guid Id { get; set; }
    public string Key { get; set; } = string.Empty;
    public string Value { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? UpdatedBy { get; set; }
    public DateTime? UpdatedAt { get; set; }
}

public class UpdateSystemSettingDto
{
    public string Value { get; set; } = string.Empty;
    public string? Description { get; set; }
}

public class AnnouncementDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public Guid AuthorId { get; set; }
    public string? AuthorName { get; set; }
    public string? AuthorRole { get; set; }
    public string Priority { get; set; } = string.Empty;
    public List<string> TargetAudience { get; set; } = new();
    public DateTime PublishedDate { get; set; }
    public DateTime? ExpiryDate { get; set; }
    public bool IsPinned { get; set; }
    public List<string> Attachments { get; set; } = new();
}

public class CreateAnnouncementDto
{
    public string Title { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public string Priority { get; set; } = "MEDIUM";
    public List<string> TargetAudience { get; set; } = new();
    public DateTime? ExpiryDate { get; set; }
}

public class DocumentDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public Guid? EmployeeId { get; set; }
    public string? EmployeeName { get; set; }
    public Guid UploadedById { get; set; }
    public string? UploadedByName { get; set; }
    public DateTime UploadedAt { get; set; }
    public long FileSize { get; set; }
    public string FileUrl { get; set; } = string.Empty;
}

public class NotificationDto
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public bool IsRead { get; set; }
    public DateTime CreatedAt { get; set; }
    public string? Link { get; set; }
}

public class UpcomingBirthdayDto
{
    public Guid EmployeeId { get; set; }
    public string EmployeeIdCode { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string? Avatar { get; set; }
    public string Department { get; set; } = string.Empty;
    public DateTime? DateOfBirth { get; set; }
    public int BirthdayMonth { get; set; }
    public int BirthdayDay { get; set; }
    public int DaysUntil { get; set; }
    public bool IsToday { get; set; }
}

public class HrMetricsDto
{
    public string AvgTimeToHire { get; set; } = string.Empty;
    public decimal EmployeeSatisfaction { get; set; }
    public decimal AttendanceRate { get; set; }
    public int OpenPositions { get; set; }
    public int CandidatesInPipeline { get; set; }
    public int HiredThisMonth { get; set; }
    public int PendingLeaveRequests { get; set; }
}

public class AdminAnalyticsDto
{
    public ChartDataDto GenderDistribution { get; set; } = new();
    public ChartDataDto HeadcountTrend { get; set; } = new();
    public ChartDataDto TurnoverRate { get; set; } = new();
    public ChartDataDto SalaryBenchmark { get; set; } = new();
    public ChartDataDto AttendanceBreakdown { get; set; } = new();
    public ChartDataDto DepartmentAttendance { get; set; } = new();
    public ChartDataDto PayrollCategory { get; set; } = new();
    public ChartDataDto DepartmentPayroll { get; set; } = new();
    public HrMetricsDto Metrics { get; set; } = new();
}

public class HrReportsDto
{
    public ChartDataDto HeadcountTrend { get; set; } = new();
    public ChartDataDto TurnoverReasons { get; set; } = new();
    public ChartDataDto HiringFunnel { get; set; } = new();
    public HrMetricsDto Metrics { get; set; } = new();
}

