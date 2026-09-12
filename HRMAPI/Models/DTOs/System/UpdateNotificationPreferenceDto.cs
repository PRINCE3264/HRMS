

namespace HRMAPI.Models.DTOs.System;

public class UpdateNotificationPreferenceDto
{
    public bool EmailEnabled { get; set; }
    public bool SmsEnabled { get; set; }
    public bool InAppEnabled { get; set; }
}
