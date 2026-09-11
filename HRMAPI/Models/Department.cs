using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HRMAPI.Models;

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

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(DepartmentId))]
    public virtual Department? Department { get; set; }

    public virtual ICollection<Employee> Employees { get; set; } = new List<Employee>();
}

public class Branch
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required, MaxLength(100)]
    public string Name { get; set; } = string.Empty;

    [Required, MaxLength(20)]
    public string Code { get; set; } = string.Empty;

    [MaxLength(500)]
    public string? Address { get; set; }

    [Required, MaxLength(100)]
    public string City { get; set; } = string.Empty;

    [Required, MaxLength(100)]
    public string State { get; set; } = string.Empty;

    [Required, MaxLength(100)]
    public string Country { get; set; } = string.Empty;

    [MaxLength(20)]
    public string? Phone { get; set; }

    [MaxLength(255)]
    public string? Email { get; set; }

    public bool IsActive { get; set; } = true;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    public virtual ICollection<Employee> Employees { get; set; } = new List<Employee>();
}

public class Team
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required, MaxLength(100)]
    public string Name { get; set; } = string.Empty;

    public Guid DepartmentId { get; set; }

    public Guid TeamLeadId { get; set; }

    public bool IsActive { get; set; } = true;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(DepartmentId))]
    public virtual Department Department { get; set; } = null!;

    [ForeignKey(nameof(TeamLeadId))]
    public virtual Employee TeamLead { get; set; } = null!;

    public virtual ICollection<Employee> Members { get; set; } = new List<Employee>();
}

