using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class AttendanceConfiguration : IEntityTypeConfiguration<Attendance>
{
    public void Configure(EntityTypeBuilder<Attendance> e)
    {

            e.HasIndex(a => new { a.EmployeeId, a.Date }).IsUnique();
            e.HasOne(a => a.Employee).WithMany(emp => emp.Attendances).HasForeignKey(a => a.EmployeeId).OnDelete(DeleteBehavior.Cascade);
            e.Property(a => a.Latitude).HasPrecision(10, 7);
            e.Property(a => a.Longitude).HasPrecision(10, 7);
            e.Property(a => a.Status).HasConversion<string>().HasMaxLength(20);
        
    }
}
