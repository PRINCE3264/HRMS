using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class LeaveBalanceConfiguration : IEntityTypeConfiguration<LeaveBalance>
{
    public void Configure(EntityTypeBuilder<LeaveBalance> e)
    {

            e.HasIndex(lb => new { lb.EmployeeId, lb.LeaveType, lb.Year }).IsUnique();
            e.Property(lb => lb.LeaveType).HasConversion<string>().HasMaxLength(20);
            e.HasOne(lb => lb.Employee).WithMany().HasForeignKey(lb => lb.EmployeeId).OnDelete(DeleteBehavior.Cascade);
        
    }
}
