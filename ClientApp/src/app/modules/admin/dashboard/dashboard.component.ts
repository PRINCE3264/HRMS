import { Component, OnInit } from '@angular/core';
import { AuthService, DashboardService, ToastService } from '../../../core/services';
import { UpcomingBirthday } from '../../../core/models';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  adminName = 'System Admin';

  stats = {
    totalEmployees: 0,
    activeEmployees: 0,
    departments: 0,
    presentToday: 0,
    absentToday: 0,
    pendingLeaves: 0,
    lateArrivalsToday: 0,
    onLeaveToday: 0,
    totalWorkHoursToday: 0,
    totalOvertimeToday: 0,
    openPositions: 0,
    candidatesInPipeline: 0,
    hiredThisMonth: 0,
    monthlyPayrollNet: 0,
    payrollProcessedThisMonth: 0,
    averageAttendanceRate: 0,
    averagePerformance: 0,
    companyName: '',
    branches: 0,
    teams: 0
  };

  quickActions = [
    { label: 'Add Employee', icon: 'fas fa-user-plus', link: '/admin/employees', bg: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)' },
    { label: 'Process Payroll', icon: 'fas fa-wallet', link: '/admin/payroll', bg: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
    { label: 'Review Leaves', icon: 'fas fa-calendar-check', link: '/admin/leave-management', bg: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
    { label: 'Shift Setup', icon: 'fas fa-clock', link: '/admin/shift-management', bg: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' },
    { label: 'System Settings', icon: 'fas fa-sliders-h', link: '/admin/system-settings', bg: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)' }
  ];

  attendanceData: any[] = [];
  departmentData: any[] = [];
  birthdays: UpcomingBirthday[] = [];

  recentActivities = [
    { type: 'join', icon: 'fas fa-user-plus', text: 'New employee onboarded to the organization', time: 'Today' },
    { type: 'leave', icon: 'fas fa-calendar-minus', text: 'Leave requests pending approval', time: 'Today' },
    { type: 'payroll', icon: 'fas fa-money-check-alt', text: 'Payroll records available for the current period', time: 'This week' },
    { type: 'alert', icon: 'fas fa-exclamation-triangle', text: 'Attendance summary generated for today', time: 'Today' },
  ];
  payrollSummary = [
    { month: 'Current Period', amount: 0, status: 'PROCESSED' },
  ];

  private palette = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#94a3b8'];

  constructor(private authService: AuthService, private dashboardService: DashboardService, private toast: ToastService) {}

  ngOnInit(): void {
    const user = this.authService.currentUser;
    if (user) {
      this.adminName = `${user.firstName} ${user.lastName}`.trim() || 'System Admin';
    }
    this.loadStats();
    this.loadTrends();
    this.loadBirthdays();
  }

  loadStats(): void {
    this.dashboardService.getStats().subscribe({
      next: (s) => this.stats = {
        totalEmployees: s.totalEmployees,
        activeEmployees: s.activeEmployees,
        departments: s.departments,
        presentToday: s.presentToday,
        absentToday: s.absentToday,
        pendingLeaves: s.pendingLeaves,
        lateArrivalsToday: s.lateArrivalsToday || 0,
        onLeaveToday: s.onLeaveToday || 0,
        totalWorkHoursToday: s.totalWorkHoursToday || 0,
        totalOvertimeToday: s.totalOvertimeToday || 0,
        openPositions: s.openPositions || 0,
        candidatesInPipeline: s.candidatesInPipeline || 0,
        hiredThisMonth: s.hiredThisMonth || 0,
        monthlyPayrollNet: s.monthlyPayrollNet || 0,
        payrollProcessedThisMonth: s.payrollProcessedThisMonth || 0,
        averageAttendanceRate: s.averageAttendanceRate || 0,
        averagePerformance: s.averagePerformance || 0,
        companyName: s.companyName || this.stats.companyName,
        branches: s.branches || 0,
        teams: s.teams || 0
      },
      error: () => this.toast.error('Failed to load dashboard stats')
    });
  }

  get monthlyNet(): number {
    return this.stats.monthlyPayrollNet;
  }

  get processedCount(): number {
    return this.stats.payrollProcessedThisMonth;
  }

  loadTrends(): void {
    this.dashboardService.getAttendanceTrend(6).subscribe({
      next: (chart) => this.attendanceData = this.chartToPoints(chart),
      error: () => this.toast.error('Failed to load attendance trend')
    });
    this.dashboardService.getDepartmentDistribution().subscribe({
      next: (chart) => {
        const points = this.chartToPoints(chart);
        this.departmentData = points.map((p, i) => ({ ...p, color: this.palette[i % this.palette.length] }));
      },
      error: () => this.toast.error('Failed to load department distribution')
    });
  }

  loadBirthdays(): void {
    this.dashboardService.getUpcomingBirthdays(7).subscribe({
      next: (data) => this.birthdays = data.slice(0, 5),
      error: () => {}
    });
  }

  private chartToPoints(chart: any): { label: string; value: number }[] {
    const labels: string[] = chart?.labels || [];
    const dataset = chart?.datasets?.[0];
    const data: number[] = dataset?.data || [];
    return labels.map((label: string, i: number) => ({ label, value: data[i] || 0 }));
  }
}