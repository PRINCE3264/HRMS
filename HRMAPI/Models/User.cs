using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models;

public class User
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required, MaxLength(100)]
    public string FirstName { get; set; } = string.Empty;

    [Required, MaxLength(100)]
    public string LastName { get; set; } = string.Empty;

    [Required, MaxLength(255)]
    public string Email { get; set; } = string.Empty;

    [Required]
    public string PasswordHash { get; set; } = string.Empty;

    public UserRole Role { get; set; } = UserRole.EMPLOYEE;

    public string? Avatar { get; set; }

    public string? Department { get; set; }

    public string? Designation { get; set; }

    public string? Branch { get; set; }

    public Guid? EmployeeId { get; set; }

    public bool IsActive { get; set; } = true;

    public bool MfaEnabled { get; set; }

    public string? RefreshToken { get; set; }

    public DateTime? RefreshTokenExpiry { get; set; }

    public DateTime? LastLoginAt { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    [ForeignKey(nameof(EmployeeId))]
    public virtual Employee? Employee { get; set; }
}

public class UserPermission
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid UserId { get; set; }

    [Required, MaxLength(100)]
    public string Module { get; set; } = string.Empty;

    public PermissionAction Action { get; set; }

    [ForeignKey(nameof(UserId))]
    public virtual User User { get; set; } = null!;
}

