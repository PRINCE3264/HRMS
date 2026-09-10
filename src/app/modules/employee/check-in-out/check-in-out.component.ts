import { Component, OnInit, OnDestroy } from '@angular/core';

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

  todayActivity = [
    { action: 'Checked In', time: '09:00 AM', type: 'in', icon: 'fas fa-door-open', color: '#10b981' },
    { action: 'Tea Break', time: '11:15 AM', type: 'break', icon: 'fas fa-mug-hot', color: '#f59e0b' },
    { action: 'Resumed Work', time: '11:30 AM', type: 'in', icon: 'fas fa-play', color: '#00a8ff' },
  ];

  weekData = [
    { day: 'Mon', hours: 8.5, percentage: 85 },
    { day: 'Tue', hours: 8.3, percentage: 83 },
    { day: 'Wed', hours: 8.0, percentage: 80 },
    { day: 'Thu', hours: 8.4, percentage: 84 },
    { day: 'Fri', hours: 4.5, percentage: 45 },
    { day: 'Sat', hours: 0, percentage: 0 },
    { day: 'Sun', hours: 0, percentage: 0 },
  ];

  location = 'Envision Beyond India Pvt Ltd - Main HQ (Verified GPS Geofence)';
  shiftDetails = 'General Shift (09:30 AM - 06:30 PM)';

  showToast = false;
  toastMsg = '';

  private clockInterval: any;
  private timerInterval: any;

  ngOnInit(): void {
    this.updateClock();
    this.clockInterval = setInterval(() => this.updateClock(), 1000);
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

  toggleCheckIn(): void {
    const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    
    if (!this.isCheckedIn) {
      this.isCheckedIn = true;
      this.checkInTime = time;
      this.todayActivity.unshift({
        action: 'Checked In',
        time,
        type: 'in',
        icon: 'fas fa-sign-in-alt',
        color: '#10b981'
      });
      this.startWorkedTimer();
      this.triggerToast('Checked in successfully! Have a productive day.');
    } else {
      this.isCheckedIn = false;
      this.isOnBreak = false;
      this.checkOutTime = time;
      this.stopWorkedTimer();
      this.todayActivity.unshift({
        action: 'Checked Out',
        time,
        type: 'out',
        icon: 'fas fa-sign-out-alt',
        color: '#ef4444'
      });
      this.triggerToast('Checked out successfully! Great work today.');
    }
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
      this.triggerToast('Break started. Enjoy your rest!');
    } else {
      this.isOnBreak = false;
      this.todayActivity.unshift({
        action: 'Resumed Work',
        time,
        type: 'in',
        icon: 'fas fa-play',
        color: '#00a8ff'
      });
      this.triggerToast('Welcome back! Resumed work timer.');
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

  private triggerToast(msg: string): void {
    this.toastMsg = msg;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3000);
  }
}

