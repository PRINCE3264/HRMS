using System.Linq.Expressions;

namespace HRMAPI.Repositories.Interfaces;

public interface IRepository<T> where T : class
{
    Task<T?> GetByIdAsync(Guid id);
    Task<IEnumerable<T>> GetAllAsync();
    Task<T> AddAsync(T entity);
    Task UpdateAsync(T entity);
    Task DeleteAsync(T entity);
    Task<int> CountAsync(Expression<Func<T, bool>>? filter = null);
    Task<bool> ExistsAsync(Expression<Func<T, bool>> filter);
}

