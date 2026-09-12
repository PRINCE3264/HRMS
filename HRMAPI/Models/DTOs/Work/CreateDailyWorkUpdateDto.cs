

namespace HRMAPI.Models.DTOs.Work;

public class CreateDailyWorkUpdateDto
{
    public string? TasksCompleted { get; set; }
    public string? WorkSummary { get; set; }
    public string? IssuesBlockers { get; set; }
    public string? Media { get; set; }
    public decimal? HoursWorked { get; set; }
}
