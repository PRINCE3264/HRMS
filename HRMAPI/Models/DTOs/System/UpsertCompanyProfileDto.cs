

namespace HRMAPI.Models.DTOs.System;

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
