import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../core/models';

@Component({
  selector: 'app-emp-attendance',
  templateUrl: './my-attendance.component.html',
  styleUrls: ['./my-attendance.component.scss']
})
export class EmpAttendanceComponent implements OnInit {
  currentUser: User | null = null;
  currentMonth = 'September 2026';
  activeFilter = 'All';

  summaryStats = {
    attendanceRate: '13.6%',
    present: 3,
    absent: 4,
    late: 0,
    leave: 2,
    pending: 0,
    rejected: 0,
    totalWorkingDays: 22
  };

  weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  calendarGrid = [
    { day: null, badge: null },
    { day: 1, badge: 'A', status: 'absent' },
    { day: 2, badge: 'A', status: 'absent' },
    { day: 3, badge: 'A', status: 'absent' },
    { day: 4, badge: 'A', status: 'absent' },
    { day: 5, badge: 'WO', status: 'weekend' },
    { day: 6, badge: 'WO', status: 'weekend' },
    { day: 7, badge: 'P', status: 'present' },
    { day: 8, badge: 'P', status: 'present' },
    { day: 9, badge: 'P', status: 'present' },
    { day: 10, badge: 'A', status: 'absent', isToday: true },
    { day: 11, badge: null, status: 'regular' },
    { day: 12, badge: 'WO', status: 'weekend' },
    { day: 13, badge: 'WO', status: 'weekend' },
    { day: 14, badge: null, status: 'regular' },
    { day: 15, badge: null, status: 'regular' },
    { day: 16, badge: null, status: 'regular' },
    { day: 17, badge: null, status: 'regular' },
    { day: 18, badge: null, status: 'regular' },
    { day: 19, badge: 'WO', status: 'weekend' },
    { day: 20, badge: 'WO', status: 'weekend' },
    { day: 21, badge: null, status: 'regular' },
    { day: 22, badge: null, status: 'regular' },
    { day: 23, badge: null, status: 'regular' },
    { day: 24, badge: null, status: 'regular' },
    { day: 25, badge: null, status: 'regular' },
    { day: 26, badge: 'WO', status: 'weekend' },
    { day: 27, badge: 'WO', status: 'weekend' },
    { day: 28, badge: null, status: 'regular' },
    { day: 29, badge: null, status: 'regular' },
    { day: 30, badge: null, status: 'regular' }
  ];

  historyLogs = [
    {
      id: 1,
      dateFormatted: 'Wednesday, 09 Sep 2026',
      clockIn: '12:32 AM',
      clockOut: '--',
      workedHours: '37h 13m',
      grossHours: '46h 16m',
      status: 'Approved',
      badgeClass: 'success',
      type: 'present'
    },
    {
      id: 2,
      dateFormatted: 'Tuesday, 08 Sep 2026',
      clockIn: '09:09 AM',
      clockOut: '06:02 PM',
      workedHours: '8h 31m',
      grossHours: '8h 53m',
      status: 'Completed',
      badgeClass: 'primary',
      type: 'present'
    },
    {
      id: 3,
      dateFormatted: 'Monday, 07 Sep 2026',
      clockIn: '09:05 AM',
      clockOut: '06:42 PM',
      workedHours: '6h 41m',
      grossHours: '9h 37m',
      status: 'Approved',
      badgeClass: 'success',
      type: 'present'
    }
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  setFilter(filterName: string): void {
    this.activeFilter = filterName;
  }
}
