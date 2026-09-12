using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class TaskAssignmentConfiguration : IEntityTypeConfiguration<TaskAssignment>
{
    public void Configure(EntityTypeBuilder<TaskAssignment> e)
    {

            e.Property(t => t.Priority).HasConversion<string>().HasMaxLength(20);
            e.Property(t => t.Status).HasConversion<string>().HasMaxLength(20);
            e.HasOne(t => t.AssignedTo).WithMany(emp => emp.AssignedTasks).HasForeignKey(t => t.AssignedToId).OnDelete(DeleteBehavior.Restrict);
            e.HasOne(t => t.AssignedBy).WithMany(emp => emp.CreatedTasks).HasForeignKey(t => t.AssignedById).OnDelete(DeleteBehavior.Restrict);
        
    }
}
