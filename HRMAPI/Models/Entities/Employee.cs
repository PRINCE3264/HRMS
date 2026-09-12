using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HRMAPI.Enums;

namespace HRMAPI.Models.Entities;

public class Employee
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required, MaxLength(50)]
    public string EmployeeId { get; set; } = string.Empty;

    [Required, MaxLength(100)]
    public string FirstName { get; set; } = string.Empty;

    [Required, MaxLength(100)]
    public string LastName { get; set; } = string.Empty;

    [Required, MaxLength(255)]
    public string Email { get; set; } = string.Empty;

    [MaxLength(20)]
    public string? Phone { get; set; }

    public DateTime? DateOfBirth { get; set; }

    public Gender? Gender { get; set; }

    public MaritalStatus? MaritalStatus { get; set; }

    [MaxLength(100)]
    public string? Nationality { get; set; }

    public string? Avatar { get; set; }

    // Job Details
    public Guid DepartmentId { get; set; }
    public Guid DesignationId { get; set; }
    public Guid BranchId { get; set; }
    public string? BranchName { get; set; }
    public Guid? TeamId { get; set; }
    public Guid? ReportingManagerId { get; set; }

    public DateTime JoiningDate { get; set; } = DateTime.UtcNow;

    public EmploymentType EmploymentType { get; set; } = EmploymentType.FULL_TIME;

    public EmploymentStatus EmploymentStatus { get; set; } = EmploymentStatus.ACTIVE;

    [MaxLength(100)]
    public string? WorkLocation { get; set; }

    // Exit Details
    public DateTime? ExitDate { get; set; }

    [MaxLength(500)]
    public string? ExitReason { get; set; }

    [MaxLength(200)]
    public string? ResignationReference { get; set; }

    // Address
    [MaxLength(500)]
    public string? Address { get; set; }

    [MaxLength(100)]
    public string? City { get; set; }

    [MaxLength(100)]
    public string? State { get; set; }

    [MaxLength(100)]
    public string? Country { get; set; }

    [MaxLength(20)]
    public string? ZipCode { get; set; }

    // Emergency Contact
    [MaxLength(200)]
    public string? EmergencyContactName { get; set; }

    [MaxLength(20)]
    public string? EmergencyContactPhone { get; set; }

    [MaxLength(50)]
    public string? EmergencyContactRelation { get; set; }

    // Bank Details
    [MaxLength(200)]
    public string? BankName { get; set; }

    [MaxLength(50)]
    public string? BankAccountNumber { get; set; }

    [MaxLength(50)]
    public string? IfscCode { get; set; }

    [MaxLength(50)]
    public string? TaxId { get; set; }

    public decimal? Salary { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    // Navigation Properties
    [ForeignKey(nameof(DepartmentId))]
    public virtual Department Department { get; set; } = null!;

    [ForeignKey(nameof(DesignationId))]
    public virtual Designation Designation { get; set; } = null!;

    [ForeignKey(nameof(BranchId))]
    public virtual Branch Branch { get; set; } = null!;

    [ForeignKey(nameof(TeamId))]
    public virtual Team? Team { get; set; }

    [ForeignKey(nameof(ReportingManagerId))]
    public virtual Employee? ReportingManager { get; set; }

    public virtual ICollection<Employee> DirectReports { get; set; } = new List<Employee>();
    public virtual ICollection<Attendance> Attendances { get; set; } = new List<Attendance>();
    public virtual ICollection<LeaveRequest> LeaveRequests { get; set; } = new List<LeaveRequest>();
    public virtual ICollection<ShiftAssignment> ShiftAssignments { get; set; } = new List<ShiftAssignment>();
    public virtual ICollection<PerformanceReview> PerformanceReviews { get; set; } = new List<PerformanceReview>();
    public virtual ICollection<KPI> KPIs { get; set; } = new List<KPI>();
    public virtual ICollection<TaskAssignment> AssignedTasks { get; set; } = new List<TaskAssignment>();
    public virtual ICollection<TaskAssignment> CreatedTasks { get; set; } = new List<TaskAssignment>();
}
