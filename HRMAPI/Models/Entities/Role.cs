using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

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
