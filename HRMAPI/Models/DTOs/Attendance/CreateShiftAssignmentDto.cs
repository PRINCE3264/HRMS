

namespace HRMAPI.Models.DTOs.Attendance;

public class CreateShiftAssignmentDto
{
    public Guid EmployeeId { get; set; }
    public Guid ShiftId { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime? EndDate { get; set; }
}
