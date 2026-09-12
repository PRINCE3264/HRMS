using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class DesignationConfiguration : IEntityTypeConfiguration<Designation>
{
    public void Configure(EntityTypeBuilder<Designation> e)
    {

            e.Property(d => d.MinSalary).HasPrecision(18, 2);
            e.Property(d => d.MaxSalary).HasPrecision(18, 2);
            e.HasOne(d => d.Department).WithMany(dep => dep.Designations).HasForeignKey(d => d.DepartmentId).OnDelete(DeleteBehavior.SetNull);
        
    }
}
