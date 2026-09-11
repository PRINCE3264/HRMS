using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models;

[Table("Roles")]
public class Role
{
    [Key]
    public Guid Id { get; set; }
    [Required, MaxLength(50)]
    public string Code { get; set; } = string.Empty;
    [Required, MaxLength(100)]
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}

[Table("Modules")]
public class Module
{
    [Key]
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public bool IsDeleted { get; set; }
    public string Code { get; set; } = string.Empty;
    public int? TenantId { get; set; }
    public string CreatedBy { get; set; } = "system";
    public string UpdatedBy { get; set; } = "system";
    public DateTime? CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }
    public int? SortOrder { get; set; }
    public Guid? RollId { get; set; }
    public string Icon { get; set; } = string.Empty;
    public string UserType { get; set; } = string.Empty;
    public string DeletedBy { get; set; } = string.Empty;
    public DateTime? DeletedOn { get; set; }

    public ICollection<Feature> Features { get; set; } = new List<Feature>();
}

[Table("Features")]
public class Feature
{
    [Key]
    public Guid Id { get; set; }
    public Guid ModuleId { get; set; }
    public string Code { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string Url { get; set; } = string.Empty;
    public string Icon { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public bool IsDeleted { get; set; }
    public string CreatedBy { get; set; } = "system";
    public string UpdatedBy { get; set; } = "system";
    public DateTime? CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }
    public int? SortOrder { get; set; }
    public Guid? RoleId { get; set; }
    public string DeletedBy { get; set; } = string.Empty;
    public DateTime? DeletedOn { get; set; }

    [ForeignKey("ModuleId")]
    public Module? Module { get; set; }
}

[Table("FeatureRoles")]
public class FeatureRole
{
    [Key]
    public Guid Id { get; set; }
    public Guid FeatureId { get; set; }
    public string Role { get; set; } = string.Empty;
    public Guid? RoleId { get; set; }

    [ForeignKey("FeatureId")]
    public Feature? Feature { get; set; }

    [ForeignKey("RoleId")]
    public Role? RoleRef { get; set; }
}
