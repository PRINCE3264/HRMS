

namespace HRMAPI.Models.DTOs.Performance;

public class CreatePerformanceReviewDto
{
    public Guid EmployeeId { get; set; }
    public string Period { get; set; } = string.Empty;
    public decimal OverallRating { get; set; }
    public decimal GoalsRating { get; set; }
    public decimal CompetencyRating { get; set; }
    public string? Comments { get; set; }
}
