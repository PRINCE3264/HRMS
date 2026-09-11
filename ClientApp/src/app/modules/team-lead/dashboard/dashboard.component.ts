import { Component, OnInit, OnDestroy } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AuthService, DashboardService, EmployeeService, AttendanceService } from '../../../core/services';
import { UpcomingBirthday, User } from '../../../core/models';

@Component({
  selector: 'app-tl-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class TlDashboardComponent implements OnInit, OnDestroy {
  currentUser: User | null = null;
  currentTimeString = '';
  currentAmpm = 'PM';
  currentDateString = '';
  clockTimer: any;
  isClockedIn = false;

  attendanceScore = {
    streak: '5 Days',
    percentage: '92%',
    points: 480
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
  birthdays: UpcomingBirthday[] = [];

  constructor(
    private authService: AuthService,
    private dashboardService: DashboardService,
    private employeeService: EmployeeService,
    private attendanceService: AttendanceService
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });

    this.updateClock();
    this.clockTimer = setInterval(() => this.updateClock(), 1000);

    this.loadData();
    this.loadBirthdays();
  }

  ngOnDestroy(): void {
    if (this.clockTimer) {
      clearInterval(this.clockTimer);
    }
  }

  loadData(): void {
    const user = this.authService.currentUser;
    if (!user?.employeeId) return;

    const today = new Date().toISOString().split('T')[0];

    forkJoin({
      employees: this.employeeService.getAllEmployees(),
      attendance: this.attendanceService.getByDate(today)
    }).subscribe(({ employees, attendance }) => {
      const team = employees.filter(e => e.reportingManagerId === user.employeeId);
      this.overviewStats.totalDays = team.length;

      const teamIds = new Set(team.map(e => e.id));
      const teamRecords = attendance.filter(a => teamIds.has(a.employeeId));

      const present = teamRecords.filter(r => r.status === 'PRESENT' || r.status === 'LATE');
      this.overviewStats.presentDays = present.length;
      this.overviewStats.lateClockIns = teamRecords.filter(r => r.status === 'LATE').length;
      this.overviewStats.absentLeaves = team.length - present.length;

      if (team.length > 0) {
        this.overviewStats.attendanceRate = Math.round((present.length / team.length) * 100) + '%';
      }

      const totalHours = teamRecords.reduce((sum, r) => sum + (r.workHours || 0), 0);
      this.overviewStats.loggedHours = Math.round(totalHours) + 'h logged';

      this.activityLogs = teamRecords.filter(r => r.checkIn).map(r => {
        const ci = new Date(r.checkIn!);
        const co = r.checkOut ? new Date(r.checkOut) : null;
        return {
          id: r.id,
          date: ci.toLocaleDateString('en-US', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' }),
          inTime: ci.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          outTime: co ? co.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : 'Working',
          netHours: r.workHours ? `${Math.floor(r.workHours)}h ${Math.round((r.workHours % 1) * 60)}m` : '--',
          statusBadge: r.status === 'LATE' ? 'Late' : 'Approved',
          badgeType: r.status === 'LATE' ? 'warning' : 'success',
          onTimeStatus: r.status === 'LATE' ? 'Late' : 'On Time',
          avatar: 'assets/images/user-avatar.png'
        };
      });
    });
  }

  loadBirthdays(): void {
    this.dashboardService.getUpcomingBirthdays(7).subscribe({
      next: (data) => this.birthdays = data.slice(0, 5),
      error: () => {}
    });
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
    this.isClockedIn = !this.isClockedIn;
  }
}
