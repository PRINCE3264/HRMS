using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HRMAPI.Models.Entities;

public class CompanyProfile
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [MaxLength(200)]
    public string CompanyName { get; set; } = string.Empty;

    [MaxLength(200)]
    public string? Website { get; set; }

    [MaxLength(100)]
    public string? Email { get; set; }

    [MaxLength(30)]
    public string? Phone { get; set; }

    [MaxLength(500)]
    public string? Address { get; set; }

    [MaxLength(100)]
    public string? City { get; set; }

    [MaxLength(100)]
    public string? State { get; set; }

    [MaxLength(100)]
    public string? Country { get; set; }

    [MaxLength(20)]
    public string? ZipCode { get; set; }

    [MaxLength(100)]
    public string? RegistrationNumber { get; set; }

    [MaxLength(100)]
    public string? TaxId { get; set; }

    [MaxLength(20)]
    public string Currency { get; set; } = "INR";

    [MaxLength(500)]
    public string? LogoUrl { get; set; }

    [MaxLength(200)]
    public string? FiscalYearStart { get; set; }

    [MaxLength(200)]
    public string? WorkingDays { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
