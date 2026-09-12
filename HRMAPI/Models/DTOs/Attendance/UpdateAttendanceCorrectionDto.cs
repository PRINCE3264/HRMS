

namespace HRMAPI.Models.DTOs.Attendance;

public class UpdateAttendanceCorrectionDto
{
    public string Status { get; set; } = string.Empty;
    public string? RejectionReason { get; set; }
}
