

namespace HRMAPI.Models.DTOs.Employee;

public class CreateEmployeeDto
{
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? Phone { get; set; }
    public DateTime? DateOfBirth { get; set; }
    public string? Gender { get; set; }
    public string? MaritalStatus { get; set; }
    public string? Nationality { get; set; }

    public Guid DepartmentId { get; set; }
    public Guid DesignationId { get; set; }
    public Guid BranchId { get; set; }
    public string? BranchName { get; set; }
    public Guid? TeamId { get; set; }
    public Guid? ReportingManagerId { get; set; }

    public DateTime JoiningDate { get; set; } = DateTime.UtcNow;
    public string? EmploymentType { get; set; }
    public string? EmploymentStatus { get; set; }
    public string? WorkLocation { get; set; }
    public DateTime? ExitDate { get; set; }
    public string? ExitReason { get; set; }
    public string? ResignationReference { get; set; }

    public string? Address { get; set; }
    public string? City { get; set; }
    public string? State { get; set; }
    public string? Country { get; set; }
    public string? ZipCode { get; set; }

    public string? EmergencyContactName { get; set; }
    public string? EmergencyContactPhone { get; set; }
    public string? EmergencyContactRelation { get; set; }

    public string? BankName { get; set; }
    public string? BankAccountNumber { get; set; }
    public string? IfscCode { get; set; }
    public string? TaxId { get; set; }
    public decimal? Salary { get; set; }
}
