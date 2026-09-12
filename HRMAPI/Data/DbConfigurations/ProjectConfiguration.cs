using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class ProjectConfiguration : IEntityTypeConfiguration<Project>
{
    public void Configure(EntityTypeBuilder<Project> e)
    {

            e.Property(p => p.ProjectCode).HasMaxLength(50);
            e.HasIndex(p => p.ProjectCode).IsUnique();
            e.Property(p => p.Name).HasMaxLength(200);
            e.Property(p => p.Status).HasConversion<string>().HasMaxLength(20);
            e.Property(p => p.Priority).HasConversion<string>().HasMaxLength(20);
            e.Property(p => p.StartDate);
            e.HasOne(p => p.Department).WithMany().HasForeignKey(p => p.DepartmentId).OnDelete(DeleteBehavior.Restrict);
            e.HasOne(p => p.Team).WithMany().HasForeignKey(p => p.TeamId).OnDelete(DeleteBehavior.SetNull);
            e.HasOne(p => p.TeamLead).WithMany().HasForeignKey(p => p.TeamLeadId).OnDelete(DeleteBehavior.SetNull);
            e.HasOne(p => p.CreatedBy).WithMany().HasForeignKey(p => p.CreatedById).OnDelete(DeleteBehavior.Restrict);
        
    }
}
