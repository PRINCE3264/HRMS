

namespace HRMAPI.Models.DTOs.Employee;

public class SetEmployeeStatusDto
{
    public string Status { get; set; } = string.Empty;
    public DateTime? ExitDate { get; set; }
    public string? ExitReason { get; set; }
}
