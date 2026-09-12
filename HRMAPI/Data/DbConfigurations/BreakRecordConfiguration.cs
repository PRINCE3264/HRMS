using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class BreakRecordConfiguration : IEntityTypeConfiguration<BreakRecord>
{
    public void Configure(EntityTypeBuilder<BreakRecord> e)
    {

            e.Property(b => b.BreakType).HasConversion<string>().HasMaxLength(20);
            e.HasOne(b => b.Attendance).WithMany(a => a.Breaks).HasForeignKey(b => b.AttendanceId).OnDelete(DeleteBehavior.Cascade);
        
    }
}
