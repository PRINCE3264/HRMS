using HRMAPI.Interfaces.Services;
using HRMAPI.Models.Entities;
using HRMAPI.Services;

namespace HRMAPI.Data;

public static class PermissionSeeder
{
    public static IEnumerable<UserPermission> GetDefaultPermissions(Enums.UserRole role)
    {
        var permissions = new List<UserPermission>();
        if (RolePermissionDefaults.RolePermissionMap.TryGetValue(role.ToString(), out var modules))
        {
            foreach (var module in modules)
            {
                foreach (var action in module.Value)
                {
                    permissions.Add(new UserPermission
                    {
                        Module = module.Key,
                        Action = Enum.Parse<Enums.PermissionAction>(action)
                    });
                }
            }
        }
        return permissions;
    }
}
