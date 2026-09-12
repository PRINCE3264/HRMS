using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class AnnouncementConfiguration : IEntityTypeConfiguration<Announcement>
{
    public void Configure(EntityTypeBuilder<Announcement> e)
    {

            e.Property(a => a.Priority).HasConversion<string>().HasMaxLength(20);
            e.HasOne(a => a.Author).WithMany().HasForeignKey(a => a.AuthorId).OnDelete(DeleteBehavior.Restrict);
        
    }
}
