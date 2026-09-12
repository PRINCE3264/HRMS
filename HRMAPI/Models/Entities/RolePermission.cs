using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

public class RolePermission
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required, MaxLength(20)]
    public string Role { get; set; } = string.Empty;

    public Guid RoleId { get; set; }

    [Required, MaxLength(100)]
    public string Module { get; set; } = string.Empty;

    public PermissionAction Action { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(RoleId))]
    public virtual Role? RoleRef { get; set; }
}
