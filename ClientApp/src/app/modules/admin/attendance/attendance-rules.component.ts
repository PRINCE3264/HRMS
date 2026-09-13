import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttendanceService, ToastService } from '../../../core/services';

export interface ExtendedAttendanceRule {
  id: string;
  name: string;
  description?: string;
  appliesTo?: string;
  lateThresholdTime: string;
  graceMinutes: number;
  minWorkHours: number;
  maxBreakMinutes: number;
  overtimeAfterHours: number;
  overtimePolicy: 'NONE' | 'DAILY' | 'WEEKLY';
  autoMarkAbsentOnNoCheckIn: boolean;
  isActive: boolean;
  isDefault?: boolean;
}

@Component({
  selector: 'app-admin-attendance-rules',
  templateUrl: './attendance-rules.component.html',
  styleUrls: ['./attendance-rules.component.scss']
})
export class AdminAttendanceRulesComponent implements OnInit {
  rules: ExtendedAttendanceRule[] = [];
  searchTerm = '';
  showForm = false;
  editingId: string | null = null;
  loading = false;

  form: Partial<ExtendedAttendanceRule> = {};
  overtimePolicies: Array<'NONE' | 'DAILY' | 'WEEKLY'> = ['NONE', 'DAILY', 'WEEKLY'];

  // Metrics
  metrics = {
    totalRules: 0,
    activeRules: 0,
    avgGraceMinutes: 15,
    autoAbsentEnabled: 0
  };

  private sampleRules: ExtendedAttendanceRule[] = [
    {
      id: 'rule-1',
      name: 'Standard Office Policy',
      description: 'Default attendance and punctuality policy for general office staff',
      appliesTo: 'General Staff',
      lateThresholdTime: '09:15 AM',
      graceMinutes: 15,
      minWorkHours: 8,
      maxBreakMinutes: 60,
      overtimeAfterHours: 8,
      overtimePolicy: 'DAILY',
      autoMarkAbsentOnNoCheckIn: true,
      isActive: true,
      isDefault: true
    },
    {
      id: 'rule-2',
      name: 'Flexible Engineering & Product Policy',
      description: 'Relaxed grace period for R&D and core engineering teams',
      appliesTo: 'Engineering, Product & Design',
      lateThresholdTime: '10:00 AM',
      graceMinutes: 30,
      minWorkHours: 7.5,
      maxBreakMinutes: 60,
      overtimeAfterHours: 40,
      overtimePolicy: 'WEEKLY',
      autoMarkAbsentOnNoCheckIn: false,
      isActive: true,
      isDefault: false
    },
    {
      id: 'rule-3',
      name: 'Executive & Leadership Policy',
      description: 'Flexible working hours for senior leadership and department heads',
      appliesTo: 'Managers & Executives',
      lateThresholdTime: '09:30 AM',
      graceMinutes: 45,
      minWorkHours: 8,
      maxBreakMinutes: 90,
      overtimeAfterHours: 8,
      overtimePolicy: 'NONE',
      autoMarkAbsentOnNoCheckIn: false,
      isActive: true,
      isDefault: false
    },
    {
      id: 'rule-4',
      name: 'Operations & Logistics Shift Policy',
      description: 'Strict check-in rules for frontline operations and customer support',
      appliesTo: 'Operations & Customer Support',
      lateThresholdTime: '08:45 AM',
      graceMinutes: 10,
      minWorkHours: 8.5,
      maxBreakMinutes: 45,
      overtimeAfterHours: 8.5,
      overtimePolicy: 'DAILY',
      autoMarkAbsentOnNoCheckIn: true,
      isActive: false,
      isDefault: false
    }
  ];

  constructor(
    private attendanceService: AttendanceService,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadRules();
  }

  loadRules(): void {
    this.loading = true;
    const local = localStorage.getItem('hrm_attendance_rules');
    if (local) {
      try {
        this.rules = JSON.parse(local);
        this.calculateMetrics();
        this.loading = false;
        return;
      } catch (e) {
        console.error('Failed to parse stored rules:', e);
      }
    }

    // Attempt API call, fallback to sample data
    this.attendanceService.getRules().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.rules = data.map((r, i) => this.enhanceRule(r, i));
        } else {
          this.rules = [...this.sampleRules];
        }
        this.saveToStorage();
        this.calculateMetrics();
        this.loading = false;
      },
      error: () => {
        this.rules = [...this.sampleRules];
        this.saveToStorage();
        this.calculateMetrics();
        this.loading = false;
      }
    });
  }

  private enhanceRule(item: any, idx: number): ExtendedAttendanceRule {
    const sample = this.sampleRules[idx % this.sampleRules.length];
    return {
      id: item.id || `rule-${idx + 1}`,
      name: item.name || sample.name,
      description: item.description || sample.description,
      appliesTo: item.appliesTo || sample.appliesTo,
      lateThresholdTime: item.lateThresholdTime || sample.lateThresholdTime,
      graceMinutes: item.graceMinutes ?? sample.graceMinutes,
      minWorkHours: item.minWorkHours ?? sample.minWorkHours,
      maxBreakMinutes: item.maxBreakMinutes ?? sample.maxBreakMinutes,
      overtimeAfterHours: item.overtimeAfterHours ?? sample.overtimeAfterHours,
      overtimePolicy: item.overtimePolicy || sample.overtimePolicy,
      autoMarkAbsentOnNoCheckIn: item.autoMarkAbsentOnNoCheckIn ?? sample.autoMarkAbsentOnNoCheckIn,
      isActive: item.isActive ?? sample.isActive,
      isDefault: item.isDefault ?? (idx === 0)
    };
  }

  calculateMetrics(): void {
    this.metrics.totalRules = this.rules.length;
    this.metrics.activeRules = this.rules.filter(r => r.isActive).length;
    this.metrics.autoAbsentEnabled = this.rules.filter(r => r.autoMarkAbsentOnNoCheckIn).length;
    if (this.rules.length > 0) {
      const sumGrace = this.rules.reduce((acc, r) => acc + (Number(r.graceMinutes) || 0), 0);
      this.metrics.avgGraceMinutes = Math.round(sumGrace / this.rules.length);
    }
  }

  get filteredRules(): ExtendedAttendanceRule[] {
    if (!this.searchTerm.trim()) return this.rules;
    const term = this.searchTerm.toLowerCase();
    return this.rules.filter(r =>
      r.name.toLowerCase().includes(term) ||
      (r.description && r.description.toLowerCase().includes(term)) ||
      (r.appliesTo && r.appliesTo.toLowerCase().includes(term))
    );
  }

  openCreate(): void {
    this.router.navigate(['/admin/attendance/rules/add']);
  }

  openEdit(rule: ExtendedAttendanceRule): void {
    this.router.navigate(['/admin/attendance/rules', rule.id, 'edit']);
  }

  toggleStatus(rule: ExtendedAttendanceRule, event: Event): void {
    event.stopPropagation();
    rule.isActive = !rule.isActive;
    this.saveToStorage();
    this.calculateMetrics();
    this.toast.success(`Rule "${rule.name}" is now ${rule.isActive ? 'Active' : 'Inactive'}`);
  }

  setDefaultRule(rule: ExtendedAttendanceRule): void {
    this.rules.forEach(r => r.isDefault = (r.id === rule.id));
    this.saveToStorage();
    this.toast.success(`"${rule.name}" set as default policy`);
  }

  async deleteRule(rule: ExtendedAttendanceRule): Promise<void> {
    const confirmed = await this.toast.confirm(
      `Delete policy "${rule.name}"?`,
      'Are you sure you want to delete this attendance rule?'
    );
    if (confirmed) {
      this.rules = this.rules.filter(r => r.id !== rule.id);
      this.saveToStorage();
      this.calculateMetrics();
      this.toast.success('Attendance rule deleted successfully');
    }
  }

  saveRule(): void {
    if (!this.form.name?.trim()) {
      this.toast.error('Policy name is required');
      return;
    }

    const payload: ExtendedAttendanceRule = {
      id: this.editingId || `rule-${Date.now()}`,
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

    if (this.editingId) {
      const idx = this.rules.findIndex(r => r.id === this.editingId);
      if (idx !== -1) {
        this.rules[idx] = payload;
      }
      this.toast.success('Attendance policy updated');
    } else {
      if (this.rules.length === 0 || payload.isDefault) {
        this.rules.forEach(r => r.isDefault = false);
      }
      this.rules.unshift(payload);
      this.toast.success('New attendance policy created');
    }

    this.saveToStorage();
    this.calculateMetrics();
    this.showForm = false;
  }

  private saveToStorage(): void {
    localStorage.setItem('hrm_attendance_rules', JSON.stringify(this.rules));
  }
}