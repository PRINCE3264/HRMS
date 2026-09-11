import { Component, OnInit } from '@angular/core';
import { DashboardService, ReportService } from '../../../core/services';
import { DashboardStats, ChartData } from '../../../core/models';

@Component({
  selector: 'app-hr-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class HrReportsComponent implements OnInit {
  headcountData = [
    { label: 'Jan', value: 65, color: '#6366f1' },
    { label: 'Feb', value: 68, color: '#6366f1' },
    { label: 'Mar', value: 72, color: '#6366f1' },
    { label: 'Apr', value: 70, color: '#6366f1' },
    { label: 'May', value: 75, color: '#6366f1' },
    { label: 'Jun', value: 78, color: '#6366f1' },
    { label: 'Jul', value: 80, color: '#6366f1' },
    { label: 'Aug', value: 82, color: '#6366f1' },
    { label: 'Sep', value: 85, color: '#6366f1' },
    { label: 'Oct', value: 88, color: '#6366f1' },
    { label: 'Nov', value: 90, color: '#6366f1' },
    { label: 'Dec', value: 95, color: '#10b981' },
  ];
  deptDistribution: any[] = [];
  turnoverData = [
    { reason: 'Voluntary Resignation', pct: 5.2, color: '#6366f1' },
    { reason: 'End of Contract', pct: 1.8, color: '#f59e0b' },
    { reason: 'Termination', pct: 0.9, color: '#ef4444' },
    { reason: 'Retirement', pct: 0.3, color: '#10b981' },
  ];
  attendanceData = [
    { day: 'Mon', present: 92, absent: 5, leave: 3 },
    { day: 'Tue', present: 88, absent: 7, leave: 5 },
    { day: 'Wed', present: 90, absent: 4, leave: 6 },
    { day: 'Thu', present: 85, absent: 8, leave: 7 },
    { day: 'Fri', present: 78, absent: 10, leave: 12 },
  ];
  metrics = [
    { label: 'Avg. Time to Hire', value: '23 days', icon: 'fas fa-clock', bgColor: '#ede9fe', iconColor: '#7c3aed', change: '-3 days', trend: 'up' },
    { label: 'Employee Satisfaction', value: '4.3/5', icon: 'fas fa-smile', bgColor: '#ecfdf5', iconColor: '#10b981', change: '+0.2', trend: 'up' },
    { label: 'Training Hours', value: '1,240 hrs', icon: 'fas fa-graduation-cap', bgColor: '#dbeafe', iconColor: '#2563eb', change: '+180', trend: 'up' },
    { label: 'Absenteeism Rate', value: '3.2%', icon: 'fas fa-user-slash', bgColor: '#fef2f2', iconColor: '#ef4444', change: '-0.5%', trend: 'up' },
    { label: 'Overtime Hours', value: '320 hrs', icon: 'fas fa-hourglass-half', bgColor: '#fef3c7', iconColor: '#d97706', change: '+45 hrs', trend: 'down' },
  ];
  hiringFunnel = [
    { stage: 'Applications', count: 248, width: '100%', color: '#6366f1' },
    { stage: 'Screened', count: 142, width: '75%', color: '#818cf8' },
    { stage: 'Interviewed', count: 68, width: '50%', color: '#a78bfa' },
    { stage: 'Offered', count: 24, width: '30%', color: '#c4b5fd' },
    { stage: 'Hired', count: 18, width: '22%', color: '#10b981' },
  ];

  private deptColors: string[] = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

  constructor(private dashboardService: DashboardService, private reportService: ReportService) {}

  ngOnInit(): void {
    this.loadDeptDistribution();
    this.loadAttendanceTrend();
  }

  loadDeptDistribution(): void {
    this.dashboardService.getDepartmentDistribution().subscribe({
      next: (data) => {
        this.deptDistribution = data.labels.map((label, i) => ({
          name: label,
          count: data.datasets?.[0]?.data?.[i] || 0,
          color: this.deptColors[i % this.deptColors.length],
        }));
      }
    });
  }

  loadAttendanceTrend(): void {
    this.reportService.getAttendanceTrend(30).subscribe({
      next: (data) => {
        if (data.labels?.length) {
          this.attendanceData = data.labels.map((day, i) => ({
            day,
            present: data.datasets?.[0]?.data?.[i] || 0,
            absent: data.datasets?.[1]?.data?.[i] || 0,
            leave: data.datasets?.[2]?.data?.[i] || 0,
          }));
        }
      }
    });
  }
}
