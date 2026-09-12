using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class ShiftConfiguration : IEntityTypeConfiguration<Shift>
{
    public void Configure(EntityTypeBuilder<Shift> e)
    {

            e.Property(s => s.StartTime).HasPrecision(0);
            e.Property(s => s.EndTime).HasPrecision(0);
        
    }
}
