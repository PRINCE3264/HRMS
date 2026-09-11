using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models;

[Table("Modules")]
public class Module
{
    [Key]
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public bool IsDeleted { get; set; }
    public string Code { get; set; }
    public int? TenantId { get; set; }
    public string CreatedBy { get; set; }
    public string UpdatedBy { get; set; }
    public DateTime? CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }
    public int? SortOrder { get; set; }
    public Guid? RollId { get; set; }
    public string Icon { get; set; }
    public string UserType { get; set; }
    public string DeletedBy { get; set; }
    public DateTime? DeletedOn { get; set; }

    public ICollection<Feature> Features { get; set; }
}

[Table("Features")]
public class Feature
{
    [Key]
    public Guid Id { get; set; }
    public Guid ModuleId { get; set; }
    public string Code { get; set; }
    public string Name { get; set; }
    public string Url { get; set; }
    public string Icon { get; set; }
    public string Description { get; set; }
    public bool IsDeleted { get; set; }
    public string CreatedBy { get; set; }
    public string UpdatedBy { get; set; }
    public DateTime? CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }
    public int? SortOrder { get; set; }
    public Guid? RoleId { get; set; }
    public string DeletedBy { get; set; }
    public DateTime? DeletedOn { get; set; }

    [ForeignKey("ModuleId")]
    public Module Module { get; set; }
}
