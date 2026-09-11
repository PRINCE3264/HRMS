using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.DTOs.Department;
using HRMAPI.Models;
using HRMAPI.Repositories.Interfaces;

namespace HRMAPI.Services;

public interface IDepartmentService
{
    Task<List<DepartmentDto>> GetDepartmentsAsync();
    Task<DepartmentDto> GetDepartmentAsync(Guid id);
    Task<DepartmentDto> CreateDepartmentAsync(CreateDepartmentDto dto);
    Task<DepartmentDto> UpdateDepartmentAsync(Guid id, CreateDepartmentDto dto);
    Task<bool> DeleteDepartmentAsync(Guid id);

    Task<List<DesignationDto>> GetDesignationsAsync();
    Task<DesignationDto> CreateDesignationAsync(CreateDesignationDto dto);
    Task<DesignationDto> UpdateDesignationAsync(Guid id, CreateDesignationDto dto);
    Task<bool> DeleteDesignationAsync(Guid id);

    Task<List<BranchDto>> GetBranchesAsync();
    Task<BranchDto> CreateBranchAsync(CreateBranchDto dto);
    Task<BranchDto> UpdateBranchAsync(Guid id, CreateBranchDto dto);
    Task<bool> DeleteBranchAsync(Guid id);

    Task<List<TeamDto>> GetTeamsAsync();
    Task<TeamDto> CreateTeamAsync(CreateTeamDto dto);
    Task<bool> DeleteTeamAsync(Guid id);
}

public class DepartmentService : IDepartmentService
{
    private readonly IDepartmentRepository _departmentRepository;
    private readonly IDesignationRepository _designationRepository;
    private readonly IBranchRepository _branchRepository;
    private readonly ITeamRepository _teamRepository;
    private readonly IEmployeeRepository _employeeRepository;
    private readonly ApplicationDbContext _context;

    public DepartmentService(
        IDepartmentRepository departmentRepository,
        IDesignationRepository designationRepository,
        IBranchRepository branchRepository,
        ITeamRepository teamRepository,
        IEmployeeRepository employeeRepository,
        ApplicationDbContext context)
    {
        _departmentRepository = departmentRepository;
        _designationRepository = designationRepository;
        _branchRepository = branchRepository;
        _teamRepository = teamRepository;
        _employeeRepository = employeeRepository;
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
            Email = dto.Email
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

    public async Task<List<TeamDto>> GetTeamsAsync()
    {
        var teams = await _context.Teams
            .Include(t => t.Department)
            .Include(t => t.TeamLead)
            .AsNoTracking()
            .ToListAsync();

        return teams.Select(t => new TeamDto
        {
            Id = t.Id,
            Name = t.Name,
            DepartmentId = t.DepartmentId,
            DepartmentName = t.Department.Name,
            TeamLeadId = t.TeamLeadId,
            TeamLeadName = $"{t.TeamLead.FirstName} {t.TeamLead.LastName}",
            MemberCount = t.Members.Count,
            Status = t.IsActive ? "ACTIVE" : "INACTIVE"
        }).ToList();
    }

    public async Task<TeamDto> CreateTeamAsync(CreateTeamDto dto)
    {
        var team = new Team
        {
            Name = dto.Name,
            DepartmentId = dto.DepartmentId,
            TeamLeadId = dto.TeamLeadId
        };
        await _teamRepository.AddAsync(team);
        return (await GetTeamsAsync()).First(x => x.Id == team.Id);
    }

    public async Task<bool> DeleteTeamAsync(Guid id)
    {
        var team = await _teamRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("Team not found.");
        team.IsActive = false;
        team.UpdatedAt = DateTime.UtcNow;
        await _teamRepository.UpdateAsync(team);
        return true;
    }
}
