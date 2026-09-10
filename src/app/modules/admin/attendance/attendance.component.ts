import { Component } from '@angular/core';
import { TableColumn } from '../../../core/models';

@Component({
  selector: 'app-admin-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AdminAttendanceComponent {
  columns: TableColumn[] = [
    { key: 'employeeId', label: 'ID', sortable: true, width: '100px' },
    { key: 'name', label: 'Employee Name', sortable: true },
    { key: 'department', label: 'Department', sortable: true },
    { key: 'date', label: 'Date', type: 'date', sortable: true },
    { key: 'clockIn', label: 'Clock In', sortable: true },
    { key: 'clockOut', label: 'Clock Out', sortable: true },
    { key: 'hoursWorked', label: 'Hours', sortable: true },
    { key: 'status', label: 'Status', type: 'status' }
  ];
  tableActions = [
    { label: 'View', icon: 'fas fa-eye', action: 'view', color: '#3b82f6' },
    { label: 'Edit', icon: 'fas fa-edit', action: 'edit', color: '#f59e0b' }
  ];
  attendanceRecords = [
    { employeeId: 'EMP001', name: 'John Smith', department: 'Engineering', date: '2024-12-19', clockIn: '09:00 AM', clockOut: '06:15 PM', hoursWorked: '9.25', status: 'PRESENT' },
    { employeeId: 'EMP002', name: 'Sarah Johnson', department: 'HR', date: '2024-12-19', clockIn: '08:45 AM', clockOut: '05:30 PM', hoursWorked: '8.75', status: 'PRESENT' },
    { employeeId: 'EMP003', name: 'Michael Chen', department: 'Engineering', date: '2024-12-19', clockIn: '09:30 AM', clockOut: '07:00 PM', hoursWorked: '9.50', status: 'LATE' },
    { employeeId: 'EMP004', name: 'Emily Davis', department: 'Marketing', date: '2024-12-19', clockIn: '—', clockOut: '—', hoursWorked: '—', status: 'ON_LEAVE' },
    { employeeId: 'EMP005', name: 'Robert Wilson', department: 'Finance', date: '2024-12-19', clockIn: '09:02 AM', clockOut: '06:05 PM', hoursWorked: '9.05', status: 'PRESENT' },
    { employeeId: 'EMP006', name: 'Lisa Anderson', department: 'Design', date: '2024-12-19', clockIn: '08:55 AM', clockOut: '05:45 PM', hoursWorked: '8.83', status: 'PRESENT' },
    { employeeId: 'EMP007', name: 'David Lee', department: 'Engineering', date: '2024-12-19', clockIn: '—', clockOut: '—', hoursWorked: '—', status: 'ABSENT' },
    { employeeId: 'EMP008', name: 'Jennifer Brown', department: 'Sales', date: '2024-12-19', clockIn: '10:15 AM', clockOut: '07:30 PM', hoursWorked: '9.25', status: 'LATE' },
    { employeeId: 'EMP009', name: 'Chris Martinez', department: 'Engineering', date: '2024-12-19', clockIn: '08:30 AM', clockOut: '04:30 PM', hoursWorked: '8.00', status: 'WFH' },
    { employeeId: 'EMP010', name: 'Amanda Taylor', department: 'Marketing', date: '2024-12-19', clockIn: '09:05 AM', clockOut: '06:10 PM', hoursWorked: '9.08', status: 'PRESENT' },
  ];

  onAction(event: { action: string; row: any }): void {
    console.log(event.action, event.row);
  }
}
