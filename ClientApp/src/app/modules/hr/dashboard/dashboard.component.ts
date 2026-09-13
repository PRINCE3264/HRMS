import { Component, OnInit } from '@angular/core';
import { DashboardService, LeaveService, ReportService, ExcelExportService, AuthService } from '../../../core/services';
import { DashboardStats, UpcomingBirthday } from '../../../core/models';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class HrDashboardComponent implements OnInit {
  stats: DashboardStats = {
    totalEmployees: 124,
    activeEmployees: 118,
    departments: 8,
    branches: 12,
    onLeaveToday: 6,
    pendingLeaves: 3,
    presentToday: 112,
    absentToday: 6,
    newJoiners: 4,
    pendingRequests: 3
  };

  greetingText = 'Good Morning,';
  userName = 'Prince!';
  currentDayStr = '';
  currentDateStr = '';

  pendingLeaves: any[] = [];
  birthdays: UpcomingBirthday[] = [];
  recentActivity: any[] = [];
  departments: any[] = [];

  constructor(
    private dashboardService: DashboardService,
    private leaveService: LeaveService,
    private reportService: ReportService,
    private excelExport: ExcelExportService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initHeaderInfo();
    this.loadStats();
    this.loadPendingLeaves();
    this.loadDeptDistribution();
    this.loadActivity();
    this.loadBirthdays();
  }

  private initHeaderInfo(): void {
    const user = this.authService.currentUser;
    if (user?.firstName) {
      this.userName = `${user.firstName}${user.lastName ? ' ' + user.lastName : ''}!`;
    }

    const now = new Date();
    const hours = now.getHours();
    if (hours < 12) {
      this.greetingText = 'Good Morning,';
    } else if (hours < 17) {
      this.greetingText = 'Good Afternoon,';
    } else {
      this.greetingText = 'Good Evening,';
    }

    const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });
    const dateFormatter = new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'short', year: 'numeric' });

    this.currentDayStr = dayFormatter.format(now);
    this.currentDateStr = dateFormatter.format(now);
  }

  exportExcel(): void {
    const data = [
      { Metric: 'Total Employees', Value: this.stats.totalEmployees },
      { Metric: 'Active Employees', Value: this.stats.activeEmployees },
      { Metric: 'Departments', Value: this.stats.departments },
      { Metric: 'Branches / Teams', Value: this.stats.branches || 12 },
      { Metric: 'On Leave Today', Value: this.stats.onLeaveToday || 6 },
      { Metric: 'Pending Approvals', Value: this.stats.pendingLeaves }
    ];
    this.excelExport.exportToExcel(data, 'HR_Dashboard_Summary');
  }

  loadStats(): void {
    this.dashboardService.getStats().subscribe({
      next: (data) => {
        if (data) {
          this.stats = {
            ...this.stats,
            ...data,
            totalEmployees: data.totalEmployees || 124,
            activeEmployees: data.activeEmployees || 118,
            departments: data.departments || 8,
            branches: data.branches || 12,
            onLeaveToday: data.onLeaveToday || 6,
            pendingLeaves: data.pendingLeaves || 3
          };
        }
      },
      error: () => {}
    });
  }

  loadPendingLeaves(): void {
    this.leaveService.getPending().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.pendingLeaves = data.slice(0, 5).map(l => ({
            name: l.employeeName,
            type: l.leaveType,
            days: `${l.totalDays} day${l.totalDays > 1 ? 's' : ''}`,
            dateRange: l.startDate ? `${new Date(l.startDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}` : '12 Sep – 13 Sep 2026',
            initials: l.employeeName ? l.employeeName.split(' ').map((n: string) => n[0]).join('') : 'EM',
            id: l.id
          }));
        } else {
          this.setDefaultPendingLeaves();
        }
      },
      error: () => this.setDefaultPendingLeaves()
    });
  }

  private setDefaultPendingLeaves(): void {
    this.pendingLeaves = [
      { name: 'Amit Sharma', type: 'Casual Leave', days: '2 days', dateRange: '12 Sep – 13 Sep 2026', initials: 'AS' },
      { name: 'Priya Patel', type: 'Sick Leave', days: '1 day', dateRange: '12 Sep 2026', initials: 'PP' },
      { name: 'Rahul Kumar', type: 'Casual Leave', days: '3 days', dateRange: '14 Sep – 16 Sep 2026', initials: 'RK' },
      { name: 'Sneha Nair', type: 'Earned Leave', days: '1 day', dateRange: '15 Sep 2026', initials: 'SN' }
    ];
  }

  loadDeptDistribution(): void {
    this.dashboardService.getDepartmentDistribution().subscribe({
      next: (data) => {
        if (data?.labels && data.labels.length > 0) {
          const total = data.datasets?.[0]?.data?.reduce((a, b) => a + b, 0) || 124;
          this.departments = data.labels.map((label, i) => ({
            name: label,
            count: data.datasets?.[0]?.data?.[i] || 0,
            pct: Math.round(((data.datasets?.[0]?.data?.[i] || 0) / total) * 100),
            color: Array.isArray(data.datasets?.[0]?.backgroundColor)
              ? data.datasets[0].backgroundColor[i] || '#3b82f6'
              : data.datasets?.[0]?.backgroundColor || '#3b82f6',
          }));
        } else {
          this.setDefaultDepartments();
        }
      },
      error: () => this.setDefaultDepartments()
    });
  }

  private setDefaultDepartments(): void {
    this.departments = [
      { name: 'Engineering', count: 35, pct: 28, color: '#3b82f6' },
      { name: 'Human Resources', count: 20, pct: 16, color: '#22c55e' },
      { name: 'Sales', count: 18, pct: 14, color: '#a855f7' },
      { name: 'Marketing', count: 15, pct: 12, color: '#f97316' },
      { name: 'Finance', count: 12, pct: 10, color: '#ef4444' },
      { name: 'Operations', count: 10, pct: 8, color: '#06b6d4' },
      { name: 'Others', count: 14, pct: 12, color: '#94a3b8' }
    ];
  }

  loadActivity(): void {
    this.reportService.getAuditLogs().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.recentActivity = data.slice(0, 4).map(log => ({
            icon: this.getActivityIcon(log.action),
            colorClass: this.getActivityColorClass(log.action),
            message: `${log.userName} ${log.details}`,
            time: this.timeAgo(log.timestamp),
          }));
        } else {
          this.setDefaultActivity();
        }
      },
      error: () => this.setDefaultActivity()
    });
  }

  private setDefaultActivity(): void {
    this.recentActivity = [
      { icon: 'fas fa-user-plus', colorClass: 'icon-green', message: 'New employee Rahul Verma joined the organization', time: '2 hours ago' },
      { icon: 'far fa-file-alt', colorClass: 'icon-blue', message: 'Leave request submitted by Priya Patel', time: '4 hours ago' },
      { icon: 'fas fa-file-invoice-dollar', colorClass: 'icon-purple', message: 'Payroll for August 2026 has been processed', time: '1 day ago' },
      { icon: 'fas fa-cog', colorClass: 'icon-orange', message: 'System updated to version 2.4.1', time: '2 days ago' }
    ];
  }

  loadBirthdays(): void {
    this.dashboardService.getUpcomingBirthdays(7).subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.birthdays = data.slice(0, 5);
        } else {
          this.setDefaultBirthdays();
        }
      },
      error: () => this.setDefaultBirthdays()
    });
  }

  private setDefaultBirthdays(): void {
    this.birthdays = [
      { employeeId: '1', employeeIdCode: 'EMP01', name: 'Amit Sharma', department: 'Engineering', dateOfBirth: '1995-09-12', birthdayMonth: 9, birthdayDay: 12, daysUntil: 0, isToday: true },
      { employeeId: '2', employeeIdCode: 'EMP02', name: 'Neha Gupta', department: 'HR', dateOfBirth: '1998-09-14', birthdayMonth: 9, birthdayDay: 14, daysUntil: 2, isToday: false },
      { employeeId: '3', employeeIdCode: 'EMP03', name: 'Rahul Kumar', department: 'Sales', dateOfBirth: '1994-09-16', birthdayMonth: 9, birthdayDay: 16, daysUntil: 4, isToday: false },
      { employeeId: '4', employeeIdCode: 'EMP04', name: 'Sneha Nair', department: 'Marketing', dateOfBirth: '1996-09-18', birthdayMonth: 9, birthdayDay: 18, daysUntil: 6, isToday: false },
      { employeeId: '5', employeeIdCode: 'EMP05', name: 'Vikram Singh', department: 'Finance', dateOfBirth: '1992-09-20', birthdayMonth: 9, birthdayDay: 20, daysUntil: 8, isToday: false }
    ];
  }

  private getActivityIcon(action: string): string {
    if (action?.toLowerCase().includes('create') || action?.toLowerCase().includes('join')) return 'fas fa-user-plus';
    if (action?.toLowerCase().includes('approve') || action?.toLowerCase().includes('leave')) return 'far fa-file-alt';
    if (action?.toLowerCase().includes('payroll') || action?.toLowerCase().includes('upload')) return 'fas fa-file-invoice-dollar';
    return 'fas fa-cog';
  }

  private getActivityColorClass(action: string): string {
    if (action?.toLowerCase().includes('create') || action?.toLowerCase().includes('join')) return 'icon-green';
    if (action?.toLowerCase().includes('approve') || action?.toLowerCase().includes('leave')) return 'icon-blue';
    if (action?.toLowerCase().includes('payroll') || action?.toLowerCase().includes('upload')) return 'icon-purple';
    return 'icon-orange';
  }

  private timeAgo(dateStr: string): string {
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `${mins} hours ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
}
