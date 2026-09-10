import { Component } from '@angular/core';
import { TableColumn } from '../../../core/models';

@Component({
  selector: 'app-admin-shift',
  templateUrl: './shift-management.component.html',
  styleUrls: ['./shift-management.component.scss']
})
export class AdminShiftComponent {
  showAdd = false;
  shiftTypes = [
    { name: 'Morning Shift', startTime: '06:00 AM', endTime: '02:00 PM', duration: 8, assignedEmployees: 45, color: '#f59e0b' },
    { name: 'General Shift', startTime: '09:00 AM', endTime: '06:00 PM', duration: 9, assignedEmployees: 152, color: '#6366f1' },
    { name: 'Evening Shift', startTime: '02:00 PM', endTime: '10:00 PM', duration: 8, assignedEmployees: 32, color: '#8b5cf6' },
    { name: 'Night Shift', startTime: '10:00 PM', endTime: '06:00 AM', duration: 8, assignedEmployees: 12, color: '#1e293b' },
  ];
  columns: TableColumn[] = [
    { key: 'employeeId', label: 'ID', sortable: true, width: '100px' },
    { key: 'name', label: 'Employee', sortable: true },
    { key: 'department', label: 'Department', sortable: true },
    { key: 'shiftName', label: 'Shift', sortable: true },
    { key: 'startTime', label: 'Start Time', sortable: true },
    { key: 'endTime', label: 'End Time', sortable: true },
    { key: 'weekOff', label: 'Week Off' },
    { key: 'effectiveFrom', label: 'Effective From', type: 'date', sortable: true },
    { key: 'status', label: 'Status', type: 'status' }
  ];
  tableActions = [
    { label: 'Edit', icon: 'fas fa-edit', action: 'edit', color: '#f59e0b' },
    { label: 'Remove', icon: 'fas fa-trash', action: 'delete', color: '#ef4444' }
  ];
  shiftAssignments = [
    { employeeId: 'EMP001', name: 'John Smith', department: 'Engineering', shiftName: 'General Shift', startTime: '09:00 AM', endTime: '06:00 PM', weekOff: 'Sat, Sun', effectiveFrom: '2024-01-01', status: 'ACTIVE' },
    { employeeId: 'EMP002', name: 'Sarah Johnson', department: 'HR', shiftName: 'General Shift', startTime: '09:00 AM', endTime: '06:00 PM', weekOff: 'Sat, Sun', effectiveFrom: '2024-01-01', status: 'ACTIVE' },
    { employeeId: 'EMP003', name: 'Michael Chen', department: 'Engineering', shiftName: 'General Shift', startTime: '09:00 AM', endTime: '06:00 PM', weekOff: 'Sat, Sun', effectiveFrom: '2024-01-01', status: 'ACTIVE' },
    { employeeId: 'EMP012', name: 'Kevin Park', department: 'Engineering', shiftName: 'Evening Shift', startTime: '02:00 PM', endTime: '10:00 PM', weekOff: 'Wed, Thu', effectiveFrom: '2024-06-01', status: 'ACTIVE' },
    { employeeId: 'EMP013', name: 'Natalie Ross', department: 'Finance', shiftName: 'Morning Shift', startTime: '06:00 AM', endTime: '02:00 PM', weekOff: 'Fri, Sat', effectiveFrom: '2024-03-15', status: 'ACTIVE' },
    { employeeId: 'EMP014', name: 'Oscar Hunt', department: 'Sales', shiftName: 'Night Shift', startTime: '10:00 PM', endTime: '06:00 AM', weekOff: 'Sun, Mon', effectiveFrom: '2024-09-01', status: 'ACTIVE' },
    { employeeId: 'EMP009', name: 'Chris Martinez', department: 'Engineering', shiftName: 'General Shift', startTime: '09:00 AM', endTime: '06:00 PM', weekOff: 'Sat, Sun', effectiveFrom: '2024-01-01', status: 'INACTIVE' },
  ];

  onAction(event: { action: string; row: any }): void {
    console.log(event.action, event.row);
  }
}
