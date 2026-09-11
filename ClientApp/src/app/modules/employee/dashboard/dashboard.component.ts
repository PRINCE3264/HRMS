import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService, AttendanceService, ToastService } from '../../../core/services';
import { User } from '../../../core/models';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class EmpDashboardComponent implements OnInit, OnDestroy {
  currentUser: User | null = null;
  currentTimeString = '';
  currentAmpm = 'PM';
  currentDateString = '';
  clockTimer: any;
  isClockedIn = false;

  attendanceScore = {
    streak: '0 Day',
    percentage: '0%',
    points: 0
  };

  overviewStats = {
    presentDays: 0,
    totalDays: 0,
    attendanceRate: '0%',
    loggedHours: '0h logged',
    absentLeaves: 0,
    lateClockIns: 0
  };

  activityLogs: any[] = [];

  constructor(
    private authService: AuthService,
    private attendanceService: AttendanceService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });

    this.updateClock();
    this.clockTimer = setInterval(() => this.updateClock(), 1000);
    this.loadData();
  }

  ngOnDestroy(): void {
    if (this.clockTimer) {
      clearInterval(this.clockTimer);
    }
  }

  private loadData(): void {
    const employeeId = this.authService.currentUser?.employeeId;
    this.attendanceService.getToday().subscribe({
      next: record => {
        this.isClockedIn = !!record && !!record.checkIn && !record.checkOut;
      },
      error: () => {
        this.isClockedIn = false;
      }
    });
    if (employeeId) {
      const now = new Date();
      const startDate = this.monthStartKey(now);
      const endDate = this.dateKey(now);
      this.attendanceService.getByEmployee(employeeId, startDate, endDate).subscribe({
        next: records => this.applyRecords(records || []),
        error: () => this.applyRecords([])
      });
    }
  }

  private applyRecords(records: any[]): void {
    let present = 0, absent = 0, late = 0, leave = 0, hours = 0;
    records.forEach(r => {
      hours += Number(r.workHours) || 0;
      const s = String(r.status || '').toUpperCase();
      if (s === 'LATE') {
        late++;
        present++;
      } else if (s === 'PRESENT' || s === 'HALF_DAY') {
        present++;
      } else if (s === 'ABSENT') {
        absent++;
      } else if (s === 'ON_LEAVE') {
        leave++;
      }
    });
    const total = present + absent + leave;
    const rate = total ? Math.round((present / Math.max(1, total)) * 100) : 0;
    this.overviewStats = {
      presentDays: present,
      totalDays: total,
      attendanceRate: rate + '%',
      loggedHours: `${hours.toFixed(1)}h logged`,
      absentLeaves: absent + leave,
      lateClockIns: late
    };
    this.attendanceScore = {
      streak: `${Math.min(2, Math.max(1, present))} Day`,
      percentage: rate + '%',
      points: present * 50
    };
    this.activityLogs = [...records]
      .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')))
      .map(r => {
        const s = String(r.status || '').toUpperCase();
        return {
          id: r.id,
          date: this.formatFullDate(r.date),
          inTime: this.formatTime(r.checkIn),
          outTime: r.checkOut ? this.formatTime(r.checkOut) : '--',
          netHours: this.formatHours(r.workHours),
          statusBadge: s === 'PRESENT' ? 'Approved' : (s === 'LATE' ? 'Late' : s.charAt(0) + s.slice(1).toLowerCase()),
          badgeType: s === 'LATE' ? 'warning' : 'success',
          onTimeStatus: s === 'LATE' ? 'Late' : 'On Time',
          avatar: 'assets/images/user-avatar.png'
        };
      });
  }

  private formatFullDate(value?: string): string {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleDateString('en-US', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' });
  }

  private formatTime(value?: string | null): string {
    if (!value) return '--';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  }

  private formatHours(value?: number): string {
    const total = Math.round((Number(value) || 0) * 60);
    const h = Math.floor(total / 60);
    const m = total % 60;
    return `${h}h ${m}m`;
  }

  private monthStartKey(d: Date): string {
    return this.dateKey(new Date(d.getFullYear(), d.getMonth(), 1));
  }

  private dateKey(d: Date): string {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  updateClock(): void {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    this.currentAmpm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedHours = String(hours).padStart(2, '0');
    this.currentTimeString = `${formattedHours}:${minutes}:${seconds}`;

    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    this.currentDateString = now.toLocaleDateString('en-US', options);
  }

  toggleClockIn(): void {
    if (this.isClockedIn) {
      this.attendanceService.checkOut({}).subscribe({
        next: () => {
          this.isClockedIn = false;
          this.toast.success('Checked out successfully!');
          this.loadData();
        },
        error: () => this.toast.error('Check-out failed.')
      });
    } else {
      this.attendanceService.checkIn({}).subscribe({
        next: () => {
          this.isClockedIn = true;
          this.toast.success('Checked in successfully!');
          this.loadData();
        },
        error: () => this.toast.error('Check-in failed.')
      });
    }
  }
}