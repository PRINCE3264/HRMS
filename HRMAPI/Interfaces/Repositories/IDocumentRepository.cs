using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;

namespace HRMAPI.Interfaces.Repositories;

public interface IDocumentRepository : IRepository<Document>
{
    Task<IEnumerable<Document>> GetByEmployeeAsync(Guid employeeId);
    Task<IEnumerable<Document>> GetByCategoryAsync(string category);
}
