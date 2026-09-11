namespace HRMAPI.DTOs.Attendance;

public class AttendanceDto
{
    public Guid Id { get; set; }
    public Guid EmployeeId { get; set; }
    public string? EmployeeName { get; set; }
    public DateTime Date { get; set; }
    public DateTime? CheckIn { get; set; }
    public DateTime? CheckOut { get; set; }
    public decimal WorkHours { get; set; }
    public decimal Overtime { get; set; }
    public string Status { get; set; } = string.Empty;
    public string? Location { get; set; }
    public decimal? Latitude { get; set; }
    public decimal? Longitude { get; set; }
    public string? Notes { get; set; }
    public List<BreakRecordDto> Breaks { get; set; } = new();
}

public class CheckInOutDto
{
    public decimal? Latitude { get; set; }
    public decimal? Longitude { get; set; }
    public string? Location { get; set; }
    public string? Notes { get; set; }
}

public class BreakRecordDto
{
    public Guid Id { get; set; }
    public DateTime StartTime { get; set; }
    public DateTime? EndTime { get; set; }
    public string BreakType { get; set; } = string.Empty;
    public decimal DurationMinutes { get; set; }
    public string? Reason { get; set; }
}

public class StartBreakDto
{
    public string BreakType { get; set; } = "SHORT";
    public string? Reason { get; set; }
}

public class ShiftDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string StartTime { get; set; } = string.Empty;
    public string EndTime { get; set; } = string.Empty;
    public int BreakMinutes { get; set; }
    public string? Description { get; set; }
}

public class CreateShiftDto
{
    public string Name { get; set; } = string.Empty;
    public string StartTime { get; set; } = string.Empty;
    public string EndTime { get; set; } = string.Empty;
    public int BreakMinutes { get; set; }
    public string? Description { get; set; }
}

public class ShiftAssignmentDto
{
    public Guid Id { get; set; }
    public Guid EmployeeId { get; set; }
    public string? EmployeeName { get; set; }
    public Guid ShiftId { get; set; }
    public string? ShiftName { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime? EndDate { get; set; }
}

public class CreateShiftAssignmentDto
{
    public Guid EmployeeId { get; set; }
    public Guid ShiftId { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime? EndDate { get; set; }
}

