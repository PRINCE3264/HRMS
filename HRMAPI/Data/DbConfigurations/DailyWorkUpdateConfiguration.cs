using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class DailyWorkUpdateConfiguration : IEntityTypeConfiguration<DailyWorkUpdate>
{
    public void Configure(EntityTypeBuilder<DailyWorkUpdate> e)
    {

            e.HasIndex(wu => new { wu.EmployeeId, wu.Date }).IsUnique();
            e.Property(wu => wu.Status).HasConversion<string>().HasMaxLength(20);
            e.Property(wu => wu.Media).HasColumnType("jsonb");
            e.Property(wu => wu.HoursWorked).HasPrecision(5, 2);
            e.HasOne(wu => wu.Employee).WithMany().HasForeignKey(wu => wu.EmployeeId).OnDelete(DeleteBehavior.Cascade);
        
    }
}
