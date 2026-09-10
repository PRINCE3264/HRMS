import { Component } from '@angular/core';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class HrDashboardComponent {
  pendingLeaves = [
    { name: 'Emily Davis', type: 'Annual Leave', days: 3 },
    { name: 'John Smith', type: 'Sick Leave', days: 1 },
    { name: 'Lisa Anderson', type: 'Personal Leave', days: 2 },
  ];
  birthdays = [
    { name: 'Sarah Johnson', date: 'December 25' },
    { name: 'Michael Chen', date: 'December 28' },
    { name: 'David Lee', date: 'January 3' },
  ];
  recentActivity = [
    { icon: 'fas fa-user-plus', color: '#6366f1', message: 'James Wilson joined Engineering', time: '2 hours ago' },
    { icon: 'fas fa-calendar-check', color: '#10b981', message: 'Emily Davis approved for annual leave', time: '4 hours ago' },
    { icon: 'fas fa-file-alt', color: '#f59e0b', message: 'New policy document uploaded', time: 'Yesterday' },
    { icon: 'fas fa-award', color: '#ef4444', message: 'Q4 performance reviews initiated', time: '2 days ago' },
  ];
  departments = [
    { name: 'Engineering', count: 82, pct: 33, color: '#6366f1' },
    { name: 'Marketing', count: 38, pct: 15, color: '#10b981' },
    { name: 'Finance', count: 30, pct: 12, color: '#f59e0b' },
    { name: 'Design', count: 28, pct: 11, color: '#ef4444' },
    { name: 'HR', count: 22, pct: 9, color: '#8b5cf6' },
    { name: 'Operations', count: 48, pct: 19, color: '#06b6d4' },
  ];
}
