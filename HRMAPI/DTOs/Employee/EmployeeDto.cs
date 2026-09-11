namespace HRMAPI.DTOs.Employee;

public class EmployeeDto
{
    public Guid Id { get; set; }
    public string EmployeeId { get; set; } = string.Empty;
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? Phone { get; set; }
    public DateTime? DateOfBirth { get; set; }
    public string? Gender { get; set; }
    public string? MaritalStatus { get; set; }
    public string? Nationality { get; set; }
    public string? Avatar { get; set; }

    public Guid DepartmentId { get; set; }
    public string? Department { get; set; }
    public Guid DesignationId { get; set; }
    public string? Designation { get; set; }
    public Guid BranchId { get; set; }
    public string? Branch { get; set; }
    public Guid? TeamId { get; set; }
    public string? TeamName { get; set; }
    public Guid? ReportingManagerId { get; set; }
    public string? ReportingManagerName { get; set; }

    public DateTime JoiningDate { get; set; }
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

    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

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

public class SetEmployeeStatusDto
{
    public string Status { get; set; } = string.Empty;
    public DateTime? ExitDate { get; set; }
    public string? ExitReason { get; set; }
}

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

