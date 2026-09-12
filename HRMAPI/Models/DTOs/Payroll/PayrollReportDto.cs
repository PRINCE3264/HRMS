using HRMAPI.Models.DTOs.Report;

namespace HRMAPI.Models.DTOs.Payroll;

public class PayrollReportDto
{
    public decimal TotalBasic { get; set; }
    public decimal TotalEarnings { get; set; }
    public decimal TotalDeductions { get; set; }
    public decimal TotalNetPay { get; set; }
    public int EmployeeCount { get; set; }
    public int ProcessedCount { get; set; }
    public decimal AverageSalary { get; set; }
    public decimal HighestSalary { get; set; }
    public decimal LowestSalary { get; set; }
    public List<SalaryComponentDto> EarningsComponents { get; set; } = new();
    public List<SalaryComponentDto> DeductionComponents { get; set; } = new();
    public ChartDataDto Chart { get; set; } = new();
}
