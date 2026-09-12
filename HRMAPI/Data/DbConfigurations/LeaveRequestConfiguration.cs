using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class LeaveRequestConfiguration : IEntityTypeConfiguration<LeaveRequest>
{
    public void Configure(EntityTypeBuilder<LeaveRequest> e)
    {

            e.Property(lr => lr.LeaveType).HasConversion<string>().HasMaxLength(20);
            e.Property(lr => lr.Status).HasConversion<string>().HasMaxLength(20);
            e.HasOne(lr => lr.Employee).WithMany(emp => emp.LeaveRequests).HasForeignKey(lr => lr.EmployeeId).OnDelete(DeleteBehavior.Cascade);
            e.HasOne(lr => lr.ApprovedBy).WithMany().HasForeignKey(lr => lr.ApprovedById).OnDelete(DeleteBehavior.SetNull);
        
    }
}
