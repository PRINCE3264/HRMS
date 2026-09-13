using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Department;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;
using HRMAPI.Interfaces.Services;

namespace HRMAPI.Services;

public class DepartmentService : IDepartmentService
{
    private readonly IDepartmentRepository _departmentRepository;
    private readonly ApplicationDbContext _context;

    public DepartmentService(
        IDepartmentRepository departmentRepository,
        ApplicationDbContext context)
    {
        _departmentRepository = departmentRepository;
        _context = context;
    }

    public async Task<List<DepartmentDto>> GetDepartmentsAsync()
    {
        var departments = await _context.Departments
            .Include(d => d.Head)
            .AsNoTracking()
            .ToListAsync();

        return departments.Select(d => new DepartmentDto
        {
            Id = d.Id,
            Name = d.Name,
            Code = d.Code,
            Description = d.Description,
            ImageUrl = d.ImageUrl,
            HeadId = d.HeadId,
            HeadName = d.Head != null ? $"{d.Head.FirstName} {d.Head.LastName}" : null,
            EmployeeCount = d.Employees.Count,
            Status = d.IsActive ? "ACTIVE" : "INACTIVE",
            CreatedAt = d.CreatedAt
        }).ToList();
    }

    public async Task<DepartmentDto> GetDepartmentAsync(Guid id)
    {
        var d = await _context.Departments.Include(x => x.Head).FirstOrDefaultAsync(x => x.Id == id)
            ?? throw new KeyNotFoundException("Department not found.");
        return new DepartmentDto
        {
            Id = d.Id,
            Name = d.Name,
            Code = d.Code,
            Description = d.Description,
            ImageUrl = d.ImageUrl,
            HeadId = d.HeadId,
            HeadName = d.Head != null ? $"{d.Head.FirstName} {d.Head.LastName}" : null,
            EmployeeCount = await _departmentRepository.GetEmployeeCountAsync(id),
            Status = d.IsActive ? "ACTIVE" : "INACTIVE",
            CreatedAt = d.CreatedAt
        };
    }

    public async Task<DepartmentDto> CreateDepartmentAsync(CreateDepartmentDto dto)
    {
        var nameExists = await _departmentRepository.GetByNameAsync(dto.Name);
        if (nameExists != null) throw new InvalidOperationException("Department name already exists.");
        var codeExists = await _departmentRepository.GetByCodeAsync(dto.Code);
        if (codeExists != null) throw new InvalidOperationException("Department code already exists.");

        var dept = new Department
        {
            Name = dto.Name,
            Code = dto.Code.ToUpper(),
            Description = dto.Description,
            ImageUrl = dto.ImageUrl,
            HeadId = dto.HeadId
        };
        await _departmentRepository.AddAsync(dept);
        return await GetDepartmentAsync(dept.Id);
    }

    public async Task<DepartmentDto> UpdateDepartmentAsync(Guid id, CreateDepartmentDto dto)
    {
        var dept = await _departmentRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("Department not found.");
        dept.Name = dto.Name;
        dept.Code = dto.Code.ToUpper();
        dept.Description = dto.Description;
        dept.ImageUrl = dto.ImageUrl;
        dept.HeadId = dto.HeadId;
        dept.UpdatedAt = DateTime.UtcNow;
        await _departmentRepository.UpdateAsync(dept);
        return await GetDepartmentAsync(id);
    }

    public async Task<bool> DeleteDepartmentAsync(Guid id)
    {
        var dept = await _departmentRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("Department not found.");
        dept.IsActive = false;
        dept.UpdatedAt = DateTime.UtcNow;
        await _departmentRepository.UpdateAsync(dept);
        return true;
    }
}