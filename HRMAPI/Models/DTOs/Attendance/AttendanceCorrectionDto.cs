

namespace HRMAPI.Models.DTOs.Attendance;

public class AttendanceCorrectionDto
{
    public Guid Id { get; set; }
    public Guid AttendanceId { get; set; }
    public Guid EmployeeId { get; set; }
    public string? EmployeeName { get; set; }
    public string? EmployeeCode { get; set; }
    public DateTime Date { get; set; }
    public DateTime OriginalCheckIn { get; set; }
    public DateTime OriginalCheckOut { get; set; }
    public DateTime? CorrectedCheckIn { get; set; }
    public DateTime? CorrectedCheckOut { get; set; }
    public string Reason { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public Guid RequestedById { get; set; }
    public string? RequestedByName { get; set; }
    public Guid? ApprovedById { get; set; }
    public string? ApprovedByName { get; set; }
    public string? RejectionReason { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime? ReviewedAt { get; set; }
}
