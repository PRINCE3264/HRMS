using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.DTOs.Common;
using HRMAPI.DTOs.Payroll;
using HRMAPI.Enums;
using HRMAPI.Models;
using HRMAPI.Repositories.Interfaces;

namespace HRMAPI.Services;

public interface IPayrollService
{
    Task<PaginatedResponse<PayrollRecordDto>> GetPayrollAsync(PaginationQuery query, string? month = null, int? year = null, string? status = null);
    Task<List<PayrollRecordDto>> GetByEmployeeAsync(Guid employeeId);
    Task<PayrollRecordDto> CreateAsync(CreatePayrollDto dto);
    Task<PayrollRecordDto> UpdateStatusAsync(Guid id, string status);
    Task<PayslipDto> GeneratePayslipAsync(Guid payrollId);
    Task<PayslipDto> GetPayslipAsync(Guid employeeId, string month, int year);
    Task<List<PayrollDeductionDto>> GetDeductionsAsync();
    Task<List<PayrollBonusDto>> GetBonusesAsync();
    Task<bool> DeleteAsync(Guid id);
}

public class PayrollService : IPayrollService
{
    private readonly IPayrollRecordRepository _payrollRecordRepository;
    private readonly IPayslipRepository _payslipRepository;
    private readonly IEmployeeRepository _employeeRepository;
    private readonly ApplicationDbContext _context;

    public PayrollService(
        IPayrollRecordRepository payrollRecordRepository,
        IPayslipRepository payslipRepository,
        IEmployeeRepository employeeRepository,
        ApplicationDbContext context)
    {
        _payrollRecordRepository = payrollRecordRepository;
        _payslipRepository = payslipRepository;
        _employeeRepository = employeeRepository;
        _context = context;
    }

    public async Task<PaginatedResponse<PayrollRecordDto>> GetPayrollAsync(PaginationQuery query, string? month = null, int? year = null, string? status = null)
    {
        var dbQuery = _context.PayrollRecords
            .Include(pr => pr.Employee)
            .ThenInclude(e => e.Department)
            .AsQueryable();

        if (!string.IsNullOrWhiteSpace(month)) dbQuery = dbQuery.Where(pr => pr.Month == month);
        if (year.HasValue) dbQuery = dbQuery.Where(pr => pr.Year == year.Value);
        if (!string.IsNullOrWhiteSpace(status))
        {
            var parsed = Enum.TryParse<PayrollStatus>(status, true, out var s) ? s : (PayrollStatus?)null;
            if (parsed.HasValue) dbQuery = dbQuery.Where(pr => pr.Status == parsed.Value);
        }
        if (!string.IsNullOrWhiteSpace(query.Search))
        {
            var search = query.Search.ToLower();
            dbQuery = dbQuery.Where(pr =>
                pr.Employee.FirstName.ToLower().Contains(search) ||
                pr.Employee.LastName.ToLower().Contains(search) ||
                pr.Employee.EmployeeId.ToLower().Contains(search));
        }

        var total = await dbQuery.CountAsync();
        var items = await dbQuery
            .OrderByDescending(pr => pr.Year).ThenByDescending(pr => pr.Month)
            .Skip((query.Page - 1) * query.PageSize)
            .Take(query.PageSize)
            .ToListAsync();

        return new PaginatedResponse<PayrollRecordDto>
        {
            Items = items.Select(MapToDto).ToList(),
            Total = total,
            Page = query.Page,
            PageSize = query.PageSize
        };
    }

    public async Task<List<PayrollRecordDto>> GetByEmployeeAsync(Guid employeeId)
    {
        var records = await _payrollRecordRepository.GetByEmployeeAsync(employeeId);
        return records.Select(MapToDto).ToList();
    }

    public async Task<PayrollRecordDto> CreateAsync(CreatePayrollDto dto)
    {
        var existing = await _payrollRecordRepository.GetByEmployeeAndMonthAsync(dto.EmployeeId, dto.Month, dto.Year);
        if (existing != null) throw new InvalidOperationException("Payroll already exists for this employee and month.");

        var netPay = dto.BasicSalary + dto.Allowances - dto.Deductions;

        var record = new PayrollRecord
        {
            EmployeeId = dto.EmployeeId,
            Month = dto.Month,
            Year = dto.Year,
            BasicSalary = dto.BasicSalary,
            Allowances = dto.Allowances,
            Deductions = dto.Deductions,
            NetPay = netPay,
            Status = PayrollStatus.DRAFT
        };

        var created = await _payrollRecordRepository.AddAsync(record);
        await GeneratePayslipAsync(created.Id);
        return MapToDto(created);
    }

    public async Task<PayrollRecordDto> UpdateStatusAsync(Guid id, string status)
    {
        var record = await _payrollRecordRepository.GetByIdAsync(id)
            ?? throw new KeyNotFoundException("Payroll record not found.");

        var newStatus = Enum.TryParse<PayrollStatus>(status, true, out var s) ? s : throw new InvalidOperationException("Invalid status.");

        record.Status = newStatus;
        if (newStatus == PayrollStatus.PAID) record.PaidDate = DateTime.UtcNow;
        await _payrollRecordRepository.UpdateAsync(record);
        return MapToDto(record);
    }

    public async Task<PayslipDto> GeneratePayslipAsync(Guid payrollId)
    {
        var payroll = await _context.PayrollRecords.Include(pr => pr.Employee)
            .FirstOrDefaultAsync(pr => pr.Id == payrollId)
            ?? throw new KeyNotFoundException("Payroll record not found.");

        var existingPayslip = await _payslipRepository.GetByPayrollIdAsync(payrollId);
        if (existingPayslip != null) return MapPayslip(existingPayslip);

        decimal basic = payroll.BasicSalary;
        decimal hra = basic * 0.40m;
        decimal conveyance = 1600m;
        decimal medical = 1250m;
        decimal special = payroll.Allowances - (hra + conveyance + medical);
        if (special < 0) special = 0;

        decimal pf = basic * 0.12m;
        decimal esi = basic * 0.0075m;
        decimal tds = payroll.Deductions * 0.30m;
        decimal professionalTax = 200m;

        decimal totalEarnings = basic + hra + conveyance + medical + special;
        decimal totalDeductions = pf + esi + tds + professionalTax;
        decimal netPay = totalEarnings - totalDeductions;

        var payslip = new Payslip
        {
            PayrollId = payrollId,
            EmployeeId = payroll.EmployeeId,
            Month = payroll.Month,
            Year = payroll.Year,
            BasicSalary = basic,
            Hra = hra,
            Conveyance = conveyance,
            MedicalAllowance = medical,
            SpecialAllowance = special,
            Pf = pf,
            Esi = esi,
            Tds = tds,
            ProfessionalTax = professionalTax,
            TotalEarnings = totalEarnings,
            TotalDeductions = totalDeductions,
            NetPay = netPay
        };

        // Update payroll net pay to match
        payroll.NetPay = netPay;
        await _payrollRecordRepository.UpdateAsync(payroll);

        await _payslipRepository.AddAsync(payslip);
        return MapPayslip(payslip);
    }

    public async Task<PayslipDto> GetPayslipAsync(Guid employeeId, string month, int year)
    {
        var payroll = await _payrollRecordRepository.GetByEmployeeAndMonthAsync(employeeId, month, year)
            ?? throw new KeyNotFoundException("No payroll record found.");

        var payslip = await _payslipRepository.GetByPayrollIdAsync(payroll.Id);
        if (payslip == null) return await GeneratePayslipAsync(payroll.Id);
        return MapPayslip(payslip);
    }

    public async Task<List<PayrollDeductionDto>> GetDeductionsAsync()
    {
        var payslips = await _context.Payslips.AsNoTracking().ToListAsync();
        if (payslips.Count == 0) return new List<PayrollDeductionDto>();

        var rows = new List<(string Type, decimal Amount, int Share)>
        {
            ("Provident Fund", payslips.Sum(p => p.Pf), 12),
            ("ESI", payslips.Sum(p => p.Esi), 1),
            ("TDS / Income Tax", payslips.Sum(p => p.Tds), 5),
            ("Professional Tax", payslips.Sum(p => p.ProfessionalTax), 1)
        };

        return rows.Select(r => new PayrollDeductionDto
        {
            Type = r.Type,
            Amount = r.Amount,
            EmployeeShare = r.Share
        }).ToList();
    }

    public async Task<List<PayrollBonusDto>> GetBonusesAsync()
    {
        var payslips = await _context.Payslips.Include(p => p.Employee).AsNoTracking().ToListAsync();
        return payslips
            .Where(p => p.SpecialAllowance > 0)
            .OrderByDescending(p => p.Year)
            .ThenByDescending(p => p.Month)
            .Take(10)
            .Select(p => new PayrollBonusDto
            {
                EmployeeName = p.Employee != null ? $"{p.Employee.FirstName} {p.Employee.LastName}" : "Unknown",
                Type = p.SpecialAllowance > 5000 ? "Performance Bonus" : "Special Allowance",
                Amount = p.SpecialAllowance,
                Month = p.Month,
                Year = p.Year
            }).ToList();
    }

    public async Task<bool> DeleteAsync(Guid id)
    {
        var record = await _payrollRecordRepository.GetByIdAsync(id)
            ?? throw new KeyNotFoundException("Payroll record not found.");
        await _payrollRecordRepository.DeleteAsync(record);
        return true;
    }

    private PayrollRecordDto MapToDto(PayrollRecord pr) => new()
    {
        Id = pr.Id,
        EmployeeId = pr.EmployeeId,
        EmployeeName = pr.Employee != null ? $"{pr.Employee.FirstName} {pr.Employee.LastName}" : null,
        Department = pr.Employee?.Department?.Name,
        Month = pr.Month,
        Year = pr.Year,
        BasicSalary = pr.BasicSalary,
        Allowances = pr.Allowances,
        Deductions = pr.Deductions,
        NetPay = pr.NetPay,
        Status = pr.Status.ToString(),
        PaidDate = pr.PaidDate,
        CreatedAt = pr.CreatedAt
    };

    private PayslipDto MapPayslip(Payslip p) => new()
    {
        Id = p.Id,
        PayrollId = p.PayrollId,
        EmployeeId = p.EmployeeId,
        EmployeeName = p.Employee != null ? $"{p.Employee.FirstName} {p.Employee.LastName}" : null,
        Month = p.Month,
        Year = p.Year,
        BasicSalary = p.BasicSalary,
        Hra = p.Hra,
        Conveyance = p.Conveyance,
        MedicalAllowance = p.MedicalAllowance,
        SpecialAllowance = p.SpecialAllowance,
        Pf = p.Pf,
        Esi = p.Esi,
        Tds = p.Tds,
        ProfessionalTax = p.ProfessionalTax,
        TotalEarnings = p.TotalEarnings,
        TotalDeductions = p.TotalDeductions,
        NetPay = p.NetPay
    };
}
