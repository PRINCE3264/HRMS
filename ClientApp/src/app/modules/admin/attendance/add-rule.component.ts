import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttendanceService, ToastService } from '../../../core/services';
import { ExtendedAttendanceRule } from './attendance-rules.component';

@Component({
  selector: 'app-admin-add-rule',
  templateUrl: './add-rule.component.html',
  styleUrls: ['./add-rule.component.scss']
})
export class AdminAttendanceRulesAddComponent implements OnInit {
  saving = false;

  form: Partial<ExtendedAttendanceRule> = {
    name: '',
    description: '',
    appliesTo: 'All General Staff',
    lateThresholdTime: '09:15 AM',
    graceMinutes: 15,
    minWorkHours: 8,
    maxBreakMinutes: 60,
    overtimeAfterHours: 8,
    overtimePolicy: 'DAILY',
    autoMarkAbsentOnNoCheckIn: true,
    isActive: true,
    isDefault: false
  };

  overtimePolicies: Array<'NONE' | 'DAILY' | 'WEEKLY'> = ['NONE', 'DAILY', 'WEEKLY'];

  constructor(
    private attendanceService: AttendanceService,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveRule(): void {
    if (!this.form.name?.trim()) {
      this.toast.error('Policy name is required');
      return;
    }

    this.saving = true;

    const newRule: ExtendedAttendanceRule = {
      id: `rule-${Date.now()}`,
      name: this.form.name.trim(),
      description: this.form.description?.trim() || '',
      appliesTo: this.form.appliesTo?.trim() || 'All Staff',
      lateThresholdTime: this.form.lateThresholdTime || '09:15 AM',
      graceMinutes: Number(this.form.graceMinutes) || 0,
      minWorkHours: Number(this.form.minWorkHours) || 0,
      maxBreakMinutes: Number(this.form.maxBreakMinutes) || 0,
      overtimeAfterHours: Number(this.form.overtimeAfterHours) || 0,
      overtimePolicy: this.form.overtimePolicy || 'DAILY',
      autoMarkAbsentOnNoCheckIn: !!this.form.autoMarkAbsentOnNoCheckIn,
      isActive: this.form.isActive !== undefined ? this.form.isActive : true,
      isDefault: !!this.form.isDefault
    };

    // Load existing rules from localStorage or fallback
    let existingRules: ExtendedAttendanceRule[] = [];
    const local = localStorage.getItem('hrm_attendance_rules');
    if (local) {
      try {
        existingRules = JSON.parse(local);
      } catch (e) {
        existingRules = [];
      }
    }

    if (newRule.isDefault) {
      existingRules.forEach(r => r.isDefault = false);
    }

    existingRules.unshift(newRule);
    localStorage.setItem('hrm_attendance_rules', JSON.stringify(existingRules));

    // Try service call in parallel
    this.attendanceService.createRule(newRule as any).subscribe({
      next: () => {},
      error: () => {}
    });

    this.saving = false;
    this.toast.success('Attendance policy created successfully');
    this.router.navigate(['/admin/attendance/rules']);
  }

  cancel(): void {
    this.router.navigate(['/admin/attendance/rules']);
  }
}
