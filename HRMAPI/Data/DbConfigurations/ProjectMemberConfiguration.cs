using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class ProjectMemberConfiguration : IEntityTypeConfiguration<ProjectMember>
{
    public void Configure(EntityTypeBuilder<ProjectMember> e)
    {

            e.HasIndex(pm => new { pm.ProjectId, pm.EmployeeId }).IsUnique();
            e.Property(pm => pm.Status).HasConversion<string>().HasMaxLength(20);
            e.Property(pm => pm.RoleInProject).HasMaxLength(200);
            e.HasOne(pm => pm.Project).WithMany(p => p.Members).HasForeignKey(pm => pm.ProjectId).OnDelete(DeleteBehavior.Cascade);
            e.HasOne(pm => pm.Employee).WithMany().HasForeignKey(pm => pm.EmployeeId).OnDelete(DeleteBehavior.Cascade);
            e.HasOne(pm => pm.AssignedBy).WithMany().HasForeignKey(pm => pm.AssignedById).OnDelete(DeleteBehavior.Restrict);
        
    }
}
