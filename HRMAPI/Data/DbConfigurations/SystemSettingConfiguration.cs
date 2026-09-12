using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class SystemSettingConfiguration : IEntityTypeConfiguration<SystemSetting>
{
    public void Configure(EntityTypeBuilder<SystemSetting> e)
    {

            e.HasIndex(s => s.Key).IsUnique();
            e.HasOne(s => s.UpdatedBy).WithMany().HasForeignKey(s => s.UpdatedById).OnDelete(DeleteBehavior.SetNull);
        
    }
}
