

namespace HRMAPI.Models.DTOs.Attendance;

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
