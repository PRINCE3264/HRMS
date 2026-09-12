using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class FeatureRoleConfiguration : IEntityTypeConfiguration<FeatureRole>
{
    public void Configure(EntityTypeBuilder<FeatureRole> e)
    {

            e.HasIndex(fr => new { fr.FeatureId, fr.Role }).IsUnique();
            e.Property(fr => fr.Role).HasMaxLength(20);
            e.HasOne(fr => fr.Feature).WithMany().HasForeignKey(fr => fr.FeatureId).OnDelete(DeleteBehavior.Cascade);
            e.HasOne(fr => fr.RoleRef).WithMany().HasForeignKey(fr => fr.RoleId).OnDelete(DeleteBehavior.Restrict);
        
    }
}
