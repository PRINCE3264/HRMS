using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRMAPI.Models.Entities;

namespace HRMAPI.Data.DbConfigurations;

public class BranchConfiguration : IEntityTypeConfiguration<Branch>
{
    public void Configure(EntityTypeBuilder<Branch> e)
    {

            e.HasIndex(b => b.Name).IsUnique();
            e.HasIndex(b => b.Code).IsUnique();
            e.HasIndex(b => b.CompanyId);
            e.HasOne(b => b.Company).WithMany().HasForeignKey(b => b.CompanyId).OnDelete(DeleteBehavior.Restrict);
        
    }
}
