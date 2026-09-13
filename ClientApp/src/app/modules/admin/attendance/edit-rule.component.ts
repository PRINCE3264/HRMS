import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AttendanceService, ToastService } from '../../../core/services';
import { ExtendedAttendanceRule } from './attendance-rules.component';

@Component({
  selector: 'app-admin-edit-rule',
  templateUrl: './edit-rule.component.html',
  styleUrls: ['./edit-rule.component.scss']
})
export class AdminAttendanceRulesEditComponent implements OnInit {
  ruleId: string | null = null;
  saving = false;
  loading = true;

  form: Partial<ExtendedAttendanceRule> = {};
  overtimePolicies: Array<'NONE' | 'DAILY' | 'WEEKLY'> = ['NONE', 'DAILY', 'WEEKLY'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private attendanceService: AttendanceService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.ruleId = this.route.snapshot.paramMap.get('id');
    if (!this.ruleId) {
      this.toast.error('Invalid rule ID');
      this.router.navigate(['/admin/attendance/rules']);
      return;
    }
    this.loadRuleData();
  }

  loadRuleData(): void {
    this.loading = true;
    let foundRule: ExtendedAttendanceRule | null = null;

    // Check localStorage first
    const local = localStorage.getItem('hrm_attendance_rules');
    if (local) {
      try {
        const rules: ExtendedAttendanceRule[] = JSON.parse(local);
        foundRule = rules.find(r => r.id === this.ruleId) || null;
      } catch (e) {
        console.error('Failed to parse local rules', e);
      }
    }

    if (foundRule) {
      this.form = { ...foundRule };
      this.loading = false;
    } else {
      // Fallback service call or default rule lookup
      this.attendanceService.getRules().subscribe({
        next: (data) => {
          if (data && data.length > 0) {
            const match = data.find((r: any) => r.id === this.ruleId);
            if (match) {
              this.form = {
                ...match,
                overtimePolicy: (match.overtimePolicy as 'NONE' | 'DAILY' | 'WEEKLY') || 'DAILY'
              };
            }
          }
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  saveRule(): void {
    if (!this.form.name?.trim()) {
      this.toast.error('Policy name is required');
      return;
    }

    this.saving = true;

    const updatedRule: ExtendedAttendanceRule = {
      id: this.ruleId!,
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

    let existingRules: ExtendedAttendanceRule[] = [];
    const local = localStorage.getItem('hrm_attendance_rules');
    if (local) {
      try {
        existingRules = JSON.parse(local);
      } catch (e) {
        existingRules = [];
      }
    }

    if (updatedRule.isDefault) {
      existingRules.forEach(r => r.isDefault = false);
    }

    const index = existingRules.findIndex(r => r.id === this.ruleId);
    if (index !== -1) {
      existingRules[index] = updatedRule;
    } else {
      existingRules.unshift(updatedRule);
    }

    localStorage.setItem('hrm_attendance_rules', JSON.stringify(existingRules));

    // Try service call in parallel
    this.attendanceService.updateRule(this.ruleId!, updatedRule as any).subscribe({
      next: () => {},
      error: () => {}
    });

    this.saving = false;
    this.toast.success('Attendance policy updated successfully');
    this.router.navigate(['/admin/attendance/rules']);
  }

  cancel(): void {
    this.router.navigate(['/admin/attendance/rules']);
  }
}
