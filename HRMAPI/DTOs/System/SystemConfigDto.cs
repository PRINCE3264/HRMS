namespace HRMAPI.DTOs.System;

public class CompanyProfileDto
{
    public Guid Id { get; set; }
    public string CompanyName { get; set; } = string.Empty;
    public string? Website { get; set; }
    public string? Email { get; set; }
    public string? Phone { get; set; }
    public string? Address { get; set; }
    public string? City { get; set; }
    public string? State { get; set; }
    public string? Country { get; set; }
    public string? ZipCode { get; set; }
    public string? RegistrationNumber { get; set; }
    public string? TaxId { get; set; }
    public string Currency { get; set; } = "INR";
    public string? LogoUrl { get; set; }
    public string? FiscalYearStart { get; set; }
    public string? WorkingDays { get; set; }
}

public class UpsertCompanyProfileDto
{
    public string CompanyName { get; set; } = string.Empty;
    public string? Website { get; set; }
    public string? Email { get; set; }
    public string? Phone { get; set; }
    public string? Address { get; set; }
    public string? City { get; set; }
    public string? State { get; set; }
    public string? Country { get; set; }
    public string? ZipCode { get; set; }
    public string? RegistrationNumber { get; set; }
    public string? TaxId { get; set; }
    public string Currency { get; set; } = "INR";
    public string? LogoUrl { get; set; }
    public string? FiscalYearStart { get; set; }
    public string? WorkingDays { get; set; }
}

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

public class UpdateNotificationPreferenceDto
{
    public bool EmailEnabled { get; set; }
    public bool SmsEnabled { get; set; }
    public bool InAppEnabled { get; set; }
}

public class EmailSmsConfigDto
{
    public Dictionary<string, string> Settings { get; set; } = new();
}

public class SaveEmailSmsConfigDto
{
    public Dictionary<string, string> Settings { get; set; } = new();
}