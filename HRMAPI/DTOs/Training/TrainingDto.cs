namespace HRMAPI.DTOs.Training;

public class TrainingDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string Trainer { get; set; } = string.Empty;
    public string? Department { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public string? Duration { get; set; }
    public string? Location { get; set; }
    public int MaxParticipants { get; set; }
    public int EnrolledCount { get; set; }
    public string Status { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
}

public class CreateTrainingDto
{
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string Trainer { get; set; } = string.Empty;
    public string? Department { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public string? Duration { get; set; }
    public string? Location { get; set; }
    public int MaxParticipants { get; set; }
    public string Type { get; set; } = "IN_HOUSE";
}

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

public class CreateOnboardingDto
{
    public Guid EmployeeId { get; set; }
    public DateTime StartDate { get; set; }
    public Guid? MentorId { get; set; }
}

public class OnboardingTaskDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public bool IsCompleted { get; set; }
    public DateTime? CompletedAt { get; set; }
    public string? AssignedTo { get; set; }
}

