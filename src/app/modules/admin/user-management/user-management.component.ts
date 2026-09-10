import { Component } from '@angular/core';
import { TableColumn } from '../../../core/models';

@Component({
  selector: 'app-admin-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class AdminUserManagementComponent {
  columns: TableColumn[] = [
    { key: 'username', label: 'Username', sortable: true },
    { key: 'name', label: 'Full Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'role', label: 'Role', sortable: true },
    { key: 'department', label: 'Department', sortable: true },
    { key: 'lastLogin', label: 'Last Login', sortable: true },
    { key: 'mfa', label: 'MFA' },
    { key: 'status', label: 'Status', type: 'status' }
  ];
  tableActions = [
    { label: 'Edit', icon: 'fas fa-edit', action: 'edit', color: '#f59e0b' },
    { label: 'Reset Password', icon: 'fas fa-key', action: 'reset', color: '#3b82f6' },
    { label: 'Delete', icon: 'fas fa-trash', action: 'delete', color: '#ef4444' }
  ];
  users = [
    { username: 'jsmith', name: 'John Smith', email: 'john@hrm.com', role: 'Super Admin', department: 'Engineering', lastLogin: '2024-12-19 09:15 AM', mfa: 'Yes', status: 'ACTIVE' },
    { username: 'sjohnson', name: 'Sarah Johnson', email: 'sarah@hrm.com', role: 'HR Admin', department: 'Human Resources', lastLogin: '2024-12-19 08:45 AM', mfa: 'Yes', status: 'ACTIVE' },
    { username: 'mchen', name: 'Michael Chen', email: 'michael@hrm.com', role: 'Department Manager', department: 'Engineering', lastLogin: '2024-12-19 09:30 AM', mfa: 'Yes', status: 'ACTIVE' },
    { username: 'edavis', name: 'Emily Davis', email: 'emily@hrm.com', role: 'Department Manager', department: 'Marketing', lastLogin: '2024-12-18 05:20 PM', mfa: 'No', status: 'ACTIVE' },
    { username: 'rwilson', name: 'Robert Wilson', email: 'robert@hrm.com', role: 'Finance Admin', department: 'Finance', lastLogin: '2024-12-19 09:00 AM', mfa: 'Yes', status: 'ACTIVE' },
    { username: 'landerson', name: 'Lisa Anderson', email: 'lisa@hrm.com', role: 'Team Lead', department: 'Design', lastLogin: '2024-12-18 04:55 PM', mfa: 'Yes', status: 'ACTIVE' },
    { username: 'dlee', name: 'David Lee', email: 'david@hrm.com', role: 'Employee', department: 'Engineering', lastLogin: '2024-12-17 03:10 PM', mfa: 'No', status: 'ACTIVE' },
    { username: 'jbrown', name: 'Jennifer Brown', email: 'jennifer@hrm.com', role: 'Employee', department: 'Sales', lastLogin: '2024-11-15 02:30 PM', mfa: 'No', status: 'INACTIVE' },
    { username: 'admin', name: 'System Admin', email: 'admin@hrm.com', role: 'Super Admin', department: 'IT', lastLogin: '2024-12-19 07:00 AM', mfa: 'Yes', status: 'ACTIVE' },
  ];

  onAction(event: { action: string; row: any }): void {
    console.log(event.action, event.row);
  }
}
