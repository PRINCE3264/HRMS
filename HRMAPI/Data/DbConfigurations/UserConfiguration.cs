using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> e)
    {

            e.HasIndex(u => u.Email).IsUnique();
            e.HasIndex(u => u.RoleId);
            e.Property(u => u.Email).IsRequired().HasMaxLength(255);
            e.Property(u => u.PasswordHash).IsRequired();
            e.Property(u => u.Role).HasConversion<string>().HasMaxLength(20);
            e.HasOne(u => u.RoleRef).WithMany().HasForeignKey(u => u.RoleId).OnDelete(DeleteBehavior.Restrict);
        
    }
}
