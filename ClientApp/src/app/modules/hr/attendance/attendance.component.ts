import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../../core/services';
import { Attendance } from '../../../core/models';

@Component({
  selector: 'app-hr-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class HrAttendanceComponent implements OnInit {
  attendance: any[] = [];

  private deptColors: Record<string, string> = {
    'Engineering': '#6366f1',
    'Marketing': '#10b981',
    'Finance': '#f59e0b',
    'Design': '#ef4444',
    'HR': '#8b5cf6',
    'Operations': '#06b6d4',
  };

  constructor(private attendanceService: AttendanceService) {}

  ngOnInit(): void {
    this.loadAttendance();
  }

  loadAttendance(): void {
    const today = new Date().toISOString().split('T')[0];
    this.attendanceService.getByDate(today).subscribe({
      next: (data) => {
        this.attendance = data.map(a => ({
          employeeId: a.employeeId,
          name: a.employeeName,
          department: '',
          clockIn: a.checkIn ? new Date(a.checkIn).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }) : null,
          clockOut: a.checkOut ? new Date(a.checkOut).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }) : null,
          hours: a.workHours ? a.workHours + 'h' : null,
          status: this.mapAttendanceStatus(a.status),
          color: '#6366f1',
        }));
      }
    });
  }

  private mapAttendanceStatus(status: string): string {
    switch (status?.toLowerCase()) {
      case 'present': return 'Present';
      case 'absent': return 'Absent';
      case 'late': return 'Late';
      case 'on_leave': return 'On Leave';
      case 'half_day': return 'Half Day';
      case 'holiday': return 'Holiday';
      case 'week_off': return 'Week Off';
      default: return status || 'Unknown';
    }
  }
}
