using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class OnboardingConfiguration : IEntityTypeConfiguration<Onboarding>
{
    public void Configure(EntityTypeBuilder<Onboarding> e)
    {

            e.Property(o => o.Progress).HasPrecision(5, 2);
            e.Property(o => o.Status).HasConversion<string>().HasMaxLength(20);
            e.HasOne(o => o.Employee).WithMany().HasForeignKey(o => o.EmployeeId).OnDelete(DeleteBehavior.Cascade);
            e.HasOne(o => o.Mentor).WithMany().HasForeignKey(o => o.MentorId).OnDelete(DeleteBehavior.SetNull);
        
    }
}
