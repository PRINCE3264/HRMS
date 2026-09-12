

namespace HRMAPI.Models.DTOs.Report;

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
