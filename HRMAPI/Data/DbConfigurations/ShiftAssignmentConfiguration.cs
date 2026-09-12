using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class ShiftAssignmentConfiguration : IEntityTypeConfiguration<ShiftAssignment>
{
    public void Configure(EntityTypeBuilder<ShiftAssignment> e)
    {

            e.HasOne(sa => sa.Employee).WithMany(emp => emp.ShiftAssignments).HasForeignKey(sa => sa.EmployeeId).OnDelete(DeleteBehavior.Cascade);
            e.HasOne(sa => sa.Shift).WithMany(s => s.ShiftAssignments).HasForeignKey(sa => sa.ShiftId).OnDelete(DeleteBehavior.Cascade);
        
    }
}
