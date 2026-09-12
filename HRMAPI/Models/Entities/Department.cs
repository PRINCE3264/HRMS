using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HRMAPI.Models.Entities;

public class Department
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required, MaxLength(100)]
    public string Name { get; set; } = string.Empty;

    [Required, MaxLength(20)]
    public string Code { get; set; } = string.Empty;

    [MaxLength(500)]
    public string? Description { get; set; }

    public Guid? HeadId { get; set; }

    public bool IsActive { get; set; } = true;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(HeadId))]
    public virtual Employee? Head { get; set; }

    public virtual ICollection<Designation> Designations { get; set; } = new List<Designation>();
    public virtual ICollection<Team> Teams { get; set; } = new List<Team>();
    public virtual ICollection<Employee> Employees { get; set; } = new List<Employee>();
}
