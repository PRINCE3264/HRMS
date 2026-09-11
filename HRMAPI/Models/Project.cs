using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models;

public class Project
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required, MaxLength(50)]
    public string ProjectCode { get; set; } = string.Empty;

    [Required, MaxLength(200)]
    public string Name { get; set; } = string.Empty;

    [MaxLength(2000)]
    public string? Description { get; set; }

    public Guid DepartmentId { get; set; }

    public Guid? TeamId { get; set; }

    public Guid? TeamLeadId { get; set; }

    public ProjectStatus Status { get; set; } = ProjectStatus.NOT_STARTED;

    public ProjectPriority Priority { get; set; } = ProjectPriority.MEDIUM;

    public DateTime StartDate { get; set; } = DateTime.UtcNow.Date;

    public DateTime? EndDate { get; set; }

    public Guid CreatedById { get; set; }

    public bool IsDeleted { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(DepartmentId))]
    public virtual Department Department { get; set; } = null!;

    [ForeignKey(nameof(TeamId))]
    public virtual Team? Team { get; set; }

    [ForeignKey(nameof(TeamLeadId))]
    public virtual Employee? TeamLead { get; set; }

    [ForeignKey(nameof(CreatedById))]
    public virtual Employee? CreatedBy { get; set; }

    public virtual ICollection<ProjectMember> Members { get; set; } = new List<ProjectMember>();
}

public class ProjectMember
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid ProjectId { get; set; }

    public Guid EmployeeId { get; set; }

    public Guid AssignedById { get; set; }

    public DateTime AssignedAt { get; set; } = DateTime.UtcNow;

    [MaxLength(200)]
    public string? RoleInProject { get; set; }

    public ProjectMemberStatus Status { get; set; } = ProjectMemberStatus.NOT_STARTED;

    [ForeignKey(nameof(ProjectId))]
    public virtual Project Project { get; set; } = null!;

    [ForeignKey(nameof(EmployeeId))]
    public virtual Employee Employee { get; set; } = null!;

    [ForeignKey(nameof(AssignedById))]
    public virtual Employee AssignedBy { get; set; } = null!;
}