import { Component, OnInit } from '@angular/core';
import { AttendanceService, ToastService } from '../../../core/services';
import { TableColumn, AttendanceRule } from '../../../core/models';

@Component({
  selector: 'app-admin-attendance-rules',
  templateUrl: './attendance-rules.component.html',
  styleUrls: ['./attendance-rules.component.scss']
})
export class AdminAttendanceRulesComponent implements OnInit {
  columns: TableColumn[] = [
    { key: 'name', label: 'Policy Name', sortable: true },
    { key: 'lateThresholdTime', label: 'Late After', sortable: true },
    { key: 'graceMinutes', label: 'Grace (m)', sortable: true },
    { key: 'minWorkHours', label: 'Min Hours', sortable: true },
    { key: 'overtimePolicy', label: 'Overtime', sortable: true },
    { key: 'autoMarkAbsentOnNoCheckIn', label: 'Auto Absent', sortable: true },
    { key: 'status', label: 'Status', type: 'status' }
  ];
  tableActions = [
    { label: 'Edit', icon: 'fas fa-edit', action: 'edit', color: '#f59e0b' },
    { label: 'Delete', icon: 'fas fa-trash', action: 'delete', color: '#ef4444' }
  ];

  rules: AttendanceRule[] = [];
  showForm = false;
  editingId: string | null = null;
  form: Partial<AttendanceRule> = {};
  overtimePolicies = ['NONE', 'DAILY', 'WEEKLY'];

  constructor(private attendanceService: AttendanceService, private toast: ToastService) {}

  ngOnInit(): void {
    this.loadRules();
  }

  loadRules(): void {
    this.attendanceService.getRules().subscribe({
      next: (data) => this.rules = data,
      error: () => this.toast.error('Failed to load attendance rules')
    });
  }

  openCreate(): void {
    this.editingId = null;
    this.form = {
      name: '',
      graceMinutes: 15,
      minWorkHours: 8,
      maxBreakMinutes: 60,
      overtimeAfterHours: 8,
      overtimePolicy: 'NONE',
      autoMarkAbsentOnNoCheckIn: true,
      isActive: true
    };
    this.showForm = true;
  }

  openEdit(rule: AttendanceRule): void {
    this.editingId = rule.id;
    this.form = { ...rule };
    this.showForm = true;
  }

  onAction(event: { action: string; row: AttendanceRule }): void {
    if (event.action === 'edit') {
      this.openEdit(event.row);
    } else if (event.action === 'delete') {
      if (confirm(`Delete attendance rule "${event.row.name}"?`)) {
        this.attendanceService.deleteRule(event.row.id).subscribe({
          next: () => { this.toast.success('Attendance rule deleted'); this.loadRules(); },
          error: () => this.toast.error('Failed to delete attendance rule')
        });
      }
    }
  }

  saveRule(): void {
    if (!this.form.name?.trim()) {
      this.toast.error('Policy name is required');
      return;
    }
    const payload: Partial<AttendanceRule> = {
      ...this.form,
      graceMinutes: Number(this.form.graceMinutes) || 0,
      minWorkHours: Number(this.form.minWorkHours) || 0,
      maxBreakMinutes: Number(this.form.maxBreakMinutes) || 0,
      overtimeAfterHours: Number(this.form.overtimeAfterHours) || 0
    };
    const request = this.editingId
      ? this.attendanceService.updateRule(this.editingId, payload)
      : this.attendanceService.createRule(payload);
    request.subscribe({
      next: () => {
        this.toast.success('Attendance rule saved');
        this.showForm = false;
        this.loadRules();
      },
      error: () => this.toast.error('Failed to save attendance rule')
    });
  }
}