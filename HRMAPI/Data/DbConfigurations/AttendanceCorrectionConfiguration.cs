using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class AttendanceCorrectionConfiguration : IEntityTypeConfiguration<AttendanceCorrection>
{
    public void Configure(EntityTypeBuilder<AttendanceCorrection> e)
    {

            e.HasIndex(c => new { c.EmployeeId, c.Status });
            e.Property(c => c.Status).HasConversion<string>().HasMaxLength(20);
            e.HasOne(c => c.Attendance).WithMany().HasForeignKey(c => c.AttendanceId).OnDelete(DeleteBehavior.Cascade);
            e.HasOne(c => c.Employee).WithMany().HasForeignKey(c => c.EmployeeId).OnDelete(DeleteBehavior.Restrict);
            e.HasOne(c => c.RequestedBy).WithMany().HasForeignKey(c => c.RequestedById).OnDelete(DeleteBehavior.Restrict);
            e.HasOne(c => c.ApprovedBy).WithMany().HasForeignKey(c => c.ApprovedById).OnDelete(DeleteBehavior.SetNull);
        
    }
}
