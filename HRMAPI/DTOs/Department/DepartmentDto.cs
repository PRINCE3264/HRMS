namespace HRMAPI.DTOs.Department;

public class DepartmentDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Code { get; set; } = string.Empty;
    public string? Description { get; set; }
    public Guid? HeadId { get; set; }
    public string? HeadName { get; set; }
    public int EmployeeCount { get; set; }
    public string Status { get; set; } = "ACTIVE";
    public DateTime CreatedAt { get; set; }
}

public class CreateDepartmentDto
{
    public string Name { get; set; } = string.Empty;
    public string Code { get; set; } = string.Empty;
    public string? Description { get; set; }
    public Guid? HeadId { get; set; }
}

public class DesignationDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Level { get; set; } = string.Empty;
    public Guid? DepartmentId { get; set; }
    public string? DepartmentName { get; set; }
    public decimal? MinSalary { get; set; }
    public decimal? MaxSalary { get; set; }
    public int EmployeeCount { get; set; }
    public string Status { get; set; } = "ACTIVE";
}

public class CreateDesignationDto
{
    public string Title { get; set; } = string.Empty;
    public string Level { get; set; } = string.Empty;
    public Guid? DepartmentId { get; set; }
    public decimal? MinSalary { get; set; }
    public decimal? MaxSalary { get; set; }
}

public class BranchDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Code { get; set; } = string.Empty;
    public string? Address { get; set; }
    public string City { get; set; } = string.Empty;
    public string State { get; set; } = string.Empty;
    public string Country { get; set; } = string.Empty;
    public string? Phone { get; set; }
    public string? Email { get; set; }
    public int EmployeeCount { get; set; }
    public string Status { get; set; } = "ACTIVE";
}

public class CreateBranchDto
{
    public string Name { get; set; } = string.Empty;
    public string Code { get; set; } = string.Empty;
    public string? Address { get; set; }
    public string City { get; set; } = string.Empty;
    public string State { get; set; } = string.Empty;
    public string Country { get; set; } = string.Empty;
    public string? Phone { get; set; }
    public string? Email { get; set; }
}

public class TeamDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public Guid DepartmentId { get; set; }
    public string DepartmentName { get; set; } = string.Empty;
    public Guid TeamLeadId { get; set; }
    public string TeamLeadName { get; set; } = string.Empty;
    public int MemberCount { get; set; }
    public string Status { get; set; } = "ACTIVE";
}

public class CreateTeamDto
{
    public string Name { get; set; } = string.Empty;
    public Guid DepartmentId { get; set; }
    public Guid TeamLeadId { get; set; }
}

