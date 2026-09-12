using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

public class Document
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required, MaxLength(200)]
    public string Name { get; set; } = string.Empty;

    [Required, MaxLength(50)]
    public string Type { get; set; } = string.Empty;

    public DocumentCategory Category { get; set; }

    public Guid? EmployeeId { get; set; }

    public Guid UploadedById { get; set; }

    public DateTime UploadedAt { get; set; } = DateTime.UtcNow;

    public long FileSize { get; set; }

    [Required, MaxLength(1000)]
    public string FileUrl { get; set; } = string.Empty;

    [ForeignKey(nameof(EmployeeId))]
    public virtual Employee? Employee { get; set; }

    [ForeignKey(nameof(UploadedById))]
    public virtual User UploadedBy { get; set; } = null!;
}
