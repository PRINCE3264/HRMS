import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-roles-permissions',
  templateUrl: './roles-permissions.component.html',
  styleUrls: ['./roles-permissions.component.scss']
})
export class AdminRolesPermissionsComponent {
  roles = [
    {
      name: 'Super Admin', description: 'Full system access with all administrative privileges and configuration control.',
      userCount: 2, level: 10, isDefault: false, color: '#ef4444', icon: 'fas fa-crown',
      permissions: [
        { label: 'Manage Users', granted: true }, { label: 'Manage Roles', granted: true },
        { label: 'System Settings', granted: true }, { label: 'View Reports', granted: true },
        { label: 'Manage Employees', granted: true }, { label: 'Payroll', granted: true },
        { label: 'Delete Data', granted: true }, { label: 'Audit Logs', granted: true }
      ]
    },
    {
      name: 'HR Admin', description: 'Human resources administration including employee management, leave, and payroll.',
      userCount: 4, level: 8, isDefault: false, color: '#6366f1', icon: 'fas fa-user-shield',
      permissions: [
        { label: 'Manage Users', granted: false }, { label: 'Manage Roles', granted: false },
        { label: 'System Settings', granted: false }, { label: 'View Reports', granted: true },
        { label: 'Manage Employees', granted: true }, { label: 'Payroll', granted: true },
        { label: 'Delete Data', granted: false }, { label: 'Audit Logs', granted: true }
      ]
    },
    {
      name: 'Department Manager', description: 'Manage team members, approve leaves, and view department reports.',
      userCount: 8, level: 6, isDefault: false, color: '#8b5cf6', icon: 'fas fa-user-tie',
      permissions: [
        { label: 'Manage Users', granted: false }, { label: 'Manage Roles', granted: false },
        { label: 'System Settings', granted: false }, { label: 'View Reports', granted: true },
        { label: 'Manage Employees', granted: false }, { label: 'Payroll', granted: false },
        { label: 'Delete Data', granted: false }, { label: 'Audit Logs', granted: false }
      ]
    },
    {
      name: 'Team Lead', description: 'Limited management access for team coordination and task assignment.',
      userCount: 12, level: 4, isDefault: false, color: '#06b6d4', icon: 'fas fa-users-cog',
      permissions: [
        { label: 'Manage Users', granted: false }, { label: 'Manage Roles', granted: false },
        { label: 'System Settings', granted: false }, { label: 'View Reports', granted: false },
        { label: 'Manage Employees', granted: false }, { label: 'Payroll', granted: false },
        { label: 'Delete Data', granted: false }, { label: 'Audit Logs', granted: false }
      ]
    },
    {
      name: 'Employee', description: 'Basic employee access for self-service portal and personal information management.',
      userCount: 185, level: 1, isDefault: true, color: '#10b981', icon: 'fas fa-user',
      permissions: [
        { label: 'Manage Users', granted: false }, { label: 'Manage Roles', granted: false },
        { label: 'System Settings', granted: false }, { label: 'View Reports', granted: false },
        { label: 'Manage Employees', granted: false }, { label: 'Payroll', granted: false },
        { label: 'Delete Data', granted: false }, { label: 'Audit Logs', granted: false }
      ]
    },
    {
      name: 'Finance Admin', description: 'Access to payroll, financial reports, and compensation management.',
      userCount: 3, level: 7, isDefault: false, color: '#f59e0b', icon: 'fas fa-calculator',
      permissions: [
        { label: 'Manage Users', granted: false }, { label: 'Manage Roles', granted: false },
        { label: 'System Settings', granted: false }, { label: 'View Reports', granted: true },
        { label: 'Manage Employees', granted: false }, { label: 'Payroll', granted: true },
        { label: 'Delete Data', granted: false }, { label: 'Audit Logs', granted: false }
      ]
    },
  ];
}
