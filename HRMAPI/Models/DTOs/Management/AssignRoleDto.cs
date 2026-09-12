namespace HRMAPI.Models.DTOs.Management;

public class AssignRoleDto
{
    public Guid EmployeeId { get; set; }
    public string Role { get; set; } = string.Empty;
}