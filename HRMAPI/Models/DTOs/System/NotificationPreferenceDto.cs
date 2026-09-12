

namespace HRMAPI.Models.DTOs.System;

public class NotificationPreferenceDto
{
    public Guid Id { get; set; }
    public string EventName { get; set; } = string.Empty;
    public string? Description { get; set; }
    public bool EmailEnabled { get; set; }
    public bool SmsEnabled { get; set; }
    public bool InAppEnabled { get; set; }
    public DateTime UpdatedAt { get; set; }
}
