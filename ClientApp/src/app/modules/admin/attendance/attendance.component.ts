import { Component, OnInit } from '@angular/core';
import { AttendanceService, ToastService } from '../../../core/services';
import { TableColumn } from '../../../core/models';

@Component({
  selector: 'app-admin-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AdminAttendanceComponent implements OnInit {
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
  attendanceRecords: any[] = [];

  showCorrection = false;
  correctionForm = {
    employeeId: '',
    date: '',
    checkIn: '',
    checkOut: '',
    reason: ''
  };

  constructor(private attendanceService: AttendanceService, private toast: ToastService) {}

  ngOnInit(): void {
    this.loadRecords();
  }

  loadRecords(): void {
    this.attendanceService.getRecords({ page: 1, pageSize: 50 }).subscribe({
      next: (res) => this.attendanceRecords = res.items.map((a: any) => ({
        employeeId: a.employeeId,
        name: a.employeeName,
        department: '',
        date: a.date,
        clockIn: a.checkIn || '—',
        clockOut: a.checkOut || '—',
        hoursWorked: a.workHours ? String(a.workHours) : '—',
        status: a.status
      })),
      error: () => this.toast.error('Failed to load attendance records')
    });
  }

  onAction(event: { action: string; row: any }): void {
    if (event.action === 'edit') {
      this.correctionForm = {
        employeeId: event.row.employeeId,
        date: String(event.row.date).slice(0, 10),
        checkIn: '',
        checkOut: '',
        reason: ''
      };
      this.showCorrection = true;
    }
  }

  submitCorrection(): void {
    this.attendanceService.requestCorrection(this.correctionForm).subscribe({
      next: () => {
        this.toast.success('Correction request submitted for approval');
        this.showCorrection = false;
      },
      error: () => this.toast.error('Failed to submit correction request')
    });
  }
}
