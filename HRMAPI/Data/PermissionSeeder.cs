using HRMAPI.Models;
using HRMAPI.Services;

namespace HRMAPI.Data;

public static class PermissionSeeder
{
    public static IEnumerable<Models.UserPermission> GetDefaultPermissions(Enums.UserRole role)
    {
        var permissions = new List<Models.UserPermission>();
        if (RolePermissionDefaults.RolePermissionMap.TryGetValue(role.ToString(), out var modules))
        {
            foreach (var module in modules)
            {
                foreach (var action in module.Value)
                {
                    permissions.Add(new Models.UserPermission
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
