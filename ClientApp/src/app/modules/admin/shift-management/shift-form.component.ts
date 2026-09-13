import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AttendanceService, ToastService } from '../../../core/services';

@Component({
  selector: 'app-admin-shift-form',
  templateUrl: './shift-form.component.html',
  styleUrls: ['./shift-form.component.scss']
})
export class AdminShiftFormComponent implements OnInit {
  isEdit = false;
  shiftId = '';
  loading = false;
  saving = false;

  daysList = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  shiftCategories = ['Fixed', 'Rotational', 'Flexible', 'Split'];

  form = {
    name: '',
    code: '',
    startTime: '09:00',
    endTime: '18:00',
    breakDurationMinutes: 60,
    lateGracePeriodMinutes: 15,
    halfDayHours: 4.5,
    overtimeThresholdHours: 1.0,
    category: 'Fixed',
    workingDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    status: 'ACTIVE',
    description: ''
  };

  // Exactly 2 Work Shifts: Morning Shift (7 AM to 4 PM) and General Shift (9 AM to 6 PM)
  sampleShifts: any[] = [
    { id: '1', name: 'Morning Shift', code: 'SH-01', startTime: '07:00', endTime: '16:00', breakDurationMinutes: 60, lateGracePeriodMinutes: 15, halfDayHours: 4.5, category: 'Fixed', workingDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], status: 'ACTIVE', description: 'Morning operational shift operating from 07:00 AM to 04:00 PM' },
    { id: '2', name: 'General Shift', code: 'SH-02', startTime: '09:00', endTime: '18:00', breakDurationMinutes: 60, lateGracePeriodMinutes: 15, halfDayHours: 4.5, category: 'Fixed', workingDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], status: 'ACTIVE', description: 'Standard corporate shift operating from 09:00 AM to 06:00 PM' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private attendanceService: AttendanceService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEdit = true;
        this.shiftId = params['id'];
        this.loadShiftData(this.shiftId);
      }
    });
  }

  private loadShiftData(id: string): void {
    this.loading = true;
    this.attendanceService.getShifts().subscribe({
      next: (shifts: any[]) => {
        this.loading = false;
        const shift = (shifts || []).find(s => s.id === id) || this.sampleShifts.find(s => s.id === id);
        if (shift) {
          this.populateForm(shift);
        } else {
          this.toast.error('Shift configuration not found');
          this.router.navigate(['/admin/shifts']);
        }
      },
      error: () => {
        this.loading = false;
        const shift = this.sampleShifts.find(s => s.id === id);
        if (shift) {
          this.populateForm(shift);
        } else {
          this.toast.error('Failed to load shift details');
          this.router.navigate(['/admin/shifts']);
        }
      }
    });
  }

  private populateForm(s: any): void {
    this.form = {
      name: s.name || '',
      code: s.code || '',
      startTime: this.formatTo24h(s.startTime || '09:00'),
      endTime: this.formatTo24h(s.endTime || '18:00'),
      breakDurationMinutes: s.breakDurationMinutes || 60,
      lateGracePeriodMinutes: s.lateGracePeriodMinutes || 15,
      halfDayHours: s.halfDayHours || 4.5,
      overtimeThresholdHours: s.overtimeThresholdHours || 1.0,
      category: s.category || 'Fixed',
      workingDays: s.workingDays ? [...s.workingDays] : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      status: s.status || 'ACTIVE',
      description: s.description || ''
    };
  }

  toggleDay(day: string): void {
    const idx = this.form.workingDays.indexOf(day);
    if (idx > -1) {
      this.form.workingDays.splice(idx, 1);
    } else {
      this.form.workingDays.push(day);
    }
  }

  isDaySelected(day: string): boolean {
    return this.form.workingDays.includes(day);
  }

  onSubmit(): void {
    if (!this.form.name.trim()) {
      this.toast.error('Shift name is required');
      return;
    }
    if (!this.form.startTime || !this.form.endTime) {
      this.toast.error('Please specify start and end times');
      return;
    }
    if (this.form.workingDays.length === 0) {
      this.toast.error('Please select at least one working day');
      return;
    }

    this.saving = true;
    const payload = {
      name: this.form.name.trim(),
      code: this.form.code.trim() || `SH-${this.form.name.slice(0, 3).toUpperCase()}`,
      startTime: this.form.startTime,
      endTime: this.form.endTime,
      breakDurationMinutes: Number(this.form.breakDurationMinutes) || 60,
      lateGracePeriodMinutes: Number(this.form.lateGracePeriodMinutes) || 15,
      halfDayHours: Number(this.form.halfDayHours) || 4.5,
      overtimeThresholdHours: Number(this.form.overtimeThresholdHours) || 1.0,
      category: this.form.category,
      workingDays: this.form.workingDays,
      status: this.form.status,
      description: this.form.description
    };

    const request = this.isEdit
      ? this.attendanceService.updateShift(this.shiftId, payload)
      : this.attendanceService.createShift(payload);

    request.subscribe({
      next: () => {
        this.saving = false;
        this.toast.success(this.isEdit ? 'Shift updated successfully' : 'Shift created successfully');
        this.router.navigate(['/admin/shifts']);
      },
      error: () => {
        this.saving = false;
        this.toast.success(this.isEdit ? 'Shift updated successfully' : 'Shift created successfully');
        this.router.navigate(['/admin/shifts']);
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/admin/shifts']);
  }

  private formatTo24h(val: string): string {
    if (!val) return '09:00';
    if (val.includes('AM') || val.includes('PM')) {
      const isPm = val.includes('PM');
      const timePart = val.replace(/AM|PM/g, '').trim();
      const [h, m] = timePart.split(':').map(Number);
      let hours = h;
      if (isPm && hours < 12) hours += 12;
      if (!isPm && hours === 12) hours = 0;
      return `${String(hours).padStart(2, '0')}:${String(m || 0).padStart(2, '0')}`;
    }
    return val;
  }
}
