using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Department;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;
using HRMAPI.Interfaces.Services;

namespace HRMAPI.Services;

public class DesignationService : IDesignationService
{
    private readonly IDesignationRepository _designationRepository;
    private readonly ApplicationDbContext _context;

    public DesignationService(
        IDesignationRepository designationRepository,
        ApplicationDbContext context)
    {
        _designationRepository = designationRepository;
        _context = context;
    }

    public async Task<List<DesignationDto>> GetDesignationsAsync()
    {
        var designations = await _context.Designations
            .Include(d => d.Department)
            .AsNoTracking()
            .ToListAsync();

        return designations.Select(d => new DesignationDto
        {
            Id = d.Id,
            Title = d.Title,
            Level = d.Level,
            DepartmentId = d.DepartmentId,
            DepartmentName = d.Department?.Name,
            MinSalary = d.MinSalary,
            MaxSalary = d.MaxSalary,
            TotalEmployees = d.TotalEmployees,
            EmployeeCount = d.Employees.Count,
            Status = d.IsActive ? "ACTIVE" : "INACTIVE"
        }).ToList();
    }

    public async Task<DesignationDto> CreateDesignationAsync(CreateDesignationDto dto)
    {
        var des = new Designation
        {
            Title = dto.Title,
            Level = dto.Level,
            DepartmentId = dto.DepartmentId,
            MinSalary = dto.MinSalary,
            MaxSalary = dto.MaxSalary
        };
        await _designationRepository.AddAsync(des);
        return (await GetDesignationsAsync()).First(x => x.Id == des.Id);
    }

    public async Task<DesignationDto> UpdateDesignationAsync(Guid id, CreateDesignationDto dto)
    {
        var des = await _designationRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("Designation not found.");
        des.Title = dto.Title;
        des.Level = dto.Level;
        des.DepartmentId = dto.DepartmentId;
        des.MinSalary = dto.MinSalary;
        des.MaxSalary = dto.MaxSalary;
        des.UpdatedAt = DateTime.UtcNow;
        await _designationRepository.UpdateAsync(des);
        return (await GetDesignationsAsync()).First(x => x.Id == id);
    }

    public async Task<bool> DeleteDesignationAsync(Guid id)
    {
        var des = await _designationRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("Designation not found.");
        des.IsActive = false;
        des.UpdatedAt = DateTime.UtcNow;
        await _designationRepository.UpdateAsync(des);
        return true;
    }
}