import { Component, OnInit, OnDestroy } from '@angular/core';
import { AttendanceService, ToastService, AuthService } from '../../../core/services';

interface ActivityItem {
  action: string;
  time: string;
  type: string;
  icon: string;
  color: string;
}

interface WeekDay {
  day: string;
  hours: number;
  percentage: number;
}

@Component({
  selector: 'app-emp-check-in-out',
  templateUrl: './check-in-out.component.html',
  styleUrls: ['./check-in-out.component.scss']
})
export class EmpCheckInOutComponent implements OnInit, OnDestroy {
  currentTime = '';
  currentDate = '';
  isCheckedIn = false;
  isOnBreak = false;

  checkInTime = '';
  checkOutTime = '';
  workedSeconds = 0;
  workedTime = '00:00:00';
  remainingTime = '08:00:00';

  todayActivity: ActivityItem[] = [];
  weekData: WeekDay[] = [];

  location = 'Envision Beyond India Pvt Ltd - Main HQ (Verified GPS Geofence)';
  shiftDetails = 'General Shift (09:30 AM - 06:30 PM)';

  showToast = false;
  toastMsg = '';

  private clockInterval: any;
  private timerInterval: any;

  constructor(
    private attendanceService: AttendanceService,
    private authService: AuthService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.updateClock();
    this.clockInterval = setInterval(() => this.updateClock(), 1000);
    this.loadToday();
    this.loadWeek();
  }

  ngOnDestroy(): void {
    if (this.clockInterval) clearInterval(this.clockInterval);
    if (this.timerInterval) clearInterval(this.timerInterval);
  }

  updateClock(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    this.currentDate = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  private loadToday(): void {
    this.attendanceService.getToday().subscribe({
      next: record => {
        this.applyTodayRecord(record);
      },
      error: () => {
        this.applyTodayRecord(null);
      }
    });
  }

  private applyTodayRecord(record: any): void {
    this.todayRecord = record || null;
    if (!record) {
      this.isCheckedIn = false;
      this.isOnBreak = false;
      this.checkInTime = '';
      this.checkOutTime = '';
      this.workedSeconds = 0;
      this.workedTime = '00:00:00';
      this.remainingTime = '08:00:00';
      this.todayActivity = [];
      return;
    }
    this.checkInTime = this.formatTime(record.checkIn);
    this.checkOutTime = record.checkOut ? this.formatTime(record.checkOut) : '';
    this.isCheckedIn = !!record.checkIn && !record.checkOut;
    const openBreak = (record.breaks || []).find((b: any) => !b.endTime);
    this.isOnBreak = !!openBreak;
    this.workedSeconds = Math.round((Number(record.workHours) || 0) * 3600);
    this.workedTime = this.formatSeconds(this.workedSeconds);
    const totalShiftSecs = 8 * 3600;
    const remSecs = Math.max(0, totalShiftSecs - this.workedSeconds);
    this.remainingTime = this.formatSeconds(remSecs);
    this.todayActivity = this.buildActivity(record);
    if (this.isCheckedIn) {
      this.startWorkedTimer();
    } else {
      this.stopWorkedTimer();
    }
  }

  private todayRecord: any = null;

  private buildActivity(record: any): ActivityItem[] {
    const activity: ActivityItem[] = [];
    if (record.checkIn) {
      activity.push({ action: 'Checked In', time: this.formatTime(record.checkIn), type: 'in', icon: 'fas fa-sign-in-alt', color: '#10b981' });
    }
    (record.breaks || []).forEach((b: any) => {
      activity.push({ action: 'Started Break', time: this.formatTime(b.startTime), type: 'break', icon: 'fas fa-coffee', color: '#f59e0b' });
      if (b.endTime) {
        activity.push({ action: 'Resumed Work', time: this.formatTime(b.endTime), type: 'in', icon: 'fas fa-play', color: '#00a8ff' });
      }
    });
    if (record.checkOut) {
      activity.push({ action: 'Checked Out', time: this.formatTime(record.checkOut), type: 'out', icon: 'fas fa-sign-out-alt', color: '#ef4444' });
    }
    return activity.reverse();
  }

  private loadWeek(): void {
    const employeeId = this.authService.currentUser?.employeeId;
    if (!employeeId) {
      this.weekData = [];
      return;
    }
    const monday = this.getMonday();
    this.attendanceService.getByEmployee(employeeId, this.dateKey(monday), this.dateKey(new Date())).subscribe({
      next: records => this.buildWeekData(records || []),
      error: () => this.weekData = []
    });
  }

  private buildWeekData(records: any[]): void {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const start = this.getMonday();
    const byDate: any = {};
    records.forEach(r => {
      byDate[String(r.date || '').slice(0, 10)] = r;
    });
    this.weekData = days.map((day, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const rec = byDate[this.dateKey(d)];
      const hours = rec ? Number(rec.workHours || 0) : 0;
      return { day, hours, percentage: Math.min(100, Math.round((hours / 9) * 100)) };
    });
  }

  private getMonday(): Date {
    const now = new Date();
    const day = now.getDay();
    const diff = day === 0 ? -6 : 1 - day;
    const monday = new Date(now);
    monday.setDate(now.getDate() + diff);
    monday.setHours(0, 0, 0, 0);
    return monday;
  }

  toggleCheckIn(): void {
    if (this.submittingAction) return;
    if (!this.isCheckedIn) {
      this.submitCheckIn();
    } else {
      this.submitCheckOut();
    }
  }

  private submittingAction = false;

  private submitCheckIn(): void {
    this.submittingAction = true;
    this.attendanceService.checkIn({ location: this.location }).subscribe({
      next: () => {
        this.toast.success('Checked in successfully! Have a productive day.');
        this.loadToday();
        this.submittingAction = false;
      },
      error: () => {
        this.toast.error('Check-in failed. Please try again.');
        this.submittingAction = false;
      }
    });
  }

  private submitCheckOut(): void {
    this.submittingAction = true;
    this.attendanceService.checkOut({ location: this.location }).subscribe({
      next: () => {
        this.toast.success('Checked out successfully! Great work today.');
        this.stopWorkedTimer();
        this.isCheckedIn = false;
        this.loadToday();
        this.submittingAction = false;
      },
      error: () => {
        this.toast.error('Check-out failed. Please try again.');
        this.submittingAction = false;
      }
    });
  }

  toggleBreak(): void {
    if (!this.isCheckedIn) return;
    const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    if (!this.isOnBreak) {
      this.isOnBreak = true;
      this.todayActivity.unshift({
        action: 'Started Break',
        time,
        type: 'break',
        icon: 'fas fa-coffee',
        color: '#f59e0b'
      });
      this.attendanceService.startBreak({ breakType: 'Regular Break' }).subscribe({
        next: () => this.toast.success('Break started. Enjoy your rest!'),
        error: () => this.toast.error('Failed to start break.')
      });
    } else {
      this.isOnBreak = false;
      this.todayActivity.unshift({
        action: 'Resumed Work',
        time,
        type: 'in',
        icon: 'fas fa-play',
        color: '#00a8ff'
      });
      this.attendanceService.endBreak().subscribe({
        next: () => this.toast.success('Welcome back! Resumed work timer.'),
        error: () => this.toast.error('Failed to end break.')
      });
    }
  }

  private startWorkedTimer(): void {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      if (!this.isOnBreak) {
        this.workedSeconds++;
        this.workedTime = this.formatSeconds(this.workedSeconds);
        const totalShiftSecs = 8 * 3600;
        const remSecs = Math.max(0, totalShiftSecs - this.workedSeconds);
        this.remainingTime = this.formatSeconds(remSecs);
      }
    }, 1000);
  }

  private stopWorkedTimer(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  private formatSeconds(secs: number): string {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  private formatTime(value?: string | null): string {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  }

  private dateKey(d: Date): string {
    return d.toISOString().slice(0, 10);
  }

  private triggerToast(msg: string): void {
    this.toastMsg = msg;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3000);
  }
}