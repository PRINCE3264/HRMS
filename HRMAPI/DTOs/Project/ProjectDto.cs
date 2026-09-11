namespace HRMAPI.DTOs.Project;

public class ProjectDto
{
    public Guid Id { get; set; }
    public string ProjectCode { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public Guid DepartmentId { get; set; }
    public string? DepartmentName { get; set; }
    public Guid? TeamId { get; set; }
    public string? TeamName { get; set; }
    public Guid? TeamLeadId { get; set; }
    public string? TeamLeadName { get; set; }
    public string Status { get; set; } = "NOT_STARTED";
    public string Priority { get; set; } = "MEDIUM";
    public DateTime StartDate { get; set; }
    public DateTime? EndDate { get; set; }
    public string? CreatedByName { get; set; }
    public int MemberCount { get; set; }
    public int CompletedMemberCount { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class CreateProjectDto
{
    public string Name { get; set; } = string.Empty;
    public string? ProjectCode { get; set; }
    public string? Description { get; set; }
    public Guid DepartmentId { get; set; }
    public Guid? TeamId { get; set; }
    public Guid? TeamLeadId { get; set; }
    public string Priority { get; set; } = "MEDIUM";
    public DateTime? StartDate { get; set; }
    public DateTime? EndDate { get; set; }
}

public class UpdateProjectDto
{
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public Guid DepartmentId { get; set; }
    public Guid? TeamId { get; set; }
    public Guid? TeamLeadId { get; set; }
    public string Status { get; set; } = "NOT_STARTED";
    public string Priority { get; set; } = "MEDIUM";
    public DateTime? StartDate { get; set; }
    public DateTime? EndDate { get; set; }
}

public class AssignTeamLeadDto
{
    public Guid? TeamLeadId { get; set; }
}

public class ProjectMemberDto
{
    public Guid Id { get; set; }
    public Guid ProjectId { get; set; }
    public Guid EmployeeId { get; set; }
    public string EmployeeName { get; set; } = string.Empty;
    public string? Designation { get; set; }
    public string? TeamName { get; set; }
    public string? RoleInProject { get; set; }
    public string Status { get; set; } = "NOT_STARTED";
    public DateTime AssignedAt { get; set; }
    public string? AssignedByName { get; set; }
}

public class AssignMembersDto
{
    public List<Guid> EmployeeIds { get; set; } = new();
}

public class AddProjectMemberDto
{
    public Guid EmployeeId { get; set; }
    public string? RoleInProject { get; set; }
}

public class EmployeeOptionDto
{
    public Guid Id { get; set; }
    public string EmployeeId { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string? Designation { get; set; }
    public string? Department { get; set; }
    public string? TeamName { get; set; }
}