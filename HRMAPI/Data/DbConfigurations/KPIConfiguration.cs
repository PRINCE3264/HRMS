using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class KPIConfiguration : IEntityTypeConfiguration<KPI>
{
    public void Configure(EntityTypeBuilder<KPI> e)
    {

            e.Property(k => k.TargetValue).HasPrecision(18, 2);
            e.Property(k => k.CurrentValue).HasPrecision(18, 2);
            e.Property(k => k.Weight).HasPrecision(5, 2);
            e.HasOne(k => k.Employee).WithMany(emp => emp.KPIs).HasForeignKey(k => k.EmployeeId).OnDelete(DeleteBehavior.Cascade);
        
    }
}
