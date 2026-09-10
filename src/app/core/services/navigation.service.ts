import { Injectable } from '@angular/core';
import { UserRole } from '../models';
import { AuthService } from './auth.service';

export interface NavItem {
  label: string;
  icon: string;
  routerLink: string;
  module: string;
  roles?: UserRole[];
  children?: NavItem[];
}

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private allNavItems: NavItem[] = [
    { label: 'Dashboard', icon: 'fas fa-th-large', routerLink: '/dashboard', module: 'dashboard' },
    {
      label: 'Employee Management', icon: 'fas fa-users', routerLink: '/employees', module: 'employees',
      children: [
        { label: 'All Employees', icon: 'fas fa-user-friends', routerLink: '/employees', module: 'employees' },
        { label: 'Add Employee', icon: 'fas fa-user-plus', routerLink: '/employees/add', module: 'employees' },
      ]
    },
    { label: 'Departments', icon: 'fas fa-building', routerLink: '/departments', module: 'departments' },
    { label: 'Designations', icon: 'fas fa-id-badge', routerLink: '/designations', module: 'designations' },
    { label: 'Branches', icon: 'fas fa-map-marker-alt', routerLink: '/branches', module: 'branches' },
    { label: 'Teams', icon: 'fas fa-user-friends', routerLink: '/teams', module: 'teams' },
    {
      label: 'Attendance', icon: 'fas fa-clock', routerLink: '/attendance', module: 'attendance',
      children: [
        { label: 'All Attendance', icon: 'fas fa-list', routerLink: '/attendance', module: 'attendance' },
        { label: 'Check In/Out', icon: 'fas fa-sign-in-alt', routerLink: '/attendance/check-in-out', module: 'checkInOut' },
      ]
    },
    {
      label: 'Leave Management', icon: 'fas fa-calendar-alt', routerLink: '/leave', module: 'leave',
      children: [
        { label: 'All Requests', icon: 'fas fa-list', routerLink: '/leave', module: 'leave' },
        { label: 'Apply Leave', icon: 'fas fa-plus-circle', routerLink: '/leave/apply', module: 'applyLeave' },
      ]
    },
    { label: 'Shift Management', icon: 'fas fa-business-time', routerLink: '/shifts', module: 'shifts' },
    {
      label: 'Payroll', icon: 'fas fa-money-check-alt', routerLink: '/payroll', module: 'payroll',
      children: [
        { label: 'Payroll List', icon: 'fas fa-list', routerLink: '/payroll', module: 'payroll' },
        { label: 'Payslips', icon: 'fas fa-file-invoice-dollar', routerLink: '/payroll/payslips', module: 'payroll' },
      ]
    },
    {
      label: 'Recruitment', icon: 'fas fa-briefcase', routerLink: '/recruitment', module: 'recruitment',
      children: [
        { label: 'Job Openings', icon: 'fas fa-plus-square', routerLink: '/recruitment/jobs', module: 'recruitment' },
        { label: 'Candidates', icon: 'fas fa-user-tie', routerLink: '/recruitment/candidates', module: 'recruitment' },
      ]
    },
    { label: 'Onboarding', icon: 'fas fa-handshake', routerLink: '/onboarding', module: 'onboarding' },
    {
      label: 'Performance', icon: 'fas fa-chart-line', routerLink: '/performance', module: 'performance',
      children: [
        { label: 'Reviews', icon: 'fas fa-star', routerLink: '/performance/reviews', module: 'performance' },
        { label: 'KPIs', icon: 'fas fa-bullseye', routerLink: '/performance/kpi', module: 'kpi' },
      ]
    },
    { label: 'Training', icon: 'fas fa-graduation-cap', routerLink: '/training', module: 'training' },
    { label: 'Documents', icon: 'fas fa-folder-open', routerLink: '/documents', module: 'documents' },
    { label: 'Announcements', icon: 'fas fa-bullhorn', routerLink: '/announcements', module: 'announcements' },
    { label: 'Notifications', icon: 'fas fa-bell', routerLink: '/notifications', module: 'notifications' },
    {
      label: 'Reports & Analytics', icon: 'fas fa-chart-bar', routerLink: '/reports', module: 'reports',
      children: [
        { label: 'HR Reports', icon: 'fas fa-file-alt', routerLink: '/reports/hr', module: 'reports' },
        { label: 'Attendance Reports', icon: 'fas fa-calendar-check', routerLink: '/reports/attendance', module: 'reports' },
        { label: 'Payroll Reports', icon: 'fas fa-money-bill', routerLink: '/reports/payroll', module: 'reports' },
      ]
    },
    { label: 'User Management', icon: 'fas fa-user-cog', routerLink: '/users', module: 'userManagement' },
    { label: 'Roles & Permissions', icon: 'fas fa-shield-alt', routerLink: '/roles', module: 'rolesPermissions' },
    { label: 'System Settings', icon: 'fas fa-cog', routerLink: '/settings', module: 'systemSettings' },
    { label: 'Audit Logs', icon: 'fas fa-history', routerLink: '/audit-logs', module: 'auditLogs' },
  ];

  private hrNavItems: NavItem[] = [
    { label: 'Dashboard', icon: 'fas fa-th-large', routerLink: '/dashboard', module: 'dashboard' },
    { label: 'Employees', icon: 'fas fa-users', routerLink: '/employees', module: 'employees' },
    { label: 'Departments', icon: 'fas fa-building', routerLink: '/departments', module: 'departments' },
    { label: 'Teams', icon: 'fas fa-user-friends', routerLink: '/teams', module: 'teams' },
    { label: 'Attendance', icon: 'fas fa-clock', routerLink: '/attendance', module: 'attendance' },
    { label: 'Leave Management', icon: 'fas fa-calendar-alt', routerLink: '/leave', module: 'leave' },
    { label: 'Shift Management', icon: 'fas fa-business-time', routerLink: '/shifts', module: 'shifts' },
    { label: 'Payroll', icon: 'fas fa-money-check-alt', routerLink: '/payroll', module: 'payroll' },
    { label: 'Recruitment', icon: 'fas fa-briefcase', routerLink: '/recruitment', module: 'recruitment' },
    { label: 'Onboarding', icon: 'fas fa-handshake', routerLink: '/onboarding', module: 'onboarding' },
    { label: 'Performance', icon: 'fas fa-chart-line', routerLink: '/performance', module: 'performance' },
    { label: 'Training', icon: 'fas fa-graduation-cap', routerLink: '/training', module: 'training' },
    { label: 'Documents', icon: 'fas fa-folder-open', routerLink: '/documents', module: 'documents' },
    { label: 'Announcements', icon: 'fas fa-bullhorn', routerLink: '/announcements', module: 'announcements' },
    { label: 'Notifications', icon: 'fas fa-bell', routerLink: '/notifications', module: 'notifications' },
    { label: 'HR Reports', icon: 'fas fa-chart-bar', routerLink: '/reports', module: 'reports' },
    { label: 'System Settings', icon: 'fas fa-cog', routerLink: '/settings', module: 'systemSettings' },
  ];

  private tlNavItems: NavItem[] = [
    { label: 'Dashboard', icon: 'fas fa-th-large', routerLink: '/dashboard', module: 'dashboard' },
    { label: 'My Team', icon: 'fas fa-users', routerLink: '/team', module: 'myTeam' },
    { label: 'Team Attendance', icon: 'fas fa-clock', routerLink: '/team/attendance', module: 'teamAttendance' },
    { label: 'Team Leave', icon: 'fas fa-calendar-alt', routerLink: '/team/leave', module: 'teamLeave' },
    { label: 'Team Tasks', icon: 'fas fa-tasks', routerLink: '/team/tasks', module: 'teamTasks' },
    { label: 'Team Performance', icon: 'fas fa-chart-line', routerLink: '/team/performance', module: 'teamPerformance' },
    { label: 'KPI', icon: 'fas fa-bullseye', routerLink: '/team/kpi', module: 'kpi' },
    { label: 'Team Reports', icon: 'fas fa-chart-bar', routerLink: '/team/reports', module: 'teamReports' },
    { label: 'Announcements', icon: 'fas fa-bullhorn', routerLink: '/announcements', module: 'announcements' },
    { label: 'Notifications', icon: 'fas fa-bell', routerLink: '/notifications', module: 'notifications' },
    { label: 'System Settings', icon: 'fas fa-cog', routerLink: '/settings', module: 'systemSettings' },
  ];

  private employeeNavItems: NavItem[] = [
    { label: 'Dashboard', icon: 'fas fa-th-large', routerLink: '/dashboard', module: 'dashboard' },
    { label: 'My Profile', icon: 'fas fa-user', routerLink: '/my-profile', module: 'myProfile' },
    { label: 'My Attendance', icon: 'fas fa-clock', routerLink: '/my-attendance', module: 'myAttendance' },
    { label: 'Check In / Out', icon: 'fas fa-sign-in-alt', routerLink: '/check-in-out', module: 'checkInOut' },
    { label: 'Break Tracker', icon: 'fas fa-coffee', routerLink: '/break-tracker', module: 'breakTracker' },
    { label: 'Daily Work Update', icon: 'fas fa-clipboard-list', routerLink: '/daily-work-update', module: 'dailyWorkUpdate' },
    { label: 'My Leave', icon: 'fas fa-calendar-alt', routerLink: '/my-leave', module: 'myLeave' },
    { label: 'Apply Leave', icon: 'fas fa-plus-circle', routerLink: '/apply-leave', module: 'applyLeave' },
    { label: 'My Payslips', icon: 'fas fa-file-invoice-dollar', routerLink: '/my-payslips', module: 'myPayslips' },
    { label: 'My Tasks', icon: 'fas fa-tasks', routerLink: '/my-tasks', module: 'myTasks' },
    { label: 'My Performance', icon: 'fas fa-star', routerLink: '/my-performance', module: 'myPerformance' },
    { label: 'My Documents', icon: 'fas fa-folder-open', routerLink: '/my-documents', module: 'myDocuments' },
    { label: 'Announcements', icon: 'fas fa-bullhorn', routerLink: '/announcements', module: 'announcements' },
    { label: 'Notifications', icon: 'fas fa-bell', routerLink: '/notifications', module: 'notifications' },
    { label: 'System Settings', icon: 'fas fa-cog', routerLink: '/settings', module: 'systemSettings' },
  ];

  getNavItems(role: UserRole): NavItem[] {
    switch (role) {
      case UserRole.ADMIN: return this.allNavItems;
      case UserRole.HR: return this.hrNavItems;
      case UserRole.TL: return this.tlNavItems;
      case UserRole.EMPLOYEE: return this.employeeNavItems;
      default: return [];
    }
  }
}
