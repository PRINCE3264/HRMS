using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

public class Candidate
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required, MaxLength(100)]
    public string FirstName { get; set; } = string.Empty;

    [Required, MaxLength(100)]
    public string LastName { get; set; } = string.Empty;

    [Required, MaxLength(255)]
    public string Email { get; set; } = string.Empty;

    [MaxLength(20)]
    public string? Phone { get; set; }

    public Guid JobId { get; set; }

    [MaxLength(500)]
    public string? ResumeUrl { get; set; }

    [MaxLength(5000)]
    public string? CoverLetter { get; set; }

    [MaxLength(100)]
    public string? Source { get; set; }

    public CandidateStatus Status { get; set; } = CandidateStatus.NEW;

    public int? Rating { get; set; }

    [MaxLength(2000)]
    public string? Notes { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(JobId))]
    public virtual JobOpening Job { get; set; } = null!;
}
