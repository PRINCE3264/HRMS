using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class NotificationPreferenceConfiguration : IEntityTypeConfiguration<NotificationPreference>
{
    public void Configure(EntityTypeBuilder<NotificationPreference> e)
    {

            e.HasIndex(n => n.EventName).IsUnique();
            e.HasOne(n => n.UpdatedBy).WithMany().HasForeignKey(n => n.UpdatedById).OnDelete(DeleteBehavior.SetNull);
        
    }
}
