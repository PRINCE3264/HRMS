

namespace HRMAPI.Models.DTOs.Employee;

public class UpdateEmployeeDto
{
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? Email { get; set; }
    public string? Phone { get; set; }
    public DateTime? DateOfBirth { get; set; }
    public string? Gender { get; set; }
    public string? MaritalStatus { get; set; }
    public string? Nationality { get; set; }
    public string? Avatar { get; set; }

    public Guid? DepartmentId { get; set; }
    public Guid? DesignationId { get; set; }
    public Guid? BranchId { get; set; }
    public string? BranchName { get; set; }
    public Guid? TeamId { get; set; }
    public Guid? ReportingManagerId { get; set; }

    public string? EmploymentType { get; set; }
    public string? EmploymentStatus { get; set; }
    public string? WorkLocation { get; set; }

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
