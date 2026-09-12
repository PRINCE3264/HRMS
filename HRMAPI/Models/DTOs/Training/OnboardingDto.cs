

namespace HRMAPI.Models.DTOs.Training;

public class OnboardingDto
{
    public Guid Id { get; set; }
    public Guid EmployeeId { get; set; }
    public string? EmployeeName { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime? EndDate { get; set; }
    public Guid? MentorId { get; set; }
    public string? MentorName { get; set; }
    public string Status { get; set; } = string.Empty;
    public List<OnboardingTaskDto> Tasks { get; set; } = new();
    public decimal Progress { get; set; }
}
