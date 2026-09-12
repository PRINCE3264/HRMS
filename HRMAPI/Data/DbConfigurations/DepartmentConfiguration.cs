using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class DepartmentConfiguration : IEntityTypeConfiguration<Department>
{
    public void Configure(EntityTypeBuilder<Department> e)
    {

            e.HasIndex(d => d.Name).IsUnique();
            e.HasIndex(d => d.Code).IsUnique();
            e.HasOne(d => d.Head).WithMany().HasForeignKey(d => d.HeadId).OnDelete(DeleteBehavior.SetNull);
        
    }
}
