

namespace HRMAPI.Models.DTOs.Attendance;

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
