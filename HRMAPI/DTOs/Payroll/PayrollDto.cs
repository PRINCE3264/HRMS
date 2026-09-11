namespace HRMAPI.DTOs.Payroll;

public class PayrollRecordDto
{
    public Guid Id { get; set; }
    public Guid EmployeeId { get; set; }
    public string? EmployeeName { get; set; }
    public string? Department { get; set; }
    public string Month { get; set; } = string.Empty;
    public int Year { get; set; }
    public decimal BasicSalary { get; set; }
    public decimal Allowances { get; set; }
    public decimal Deductions { get; set; }
    public decimal NetPay { get; set; }
    public string Status { get; set; } = string.Empty;
    public DateTime? PaidDate { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class CreatePayrollDto
{
    public Guid EmployeeId { get; set; }
    public string Month { get; set; } = string.Empty;
    public int Year { get; set; }
    public decimal BasicSalary { get; set; }
    public decimal Allowances { get; set; }
    public decimal Deductions { get; set; }
}

public class PayslipDto
{
    public Guid Id { get; set; }
    public Guid PayrollId { get; set; }
    public Guid EmployeeId { get; set; }
    public string? EmployeeName { get; set; }
    public string Month { get; set; } = string.Empty;
    public int Year { get; set; }
    public decimal BasicSalary { get; set; }
    public decimal Hra { get; set; }
    public decimal Conveyance { get; set; }
    public decimal MedicalAllowance { get; set; }
    public decimal SpecialAllowance { get; set; }
    public decimal Pf { get; set; }
    public decimal Esi { get; set; }
    public decimal Tds { get; set; }
    public decimal ProfessionalTax { get; set; }
    public decimal TotalEarnings { get; set; }
    public decimal TotalDeductions { get; set; }
    public decimal NetPay { get; set; }
}

public class PayrollDeductionDto
{
    public string Type { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public int EmployeeShare { get; set; }
}

public class PayrollBonusDto
{
    public string EmployeeName { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public string Month { get; set; } = string.Empty;
    public int Year { get; set; }
}

