import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../core/models';

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
    presentDays: 22,
    totalDays: 24,
    attendanceRate: '92%',
    loggedHours: '176h logged',
    absentLeaves: 2,
    lateClockIns: 1
  };

  activityLogs = [
    {
      id: 1,
      date: 'Wed, 09 Sep 2026',
      inTime: '09:00 AM',
      outTime: '06:30 PM',
      netHours: '9h 30m',
      statusBadge: 'Approved',
      badgeType: 'success',
      onTimeStatus: 'On Time',
      avatar: 'assets/images/user-avatar.png'
    },
    {
      id: 2,
      date: 'Tue, 08 Sep 2026',
      inTime: '09:05 AM',
      outTime: '06:15 PM',
      netHours: '9h 10m',
      statusBadge: 'Completed',
      badgeType: 'primary',
      onTimeStatus: 'On Time',
      avatar: 'assets/images/user-avatar.png'
    },
    {
      id: 3,
      date: 'Mon, 07 Sep 2026',
      inTime: '08:58 AM',
      outTime: '06:45 PM',
      netHours: '9h 47m',
      statusBadge: 'Approved',
      badgeType: 'success',
      onTimeStatus: 'On Time',
      avatar: 'assets/images/user-avatar.png'
    }
  ];

  teamMembers = [
    { name: 'John Smith', designation: 'Senior Developer', status: 'PRESENT' },
    { name: 'Emily Davis', designation: 'Developer', status: 'PRESENT' },
    { name: 'David Lee', designation: 'Junior Developer', status: 'LATE' },
    { name: 'Maria Garcia', designation: 'Developer', status: 'ABSENT' },
    { name: 'James Brown', designation: 'Senior Developer', status: 'PRESENT' },
    { name: 'Anna Wilson', designation: 'Developer', status: 'PRESENT' },
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

