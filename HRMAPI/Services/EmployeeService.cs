using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.DTOs.Common;
using HRMAPI.DTOs.Employee;
using HRMAPI.Models;
using HRMAPI.Repositories.Interfaces;

namespace HRMAPI.Services;

public interface IEmployeeService
{
    Task<PaginatedResponse<EmployeeDto>> GetEmployeesAsync(PaginationQuery query, string? status = null, Guid? departmentId = null);
    Task<List<EmployeeDto>> GetAllEmployeesAsync();
    Task<EmployeeDto> GetEmployeeAsync(Guid id);
    Task<EmployeeDto> CreateEmployeeAsync(CreateEmployeeDto dto);
    Task<EmployeeDto> UpdateEmployeeAsync(Guid id, UpdateEmployeeDto dto);
    Task<bool> DeleteEmployeeAsync(Guid id);
    Task<EmployeeDto> SetEmploymentStatusAsync(Guid id, string status, DateTime? exitDate = null, string? exitReason = null);
    Task<List<EmployeeDto>> GetByDepartmentAsync(Guid departmentId);
    Task<List<EmployeeDto>> GetByTeamAsync(Guid teamId);
}

public class EmployeeService : IEmployeeService
{
    private readonly IEmployeeRepository _employeeRepository;
    private readonly IUserRepository _userRepository;
    private readonly ApplicationDbContext _context;

    public EmployeeService(IEmployeeRepository employeeRepository, IUserRepository userRepository, ApplicationDbContext context)
    {
        _employeeRepository = employeeRepository;
        _userRepository = userRepository;
        _context = context;
    }

    public async Task<PaginatedResponse<EmployeeDto>> GetEmployeesAsync(PaginationQuery query, string? status = null, Guid? departmentId = null)
    {
        var dbQuery = _context.Employees
            .Include(e => e.Department)
            .Include(e => e.Designation)
            .Include(e => e.Branch)
            .Include(e => e.Team)
            .Include(e => e.ReportingManager)
            .AsQueryable();

        if (departmentId.HasValue) dbQuery = dbQuery.Where(e => e.DepartmentId == departmentId.Value);
        if (!string.IsNullOrWhiteSpace(status))
        {
            var parsedStatus = Enum.TryParse<Enums.EmploymentStatus>(status, true, out var s) ? s : (Enums.EmploymentStatus?)null;
            if (parsedStatus.HasValue) dbQuery = dbQuery.Where(e => e.EmploymentStatus == parsedStatus.Value);
        }
        if (!string.IsNullOrWhiteSpace(query.Search))
        {
            var search = query.Search.ToLower();
            dbQuery = dbQuery.Where(e =>
                e.FirstName.ToLower().Contains(search) ||
                e.LastName.ToLower().Contains(search) ||
                e.EmployeeId.ToLower().Contains(search) ||
                e.Email.ToLower().Contains(search) ||
                e.Department.Name.ToLower().Contains(search) ||
                e.Designation.Title.ToLower().Contains(search));
        }

        var total = await dbQuery.CountAsync();
        var items = await dbQuery
            .Skip((query.Page - 1) * query.PageSize)
            .Take(query.PageSize)
            .ToListAsync();

        return new PaginatedResponse<EmployeeDto>
        {
            Items = items.Select(MapToDto).ToList(),
            Total = total,
            Page = query.Page,
            PageSize = query.PageSize
        };
    }

    public async Task<List<EmployeeDto>> GetAllEmployeesAsync()
    {
        var employees = await _context.Employees
            .Include(e => e.Department)
            .Include(e => e.Designation)
            .Include(e => e.Branch)
            .Include(e => e.Team)
            .Include(e => e.ReportingManager)
            .AsNoTracking()
            .ToListAsync();
        return employees.Select(MapToDto).ToList();
    }

    public async Task<EmployeeDto> GetEmployeeAsync(Guid id)
    {
        var employee = await _employeeRepository.GetWithDetailsAsync(id)
            ?? throw new KeyNotFoundException("Employee not found.");
        return MapToDto(employee);
    }

    public async Task<EmployeeDto> CreateEmployeeAsync(CreateEmployeeDto dto)
    {
        var emailExists = await _employeeRepository.GetByEmailAsync(dto.Email);
        if (emailExists != null) throw new InvalidOperationException("Email already exists.");

        var employee = new Employee
        {
            EmployeeId = await _employeeRepository.GenerateEmployeeIdAsync(),
            FirstName = dto.FirstName,
            LastName = dto.LastName,
            Email = dto.Email,
            Phone = dto.Phone,
            DateOfBirth = dto.DateOfBirth,
            Gender = ParseEnumNullable<Enums.Gender>(dto.Gender),
            MaritalStatus = ParseEnumNullable<Enums.MaritalStatus>(dto.MaritalStatus),
            Nationality = dto.Nationality,
            DepartmentId = dto.DepartmentId,
            DesignationId = dto.DesignationId,
            BranchId = dto.BranchId,
            TeamId = dto.TeamId,
            ReportingManagerId = dto.ReportingManagerId,
            JoiningDate = dto.JoiningDate,
            EmploymentType = ParseEnum(dto.EmploymentType ?? string.Empty, Enums.EmploymentType.FULL_TIME),
            EmploymentStatus = Enums.EmploymentStatus.ACTIVE,
            WorkLocation = dto.WorkLocation,
            Address = dto.Address,
            City = dto.City,
            State = dto.State,
            Country = dto.Country,
            ZipCode = dto.ZipCode,
            EmergencyContactName = dto.EmergencyContactName,
            EmergencyContactPhone = dto.EmergencyContactPhone,
            EmergencyContactRelation = dto.EmergencyContactRelation,
            BankName = dto.BankName,
            BankAccountNumber = dto.BankAccountNumber,
            IfscCode = dto.IfscCode,
            TaxId = dto.TaxId,
            Salary = dto.Salary
        };

        var created = await _employeeRepository.AddAsync(employee);
        await InitializeLeaveBalancesAsync(created);
        return await GetEmployeeAsync(created.Id);
    }

    public async Task<EmployeeDto> UpdateEmployeeAsync(Guid id, UpdateEmployeeDto dto)
    {
        var employee = await _employeeRepository.GetByIdAsync(id)
            ?? throw new KeyNotFoundException("Employee not found.");

        if (dto.FirstName != null) employee.FirstName = dto.FirstName;
        if (dto.LastName != null) employee.LastName = dto.LastName;
        if (dto.Email != null)
        {
            var dup = await _employeeRepository.GetByEmailAsync(dto.Email);
            if (dup != null && dup.Id != id) throw new InvalidOperationException("Email already in use.");
            employee.Email = dto.Email;
        }
        if (dto.Phone != null) employee.Phone = dto.Phone;
        if (dto.DateOfBirth.HasValue) employee.DateOfBirth = dto.DateOfBirth;
        if (dto.Gender != null) employee.Gender = ParseEnumNullable<Enums.Gender>(dto.Gender);
        if (dto.MaritalStatus != null) employee.MaritalStatus = ParseEnumNullable<Enums.MaritalStatus>(dto.MaritalStatus);
        if (dto.Nationality != null) employee.Nationality = dto.Nationality;
        if (dto.Avatar != null) employee.Avatar = dto.Avatar;
        if (dto.DepartmentId.HasValue) employee.DepartmentId = dto.DepartmentId.Value;
        if (dto.DesignationId.HasValue) employee.DesignationId = dto.DesignationId.Value;
        if (dto.BranchId.HasValue) employee.BranchId = dto.BranchId.Value;
        if (dto.TeamId.HasValue) employee.TeamId = dto.TeamId;
        if (dto.ReportingManagerId.HasValue) employee.ReportingManagerId = dto.ReportingManagerId;
        if (dto.EmploymentType != null) employee.EmploymentType = ParseEnum(dto.EmploymentType, employee.EmploymentType);
        if (dto.EmploymentStatus != null) employee.EmploymentStatus = ParseEnum(dto.EmploymentStatus, employee.EmploymentStatus);
        if (dto.WorkLocation != null) employee.WorkLocation = dto.WorkLocation;
        if (dto.Address != null) employee.Address = dto.Address;
        if (dto.City != null) employee.City = dto.City;
        if (dto.State != null) employee.State = dto.State;
        if (dto.Country != null) employee.Country = dto.Country;
        if (dto.ZipCode != null) employee.ZipCode = dto.ZipCode;
        if (dto.EmergencyContactName != null) employee.EmergencyContactName = dto.EmergencyContactName;
        if (dto.EmergencyContactPhone != null) employee.EmergencyContactPhone = dto.EmergencyContactPhone;
        if (dto.EmergencyContactRelation != null) employee.EmergencyContactRelation = dto.EmergencyContactRelation;
        if (dto.BankName != null) employee.BankName = dto.BankName;
        if (dto.BankAccountNumber != null) employee.BankAccountNumber = dto.BankAccountNumber;
        if (dto.IfscCode != null) employee.IfscCode = dto.IfscCode;
        if (dto.TaxId != null) employee.TaxId = dto.TaxId;
        if (dto.Salary.HasValue) employee.Salary = dto.Salary;

        employee.UpdatedAt = DateTime.UtcNow;
        await _employeeRepository.UpdateAsync(employee);
        return await GetEmployeeAsync(id);
    }

    public async Task<bool> DeleteEmployeeAsync(Guid id)
    {
        var employee = await _employeeRepository.GetByIdAsync(id)
            ?? throw new KeyNotFoundException("Employee not found.");
        employee.EmploymentStatus = Enums.EmploymentStatus.TERMINATED;
        employee.ExitDate = DateTime.UtcNow;
        employee.UpdatedAt = DateTime.UtcNow;
        await _employeeRepository.UpdateAsync(employee);
        return true;
    }

    public async Task<EmployeeDto> SetEmploymentStatusAsync(Guid id, string status, DateTime? exitDate = null, string? exitReason = null)
    {
        var employee = await _employeeRepository.GetByIdAsync(id)
            ?? throw new KeyNotFoundException("Employee not found.");

        var newStatus = ParseEnum(status, Enums.EmploymentStatus.ACTIVE);
        var isInactive = newStatus != Enums.EmploymentStatus.ACTIVE;

        employee.EmploymentStatus = newStatus;
        employee.ExitDate = exitDate ?? (isInactive ? DateTime.UtcNow : (DateTime?)null);
        employee.ExitReason = isInactive ? exitReason : null;
        employee.UpdatedAt = DateTime.UtcNow;

        await _employeeRepository.UpdateAsync(employee);

        // Deactivate the linked user account too
        var user = await _context.Users.FirstOrDefaultAsync(u => u.EmployeeId == id);
        if (user != null)
        {
            user.IsActive = !isInactive;
            await _context.SaveChangesAsync();
        }

        return await GetEmployeeAsync(id);
    }

    public async Task<List<EmployeeDto>> GetByDepartmentAsync(Guid departmentId)
    {
        var employees = await _employeeRepository.GetByDepartmentAsync(departmentId);
        return employees.Select(MapToDto).ToList();
    }

    public async Task<List<EmployeeDto>> GetByTeamAsync(Guid teamId)
    {
        var employees = await _employeeRepository.GetByTeamAsync(teamId);
        return employees.Select(MapToDto).ToList();
    }

    private async Task InitializeLeaveBalancesAsync(Employee employee)
    {
        var year = DateTime.UtcNow.Year;
        var defaults = new Dictionary<Enums.LeaveType, int>
        {
            [Enums.LeaveType.ANNUAL] = 15,
            [Enums.LeaveType.SICK] = 10,
            [Enums.LeaveType.PERSONAL] = 5,
            [Enums.LeaveType.MATERNITY] = 90,
            [Enums.LeaveType.PATERNITY] = 15,
            [Enums.LeaveType.UNPAID] = 0,
            [Enums.LeaveType.COMPENSATORY] = 0,
            [Enums.LeaveType.BEREAVEMENT] = 5
        };

        foreach (var item in defaults)
        {
            _context.LeaveBalances.Add(new Models.LeaveBalance
            {
                EmployeeId = employee.Id,
                LeaveType = item.Key,
                Entitled = item.Value,
                Taken = 0,
                Remaining = item.Value,
                Year = year
            });
        }
        await _context.SaveChangesAsync();
    }

    private static T ParseEnum<T>(string value, T defaultValue) where T : struct, Enum =>
        Enum.TryParse(value, ignoreCase: true, out T result) ? result : defaultValue;

    private static T? ParseEnumNullable<T>(string? value) where T : struct, Enum =>
        Enum.TryParse(value, ignoreCase: true, out T result) ? result : null;

    private EmployeeDto MapToDto(Employee e) => new()
    {
        Id = e.Id,
        EmployeeId = e.EmployeeId,
        FirstName = e.FirstName,
        LastName = e.LastName,
        Email = e.Email,
        Phone = e.Phone,
        DateOfBirth = e.DateOfBirth,
        Gender = e.Gender?.ToString(),
        MaritalStatus = e.MaritalStatus?.ToString(),
        Nationality = e.Nationality,
        Avatar = e.Avatar,
        DepartmentId = e.DepartmentId,
        Department = e.Department?.Name,
        DesignationId = e.DesignationId,
        Designation = e.Designation?.Title,
        BranchId = e.BranchId,
        Branch = e.Branch?.Name,
        TeamId = e.TeamId,
        TeamName = e.Team?.Name,
        ReportingManagerId = e.ReportingManagerId,
        ReportingManagerName = e.ReportingManager != null ? $"{e.ReportingManager.FirstName} {e.ReportingManager.LastName}" : null,
        JoiningDate = e.JoiningDate,
        EmploymentType = e.EmploymentType.ToString(),
        EmploymentStatus = e.EmploymentStatus.ToString(),
        WorkLocation = e.WorkLocation,
        ExitDate = e.ExitDate,
        ExitReason = e.ExitReason,
        ResignationReference = e.ResignationReference,
        Address = e.Address,
        City = e.City,
        State = e.State,
        Country = e.Country,
        ZipCode = e.ZipCode,
        EmergencyContactName = e.EmergencyContactName,
        EmergencyContactPhone = e.EmergencyContactPhone,
        EmergencyContactRelation = e.EmergencyContactRelation,
        BankName = e.BankName,
        BankAccountNumber = e.BankAccountNumber,
        IfscCode = e.IfscCode,
        TaxId = e.TaxId,
        Salary = e.Salary,
        CreatedAt = e.CreatedAt,
        UpdatedAt = e.UpdatedAt
    };
}
