import { Component, OnInit } from '@angular/core';
import { AttendanceService, ToastService } from '../../../core/services';
import { TableColumn, AttendanceSummary } from '../../../core/models';

@Component({
  selector: 'app-admin-attendance-summary',
  templateUrl: './attendance-summary.component.html',
  styleUrls: ['./attendance-summary.component.scss']
})
export class AdminAttendanceSummaryComponent implements OnInit {
  columns: TableColumn[] = [
    { key: 'employeeCode', label: 'Code', width: '100px' },
    { key: 'employeeName', label: 'Employee', sortable: true },
    { key: 'presentDays', label: 'Present', sortable: true },
    { key: 'absentDays', label: 'Absent', sortable: true },
    { key: 'lateDays', label: 'Late', sortable: true },
    { key: 'earlyDays', label: 'Early', sortable: true },
    { key: 'leaveDays', label: 'Leaves', sortable: true },
    { key: 'totalWorkHours', label: 'Work Hours', sortable: true },
    { key: 'totalOvertime', label: 'Overtime', sortable: true },
    { key: 'attendancePercent', label: 'Attendance %', sortable: true }
  ];

  startDate: string;
  endDate: string;
  summary: AttendanceSummary[] = [];
  lateColumns: TableColumn[] = [
    { key: 'employeeName', label: 'Employee', sortable: true },
    { key: 'date', label: 'Date', type: 'date', sortable: true },
    { key: 'checkIn', label: 'Check In', sortable: true },
    { key: 'workHours', label: 'Hours', sortable: true }
  ];
  lateArrivals: any[] = [];
  loading = false;

  constructor(private attendanceService: AttendanceService, private toast: ToastService) {
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    this.startDate = this.toISODate(firstDay);
    this.endDate = this.toISODate(today);
  }

  ngOnInit(): void {
    this.loadSummary();
    this.loadLateArrivals();
  }

  loadSummary(): void {
    this.loading = true;
    this.attendanceService.getSummary({ startDate: this.startDate, endDate: this.endDate }).subscribe({
      next: (data) => { this.summary = data; this.loading = false; },
      error: () => { this.loading = false; this.toast.error('Failed to load attendance summary'); }
    });
  }

  loadLateArrivals(): void {
    this.attendanceService.getLateArrivals({ from: this.startDate, to: this.endDate, page: 1, pageSize: 20 }).subscribe({
      next: (res) => this.lateArrivals = res.items,
      error: () => this.toast.error('Failed to load late arrivals')
    });
  }

  private toISODate(d: Date): string {
    return d.toISOString().slice(0, 10);
  }
}