using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

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
