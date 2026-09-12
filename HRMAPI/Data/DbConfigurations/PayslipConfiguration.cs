using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class PayslipConfiguration : IEntityTypeConfiguration<Payslip>
{
    public void Configure(EntityTypeBuilder<Payslip> e)
    {

            e.Property(p => p.BasicSalary).HasPrecision(18, 2);
            e.Property(p => p.Hra).HasPrecision(18, 2);
            e.Property(p => p.Conveyance).HasPrecision(18, 2);
            e.Property(p => p.MedicalAllowance).HasPrecision(18, 2);
            e.Property(p => p.SpecialAllowance).HasPrecision(18, 2);
            e.Property(p => p.Pf).HasPrecision(18, 2);
            e.Property(p => p.Esi).HasPrecision(18, 2);
            e.Property(p => p.Tds).HasPrecision(18, 2);
            e.Property(p => p.ProfessionalTax).HasPrecision(18, 2);
            e.Property(p => p.TotalEarnings).HasPrecision(18, 2);
            e.Property(p => p.TotalDeductions).HasPrecision(18, 2);
            e.Property(p => p.NetPay).HasPrecision(18, 2);
            e.HasOne(p => p.Payroll).WithOne(pr => pr.Payslip).HasForeignKey<Payslip>(p => p.PayrollId).OnDelete(DeleteBehavior.Cascade);
            e.HasOne(p => p.Employee).WithMany().HasForeignKey(p => p.EmployeeId).OnDelete(DeleteBehavior.Cascade);
        
    }
}
