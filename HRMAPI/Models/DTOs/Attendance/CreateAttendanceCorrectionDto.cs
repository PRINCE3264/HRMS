

namespace HRMAPI.Models.DTOs.Attendance;

public class CreateAttendanceCorrectionDto
{
    public Guid AttendanceId { get; set; }
    public Guid EmployeeId { get; set; }
    public DateTime Date { get; set; }
    public DateTime? CorrectedCheckIn { get; set; }
    public DateTime? CorrectedCheckOut { get; set; }
    public string Reason { get; set; } = string.Empty;
}
