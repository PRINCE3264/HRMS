import { Component, OnInit } from '@angular/core';
import { AttendanceService, EmployeeService, ToastService } from '../../../core/services';
import { TableColumn, AttendanceCorrection } from '../../../core/models';

@Component({
  selector: 'app-admin-attendance-corrections',
  templateUrl: './attendance-corrections.component.html',
  styleUrls: ['./attendance-corrections.component.scss']
})
export class AdminAttendanceCorrectionsComponent implements OnInit {
  columns: TableColumn[] = [
    { key: 'employeeCode', label: 'Code', width: '100px' },
    { key: 'employeeName', label: 'Employee', sortable: true },
    { key: 'date', label: 'Date', type: 'date', sortable: true },
    { key: 'originalCheckIn', label: 'In (Original)', sortable: true },
    { key: 'originalCheckOut', label: 'Out (Original)', sortable: true },
    { key: 'correctedCheckIn', label: 'In (Corrected)', sortable: true },
    { key: 'correctedCheckOut', label: 'Out (Corrected)', sortable: true },
    { key: 'status', label: 'Status', type: 'status' }
  ];
  tableActions = [
    { label: 'Approve', icon: 'fas fa-check', action: 'approve', color: '#10b981' },
    { label: 'Reject', icon: 'fas fa-times', action: 'reject', color: '#ef4444' }
  ];

  corrections: AttendanceCorrection[] = [];
  employees: any[] = [];
  total = 0;
  page = 1;
  pageSize = 10;
  statusFilter = '';

  showForm = false;
  form = {
    employeeId: '',
    date: new Date().toISOString().slice(0, 10),
    checkIn: '',
    checkOut: '',
    reason: ''
  };

  constructor(
    private attendanceService: AttendanceService,
    private employeeService: EmployeeService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadCorrections();
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => this.employees = data,
      error: () => {}
    });
  }

  loadCorrections(): void {
    this.attendanceService.getCorrections({ page: this.page, pageSize: this.pageSize, status: this.statusFilter || undefined }).subscribe({
      next: (res) => {
        this.corrections = res.items;
        this.total = res.total;
      },
      error: () => this.toast.error('Failed to load corrections')
    });
  }

  onFilterChange(): void {
    this.page = 1;
    this.loadCorrections();
  }

  onAction(event: { action: string; row: AttendanceCorrection }): void {
    if (event.action === 'approve') {
      this.attendanceService.reviewCorrection(event.row.id, { status: 'APPROVED' }).subscribe({
        next: () => { this.toast.success('Correction approved'); this.loadCorrections(); },
        error: () => this.toast.error('Failed to approve correction')
      });
    } else if (event.action === 'reject') {
      const reason = prompt('Rejection reason (optional):') ?? '';
      this.attendanceService.reviewCorrection(event.row.id, { status: 'REJECTED', rejectionReason: reason }).subscribe({
        next: () => { this.toast.success('Correction rejected'); this.loadCorrections(); },
        error: () => this.toast.error('Failed to reject correction')
      });
    }
  }

  submitCorrection(): void {
    if (!this.form.employeeId || !this.form.date) {
      this.toast.error('Employee and date are required');
      return;
    }
    this.attendanceService.requestCorrection({
      employeeId: this.form.employeeId,
      date: this.form.date,
      correctedCheckIn: this.form.checkIn || undefined,
      correctedCheckOut: this.form.checkOut || undefined,
      reason: this.form.reason
    }).subscribe({
      next: () => {
        this.toast.success('Attendance correction submitted');
        this.showForm = false;
        this.form = { employeeId: '', date: new Date().toISOString().slice(0, 10), checkIn: '', checkOut: '', reason: '' };
        this.loadCorrections();
      },
      error: () => this.toast.error('Failed to submit correction')
    });
  }
}