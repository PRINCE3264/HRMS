using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class RoleConfiguration : IEntityTypeConfiguration<Role>
{
    public void Configure(EntityTypeBuilder<Role> e)
    {

            e.HasIndex(r => r.Code).IsUnique();
            e.HasIndex(r => r.Name).IsUnique();
        
    }
}
