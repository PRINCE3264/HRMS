using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class JobOpeningConfiguration : IEntityTypeConfiguration<JobOpening>
{
    public void Configure(EntityTypeBuilder<JobOpening> e)
    {

            e.Property(j => j.Status).HasConversion<string>().HasMaxLength(20);
            e.Property(j => j.EmploymentType).HasConversion<string>().HasMaxLength(20);
            e.HasOne(j => j.Department).WithMany().HasForeignKey(j => j.DepartmentId).OnDelete(DeleteBehavior.Restrict);
            e.HasOne(j => j.Designation).WithMany().HasForeignKey(j => j.DesignationId).OnDelete(DeleteBehavior.Restrict);
            e.HasOne(j => j.Branch).WithMany().HasForeignKey(j => j.BranchId).OnDelete(DeleteBehavior.Restrict);
        
    }
}
