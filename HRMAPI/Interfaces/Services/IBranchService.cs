using HRMAPI.Models.DTOs.Department;

namespace HRMAPI.Interfaces.Services;

public interface IBranchService
{
    Task<List<BranchDto>> GetBranchesAsync();
    Task<BranchDto> CreateBranchAsync(CreateBranchDto dto);
    Task<BranchDto> UpdateBranchAsync(Guid id, CreateBranchDto dto);
    Task<bool> DeleteBranchAsync(Guid id);
}