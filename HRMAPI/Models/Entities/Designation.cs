using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HRMAPI.Models.Entities;

public class Designation
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required, MaxLength(100)]
    public string Title { get; set; } = string.Empty;

    [Required, MaxLength(50)]
    public string Level { get; set; } = string.Empty;

    public Guid? DepartmentId { get; set; }

    public decimal? MinSalary { get; set; }

    public decimal? MaxSalary { get; set; }

    public bool IsActive { get; set; } = true;

    public int? TotalEmployees { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(DepartmentId))]
    public virtual Department? Department { get; set; }

    public virtual ICollection<Employee> Employees { get; set; } = new List<Employee>();
}
