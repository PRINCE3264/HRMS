

namespace HRMAPI.Models.DTOs.Department;

public class CreateDesignationDto
{
    public string Title { get; set; } = string.Empty;
    public string Level { get; set; } = string.Empty;
    public Guid? DepartmentId { get; set; }
    public decimal? MinSalary { get; set; }
    public decimal? MaxSalary { get; set; }
}
