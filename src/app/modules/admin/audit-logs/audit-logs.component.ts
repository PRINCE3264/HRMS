import { Component } from '@angular/core';
import { TableColumn } from '../../../core/models';

@Component({
  selector: 'app-admin-audit-logs',
  templateUrl: './audit-logs.component.html',
  styleUrls: ['./audit-logs.component.scss']
})
export class AdminAuditLogsComponent {
  columns: TableColumn[] = [
    { key: 'timestamp', label: 'Timestamp', sortable: true, width: '180px' },
    { key: 'user', label: 'User', sortable: true },
    { key: 'module', label: 'Module', sortable: true },
    { key: 'action', label: 'Action', sortable: true },
    { key: 'description', label: 'Description' },
    { key: 'ipAddress', label: 'IP Address' },
    { key: 'status', label: 'Status', type: 'status' }
  ];
  tableActions = [
    { label: 'Details', icon: 'fas fa-info-circle', action: 'details', color: '#3b82f6' }
  ];
  logs = [
    { timestamp: '2024-12-19 09:30:15', user: 'jsmith', module: 'Authentication', action: 'LOGIN', description: 'Successful login', ipAddress: '192.168.1.100', status: 'SUCCESS' },
    { timestamp: '2024-12-19 09:28:42', user: 'sjohnson', module: 'Employee', action: 'CREATE', description: 'Created new employee: Nathan Brooks (EMP045)', ipAddress: '192.168.1.105', status: 'SUCCESS' },
    { timestamp: '2024-12-19 09:15:20', user: 'mchen', module: 'Leave', action: 'UPDATE', description: 'Approved leave request #LR-1042 for Emily Davis', ipAddress: '192.168.1.110', status: 'SUCCESS' },
    { timestamp: '2024-12-19 08:55:00', user: 'admin', module: 'Settings', action: 'UPDATE', description: 'Updated attendance grace period from 10 to 15 minutes', ipAddress: '10.0.0.1', status: 'SUCCESS' },
    { timestamp: '2024-12-19 08:45:33', user: 'rwilson', module: 'Payroll', action: 'CREATE', description: 'Processed December 2024 payroll for 231 employees', ipAddress: '192.168.1.120', status: 'SUCCESS' },
    { timestamp: '2024-12-19 08:30:10', user: 'unknown', module: 'Authentication', action: 'LOGIN', description: 'Failed login attempt - invalid credentials', ipAddress: '203.0.113.42', status: 'FAILED' },
    { timestamp: '2024-12-19 08:15:45', user: 'admin', module: 'User', action: 'UPDATE', description: 'Changed role for user dlee from Employee to Team Lead', ipAddress: '10.0.0.1', status: 'SUCCESS' },
    { timestamp: '2024-12-18 17:30:00', user: 'sjohnson', module: 'Documents', action: 'CREATE', description: 'Uploaded document: Work From Home Policy.pdf', ipAddress: '192.168.1.105', status: 'SUCCESS' },
    { timestamp: '2024-12-18 16:45:20', user: 'jsmith', module: 'Employee', action: 'UPDATE', description: 'Updated department assignment for Lisa Anderson from Design to Engineering', ipAddress: '192.168.1.100', status: 'SUCCESS' },
    { timestamp: '2024-12-18 15:20:10', user: 'edavis', module: 'Leave', action: 'CREATE', description: 'Submitted leave request #LR-1043 (Sick Leave, Dec 20-22)', ipAddress: '192.168.1.130', status: 'SUCCESS' },
    { timestamp: '2024-12-18 14:00:00', user: 'admin', module: 'System', action: 'UPDATE', description: 'Database backup completed successfully', ipAddress: '10.0.0.1', status: 'SUCCESS' },
    { timestamp: '2024-12-18 12:15:30', user: 'mchen', module: 'Performance', action: 'CREATE', description: 'Submitted Q4 2024 review for John Smith', ipAddress: '192.168.1.110', status: 'SUCCESS' },
    { timestamp: '2024-12-18 11:00:00', user: 'admin', module: 'Employee', action: 'DELETE', description: 'Deactivated employee account: Former Temp (EMP040)', ipAddress: '10.0.0.1', status: 'SUCCESS' },
  ];

  onAction(event: { action: string; row: any }): void {
    console.log(event.action, event.row);
  }
}
