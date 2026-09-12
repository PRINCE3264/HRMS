

namespace HRMAPI.Models.DTOs.Report;

public class DocumentDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public Guid? EmployeeId { get; set; }
    public string? EmployeeName { get; set; }
    public Guid UploadedById { get; set; }
    public string? UploadedByName { get; set; }
    public DateTime UploadedAt { get; set; }
    public long FileSize { get; set; }
    public string FileUrl { get; set; } = string.Empty;
}
