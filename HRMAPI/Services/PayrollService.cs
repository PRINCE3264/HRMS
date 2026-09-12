using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Models.DTOs.Payroll;
using HRMAPI.Models.DTOs.Report;
using HRMAPI.Enums;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Services;



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

    public async Task<List<SalaryStructureDto>> GetSalaryStructuresAsync(bool? activeOnly = null)
    {
        var query = _context.SalaryStructures
            .Include(s => s.Employee)
            .ThenInclude(e => e.Department)
            .AsNoTracking()
            .AsQueryable();

        if (activeOnly.HasValue) query = query.Where(s => s.IsActive == activeOnly.Value);

        var items = await query.OrderByDescending(s => s.UpdatedAt).ToListAsync();
        return items.Select(MapSalary).ToList();
    }

    public async Task<SalaryStructureDto> GetSalaryStructureAsync(Guid id)
    {
        var item = await _context.SalaryStructures
            .Include(s => s.Employee)
            .ThenInclude(e => e.Department)
            .FirstOrDefaultAsync(s => s.Id == id)
            ?? throw new KeyNotFoundException("Salary structure not found.");
        return MapSalary(item);
    }

    public async Task<SalaryStructureDto> GetEmployeeSalaryStructureAsync(Guid employeeId)
    {
        var item = await _context.SalaryStructures
            .Include(s => s.Employee)
            .ThenInclude(e => e.Department)
            .Where(s => s.EmployeeId == employeeId && s.IsActive)
            .OrderByDescending(s => s.EffectiveFrom)
            .FirstOrDefaultAsync();
        if (item == null) return null!;
        return MapSalary(item);
    }

    public async Task<SalaryStructureDto> UpsertSalaryStructureAsync(UpsertSalaryStructureDto dto)
    {
        var effectiveFrom = dto.EffectiveFrom == default ? DateTime.UtcNow : dto.EffectiveFrom;

        var existing = await _context.SalaryStructures
            .Include(s => s.Employee)
            .Where(s => s.EmployeeId == dto.EmployeeId && s.IsActive)
            .FirstOrDefaultAsync();

        if (existing != null)
        {
            existing.BasicSalary = dto.BasicSalary;
            existing.Hra = dto.Hra;
            existing.Conveyance = dto.Conveyance;
            existing.MedicalAllowance = dto.MedicalAllowance;
            existing.SpecialAllowance = dto.SpecialAllowance;
            existing.PfPercent = dto.PfPercent;
            existing.EsiPercent = dto.EsiPercent;
            existing.TdsPercent = dto.TdsPercent;
            existing.ProfessionalTax = dto.ProfessionalTax;
            existing.EffectiveFrom = effectiveFrom;
            existing.UpdatedAt = DateTime.UtcNow;
            await _context.SaveChangesAsync();
            var updated = await _context.SalaryStructures
                .Include(s => s.Employee)
                .FirstOrDefaultAsync(s => s.Id == existing.Id);
            return MapSalary(updated!);
        }

        var structure = new SalaryStructure
        {
            EmployeeId = dto.EmployeeId,
            BasicSalary = dto.BasicSalary,
            Hra = dto.Hra,
            Conveyance = dto.Conveyance,
            MedicalAllowance = dto.MedicalAllowance,
            SpecialAllowance = dto.SpecialAllowance,
            PfPercent = dto.PfPercent,
            EsiPercent = dto.EsiPercent,
            TdsPercent = dto.TdsPercent,
            ProfessionalTax = dto.ProfessionalTax,
            EffectiveFrom = effectiveFrom,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow,
            IsActive = true
        };
        _context.SalaryStructures.Add(structure);
        await _context.SaveChangesAsync();

        var fresh = await _context.SalaryStructures
            .Include(s => s.Employee)
            .FirstOrDefaultAsync(s => s.Id == structure.Id);
        return MapSalary(fresh!);
    }

    public async Task<bool> DeactivateSalaryStructureAsync(Guid id)
    {
        var item = await _context.SalaryStructures.FindAsync(id)
            ?? throw new KeyNotFoundException("Salary structure not found.");
        item.IsActive = false;
        item.EffectiveTo = DateTime.UtcNow;
        item.UpdatedAt = DateTime.UtcNow;
        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<PayrollReportDto> GetPayrollReportAsync(string? month = null, int? year = null)
    {
        var currentMonth = DateTime.UtcNow.ToString("MMM");
        var currentYear = DateTime.UtcNow.Year;
        month ??= currentMonth;
        year ??= currentYear;

        var records = await _context.PayrollRecords
            .Include(pr => pr.Payslip)
            .Include(pr => pr.Employee)
            .Where(pr => pr.Month == month && pr.Year == year)
            .AsNoTracking()
            .ToListAsync();

        var earnings = new List<SalaryComponentDto>();
        var deductions = new List<SalaryComponentDto>();
        decimal totalEarnings = 0m, totalDeductions = 0m;

        foreach (var r in records)
        {
            if (r.Payslip == null) continue;
            totalEarnings += r.Payslip.TotalEarnings;
            totalDeductions += r.Payslip.TotalDeductions;
        }

        if (records.Count > 0)
        {
            earnings = new List<SalaryComponentDto>
            {
                new() { Name = "Basic Salary", Type = "EARNING", Amount = records.Sum(r => r.Payslip?.BasicSalary ?? 0) },
                new() { Name = "HRA", Type = "EARNING", Amount = records.Sum(r => r.Payslip?.Hra ?? 0) },
                new() { Name = "Conveyance", Type = "EARNING", Amount = records.Sum(r => r.Payslip?.Conveyance ?? 0) },
                new() { Name = "Medical Allowance", Type = "EARNING", Amount = records.Sum(r => r.Payslip?.MedicalAllowance ?? 0) },
                new() { Name = "Special Allowance", Type = "EARNING", Amount = records.Sum(r => r.Payslip?.SpecialAllowance ?? 0) }
            };
            deductions = new List<SalaryComponentDto>
            {
                new() { Name = "Provident Fund", Type = "DEDUCTION", Amount = records.Sum(r => r.Payslip?.Pf ?? 0) },
                new() { Name = "ESI", Type = "DEDUCTION", Amount = records.Sum(r => r.Payslip?.Esi ?? 0) },
                new() { Name = "TDS / Income Tax", Type = "DEDUCTION", Amount = records.Sum(r => r.Payslip?.Tds ?? 0) },
                new() { Name = "Professional Tax", Type = "DEDUCTION", Amount = records.Sum(r => r.Payslip?.ProfessionalTax ?? 0) }
            };
        }

        return new PayrollReportDto
        {
            TotalBasic = records.Sum(r => r.BasicSalary),
            TotalEarnings = totalEarnings,
            TotalDeductions = totalDeductions,
            TotalNetPay = records.Sum(r => r.NetPay),
            EmployeeCount = records.Count,
            ProcessedCount = records.Count(r => r.Status == PayrollStatus.PAID || r.Status == PayrollStatus.APPROVED || r.Status == PayrollStatus.PROCESSED),
            AverageSalary = records.Count > 0 ? Math.Round(records.Average(r => r.NetPay), 2) : 0,
            HighestSalary = records.Any() ? records.Max(r => r.NetPay) : 0,
            LowestSalary = records.Any() ? records.Min(r => r.NetPay) : 0,
            EarningsComponents = earnings,
            DeductionComponents = deductions,
            Chart = new ChartDataDto
            {
                Labels = earnings.Concat(deductions).Select(c => c.Name).ToList(),
                Datasets = new List<ChartDatasetDto>
                {
                    new()
                    {
                        Label = "Amount",
                        Data = earnings.Concat(deductions).Select(c => c.Amount).ToList(),
                        BackgroundColor = "#6366f1"
                    }
                }
            }
        };
    }

    public async Task<PayrollReportDto> GetSalaryBreakdownAsync()
    {
        var structures = await _context.SalaryStructures
            .Include(s => s.Employee)
            .Where(s => s.IsActive)
            .AsNoTracking()
            .ToListAsync();

        var earnings = new List<SalaryComponentDto>();
        var deductions = new List<SalaryComponentDto>();
        decimal totalEarnings = 0m, totalDeductions = 0m;

        if (structures.Count > 0)
        {
            earnings = new List<SalaryComponentDto>
            {
                new() { Name = "Basic Salary", Type = "EARNING", Amount = structures.Sum(s => s.BasicSalary), Percentage = "Fixed" },
                new() { Name = "HRA", Type = "EARNING", Amount = structures.Sum(s => s.Hra), Percentage = "40%" },
                new() { Name = "Conveyance", Type = "EARNING", Amount = structures.Sum(s => s.Conveyance), Percentage = "Fixed" },
                new() { Name = "Medical Allowance", Type = "EARNING", Amount = structures.Sum(s => s.MedicalAllowance), Percentage = "Fixed" },
                new() { Name = "Special Allowance", Type = "EARNING", Amount = structures.Sum(s => s.SpecialAllowance), Percentage = "Balance" }
            };
            deductions = new List<SalaryComponentDto>
            {
                new() { Name = "Provident Fund", Type = "DEDUCTION", Amount = structures.Sum(s => s.BasicSalary * s.PfPercent / 100m), Percentage = $"{structures.First().PfPercent}%" },
                new() { Name = "ESI", Type = "DEDUCTION", Amount = structures.Sum(s => s.BasicSalary * s.EsiPercent / 100m), Percentage = $"{structures.First().EsiPercent}%" },
                new() { Name = "TDS / Income Tax", Type = "DEDUCTION", Amount = structures.Sum(s => s.BasicSalary * s.TdsPercent / 100m), Percentage = $"{structures.First().TdsPercent}%" },
                new() { Name = "Professional Tax", Type = "DEDUCTION", Amount = structures.Sum(s => s.ProfessionalTax), Percentage = "Fixed" }
            };
            totalEarnings = earnings.Sum(e => e.Amount);
            totalDeductions = deductions.Sum(d => d.Amount);
        }

        return new PayrollReportDto
        {
            TotalBasic = structures.Sum(s => s.BasicSalary),
            TotalEarnings = totalEarnings,
            TotalDeductions = totalDeductions,
            TotalNetPay = totalEarnings - totalDeductions,
            EmployeeCount = structures.Count,
            ProcessedCount = structures.Count,
            AverageSalary = structures.Count > 0 ? Math.Round(structures.Average(s => s.BasicSalary + s.Hra + s.Conveyance + s.MedicalAllowance + s.SpecialAllowance), 2) : 0,
            HighestSalary = structures.Any() ? structures.Max(s => s.BasicSalary + s.Hra + s.Conveyance + s.MedicalAllowance + s.SpecialAllowance) : 0,
            LowestSalary = structures.Any() ? structures.Min(s => s.BasicSalary + s.Hra + s.Conveyance + s.MedicalAllowance + s.SpecialAllowance) : 0,
            EarningsComponents = earnings,
            DeductionComponents = deductions,
            Chart = new ChartDataDto
            {
                Labels = earnings.Select(e => e.Name).ToList(),
                Datasets = new List<ChartDatasetDto>
                {
                    new()
                    {
                        Label = "Earnings",
                        Data = earnings.Select(e => e.Amount).ToList(),
                        BackgroundColor = "#10b981"
                    }
                }
            }
        };
    }

    private SalaryStructureDto MapSalary(SalaryStructure s)
    {
        var totalEarnings = s.BasicSalary + s.Hra + s.Conveyance + s.MedicalAllowance + s.SpecialAllowance;
        var pf = Math.Round(s.BasicSalary * s.PfPercent / 100m, 2);
        var esi = Math.Round(s.BasicSalary * s.EsiPercent / 100m, 2);
        var tds = Math.Round(s.BasicSalary * s.TdsPercent / 100m, 2);
        var totalDeductions = pf + esi + tds + s.ProfessionalTax;

        return new SalaryStructureDto
        {
            Id = s.Id,
            EmployeeId = s.EmployeeId,
            EmployeeName = s.Employee != null ? $"{s.Employee.FirstName} {s.Employee.LastName}" : null,
            EmployeeCode = s.Employee?.EmployeeId,
            BasicSalary = s.BasicSalary,
            Hra = s.Hra,
            Conveyance = s.Conveyance,
            MedicalAllowance = s.MedicalAllowance,
            SpecialAllowance = s.SpecialAllowance,
            TotalEarnings = totalEarnings,
            PfPercent = s.PfPercent,
            EsiPercent = s.EsiPercent,
            TdsPercent = s.TdsPercent,
            ProfessionalTax = s.ProfessionalTax,
            TotalDeductions = totalDeductions,
            NetPay = totalEarnings - totalDeductions,
            IsActive = s.IsActive,
            EffectiveFrom = s.EffectiveFrom,
            EffectiveTo = s.EffectiveTo
        };
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

