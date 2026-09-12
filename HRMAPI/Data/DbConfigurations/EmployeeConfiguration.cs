using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class EmployeeConfiguration : IEntityTypeConfiguration<Employee>
{
    public void Configure(EntityTypeBuilder<Employee> e)
    {

            e.HasIndex(emp => emp.EmployeeId).IsUnique();
            e.HasIndex(emp => emp.Email).IsUnique();
            e.Property(emp => emp.Salary).HasPrecision(18, 2);
            e.Property(emp => emp.Gender).HasConversion<string>().HasMaxLength(20);
            e.Property(emp => emp.MaritalStatus).HasConversion<string>().HasMaxLength(20);
            e.Property(emp => emp.EmploymentType).HasConversion<string>().HasMaxLength(20);
            e.Property(emp => emp.EmploymentStatus).HasConversion<string>().HasMaxLength(20);

            e.HasOne(emp => emp.Department).WithMany(d => d.Employees).HasForeignKey(emp => emp.DepartmentId).OnDelete(DeleteBehavior.Restrict);
            e.HasOne(emp => emp.Designation).WithMany(d => d.Employees).HasForeignKey(emp => emp.DesignationId).OnDelete(DeleteBehavior.Restrict);
            e.HasOne(emp => emp.Branch).WithMany(b => b.Employees).HasForeignKey(emp => emp.BranchId).OnDelete(DeleteBehavior.Restrict);
            e.HasOne(emp => emp.Team).WithMany(t => t.Members).HasForeignKey(emp => emp.TeamId).OnDelete(DeleteBehavior.SetNull);
            e.HasOne(emp => emp.ReportingManager).WithMany(m => m.DirectReports).HasForeignKey(emp => emp.ReportingManagerId).OnDelete(DeleteBehavior.SetNull);
        
    }
}
