using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

public class FeatureRole
{
    [Key]
    public Guid Id { get; set; }
    public Guid FeatureId { get; set; }
    public string? Role { get; set; }
    public Guid? RoleId { get; set; }
    public bool CanCreate { get; set; }
    public bool CanRead { get; set; } = true;
    public bool CanUpdate { get; set; }
    public bool CanDelete { get; set; }

    [ForeignKey("FeatureId")]
    public Feature? Feature { get; set; }

    [ForeignKey("RoleId")]
    public Role? RoleRef { get; set; }
}
