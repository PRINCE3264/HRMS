using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class SalaryStructureConfiguration : IEntityTypeConfiguration<SalaryStructure>
{
    public void Configure(EntityTypeBuilder<SalaryStructure> e)
    {

            e.HasIndex(s => new { s.EmployeeId, s.IsActive });
            e.Property(s => s.BasicSalary).HasPrecision(18, 2);
            e.Property(s => s.Hra).HasPrecision(18, 2);
            e.Property(s => s.Conveyance).HasPrecision(18, 2);
            e.Property(s => s.MedicalAllowance).HasPrecision(18, 2);
            e.Property(s => s.SpecialAllowance).HasPrecision(18, 2);
            e.Property(s => s.PfPercent).HasPrecision(5, 2);
            e.Property(s => s.EsiPercent).HasPrecision(5, 2);
            e.Property(s => s.TdsPercent).HasPrecision(5, 2);
            e.Property(s => s.ProfessionalTax).HasPrecision(18, 2);
            e.HasOne(s => s.Employee).WithMany().HasForeignKey(s => s.EmployeeId).OnDelete(DeleteBehavior.Cascade);
        
    }
}
