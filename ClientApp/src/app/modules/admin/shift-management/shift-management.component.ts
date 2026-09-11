import { Component, OnInit } from '@angular/core';
import { AttendanceService, ToastService } from '../../../core/services';
import { TableColumn } from '../../../core/models';

@Component({
  selector: 'app-admin-shift',
  templateUrl: './shift-management.component.html',
  styleUrls: ['./shift-management.component.scss']
})
export class AdminShiftComponent implements OnInit {
  showAdd = false;
  shiftTypes: any[] = [];
  columns: TableColumn[] = [
    { key: 'employeeId', label: 'ID', sortable: true, width: '100px' },
    { key: 'name', label: 'Employee', sortable: true },
    { key: 'department', label: 'Department', sortable: true },
    { key: 'shiftName', label: 'Shift', sortable: true },
    { key: 'effectiveFrom', label: 'Effective From', type: 'date', sortable: true },
    { key: 'status', label: 'Status', type: 'status' }
  ];
  tableActions = [
    { label: 'Edit', icon: 'fas fa-edit', action: 'edit', color: '#f59e0b' },
    { label: 'Remove', icon: 'fas fa-trash', action: 'delete', color: '#ef4444' }
  ];
  shiftAssignments: any[] = [];

  private shiftColors = ['#f59e0b', '#6366f1', '#8b5cf6', '#1e293b'];

  constructor(
    private attendanceService: AttendanceService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadShifts();
    this.loadAssignments();
  }

  loadShifts(): void {
    this.attendanceService.getShifts().subscribe({
      next: (data) => this.shiftTypes = data.map((s: any, i: number) => ({
        name: s.name,
        startTime: s.startTime,
        endTime: s.endTime,
        duration: this.calcDuration(s.startTime, s.endTime),
        assignedEmployees: 0,
        color: this.shiftColors[i % this.shiftColors.length]
      })),
      error: () => this.toast.error('Failed to load shifts')
    });
  }

  loadAssignments(): void {
    this.attendanceService.getAssignments().subscribe({
      next: (data) => this.shiftAssignments = data.map((a: any) => ({
        employeeId: a.employeeId,
        name: a.employeeName,
        department: '',
        shiftName: a.shiftName,
        startTime: '',
        endTime: '',
        weekOff: '',
        effectiveFrom: a.startDate,
        status: 'ACTIVE'
      })),
      error: () => this.toast.error('Failed to load shift assignments')
    });
  }

  private calcDuration(start: string, end: string): number {
    try {
      const [sh, sm] = start.split(':').map(Number);
      const [eh, em] = end.split(':').map(Number);
      let diff = (eh * 60 + em) - (sh * 60 + sm);
      if (diff < 0) diff += 24 * 60;
      return Math.round(diff / 60);
    } catch {
      return 8;
    }
  }

  onAction(event: { action: string; row: any }): void {
    console.log(event.action, event.row);
  }
}
