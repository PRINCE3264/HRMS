using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class PerformanceReviewConfiguration : IEntityTypeConfiguration<PerformanceReview>
{
    public void Configure(EntityTypeBuilder<PerformanceReview> e)
    {

            e.Property(pr => pr.OverallRating).HasPrecision(5, 2);
            e.Property(pr => pr.GoalsRating).HasPrecision(5, 2);
            e.Property(pr => pr.CompetencyRating).HasPrecision(5, 2);
            e.Property(pr => pr.Status).HasConversion<string>().HasMaxLength(20);
            e.HasOne(pr => pr.Employee).WithMany(emp => emp.PerformanceReviews).HasForeignKey(pr => pr.EmployeeId).OnDelete(DeleteBehavior.Cascade);
            e.HasOne(pr => pr.Reviewer).WithMany().HasForeignKey(pr => pr.ReviewerId).OnDelete(DeleteBehavior.Restrict);
        
    }
}
