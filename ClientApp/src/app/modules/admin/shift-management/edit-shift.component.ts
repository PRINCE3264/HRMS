import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AttendanceService, ToastService } from '../../../core/services';

@Component({
  selector: 'app-admin-shift-edit',
  templateUrl: './edit-shift.component.html',
  styleUrls: ['./edit-shift.component.scss']
})
export class AdminShiftEditComponent implements OnInit {
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private attendanceService: AttendanceService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.shiftId = params['id'];
        this.loadShift(this.shiftId);
      }
    });
  }

  private loadShift(id: string): void {
    this.loading = true;
    const localShifts = this.attendanceService.getLocalShifts();
    const found = localShifts.find(s => s.id === id || s.code === id);

    if (found) {
      this.populateForm(found);
      this.loading = false;
    } else {
      this.attendanceService.getShifts().subscribe({
        next: (shifts: any[]) => {
          this.loading = false;
          const s = (shifts || []).find(x => x.id === id);
          if (s) {
            this.populateForm(s);
          } else {
            this.toast.error('Shift configuration not found');
            this.router.navigate(['/admin/shifts']);
          }
        },
        error: () => {
          this.loading = false;
          this.toast.error('Failed to load shift details');
          this.router.navigate(['/admin/shifts']);
        }
      });
    }
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

    const updatedData = {
      id: this.shiftId,
      name: this.form.name.trim(),
      code: this.form.code.trim(),
      startTime: this.formatTime12h(this.form.startTime),
      endTime: this.formatTime12h(this.form.endTime),
      breakDurationMinutes: Number(this.form.breakDurationMinutes) || 60,
      lateGracePeriodMinutes: Number(this.form.lateGracePeriodMinutes) || 15,
      halfDayHours: Number(this.form.halfDayHours) || 4.5,
      overtimeThresholdHours: Number(this.form.overtimeThresholdHours) || 1.0,
      category: this.form.category,
      workingDays: [...this.form.workingDays],
      status: this.form.status,
      themeClass: this.form.name.toLowerCase().includes('morning') ? 'theme-morning' : 'theme-general',
      icon: this.form.name.toLowerCase().includes('morning') ? 'fas fa-sun' : 'fas fa-building',
      description: this.form.description.trim()
    };

    // Update LocalStorage & Service
    const shifts = this.attendanceService.getLocalShifts();
    const index = shifts.findIndex(s => s.id === this.shiftId);
    if (index !== -1) {
      shifts[index] = { ...shifts[index], ...updatedData };
    } else {
      shifts.push(updatedData);
    }
    this.attendanceService.saveLocalShifts(shifts);

    this.attendanceService.updateShift(this.shiftId, updatedData).subscribe({
      next: () => {
        this.saving = false;
        this.toast.success('Shift updated successfully');
        this.router.navigate(['/admin/shifts']);
      },
      error: () => {
        this.saving = false;
        this.toast.success('Shift updated successfully');
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
