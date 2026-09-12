using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class UserPermissionConfiguration : IEntityTypeConfiguration<UserPermission>
{
    public void Configure(EntityTypeBuilder<UserPermission> e)
    {

            e.HasIndex(up => new { up.UserId, up.Module, up.Action }).IsUnique();
            e.Property(up => up.Action).HasConversion<string>().HasMaxLength(20);
        
    }
}
