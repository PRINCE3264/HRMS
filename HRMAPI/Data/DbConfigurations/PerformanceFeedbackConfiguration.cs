using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class PerformanceFeedbackConfiguration : IEntityTypeConfiguration<PerformanceFeedback>
{
    public void Configure(EntityTypeBuilder<PerformanceFeedback> e)
    {

            e.Property(pf => pf.Category).HasConversion<string>().HasMaxLength(20);
            e.HasOne(pf => pf.TargetEmployee).WithMany().HasForeignKey(pf => pf.TargetEmployeeId).OnDelete(DeleteBehavior.Cascade);
            e.HasOne(pf => pf.Reviewer).WithMany().HasForeignKey(pf => pf.ReviewerId).OnDelete(DeleteBehavior.Restrict);
        
    }
}
