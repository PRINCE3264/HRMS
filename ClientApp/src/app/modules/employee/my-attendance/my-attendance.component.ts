import { Component, OnInit } from '@angular/core';
import { AuthService, AttendanceService, LeaveService, ToastService } from '../../../core/services';
import { User } from '../../../core/models';

interface CalendarCell {
  day: number | null;
  badge: string | null;
  status: string;
  isToday?: boolean;
}

@Component({
  selector: 'app-emp-attendance',
  templateUrl: './my-attendance.component.html',
  styleUrls: ['./my-attendance.component.scss']
})
export class EmpAttendanceComponent implements OnInit {
  currentUser: User | null = null;
  currentMonth = '';
  activeFilter = 'All';

  summaryStats = {
    attendanceRate: '0%',
    present: 0,
    absent: 0,
    late: 0,
    leave: 0,
    pending: 0,
    rejected: 0,
    totalWorkingDays: 0
  };

  weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  calendarGrid: CalendarCell[] = [];

  historyLogs: any[] = [];

  private attendanceRecords: any[] = [];
  private leaveRequests: any[] = [];

  constructor(
    private authService: AuthService,
    private attendanceService: AttendanceService,
    private leaveService: LeaveService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
    this.setCurrentMonth(new Date());
    this.loadData();
  }

  private setCurrentMonth(d: Date): void {
    this.currentMonth = d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    this.summaryStats.totalWorkingDays = this.workingDaysInMonth(d);
  }

  private loadData(): void {
    this.attendanceRecords = [];
    this.leaveRequests = [];
    const employeeId = this.authService.currentUser?.employeeId;
    if (!employeeId) {
      this.buildView();
      return;
    }
    const now = new Date();
    const startDate = this.monthStartKey(now);
    const endDate = this.dateKey(now);
    this.attendanceService.getByEmployee(employeeId, startDate, endDate).subscribe({
      next: records => {
        this.attendanceRecords = records || [];
        this.leaveService.getMyLeave().subscribe({
          next: leaves => {
            this.leaveRequests = leaves || [];
            this.buildView();
          },
          error: () => {
            this.leaveRequests = [];
            this.buildView();
          }
        });
      },
      error: () => {
        this.attendanceRecords = [];
        this.buildView();
      }
    });
  }

  private buildView(): void {
    let present = 0, absent = 0, late = 0, leave = 0, hoursWorked = 0;
    this.attendanceRecords.forEach(r => {
      hoursWorked += Number(r.workHours) || 0;
      const s = String(r.status || '').toUpperCase();
      if (s === 'LATE') {
        late++;
        present++;
      } else if (s === 'PRESENT' || s === 'HALF_DAY' || (r.checkIn && s === 'PRESENT')) {
        present++;
      } else if (s === 'ABSENT') {
        absent++;
      } else if (s === 'ON_LEAVE') {
        leave++;
      }
    });
    let pendingLeave = 0, rejectedLeave = 0;
    this.leaveRequests.forEach(l => {
      const s = String(l.status || '').toUpperCase();
      if (s === 'PENDING') {
        pendingLeave++;
        leave += Number(l.totalDays) || 1;
      } else if (s === 'REJECTED') {
        rejectedLeave++;
      } else if (s === 'APPROVED') {
        leave += Number(l.totalDays) || 1;
      }
    });
    const totalWorkingDays = Math.max(1, this.summaryStats.totalWorkingDays);
    const rate = Math.round((present / totalWorkingDays) * 1000) / 10;
    this.summaryStats = {
      attendanceRate: rate + '%',
      present,
      absent,
      late,
      leave,
      pending: pendingLeave,
      rejected: rejectedLeave,
      totalWorkingDays: this.summaryStats.totalWorkingDays
    };
    this.buildCalendar();
    this.buildHistory();
  }

  private buildCalendar(): void {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const grid: CalendarCell[] = [];
    const first = new Date(year, month, 1);
    const offset = (first.getDay() + 6) % 7;
    for (let i = 0; i < offset; i++) {
      grid.push({ day: null, badge: null, status: 'empty' });
    }
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = now.getDate();
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      const key = this.dateKey(date);
      const rec = this.attendanceRecords.find(r => String(r.date || '').slice(0, 10) === key);
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      let badge: string | null = null;
      let status = 'regular';
      if (isWeekend) {
        badge = 'WO';
        status = 'weekend';
      } else if (rec) {
        const s = String(rec.status || '').toUpperCase();
        if (s === 'PRESENT' || s === 'HALF_DAY') {
          badge = 'P';
          status = 'present';
        } else if (s === 'LATE') {
          badge = 'L';
          status = 'late';
        } else if (s === 'ABSENT') {
          badge = 'A';
          status = 'absent';
        } else if (s === 'ON_LEAVE') {
          badge = 'LV';
          status = 'leave';
        } else {
          badge = 'P';
          status = 'present';
        }
      }
      grid.push({ day: d, badge, status, isToday: d === today });
    }
    while (grid.length % 7 !== 0) {
      grid.push({ day: null, badge: null, status: 'empty' });
    }
    this.calendarGrid = grid;
  }

  private buildHistory(): void {
    this.historyLogs = [...this.attendanceRecords]
      .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')))
      .map(r => {
        const s = String(r.status || '').toUpperCase();
        return {
          dateFormatted: this.formatFullDate(r.date),
          clockIn: this.formatTime(r.checkIn),
          clockOut: r.checkOut ? this.formatTime(r.checkOut) : '--',
          workedHours: this.formatHours(r.workHours),
          grossHours: this.formatHours((Number(r.workHours) || 0) + (Number(r.overtime) || 0)),
          status: this.statusLabel(s),
          badgeClass: this.statusBadge(s),
          type: 'present'
        };
      });
  }

  private statusLabel(s: string): string {
    if (s === 'PRESENT') return 'Present';
    if (s === 'LATE') return 'Late';
    if (s === 'ABSENT') return 'Absent';
    if (s === 'ON_LEAVE') return 'Leave';
    return s.charAt(0) + s.slice(1).toLowerCase();
  }

  private statusBadge(s: string): string {
    if (s === 'LATE') return 'warning';
    if (s === 'ABSENT') return 'danger';
    if (s === 'ON_LEAVE') return 'info';
    if (s === 'PRESENT') return 'success';
    return 'primary';
  }

  private workingDaysInMonth(d: Date): number {
    const year = d.getFullYear();
    const month = d.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let count = 0;
    for (let day = 1; day <= daysInMonth; day++) {
      const dow = new Date(year, month, day).getDay();
      if (dow !== 0 && dow !== 6) count++;
    }
    return count;
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

  private formatFullDate(value?: string): string {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' });
  }

  private formatTime(value?: any): string {
    if (!value || value === '—' || value === '--' || value === 'null') return '—';
    const str = String(value).trim();
    if (str === '—' || str === '--') return '—';
    
    if (str.includes('AM') || str.includes('PM')) return str;

    if (str.includes('T') || str.includes('-')) {
      const d = new Date(str);
      if (!isNaN(d.getTime())) {
        return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
      }
    }

    if (str.includes(':')) {
      const parts = str.split(':');
      let hours = parseInt(parts[0], 10);
      const minutes = parts[1] ? parts[1].slice(0, 2) : '00';
      if (!isNaN(hours)) {
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const hStr = String(hours).padStart(2, '0');
        return `${hStr}:${minutes} ${ampm}`;
      }
    }

    return str;
  }

  private formatHours(value?: any): string {
    if (value === null || value === undefined || value === '' || value === '—' || value === '--') return '—';
    
    const strVal = String(value).replace(/hrs|hr|h|m/gi, '').trim();
    const num = parseFloat(strVal);
    if (isNaN(num) || num <= 0) return '0 hrs';

    const totalMinutes = Math.round(num * 60);
    if (totalMinutes < 1) return '< 1 min';
    
    const h = Math.floor(totalMinutes / 60);
    const m = totalMinutes % 60;
    
    if (h === 0) return `${m} mins`;
    if (m === 0) return `${h} hrs`;
    return `${h}h ${m}m`;
  }

  setFilter(filterName: string): void {
    this.activeFilter = filterName;
  }
}