import { Component, OnInit, OnDestroy } from '@angular/core';
import { AttendanceService, ToastService } from '../../../core/services';

interface BreakLog {
  type: string;
  startTime: string;
  endTime: string;
  duration: string;
  status: string;
}

@Component({
  selector: 'app-emp-break-tracker',
  templateUrl: './break-tracker.component.html',
  styleUrls: ['./break-tracker.component.scss']
})
export class EmpBreakTrackerComponent implements OnInit, OnDestroy {
  activeBreak: { type: string; startTime: Date } | null = null;
  elapsedSeconds = 0;
  timerInterval: any = null;

  todayBreaks: BreakLog[] = [];

  breakTypes = [
    { name: 'Tea Break', maxMinutes: 15, icon: 'fas fa-mug-hot', color: '#f59e0b' },
    { name: 'Lunch Break', maxMinutes: 45, icon: 'fas fa-utensils', color: '#10b981' },
    { name: 'Personal Break', maxMinutes: 20, icon: 'fas fa-user-clock', color: '#6366f1' },
    { name: 'Short Rest', maxMinutes: 10, icon: 'fas fa-pause-circle', color: '#00a8ff' },
  ];

  totalBreakMins = 0;
  allowedBreakMins = 60;

  constructor(
    private attendanceService: AttendanceService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadToday();
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  private loadToday(): void {
    this.attendanceService.getToday().subscribe({
      next: record => {
        this.applyTodayRecord(record);
      },
      error: () => {
        this.todayBreaks = [];
        this.totalBreakMins = 0;
      }
    });
  }

  private applyTodayRecord(record: any): void {
    if (!record) {
      this.todayBreaks = [];
      this.totalBreakMins = 0;
      return;
    }
    this.todayBreaks = (record.breaks || []).map((b: any) => ({
      type: b.breakType || 'Break',
      startTime: this.formatServerTime(b.startTime),
      endTime: b.endTime ? this.formatServerTime(b.endTime) : '--',
      duration: `${b.durationMinutes || 0} mins`,
      status: b.endTime ? 'Completed' : 'Ongoing'
    }));
    this.totalBreakMins = (record.breaks || []).reduce((sum: number, b: any) => sum + (Number(b.durationMinutes) || 0), 0);
  }

  startBreak(type: string): void {
    this.activeBreak = { type, startTime: new Date() };
    this.elapsedSeconds = 0;
    if (this.timerInterval) clearInterval(this.timerInterval);

    this.attendanceService.startBreak({ breakType: type }).subscribe({
      next: () => {
        this.toast.success('Break started. Enjoy your rest!');
      },
      error: () => this.toast.error('Failed to start break.')
    });

    this.timerInterval = setInterval(() => {
      this.elapsedSeconds++;
    }, 1000);
  }

  stopBreak(): void {
    if (!this.activeBreak) return;
    clearInterval(this.timerInterval);

    this.attendanceService.endBreak().subscribe({
      next: () => {
        this.toast.success('Welcome back! Break ended.');
      },
      error: () => this.toast.error('Failed to end break.')
    });

    this.activeBreak = null;
    this.elapsedSeconds = 0;
    setTimeout(() => this.loadToday(), 300);
  }

  formatTimer(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  private formatServerTime(value?: string): string {
    if (!value) return '--';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}