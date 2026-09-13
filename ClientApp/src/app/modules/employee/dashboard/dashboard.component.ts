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
  currentDateFormatted = 'Sat, 13 Sep 2026';
  motivationalQuote = '"Small steps every day lead to big results."';
  clockTimer: any;
  isClockedIn = false;

  // Stat Cards
  checkInTime = '09:12 AM';
  leaveBalanceDays = 12;
  pendingTasksCount = 5;
  newAnnouncementsCount = 3;

  // Weekly Attendance
  weeklyAttendance = [
    { day: 'Mon', date: '8 Sep', height: 75, status: 'present' },
    { day: 'Tue', date: '9 Sep', height: 68, status: 'present' },
    { day: 'Wed', date: '10 Sep', height: 62, status: 'present' },
    { day: 'Thu', date: '11 Sep', height: 70, status: 'present' },
    { day: 'Fri', date: '12 Sep', height: 65, status: 'absent' },
    { day: 'Sat', date: '13 Sep', height: 75, status: 'present' }
  ];

  // Leave Summary
  leaveSummary = {
    total: 15,
    used: 3,
    remaining: 12
  };

  leaveDonutSegments = [
    { label: 'Used', value: 3, color: '#3b82f6' },
    { label: 'Remaining', value: 12, color: '#10b981' }
  ];

  // My Tasks
  myTasks = [
    { id: 1, title: 'UI fixes for Leave Module', priority: 'High', priorityClass: 'high', dueDate: 'Due Today', completed: false },
    { id: 2, title: 'Integrate Attendance API', priority: 'Medium', priorityClass: 'medium', dueDate: 'Due 14 Sep', completed: false },
    { id: 3, title: 'Update Profile Information', priority: 'Low', priorityClass: 'low', dueDate: 'Due 16 Sep', completed: false },
    { id: 4, title: 'Prepare Sprint Report', priority: 'Medium', priorityClass: 'medium', dueDate: 'Due 16 Sep', completed: false },
    { id: 5, title: 'Review Design Changes', priority: 'Low', priorityClass: 'low', dueDate: 'Due 18 Sep', completed: false }
  ];

  // Upcoming Holidays
  upcomingHolidays = [
    { day: '02', month: 'Oct', title: 'Gandhi Jayanti', type: 'National Holiday', colorClass: 'blue' },
    { day: '12', month: 'Nov', title: 'Diwali', type: 'National Holiday', colorClass: 'red' },
    { day: '25', month: 'Dec', title: 'Christmas', type: 'Restricted Holiday', colorClass: 'green' }
  ];

  // Recent Announcements
  recentAnnouncements = [
    { id: 1, department: 'HR', title: 'Annual Appraisal Process 2026', meta: 'HR Department • 12 Sep 2026', badgeClass: 'hr-badge' },
    { id: 2, department: 'IT', title: 'System Maintenance Notice', meta: 'IT Department • 10 Sep 2026', badgeClass: 'it-badge' },
    { id: 3, department: 'HR', title: 'New Leave Policy Update', meta: 'HR Department • 08 Sep 2026', badgeClass: 'policy-badge' }
  ];

  // My Team
  myTeamMembers = [
    { id: 1, name: 'Amit Kumar', role: 'Team Lead', avatar: 'https://i.pravatar.cc/150?img=13' },
    { id: 2, name: 'Sneha Verma', role: 'Backend Developer', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 3, name: 'Neha Singh', role: 'QA Engineer', avatar: 'https://i.pravatar.cc/150?img=9' },
    { id: 4, name: 'Vikram Patel', role: 'Flutter Developer', avatar: 'https://i.pravatar.cc/150?img=12' }
  ];

  attendanceScore = {
    streak: '2 Day',
    percentage: '92%',
    points: 100
  };

  overviewStats = {
    presentDays: 22,
    totalDays: 24,
    attendanceRate: '92%',
    loggedHours: '176h logged',
    absentLeaves: 2,
    lateClockIns: 1
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

  toggleTask(task: any): void {
    task.completed = !task.completed;
    if (task.completed) {
      this.toast.success(`Task "${task.title}" marked completed!`);
    }
  }

  private loadData(): void {
    const employeeId = this.authService.currentUser?.employeeId;
    this.attendanceService.getToday().subscribe({
      next: record => {
        this.isClockedIn = !!record && !!record.checkIn && !record.checkOut;
        if (record && record.checkIn) {
          this.checkInTime = this.formatTime(record.checkIn);
        }
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
    const rate = total ? Math.round((present / Math.max(1, total)) * 100) : 92;
    this.overviewStats = {
      presentDays: present || 22,
      totalDays: total || 24,
      attendanceRate: (rate || 92) + '%',
      loggedHours: `${(hours || 176).toFixed(1)}h logged`,
      absentLeaves: absent + leave || 2,
      lateClockIns: late || 1
    };
    this.attendanceScore = {
      streak: `${Math.min(2, Math.max(1, present))} Day`,
      percentage: rate + '%',
      points: (present || 2) * 50
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
    if (!value) return '09:12 AM';
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

    const options: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
    this.currentDateFormatted = now.toLocaleDateString('en-US', options);
    this.currentDateString = now.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
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

  getInitial(name: string): string {
    return name ? name.charAt(0).toUpperCase() : 'R';
  }
}