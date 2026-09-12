using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class TrainingConfiguration : IEntityTypeConfiguration<Training>
{
    public void Configure(EntityTypeBuilder<Training> e)
    {

            e.Property(t => t.Status).HasConversion<string>().HasMaxLength(20);
            e.Property(t => t.Type).HasConversion<string>().HasMaxLength(20);
        
    }
}
