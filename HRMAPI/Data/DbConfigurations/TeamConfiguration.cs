using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class TeamConfiguration : IEntityTypeConfiguration<Team>
{
    public void Configure(EntityTypeBuilder<Team> e)
    {

            e.HasOne(t => t.Department).WithMany(d => d.Teams).HasForeignKey(t => t.DepartmentId).OnDelete(DeleteBehavior.Restrict);
            e.HasOne(t => t.TeamLead).WithMany().HasForeignKey(t => t.TeamLeadId).OnDelete(DeleteBehavior.Restrict);
        
    }
}
