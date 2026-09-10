import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { SidebarService } from '../../core/services/sidebar.service';
import { Notification, UserRole } from '../../core/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  collapsed = false;
  searchTerm = '';
  showProfileMenu = false;
  showNotifications = false;
  showRoleSelector = false;
  user: any;
  notifications: Notification[] = [];
  unreadCount = 3;
  availableRoles = Object.values(UserRole);
  private subs: Subscription[] = [];

  constructor(
    private authService: AuthService,
    private sidebarService: SidebarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.notifications = [
      { id: '1', title: 'Leave Request', message: 'Your leave request has been approved', type: 'success', isRead: false, createdAt: '2 hours ago' },
      { id: '2', title: 'New Announcement', message: 'Company picnic scheduled for next Friday', type: 'info', isRead: false, createdAt: '5 hours ago' },
      { id: '3', title: 'Task Assigned', message: 'You have been assigned a new task: Q4 Report', type: 'task', isRead: true, createdAt: '1 day ago' },
    ];
    this.subs.push(
      this.sidebarService.collapsed$.subscribe(v => this.collapsed = v),
      this.authService.currentUser$.subscribe(u => this.user = u)
    );
    document.addEventListener('click', this.onDocumentClick.bind(this));
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
    document.removeEventListener('click', this.onDocumentClick.bind(this));
  }

  onDocumentClick(e: Event): void {
    const target = e.target as HTMLElement;
    if (!target.closest('.navbar__profile') && !target.closest('.navbar__dropdown')) { this.showProfileMenu = false; }
    if (!target.closest('.navbar__icon-btn') && !target.closest('.navbar__notifications-dropdown')) { this.showNotifications = false; }
    if (!target.closest('.navbar__role-switch') && !target.closest('.navbar__role-dropdown')) { this.showRoleSelector = false; }
  }

  toggleSidebar(): void { this.sidebarService.toggle(); }
  toggleMobile(): void { this.sidebarService.toggleMobile(); }
  logout(): void { this.authService.logout(); this.router.navigate(['/auth/login']); }
  markAllRead(): void { this.notifications.forEach(n => n.isRead = true); this.unreadCount = 0; }
  onNotificationClick(n: Notification): void { n.isRead = true; this.unreadCount = Math.max(0, this.unreadCount - 1); }
  getNotificationIcon(type: string): string {
    const icons: Record<string, string> = { success: 'fas fa-check-circle', info: 'fas fa-info-circle', task: 'fas fa-tasks', warning: 'fas fa-exclamation-triangle' };
    return icons[type] || 'fas fa-bell';
  }

  switchRole(roleStr: string): void {
    const role = roleStr as UserRole;
    this.authService.switchRole(role);
    this.showRoleSelector = false;
    this.router.navigate(['/dashboard']);
  }
}
