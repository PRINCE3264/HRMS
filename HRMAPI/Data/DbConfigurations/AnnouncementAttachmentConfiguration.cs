using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class AnnouncementAttachmentConfiguration : IEntityTypeConfiguration<AnnouncementAttachment>
{
    public void Configure(EntityTypeBuilder<AnnouncementAttachment> e)
    {

            e.HasOne(aa => aa.Announcement).WithMany(a => a.Attachments).HasForeignKey(aa => aa.AnnouncementId).OnDelete(DeleteBehavior.Cascade);
        
    }
}
