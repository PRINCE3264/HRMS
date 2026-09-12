

namespace HRMAPI.Models.DTOs.Work;

public class DailyWorkUpdateDto
{
    public Guid Id { get; set; }
    public Guid EmployeeId { get; set; }
    public string? EmployeeName { get; set; }
    public string? EmployeeDesignation { get; set; }
    public DateTime Date { get; set; }
    public string? TasksCompleted { get; set; }
    public string? WorkSummary { get; set; }
    public string? IssuesBlockers { get; set; }
    public string? Media { get; set; }
    public decimal? HoursWorked { get; set; }
    public string Status { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}
