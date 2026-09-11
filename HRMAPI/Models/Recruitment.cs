using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models;

public class JobOpening
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required, MaxLength(200)]
    public string Title { get; set; } = string.Empty;

    public Guid DepartmentId { get; set; }

    public Guid DesignationId { get; set; }

    public Guid BranchId { get; set; }

    public EmploymentType EmploymentType { get; set; } = EmploymentType.FULL_TIME;

    [MaxLength(100)]
    public string? Experience { get; set; }

    [MaxLength(100)]
    public string? SalaryRange { get; set; }

    [MaxLength(5000)]
    public string? Description { get; set; }

    [MaxLength(5000)]
    public string? Requirements { get; set; }

    public int Vacancies { get; set; }

    public JobStatus Status { get; set; } = JobStatus.OPEN;

    public DateTime PostedDate { get; set; } = DateTime.UtcNow;

    public DateTime? ClosingDate { get; set; }

    [ForeignKey(nameof(DepartmentId))]
    public virtual Department Department { get; set; } = null!;

    [ForeignKey(nameof(DesignationId))]
    public virtual Designation Designation { get; set; } = null!;

    [ForeignKey(nameof(BranchId))]
    public virtual Branch Branch { get; set; } = null!;

    public virtual ICollection<Candidate> Candidates { get; set; } = new List<Candidate>();
}

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

