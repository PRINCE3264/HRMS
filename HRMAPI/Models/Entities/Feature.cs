using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

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
    public bool IsActive { get; set; } = true;
    public bool IsVisibleInSidebar { get; set; } = true;
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
