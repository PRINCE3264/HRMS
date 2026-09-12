using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class OnboardingTaskConfiguration : IEntityTypeConfiguration<OnboardingTask>
{
    public void Configure(EntityTypeBuilder<OnboardingTask> e)
    {

            e.HasOne(ot => ot.Onboarding).WithMany(o => o.Tasks).HasForeignKey(ot => ot.OnboardingId).OnDelete(DeleteBehavior.Cascade);
        
    }
}
