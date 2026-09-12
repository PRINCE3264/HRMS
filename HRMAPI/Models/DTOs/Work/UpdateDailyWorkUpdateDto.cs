

namespace HRMAPI.Models.DTOs.Work;

public class UpdateDailyWorkUpdateDto
{
    public string? TasksCompleted { get; set; }
    public string? WorkSummary { get; set; }
    public string? IssuesBlockers { get; set; }
    public string? Media { get; set; }
    public decimal? HoursWorked { get; set; }
    public string? Status { get; set; }
}
