import { Component } from '@angular/core';
import { TableColumn } from '../../../core/models';

@Component({
  selector: 'app-admin-leave',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.scss']
})
export class AdminLeaveComponent {
  columns: TableColumn[] = [
    { key: 'employeeId', label: 'ID', sortable: true, width: '100px' },
    { key: 'name', label: 'Employee', sortable: true },
    { key: 'leaveType', label: 'Leave Type', sortable: true },
    { key: 'fromDate', label: 'From', type: 'date', sortable: true },
    { key: 'toDate', label: 'To', type: 'date', sortable: true },
    { key: 'days', label: 'Days', sortable: true },
    { key: 'reason', label: 'Reason' },
    { key: 'status', label: 'Status', type: 'status' }
  ];
  tableActions = [
    { label: 'Approve', icon: 'fas fa-check', action: 'approve', color: '#10b981' },
    { label: 'Reject', icon: 'fas fa-times', action: 'reject', color: '#ef4444' },
    { label: 'View', icon: 'fas fa-eye', action: 'view', color: '#3b82f6' }
  ];
  leaveRequests = [
    { employeeId: 'EMP004', name: 'Emily Davis', leaveType: 'Sick Leave', fromDate: '2024-12-20', toDate: '2024-12-22', days: 3, reason: 'Medical appointment and recovery', status: 'PENDING' },
    { employeeId: 'EMP007', name: 'David Lee', leaveType: 'Annual Leave', fromDate: '2024-12-23', toDate: '2024-12-31', days: 7, reason: 'Holiday vacation with family', status: 'PENDING' },
    { employeeId: 'EMP011', name: 'Karen White', leaveType: 'Personal Leave', fromDate: '2024-12-20', toDate: '2024-12-20', days: 1, reason: 'Personal matters to attend to', status: 'APPROVED' },
    { employeeId: 'EMP015', name: 'Tom Harris', leaveType: 'Annual Leave', fromDate: '2024-12-26', toDate: '2024-12-27', days: 2, reason: 'Year-end holidays', status: 'APPROVED' },
    { employeeId: 'EMP008', name: 'Jennifer Brown', leaveType: 'Maternity Leave', fromDate: '2024-12-01', toDate: '2025-03-01', days: 60, reason: 'Maternity leave', status: 'APPROVED' },
    { employeeId: 'EMP019', name: 'Alex Turner', leaveType: 'Sick Leave', fromDate: '2024-12-18', toDate: '2024-12-19', days: 2, reason: 'Flu symptoms', status: 'APPROVED' },
    { employeeId: 'EMP022', name: 'Rachel Green', leaveType: 'Annual Leave', fromDate: '2024-12-24', toDate: '2024-12-25', days: 2, reason: 'Christmas holiday', status: 'REJECTED' },
    { employeeId: 'EMP003', name: 'Michael Chen', leaveType: 'Bereavement', fromDate: '2024-12-15', toDate: '2024-12-17', days: 3, reason: 'Family emergency', status: 'APPROVED' },
  ];

  onAction(event: { action: string; row: any }): void {
    console.log(event.action, event.row);
  }
}
