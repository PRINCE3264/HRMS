using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HRMAPI.Models.Entities;

public class Team
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required, MaxLength(100)]
    public string Name { get; set; } = string.Empty;

    public Guid DepartmentId { get; set; }

    public Guid TeamLeadId { get; set; }

    public bool IsActive { get; set; } = true;

    public int? TotalEmployees { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(DepartmentId))]
    public virtual Department Department { get; set; } = null!;

    [ForeignKey(nameof(TeamLeadId))]
    public virtual Employee TeamLead { get; set; } = null!;

    public virtual ICollection<Employee> Members { get; set; } = new List<Employee>();
}
