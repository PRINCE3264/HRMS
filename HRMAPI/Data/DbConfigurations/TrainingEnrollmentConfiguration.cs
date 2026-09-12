using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class TrainingEnrollmentConfiguration : IEntityTypeConfiguration<TrainingEnrollment>
{
    public void Configure(EntityTypeBuilder<TrainingEnrollment> e)
    {

            e.HasIndex(te => new { te.TrainingId, te.EmployeeId }).IsUnique();
            e.HasOne(te => te.Training).WithMany(t => t.Enrollments).HasForeignKey(te => te.TrainingId).OnDelete(DeleteBehavior.Cascade);
            e.HasOne(te => te.Employee).WithMany().HasForeignKey(te => te.EmployeeId).OnDelete(DeleteBehavior.Cascade);
        
    }
}
