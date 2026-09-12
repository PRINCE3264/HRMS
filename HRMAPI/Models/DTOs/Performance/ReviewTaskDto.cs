

namespace HRMAPI.Models.DTOs.Performance;

public class ReviewTaskDto
{
    public string Status { get; set; } = string.Empty;
    public int? Rating { get; set; }
    public string? ReviewComments { get; set; }
    public decimal? ActualHours { get; set; }
}
