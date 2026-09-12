

namespace HRMAPI.Models.DTOs.Training;

public class CreateOnboardingDto
{
    public Guid EmployeeId { get; set; }
    public DateTime StartDate { get; set; }
    public Guid? MentorId { get; set; }
}
