import { Component } from '@angular/core';

export interface AttendanceReportItem {
  day: string;
  present: number;
  absent: number;
  late: number;
  percentage: number;
}

export interface TaskDistributionItem {
  label: string;
  count: number;
  percentage: number;
  color: string;
}

export interface LeaveReportItem {
  label: string;
  count: number;
  percent: number;
  color: string;
}

export interface TopMemberPerformance {
  name: string;
  role: string;
  tasksCompleted: number;
  onTimeRate: number;
  rating: number;
}

@Component({
  selector: 'app-tl-reports',
  templateUrl: './team-reports.component.html',
  styleUrls: ['./team-reports.component.scss']
})
export class TlReportsComponent {
  selectedPeriod = 'month';
  fromDate = '2026-09-01';
  toDate = '2026-09-30';

  attendanceData: AttendanceReportItem[] = [
    { day: 'Mon', present: 11, absent: 1, late: 0, percentage: 92 },
    { day: 'Tue', present: 10, absent: 2, late: 1, percentage: 83 },
    { day: 'Wed', present: 12, absent: 0, late: 0, percentage: 100 },
    { day: 'Thu', present: 9, absent: 3, late: 1, percentage: 75 },
    { day: 'Fri', present: 10, absent: 2, late: 0, percentage: 83 },
  ];

  taskDistribution: TaskDistributionItem[] = [
    { label: 'Completed (Done)', count: 18, percentage: 40, color: '#16a34a' },
    { label: 'In Progress', count: 14, percentage: 30, color: '#2563eb' },
    { label: 'In Review / QA', count: 7, percentage: 16, color: '#d97706' },
    { label: 'To Do / Backlog', count: 6, percentage: 14, color: '#ef4444' },
  ];

  leaveSummary: LeaveReportItem[] = [
    { label: 'Annual Leave', count: 15, percent: 75, color: '#2563eb' },
    { label: 'Sick Leave', count: 8, percent: 40, color: '#ef4444' },
    { label: 'Personal Leave', count: 5, percent: 25, color: '#d97706' },
    { label: 'Maternity / Paternity', count: 2, percent: 10, color: '#9333ea' },
    { label: 'Unpaid Leave', count: 3, percent: 15, color: '#64748b' },
  ];

  topMembers: TopMemberPerformance[] = [
    { name: 'PRINCE VIDYARTHI', role: 'Lead Software Engineer', tasksCompleted: 14, onTimeRate: 98, rating: 4.9 },
    { name: 'Jigar Chovatiya', role: 'Full Stack Engineer', tasksCompleted: 12, onTimeRate: 94, rating: 4.8 },
    { name: 'Ananya Roy', role: 'UI/UX Designer', tasksCompleted: 10, onTimeRate: 90, rating: 4.7 },
    { name: 'Gaurav Modi', role: 'Frontend Engineer', tasksCompleted: 9, onTimeRate: 88, rating: 4.6 },
  ];

  getInitial(name: string): string {
    return name ? name.charAt(0).toUpperCase() : 'U';
  }
}

