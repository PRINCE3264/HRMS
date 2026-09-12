using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class InterviewConfiguration : IEntityTypeConfiguration<Interview>
{
    public void Configure(EntityTypeBuilder<Interview> e)
    {

            e.Property(i => i.Round).HasMaxLength(50);
            e.Property(i => i.InterviewType).HasConversion<string>().HasMaxLength(20);
            e.Property(i => i.Status).HasConversion<string>().HasMaxLength(20);
            e.HasOne(i => i.Candidate).WithMany().HasForeignKey(i => i.CandidateId).OnDelete(DeleteBehavior.Cascade);
            e.HasOne(i => i.Job).WithMany().HasForeignKey(i => i.JobId).OnDelete(DeleteBehavior.Cascade);
            e.HasOne(i => i.Interviewer).WithMany().HasForeignKey(i => i.InterviewerId).OnDelete(DeleteBehavior.SetNull);
        
    }
}
