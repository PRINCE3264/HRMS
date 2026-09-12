using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class PayrollRecordConfiguration : IEntityTypeConfiguration<PayrollRecord>
{
    public void Configure(EntityTypeBuilder<PayrollRecord> e)
    {

            e.Property(pr => pr.BasicSalary).HasPrecision(18, 2);
            e.Property(pr => pr.Allowances).HasPrecision(18, 2);
            e.Property(pr => pr.Deductions).HasPrecision(18, 2);
            e.Property(pr => pr.NetPay).HasPrecision(18, 2);
            e.Property(pr => pr.Status).HasConversion<string>().HasMaxLength(20);
            e.HasOne(pr => pr.Employee).WithMany().HasForeignKey(pr => pr.EmployeeId).OnDelete(DeleteBehavior.Cascade);
        
    }
}
