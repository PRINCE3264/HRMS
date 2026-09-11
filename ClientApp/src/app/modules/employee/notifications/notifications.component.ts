import { Component, OnInit } from '@angular/core';
import { NotificationService, ToastService } from '../../../core/services';

interface NotificationView {
  id: string;
  title: string;
  message: string;
  time: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  read: boolean;
}

@Component({
  selector: 'app-emp-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class EmpNotificationsComponent implements OnInit {
  notifications: NotificationView[] = [];

  private iconMap: { [key: string]: { icon: string; bg: string; color: string } } = {
    LEAVE: { icon: 'fas fa-check-circle', bg: '#dcfce7', color: '#16a34a' },
    TASK: { icon: 'fas fa-tasks', bg: '#dbeafe', color: '#2563eb' },
    PERFORMANCE: { icon: 'fas fa-chart-line', bg: '#f3e8ff', color: '#7c3aed' },
    PAYSLIP: { icon: 'fas fa-file-invoice-dollar', bg: '#fef3c7', color: '#d97706' },
    SYSTEM: { icon: 'fas fa-server', bg: '#fee2e2', color: '#dc2626' },
    MEETING: { icon: 'fas fa-users', bg: '#dbeafe', color: '#2563eb' },
    DOCUMENT: { icon: 'fas fa-shield-alt', bg: '#dcfce7', color: '#16a34a' },
    WELCOME: { icon: 'fas fa-hand-sparkles', bg: '#dcfce7', color: '#16a34a' }
  };

  private defaultStyle = { icon: 'fas fa-bell', bg: '#f1f5f9', color: '#64748b' };

  constructor(
    private notificationService: NotificationService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadNotifications();
  }

  private loadNotifications(): void {
    this.notificationService.getNotifications().subscribe({
      next: list => {
        this.notifications = (list || []).map(n => {
          const style = this.iconMap[String(n.type || '').toUpperCase()] || this.defaultStyle;
          return {
            id: n.id,
            title: n.title,
            message: n.message,
            time: this.timeAgo(n.createdAt),
            icon: style.icon,
            iconBg: style.bg,
            iconColor: style.color,
            read: n.isRead
          };
        });
      },
      error: () => {
        this.notifications = [];
        this.toast.error('Failed to load notifications.');
      }
    });
  }

  private timeAgo(value?: string): string {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    const diff = Date.now() - d.getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'Just now';
    if (mins < 60) return `${mins} minute${mins > 1 ? 's' : ''} ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs} hour${hrs > 1 ? 's' : ''} ago`;
    const days = Math.floor(hrs / 24);
    if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`;
    const weeks = Math.floor(days / 7);
    if (weeks < 5) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  get unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  markAllRead() {
    this.notificationService.markAllRead().subscribe({
      next: () => {
        this.notifications.forEach(n => n.read = true);
        this.toast.success('All notifications marked as read.');
      },
      error: () => this.toast.error('Failed to mark notifications as read.')
    });
  }

  dismiss(n: NotificationView) {
    this.notificationService.delete(n.id).subscribe({
      next: () => {
        this.notifications = this.notifications.filter(item => item !== n);
      },
      error: () => this.toast.error('Failed to dismiss notification.')
    });
  }
}