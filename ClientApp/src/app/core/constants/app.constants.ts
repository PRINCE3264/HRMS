import { UserRole, PermissionAction } from '../models';

export const APP_NAME = 'HRM Pro';
export const API_BASE_URL = 'http://localhost:3000/api';

export const ROLE_PERMISSIONS: Record<UserRole, Record<string, PermissionAction[]>> = {
  [UserRole.ADMIN]: {
    dashboard: [PermissionAction.VIEW],
    employees: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE, PermissionAction.DELETE, PermissionAction.EXPORT],
    departments: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE, PermissionAction.DELETE],
    designations: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE, PermissionAction.DELETE],
    branches: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE, PermissionAction.DELETE],
    teams: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE, PermissionAction.DELETE],
    attendance: [PermissionAction.VIEW, PermissionAction.UPDATE, PermissionAction.EXPORT],
    leave: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE, PermissionAction.DELETE, PermissionAction.APPROVE, PermissionAction.EXPORT],
    shifts: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE, PermissionAction.DELETE],
    payroll: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE, PermissionAction.APPROVE, PermissionAction.EXPORT],
    recruitment: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE, PermissionAction.DELETE],
    onboarding: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE, PermissionAction.DELETE],
    performance: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE, PermissionAction.DELETE, PermissionAction.EXPORT],
    training: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE, PermissionAction.DELETE],
    documents: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE, PermissionAction.DELETE],
    announcements: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE, PermissionAction.DELETE],
    reports: [PermissionAction.VIEW, PermissionAction.EXPORT],
    userManagement: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE, PermissionAction.DELETE],
    rolesPermissions: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE, PermissionAction.DELETE],
    systemSettings: [PermissionAction.VIEW, PermissionAction.UPDATE],
    auditLogs: [PermissionAction.VIEW, PermissionAction.EXPORT],
  },
  [UserRole.HR]: {
    dashboard: [PermissionAction.VIEW],
    employees: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE, PermissionAction.EXPORT],
    departments: [PermissionAction.VIEW],
    designations: [PermissionAction.VIEW],
    branches: [PermissionAction.VIEW],
    teams: [PermissionAction.VIEW],
    attendance: [PermissionAction.VIEW, PermissionAction.UPDATE, PermissionAction.EXPORT],
    leave: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE, PermissionAction.APPROVE, PermissionAction.EXPORT],
    shifts: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE],
    payroll: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE, PermissionAction.EXPORT],
    recruitment: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE, PermissionAction.DELETE],
    onboarding: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE],
    performance: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE, PermissionAction.EXPORT],
    training: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE],
    documents: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE, PermissionAction.DELETE],
    announcements: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE],
    reports: [PermissionAction.VIEW, PermissionAction.EXPORT],
  },
  [UserRole.TL]: {
    dashboard: [PermissionAction.VIEW],
    myTeam: [PermissionAction.VIEW],
    teamAttendance: [PermissionAction.VIEW],
    teamLeave: [PermissionAction.VIEW, PermissionAction.APPROVE],
    teamTasks: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE, PermissionAction.DELETE],
    teamPerformance: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE],
    kpi: [PermissionAction.VIEW, PermissionAction.CREATE, PermissionAction.UPDATE],
    teamReports: [PermissionAction.VIEW, PermissionAction.EXPORT],
    announcements: [PermissionAction.VIEW],
  },
  [UserRole.EMPLOYEE]: {
    dashboard: [PermissionAction.VIEW],
    myProfile: [PermissionAction.VIEW, PermissionAction.UPDATE],
    myAttendance: [PermissionAction.VIEW],
    checkInOut: [PermissionAction.CREATE],
    myLeave: [PermissionAction.VIEW],
    applyLeave: [PermissionAction.CREATE],
    myPayslips: [PermissionAction.VIEW, PermissionAction.EXPORT],
    myTasks: [PermissionAction.VIEW, PermissionAction.UPDATE],
    myPerformance: [PermissionAction.VIEW],
    myDocuments: [PermissionAction.VIEW, PermissionAction.CREATE],
    announcements: [PermissionAction.VIEW],
    notifications: [PermissionAction.VIEW],
  }
};

export const ROLE_LABELS: Record<UserRole, string> = {
  [UserRole.ADMIN]: 'Administrator',
  [UserRole.HR]: 'Human Resources',
  [UserRole.TL]: 'Team Lead',
  [UserRole.EMPLOYEE]: 'Employee'
};

export const ROLE_COLORS: Record<UserRole, string> = {
  [UserRole.ADMIN]: '#6366f1',
  [UserRole.HR]: '#8b5cf6',
  [UserRole.TL]: '#06b6d4',
  [UserRole.EMPLOYEE]: '#10b981'
};

export const STATUS_COLORS: Record<string, string> = {
  'ACTIVE': '#10b981',
  'INACTIVE': '#ef4444',
  'PENDING': '#f59e0b',
  'APPROVED': '#10b981',
  'REJECTED': '#ef4444',
  'PRESENT': '#10b981',
  'ABSENT': '#ef4444',
  'LATE': '#f59e0b',
  'HALF_DAY': '#fb923c',
  'ON_LEAVE': '#8b5cf6',
  'HOLIDAY': '#06b6d4',
  'PAID': '#10b981',
  'DRAFT': '#94a3b8',
  'PROCESSED': '#3b82f6',
  'COMPLETED': '#10b981',
  'IN_PROGRESS': '#3b82f6',
  'TODO': '#94a3b8',
  'BLOCKED': '#ef4444',
  'NOT_STARTED': '#94a3b8',
  'ON_HOLD': '#f59e0b',
  'CANCELLED': '#ef4444',
  'LOW': '#94a3b8',
  'MEDIUM': '#3b82f6',
  'HIGH': '#f59e0b',
  'CRITICAL': '#ef4444'
};
