using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models;

public class AppModule
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required, MaxLength(100)]
    public string Name { get; set; } = string.Empty;

    [MaxLength(100)]
    public string Icon { get; set; } = string.Empty;

    public int DisplayOrder { get; set; }

    public bool IsActive { get; set; } = true;

    public virtual ICollection<AppFeature> Features { get; set; } = new List<AppFeature>();
}

public class AppFeature
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid ModuleId { get; set; }

    [Required, MaxLength(100)]
    public string Name { get; set; } = string.Empty;

    [Required, MaxLength(200)]
    public string Path { get; set; } = string.Empty;

    [MaxLength(100)]
    public string Icon { get; set; } = string.Empty;

    public int DisplayOrder { get; set; }

    public bool IsActive { get; set; } = true;

    [ForeignKey(nameof(ModuleId))]
    public virtual AppModule Module { get; set; } = null!;

    public virtual ICollection<FeatureRole> FeatureRoles { get; set; } = new List<FeatureRole>();
}

public class FeatureRole
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid FeatureId { get; set; }

    public UserRole Role { get; set; }

    [ForeignKey(nameof(FeatureId))]
    public virtual AppFeature Feature { get; set; } = null!;
}

