import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { EmployeeService, AttendanceService, AuthService } from '../../../core/services';
import { AttendanceStatus } from '../../../core/models';

export interface AttendanceRecord {
  id: string;
  name: string;
  employeeId: string;
  department: string;
  status: 'PRESENT' | 'ABSENT' | 'LATE' | 'PENDING';
  inTime?: string;
  outTime?: string;
  breakHours?: string;
  netHours?: string;
  statusBadge?: string;
  avatar?: string;
}

@Component({
  selector: 'app-tl-attendance',
  templateUrl: './team-attendance.component.html',
  styleUrls: ['./team-attendance.component.scss']
})
export class TlAttendanceComponent implements OnInit {
  activeTab: 'attendance' | 'summary' = 'attendance';
  searchQuery = '';
  filterStatus = 'ALL';
  selectedDateLabel = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short' });

  attendance: AttendanceRecord[] = [];

  constructor(
    private employeeService: EmployeeService,
    private attendanceService: AttendanceService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadData();
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
      this.attendance = team.map(e => {
        const record = attendance.find(a => a.employeeId === e.id);
        const status = record ? this.mapStatus(record.status) : 'ABSENT';
        return {
          id: record?.id || e.id,
          name: `${e.firstName} ${e.lastName}`,
          employeeId: e.employeeId,
          department: e.department,
          status,
          inTime: record?.checkIn ? this.formatTime(record.checkIn) : undefined,
          outTime: record?.checkOut ? this.formatTime(record.checkOut) : (status === 'PRESENT' ? 'Working' : undefined),
          breakHours: undefined,
          netHours: record?.workHours ? `${Math.floor(record.workHours)}h ${Math.round((record.workHours % 1) * 60)}m` : undefined,
          statusBadge: status === 'PRESENT' ? 'Approved' : (status === 'LATE' ? 'Late' : undefined)
        };
      });
    });
  }

  private mapStatus(s: AttendanceStatus): 'PRESENT' | 'ABSENT' | 'LATE' | 'PENDING' {
    switch (s) {
      case AttendanceStatus.PRESENT: return 'PRESENT';
      case AttendanceStatus.LATE: return 'LATE';
      case AttendanceStatus.ON_LEAVE: return 'ABSENT';
      case AttendanceStatus.HALF_DAY: return 'LATE';
      default: return 'ABSENT';
    }
  }

  private formatTime(iso: string): string {
    const d = new Date(iso);
    return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  }

  get filteredAttendance(): AttendanceRecord[] {
    return this.attendance.filter(a => {
      if (this.filterStatus !== 'ALL' && a.status !== this.filterStatus) {
        return false;
      }
      if (this.searchQuery.trim()) {
        const q = this.searchQuery.toLowerCase();
        const matchName = a.name.toLowerCase().includes(q);
        const matchId = a.employeeId.toLowerCase().includes(q);
        const matchDept = a.department.toLowerCase().includes(q);
        if (!matchName && !matchId && !matchDept) return false;
      }
      return true;
    });
  }

  get totalMembersCount(): number { return this.attendance.length; }
  get presentCount(): number { return this.attendance.filter(a => a.status === 'PRESENT').length; }
  get absentCount(): number { return this.attendance.filter(a => a.status === 'ABSENT').length; }
  get lateCount(): number { return this.attendance.filter(a => a.status === 'LATE').length; }
  get pendingCount(): number { return this.attendance.filter(a => a.status === 'PENDING').length; }

  get attendanceRatePercentage(): number {
    if (this.totalMembersCount === 0) return 0;
    return Math.round((this.presentCount / this.totalMembersCount) * 100);
  }

  get absentMembers(): AttendanceRecord[] {
    return this.attendance.filter(a => a.status === 'ABSENT');
  }

  getInitial(name: string): string {
    if (!name) return 'U';
    return name.trim().charAt(0).toUpperCase();
  }
}
