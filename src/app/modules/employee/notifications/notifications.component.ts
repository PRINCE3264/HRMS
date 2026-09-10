import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class EmpNotificationsComponent {
  notifications = [
    { title: 'Leave Request Approved', message: 'Your annual leave request for Dec 1-3 has been approved by Sarah Johnson.', time: '2 hours ago', icon: 'fas fa-check-circle', iconBg: '#dcfce7', iconColor: '#16a34a', read: false },
    { title: 'New Task Assigned', message: 'You have been assigned a new task: "Complete Q4 Report" due Dec 20.', time: '4 hours ago', icon: 'fas fa-tasks', iconBg: '#dbeafe', iconColor: '#2563eb', read: false },
    { title: 'Performance Review', message: 'Q4 2025 performance review cycle has started. Please complete your self-assessment.', time: '1 day ago', icon: 'fas fa-chart-line', iconBg: '#f3e8ff', iconColor: '#7c3aed', read: false },
    { title: 'Payslip Generated', message: 'Your December 2025 payslip has been generated and is ready for download.', time: '1 day ago', icon: 'fas fa-file-invoice-dollar', iconBg: '#fef3c7', iconColor: '#d97706', read: true },
    { title: 'System Maintenance', message: 'Scheduled maintenance on Dec 20th, 10 PM - 2 AM EST. System will be unavailable.', time: '2 days ago', icon: 'fas fa-server', iconBg: '#fee2e2', iconColor: '#dc2626', read: true },
    { title: 'Team Meeting Reminder', message: 'Sprint retrospective meeting tomorrow at 2:00 PM in Conference Room B.', time: '2 days ago', icon: 'fas fa-users', iconBg: '#dbeafe', iconColor: '#2563eb', read: true },
    { title: 'Benefits Enrollment', message: 'Annual benefits enrollment period is open. Review and update your selections in the HR portal.', time: '5 days ago', icon: 'fas fa-heart', iconBg: '#fce7f3', iconColor: '#db2777', read: true },
    { title: 'Document Expiring', message: 'Your insurance card expires on Mar 31, 2026. Please upload an updated copy.', time: '1 week ago', icon: 'fas fa-exclamation-triangle', iconBg: '#fef3c7', iconColor: '#d97706', read: true },
    { title: 'Welcome to HRM', message: 'Welcome to the HRM portal! Explore the features and keep your profile updated.', time: '2 weeks ago', icon: 'fas fa-hand-sparkles', iconBg: '#dcfce7', iconColor: '#16a34a', read: true },
  ];

  get unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  markAllRead() {
    this.notifications.forEach(n => n.read = true);
  }

  dismiss(n: any) {
    this.notifications = this.notifications.filter(item => item !== n);
  }
}
