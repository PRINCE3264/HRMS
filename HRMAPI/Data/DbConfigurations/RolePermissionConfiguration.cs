using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class RolePermissionConfiguration : IEntityTypeConfiguration<RolePermission>
{
    public void Configure(EntityTypeBuilder<RolePermission> e)
    {

            e.HasIndex(rp => new { rp.Role, rp.Module, rp.Action }).IsUnique();
            e.HasIndex(rp => rp.RoleId);
            e.Property(rp => rp.Action).HasConversion<string>().HasMaxLength(20);
            e.HasOne(rp => rp.RoleRef).WithMany().HasForeignKey(rp => rp.RoleId).OnDelete(DeleteBehavior.Restrict);
        
    }
}
