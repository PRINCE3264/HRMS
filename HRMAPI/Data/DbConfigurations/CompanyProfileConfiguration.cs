using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class CompanyProfileConfiguration : IEntityTypeConfiguration<CompanyProfile>
{
    public void Configure(EntityTypeBuilder<CompanyProfile> e)
    {

            e.HasIndex(c => c.CompanyName).IsUnique();
            e.Property(c => c.Currency).HasMaxLength(20);
        
    }
}
