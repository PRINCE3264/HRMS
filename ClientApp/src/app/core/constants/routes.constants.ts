import { UserRole } from '../models';

/**
 * Top-level feature URLs that are already registered as static routes in
 * app-routing.module.ts. DynamicRouteService skips these so the DB-driven
 * routes never duplicate (or override) existing pages.
 */
export const STATIC_FEATURE_PATHS: string[] = [
  'dashboard',
  'employees',
  'departments',
  'designations',
  'branches',
  'teams',
  'projects',
  'employee-management',
  'tl-management',
  'hr-management',
  'reporting-hierarchy',
  'attendance',
  'attendance/corrections',
  'attendance/summary',
  'attendance/rules',
  'leave',
  'shifts',
  'payroll',
  'payroll/salary-structures',
  'payroll/reports',
  'recruitment',
  'onboarding',
  'performance',
  'training',
  'documents',
  'announcements',
  'reports',
  'users',
  'roles',
  'settings',
  'settings/company',
  'settings/email-sms',
  'settings/notifications',
  'audit-logs',
  'team',
  'team/attendance',
  'team/leave',
  'team/tasks',
  'team/projects',
  'team/performance',
  'team/kpi',
  'team/reports',
  'my-profile',
  'my-attendance',
  'check-in-out',
  'break-tracker',
  'daily-work-update',
  'my-leave',
  'apply-leave',
  'my-payslips',
  'my-tasks',
  'my-projects',
  'my-performance',
  'my-documents',
  'notifications'
];

export const ROLE_SCOPE_MODULES: Record<UserRole, string> = {
  [UserRole.ADMIN]: 'admin',
  [UserRole.HR]: 'hr',
  [UserRole.TL]: 'tl',
  [UserRole.EMPLOYEE]: 'employee'
};