import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-emp-break-tracker',
  templateUrl: './break-tracker.component.html',
  styleUrls: ['./break-tracker.component.scss']
})
export class EmpBreakTrackerComponent implements OnInit, OnDestroy {
  activeBreak: { type: string; startTime: Date } | null = null;
  elapsedSeconds = 0;
  timerInterval: any = null;

  todayBreaks = [
    { type: 'Tea Break', startTime: '11:00 AM', endTime: '11:15 AM', duration: '15 mins', status: 'Completed' },
    { type: 'Lunch Break', startTime: '01:30 PM', endTime: '02:15 PM', duration: '45 mins', status: 'Completed' },
  ];

  breakTypes = [
    { name: 'Tea Break', maxMinutes: 15, icon: 'fas fa-mug-hot', color: '#f59e0b' },
    { name: 'Lunch Break', maxMinutes: 45, icon: 'fas fa-utensils', color: '#10b981' },
    { name: 'Personal Break', maxMinutes: 20, icon: 'fas fa-user-clock', color: '#6366f1' },
    { name: 'Short Rest', maxMinutes: 10, icon: 'fas fa-pause-circle', color: '#00a8ff' },
  ];

  totalBreakMins = 60;
  allowedBreakMins = 60;

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  startBreak(type: string): void {
    this.activeBreak = { type, startTime: new Date() };
    this.elapsedSeconds = 0;
    if (this.timerInterval) clearInterval(this.timerInterval);

    this.timerInterval = setInterval(() => {
      this.elapsedSeconds++;
    }, 1000);
  }

  stopBreak(): void {
    if (!this.activeBreak) return;
    clearInterval(this.timerInterval);

    const endTime = new Date();
    const durationMins = Math.max(1, Math.round(this.elapsedSeconds / 60));
    
    this.todayBreaks.unshift({
      type: this.activeBreak.type,
      startTime: this.formatTime(this.activeBreak.startTime),
      endTime: this.formatTime(endTime),
      duration: `${durationMins} mins`,
      status: 'Completed'
    });

    this.totalBreakMins += durationMins;
    this.activeBreak = null;
    this.elapsedSeconds = 0;
  }

  formatTimer(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  private formatTime(date: Date): string {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}
