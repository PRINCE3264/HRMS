import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
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
    streak: '2 Day',
    percentage: '75%',
    points: 150
  };

  overviewStats = {
    presentDays: 3,
    totalDays: 4,
    attendanceRate: '75%',
    loggedHours: '18.5h logged',
    absentLeaves: 2,
    lateClockIns: 0
  };

  activityLogs = [
    {
      id: 1,
      date: 'Wed, 09 Sep 2026',
      inTime: '12:32 AM',
      outTime: '--',
      netHours: '37h 3m',
      statusBadge: 'Approved',
      badgeType: 'success',
      onTimeStatus: 'On Time',
      avatar: 'assets/images/user-avatar.png'
    },
    {
      id: 2,
      date: 'Tue, 08 Sep 2026',
      inTime: '09:09 AM',
      outTime: '06:02 PM',
      netHours: '8h 31m',
      statusBadge: 'Completed',
      badgeType: 'primary',
      onTimeStatus: 'On Time',
      avatar: 'assets/images/user-avatar.png'
    },
    {
      id: 3,
      date: 'Mon, 07 Sep 2026',
      inTime: '09:05 AM',
      outTime: '06:42 PM',
      netHours: '6h 41m',
      statusBadge: 'Approved',
      badgeType: 'success',
      onTimeStatus: 'On Time',
      avatar: 'assets/images/user-avatar.png'
    }
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });

    this.updateClock();
    this.clockTimer = setInterval(() => this.updateClock(), 1000);
  }

  ngOnDestroy(): void {
    if (this.clockTimer) {
      clearInterval(this.clockTimer);
    }
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
