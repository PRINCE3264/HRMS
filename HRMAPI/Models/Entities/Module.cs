using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

public class Module
{
    [Key]
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public bool IsDeleted { get; set; }
    public bool IsActive { get; set; } = true;
    public string Code { get; set; } = string.Empty;
    public int? TenantId { get; set; }
    public string CreatedBy { get; set; } = "system";
    public string UpdatedBy { get; set; } = "system";
    public DateTime? CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }
    public int? SortOrder { get; set; }
    public Guid? RoleId { get; set; }
    public string Icon { get; set; } = string.Empty;
    public string UserType { get; set; } = string.Empty;
    public string DeletedBy { get; set; } = string.Empty;
    public DateTime? DeletedOn { get; set; }

    public ICollection<Feature> Features { get; set; } = new List<Feature>();
}
