

namespace HRMAPI.Models.DTOs.Performance;

public class PerformanceReviewDto
{
    public Guid Id { get; set; }
    public Guid EmployeeId { get; set; }
    public string? EmployeeName { get; set; }
    public Guid ReviewerId { get; set; }
    public string? ReviewerName { get; set; }
    public string Period { get; set; } = string.Empty;
    public decimal OverallRating { get; set; }
    public decimal GoalsRating { get; set; }
    public decimal CompetencyRating { get; set; }
    public string? Comments { get; set; }
    public string Status { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
}
