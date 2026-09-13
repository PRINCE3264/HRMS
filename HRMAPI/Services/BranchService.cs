using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Department;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;
using HRMAPI.Interfaces.Services;

namespace HRMAPI.Services;

public class BranchService : IBranchService
{
    private readonly IBranchRepository _branchRepository;
    private readonly ApplicationDbContext _context;

    public BranchService(
        IBranchRepository branchRepository,
        ApplicationDbContext context)
    {
        _branchRepository = branchRepository;
        _context = context;
    }

    public async Task<List<BranchDto>> GetBranchesAsync()
    {
        var branches = await _context.Branches.AsNoTracking().ToListAsync();
        return branches.Select(b => new BranchDto
        {
            Id = b.Id,
            Name = b.Name,
            Code = b.Code,
            Address = b.Address,
            City = b.City,
            State = b.State,
            Country = b.Country,
            Phone = b.Phone,
            Email = b.Email,
            ImageUrl = b.ImageUrl,
            CompanyId = b.CompanyId,
            EmployeeCount = b.Employees.Count,
            Status = b.IsActive ? "ACTIVE" : "INACTIVE"
        }).ToList();
    }

    public async Task<BranchDto> CreateBranchAsync(CreateBranchDto dto)
    {
        var nameExists = await _branchRepository.GetByNameAsync(dto.Name);
        if (nameExists != null) throw new InvalidOperationException("Branch name already exists.");
        var codeExists = await _branchRepository.GetByCodeAsync(dto.Code);
        if (codeExists != null) throw new InvalidOperationException("Branch code already exists.");

        var branch = new Branch
        {
            Name = dto.Name,
            Code = dto.Code.ToUpper(),
            Address = dto.Address,
            City = dto.City,
            State = dto.State,
            Country = dto.Country,
            Phone = dto.Phone,
            Email = dto.Email,
            ImageUrl = dto.ImageUrl,
            CompanyId = dto.CompanyId ?? (await _context.CompanyProfiles.FirstOrDefaultAsync())?.Id ?? Guid.Empty
        };
        await _branchRepository.AddAsync(branch);

        var employeeCount = await _branchRepository.GetEmployeeCountAsync(branch.Id);
        return new BranchDto
        {
            Id = branch.Id,
            Name = branch.Name,
            Code = branch.Code,
            Address = branch.Address,
            City = branch.City,
            State = branch.State,
            Country = branch.Country,
            Phone = branch.Phone,
            Email = branch.Email,
            ImageUrl = branch.ImageUrl,
            CompanyId = branch.CompanyId,
            EmployeeCount = employeeCount,
            Status = "ACTIVE"
        };
    }

    public async Task<BranchDto> UpdateBranchAsync(Guid id, CreateBranchDto dto)
    {
        var branch = await _branchRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("Branch not found.");
        branch.Name = dto.Name;
        branch.Code = dto.Code.ToUpper();
        branch.Address = dto.Address;
        branch.City = dto.City;
        branch.State = dto.State;
        branch.Country = dto.Country;
        branch.Phone = dto.Phone;
        branch.Email = dto.Email;
        branch.ImageUrl = dto.ImageUrl;
        if (dto.CompanyId.HasValue) branch.CompanyId = dto.CompanyId.Value;
        branch.UpdatedAt = DateTime.UtcNow;
        await _branchRepository.UpdateAsync(branch);

        var employeeCount = await _branchRepository.GetEmployeeCountAsync(id);
        return new BranchDto
        {
            Id = branch.Id,
            Name = branch.Name,
            Code = branch.Code,
            Address = branch.Address,
            City = branch.City,
            State = branch.State,
            Country = branch.Country,
            Phone = branch.Phone,
            Email = branch.Email,
            ImageUrl = branch.ImageUrl,
            CompanyId = branch.CompanyId,
            EmployeeCount = employeeCount,
            Status = branch.IsActive ? "ACTIVE" : "INACTIVE"
        };
    }

    public async Task<bool> DeleteBranchAsync(Guid id)
    {
        var branch = await _branchRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("Branch not found.");
        branch.IsActive = false;
        branch.UpdatedAt = DateTime.UtcNow;
        await _branchRepository.UpdateAsync(branch);
        return true;
    }
}