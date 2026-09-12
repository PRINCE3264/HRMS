using HRMAPI.Interfaces.Services;
using Microsoft.AspNetCore.SignalR;

namespace HRMAPI.Hubs;

public interface INotificationClient
{
    Task ReceiveNotification(string title, string message, string type, string link);
    Task ReceiveAttendanceUpdate(Guid attendanceId, Guid employeeId, string status);
    Task GetUnreadCount(int count);
}

public class NotificationHub : Hub<INotificationClient>
{
    public override async Task OnConnectedAsync()
    {
        await Clients.Caller.GetUnreadCount(0);
        await base.OnConnectedAsync();
    }

    public async Task JoinUserGroup(string userId)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, $"user-{userId}");
    }

    public async Task LeaveUserGroup(string userId)
    {
        await Groups.RemoveFromGroupAsync(Context.ConnectionId, $"user-{userId}");
    }

    public async Task SendNotification(string userId, string title, string message, string type, string link)
    {
        await Clients.Group($"user-{userId}").ReceiveNotification(title, message, type, link);
    }

    public async Task SendAttendanceUpdate(Guid attendanceId, Guid employeeId, string status)
    {
        await Clients.All.ReceiveAttendanceUpdate(attendanceId, employeeId, status);
    }
}
