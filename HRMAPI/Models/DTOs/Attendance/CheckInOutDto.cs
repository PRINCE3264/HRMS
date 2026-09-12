

namespace HRMAPI.Models.DTOs.Attendance;

public class CheckInOutDto
{
    public decimal? Latitude { get; set; }
    public decimal? Longitude { get; set; }
    public string? Location { get; set; }
    public string? Notes { get; set; }
}
