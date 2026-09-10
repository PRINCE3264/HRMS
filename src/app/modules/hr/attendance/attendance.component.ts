import { Component } from '@angular/core';

@Component({
  selector: 'app-hr-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class HrAttendanceComponent {
  attendance = [
    { employeeId: 'EMP001', name: 'John Smith', department: 'Engineering', clockIn: '08:55', clockOut: '17:30', hours: '8.5h', status: 'Present', color: '#6366f1' },
    { employeeId: 'EMP002', name: 'Emily Davis', department: 'Marketing', clockIn: '09:12', clockOut: '18:00', hours: '8.8h', status: 'Late', color: '#10b981' },
    { employeeId: 'EMP003', name: 'Robert Wilson', department: 'Finance', clockIn: '08:45', clockOut: '17:15', hours: '8.5h', status: 'Present', color: '#f59e0b' },
    { employeeId: 'EMP004', name: 'Lisa Anderson', department: 'Design', clockIn: '09:30', clockOut: null, hours: null, status: 'Late', color: '#ef4444' },
    { employeeId: 'EMP005', name: 'James Brown', department: 'Engineering', clockIn: null, clockOut: null, hours: null, status: 'Absent', color: '#06b6d4' },
    { employeeId: 'EMP006', name: 'Sarah Johnson', department: 'HR', clockIn: '08:30', clockOut: '17:00', hours: '8.5h', status: 'Present', color: '#8b5cf6' },
    { employeeId: 'EMP007', name: 'Michael Chen', department: 'Operations', clockIn: null, clockOut: null, hours: null, status: 'Work From Home', color: '#ec4899' },
    { employeeId: 'EMP008', name: 'David Lee', department: 'Finance', clockIn: null, clockOut: null, hours: null, status: 'On Leave', color: '#14b8a6' },
    { employeeId: 'EMP009', name: 'Jessica Martinez', department: 'Marketing', clockIn: '09:00', clockOut: '17:45', hours: '8.75h', status: 'Present', color: '#f97316' },
    { employeeId: 'EMP010', name: 'Daniel Kim', department: 'Engineering', clockIn: null, clockOut: null, hours: null, status: 'Absent', color: '#64748b' },
  ];
}
