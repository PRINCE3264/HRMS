using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class DocumentConfiguration : IEntityTypeConfiguration<Document>
{
    public void Configure(EntityTypeBuilder<Document> e)
    {

            e.Property(d => d.Category).HasConversion<string>().HasMaxLength(20);
            e.HasOne(d => d.Employee).WithMany().HasForeignKey(d => d.EmployeeId).OnDelete(DeleteBehavior.SetNull);
            e.HasOne(d => d.UploadedBy).WithMany().HasForeignKey(d => d.UploadedById).OnDelete(DeleteBehavior.Restrict);
        
    }
}
