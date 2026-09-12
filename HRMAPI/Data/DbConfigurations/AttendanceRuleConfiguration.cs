using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class AttendanceRuleConfiguration : IEntityTypeConfiguration<AttendanceRule>
{
    public void Configure(EntityTypeBuilder<AttendanceRule> e)
    {

            e.Property(r => r.GraceMinutes);
            e.Property(r => r.MinWorkHours).HasPrecision(5, 2);
            e.Property(r => r.OvertimeAfterHours).HasPrecision(5, 2);
            e.Property(r => r.OvertimePolicy).HasConversion<string>().HasMaxLength(20);
            e.Property(r => r.LateThresholdTime).HasPrecision(0);
        
    }
}
