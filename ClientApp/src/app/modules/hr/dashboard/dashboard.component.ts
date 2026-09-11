import { Component, OnInit } from '@angular/core';
import { DashboardService, LeaveService, ReportService } from '../../../core/services';
import { DashboardStats, ChartData, UpcomingBirthday } from '../../../core/models';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class HrDashboardComponent implements OnInit {
  stats: DashboardStats = {
    totalEmployees: 0,
    activeEmployees: 0,
    presentToday: 0,
    absentToday: 0,
    departments: 0,
    pendingLeaves: 0,
    newJoiners: 0,
    pendingRequests: 0,
  };

  pendingLeaves: any[] = [];
  birthdays: UpcomingBirthday[] = [];
  recentActivity: any[] = [];
  departments: any[] = [];

  constructor(
    private dashboardService: DashboardService,
    private leaveService: LeaveService,
    private reportService: ReportService,
  ) {}

  ngOnInit(): void {
    this.loadStats();
    this.loadPendingLeaves();
    this.loadDeptDistribution();
    this.loadActivity();
    this.loadBirthdays();
  }

  loadStats(): void {
    this.dashboardService.getStats().subscribe({
      next: (data) => this.stats = data,
    });
  }

  loadPendingLeaves(): void {
    this.leaveService.getPending().subscribe({
      next: (data) => {
        this.pendingLeaves = data.slice(0, 5).map(l => ({
          name: l.employeeName,
          type: l.leaveType,
          days: l.totalDays,
          id: l.id,
        }));
      }
    });
  }

  loadDeptDistribution(): void {
    this.dashboardService.getDepartmentDistribution().subscribe({
      next: (data) => {
        const total = data.datasets?.[0]?.data?.reduce((a, b) => a + b, 0) || 1;
        this.departments = data.labels.map((label, i) => ({
          name: label,
          count: data.datasets?.[0]?.data?.[i] || 0,
          pct: Math.round(((data.datasets?.[0]?.data?.[i] || 0) / total) * 100),
          color: Array.isArray(data.datasets?.[0]?.backgroundColor)
            ? data.datasets[0].backgroundColor[i] || '#6366f1'
            : data.datasets?.[0]?.backgroundColor || '#6366f1',
        }));
      }
    });
  }

  loadActivity(): void {
    this.reportService.getAuditLogs().subscribe({
      next: (data) => {
        this.recentActivity = data.slice(0, 4).map(log => ({
          icon: this.getActivityIcon(log.action),
          color: this.getActivityColor(log.action),
          message: `${log.userName} ${log.details}`,
          time: this.timeAgo(log.timestamp),
        }));
      },
      error: () => {
        this.recentActivity = [
          { icon: 'fas fa-info-circle', color: '#6366f1', message: 'System initialized', time: 'Just now' },
        ];
      }
    });
  }

  loadBirthdays(): void {
    this.dashboardService.getUpcomingBirthdays(7).subscribe({
      next: (data) => this.birthdays = data.slice(0, 5),
      error: () => {}
    });
  }

  private getActivityIcon(action: string): string {
    if (action?.toLowerCase().includes('create')) return 'fas fa-user-plus';
    if (action?.toLowerCase().includes('approve')) return 'fas fa-calendar-check';
    if (action?.toLowerCase().includes('upload')) return 'fas fa-file-alt';
    if (action?.toLowerCase().includes('review')) return 'fas fa-award';
    return 'fas fa-info-circle';
  }

  private getActivityColor(action: string): string {
    if (action?.toLowerCase().includes('create')) return '#6366f1';
    if (action?.toLowerCase().includes('approve')) return '#10b981';
    if (action?.toLowerCase().includes('upload')) return '#f59e0b';
    if (action?.toLowerCase().includes('review')) return '#ef4444';
    return '#6366f1';
  }

  private timeAgo(dateStr: string): string {
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `${mins} minutes ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    return `${days} days ago`;
  }
}
