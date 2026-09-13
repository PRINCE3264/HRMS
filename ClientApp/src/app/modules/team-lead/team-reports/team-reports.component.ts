import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ReportService, PerformanceService, LeaveService, AuthService, EmployeeService, ExcelExportService } from '../../../core/services';

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
export class TlReportsComponent implements OnInit {
  selectedPeriod = 'month';
  fromDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0];
  toDate = new Date().toISOString().split('T')[0];

  attendanceData: AttendanceReportItem[] = [];
  taskDistribution: TaskDistributionItem[] = [];
  leaveSummary: LeaveReportItem[] = [];
  topMembers: TopMemberPerformance[] = [];

  constructor(
    private reportService: ReportService,
    private performanceService: PerformanceService,
    private leaveService: LeaveService,
    private authService: AuthService,
    private employeeService: EmployeeService,
    private excelExport: ExcelExportService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  exportExcel(): void {
    if (this.attendanceData && this.attendanceData.length > 0) {
      this.excelExport.exportToExcel(this.attendanceData, 'Team_Attendance_Report');
    } else {
      this.excelExport.exportToExcel(this.taskDistribution, 'Team_Task_Distribution');
    }
  }

  loadData(): void {
    const user = this.authService.currentUser;

    forkJoin({
      trend: this.reportService.getAttendanceTrend(7),
      tasks: this.performanceService.getAssignedByMe(),
      leaves: this.leaveService.getRequests({}),
      reviews: this.performanceService.getReviews(),
      employees: this.employeeService.getAllEmployees()
    }).subscribe(({ trend, tasks, leaves, reviews, employees }) => {
      const team = user?.employeeId
        ? employees.filter(e => e.reportingManagerId === user.employeeId)
        : employees;

      if (trend.labels?.length && trend.datasets?.length) {
        const ds = trend.datasets[0];
        this.attendanceData = trend.labels.map((label, i) => ({
          day: label.substring(0, 3),
          present: ds.data[i] || 0,
          absent: Math.max(0, team.length - (ds.data[i] || 0)),
          late: 0,
          percentage: team.length > 0 ? Math.round(((ds.data[i] || 0) / team.length) * 100) : 0
        }));
      }

      const total = tasks.length || 1;
      const byStatus: Record<string, number> = {};
      tasks.forEach(t => { byStatus[t.status] = (byStatus[t.status] || 0) + 1; });

      this.taskDistribution = [
        { label: 'Completed (Done)', count: byStatus['COMPLETED'] || 0, percentage: Math.round(((byStatus['COMPLETED'] || 0) / total) * 100), color: '#16a34a' },
        { label: 'In Progress', count: byStatus['IN_PROGRESS'] || 0, percentage: Math.round(((byStatus['IN_PROGRESS'] || 0) / total) * 100), color: '#2563eb' },
        { label: 'In Review / QA', count: byStatus['IN_REVIEW'] || 0, percentage: Math.round(((byStatus['IN_REVIEW'] || 0) / total) * 100), color: '#d97706' },
        { label: 'To Do / Backlog', count: byStatus['TODO'] || 0, percentage: Math.round(((byStatus['TODO'] || 0) / total) * 100), color: '#ef4444' },
      ];

      const leaveItems = leaves.items || [];
      const byType: Record<string, number> = {};
      leaveItems.forEach(l => { byType[l.leaveType] = (byType[l.leaveType] || 0) + l.totalDays; });
      const maxDays = Math.max(...Object.values(byType), 1);
      const colors = ['#2563eb', '#ef4444', '#d97706', '#9333ea', '#64748b'];
      this.leaveSummary = Object.entries(byType).map(([label, count], i) => ({
        label,
        count,
        percent: Math.round((count / maxDays) * 100),
        color: colors[i % colors.length]
      }));

      const teamIds = new Set(team.map(e => e.id));
      const teamReviews = reviews.filter(r => teamIds.has(r.employeeId));
      this.topMembers = teamReviews
        .sort((a, b) => b.overallRating - a.overallRating)
        .slice(0, 4)
        .map(r => ({
          name: r.employeeName,
          role: team.find(e => e.id === r.employeeId)?.designation || '',
          tasksCompleted: tasks.filter(t => t.assignedTo === r.employeeId && t.status === 'COMPLETED').length,
          onTimeRate: Math.round(r.competencyRating * 20) || 90,
          rating: r.overallRating
        }));
    });
  }

  getInitial(name: string): string {
    return name ? name.charAt(0).toUpperCase() : 'U';
  }
}
