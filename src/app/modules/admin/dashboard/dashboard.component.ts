import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class AdminDashboardComponent {
  attendanceData = [
    { label: 'Jul', value: 185 }, { label: 'Aug', value: 192 }, { label: 'Sep', value: 188 },
    { label: 'Oct', value: 195 }, { label: 'Nov', value: 198 }, { label: 'Dec', value: 190 }
  ];
  departmentData = [
    { label: 'Engineering', value: 68, color: '#6366f1' },
    { label: 'Marketing', value: 32, color: '#8b5cf6' },
    { label: 'Sales', value: 45, color: '#06b6d4' },
    { label: 'HR', value: 18, color: '#10b981' },
    { label: 'Finance', value: 28, color: '#f59e0b' },
    { label: 'Others', value: 57, color: '#94a3b8' }
  ];
  recentActivities = [
    { type: 'join', icon: 'fas fa-user-plus', text: 'John Smith joined the Engineering department', time: '2 hours ago' },
    { type: 'leave', icon: 'fas fa-calendar-minus', text: 'Emily Davis requested sick leave for Dec 20-22', time: '4 hours ago' },
    { type: 'payroll', icon: 'fas fa-money-check-alt', text: 'December payroll processed for 231 employees', time: '1 day ago' },
    { type: 'alert', icon: 'fas fa-exclamation-triangle', text: '3 employees are marked absent without prior notice', time: '1 day ago' },
    { type: 'join', icon: 'fas fa-user-plus', text: 'Maria Garcia joined the Marketing department', time: '2 days ago' },
  ];
  payrollSummary = [
    { month: 'December 2024', amount: 485200, status: 'PAID' },
    { month: 'November 2024', amount: 478500, status: 'PAID' },
    { month: 'October 2024', amount: 472000, status: 'PAID' },
    { month: 'September 2024', amount: 468000, status: 'APPROVED' },
  ];
}
