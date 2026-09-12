using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class CandidateConfiguration : IEntityTypeConfiguration<Candidate>
{
    public void Configure(EntityTypeBuilder<Candidate> e)
    {

            e.Property(c => c.Status).HasConversion<string>().HasMaxLength(30);
            e.HasOne(c => c.Job).WithMany(j => j.Candidates).HasForeignKey(c => c.JobId).OnDelete(DeleteBehavior.Cascade);
        
    }
}
