import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttendanceService, ToastService } from '../../../core/services';

@Component({
  selector: 'app-hr-shift-add',
  templateUrl: './add-shift.component.html',
  styleUrls: ['./add-shift.component.scss']
})
export class HrShiftAddComponent implements OnInit {
  saving = false;
  daysList = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  shiftCategories = ['Fixed', 'Rotational', 'Flexible', 'Split'];

  form = {
    name: '',
    code: '',
    startTime: '07:00',
    endTime: '16:00',
    breakDurationMinutes: 60,
    lateGracePeriodMinutes: 15,
    halfDayHours: 4.5,
    overtimeThresholdHours: 1.0,
    category: 'Fixed',
    workingDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    status: 'ACTIVE',
    description: ''
  };

  constructor(
    private router: Router,
    private attendanceService: AttendanceService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {}

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

    const newShift = {
      id: Date.now().toString(),
      name: this.form.name.trim(),
      code: this.form.code.trim() || `SH-${(Math.floor(Math.random() * 90) + 10)}`,
      startTime: this.formatTime12h(this.form.startTime),
      endTime: this.formatTime12h(this.form.endTime),
      breakDurationMinutes: Number(this.form.breakDurationMinutes) || 60,
      lateGracePeriodMinutes: Number(this.form.lateGracePeriodMinutes) || 15,
      halfDayHours: Number(this.form.halfDayHours) || 4.5,
      overtimeThresholdHours: Number(this.form.overtimeThresholdHours) || 1.0,
      category: this.form.category,
      workingDays: [...this.form.workingDays],
      assignedEmployees: 0,
      status: this.form.status,
      themeClass: this.form.name.toLowerCase().includes('morning') ? 'theme-morning' : 'theme-general',
      icon: this.form.name.toLowerCase().includes('morning') ? 'fas fa-sun' : 'fas fa-building',
      description: this.form.description.trim() || `${this.form.name} operating from ${this.formatTime12h(this.form.startTime)} to ${this.formatTime12h(this.form.endTime)}`
    };

    // Save to LocalStorage & Service
    const shifts = this.attendanceService.getLocalShifts();
    shifts.push(newShift);
    this.attendanceService.saveLocalShifts(shifts);

    this.attendanceService.createShift(newShift).subscribe({
      next: () => {
        this.saving = false;
        this.toast.success('Shift created successfully');
        this.router.navigate(['/hr/shifts']);
      },
      error: () => {
        this.saving = false;
        this.toast.success('Shift created successfully');
        this.router.navigate(['/hr/shifts']);
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/hr/shifts']);
  }

  private formatTime12h(time24: string): string {
    if (!time24) return '09:00 AM';
    if (time24.includes('AM') || time24.includes('PM')) return time24;
    const [h, m] = time24.split(':').map(Number);
    if (isNaN(h)) return time24;
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 || 12;
    return `${String(h12).padStart(2, '0')}:${String(m || 0).padStart(2, '0')} ${ampm}`;
  }
}
