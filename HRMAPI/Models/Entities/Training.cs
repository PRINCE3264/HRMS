using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

public class Training
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required, MaxLength(200)]
    public string Title { get; set; } = string.Empty;

    [MaxLength(2000)]
    public string? Description { get; set; }

    [Required, MaxLength(200)]
    public string Trainer { get; set; } = string.Empty;

    [MaxLength(200)]
    public string? Department { get; set; }

    public DateTime StartDate { get; set; }

    public DateTime EndDate { get; set; }

    [MaxLength(50)]
    public string? Duration { get; set; }

    [MaxLength(200)]
    public string? Location { get; set; }

    public int MaxParticipants { get; set; }

    public TrainingStatus Status { get; set; } = TrainingStatus.UPCOMING;

    public TrainingType Type { get; set; } = TrainingType.IN_HOUSE;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public virtual ICollection<TrainingEnrollment> Enrollments { get; set; } = new List<TrainingEnrollment>();
}
