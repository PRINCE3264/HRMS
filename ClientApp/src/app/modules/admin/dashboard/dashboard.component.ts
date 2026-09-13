import { Component, OnInit } from '@angular/core';
import { AuthService, DashboardService, ToastService } from '../../../core/services';
import { UpcomingBirthday } from '../../../core/models';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  adminName = 'Admin User';
  currentDateStr = '12 Sep 2026';
  currentDayStr = 'Friday';

  stats = {
    totalEmployees: 124,
    activeEmployees: 118,
    departments: 8,
    branches: 12,
    teams: 6,
    onLeaveToday: 6,
    pendingLeaves: 3,
    openPositions: 0,
    candidatesInPipeline: 0,
    hiredThisMonth: 0,
    monthlyPayrollNet: 0,
    payrollProcessedThisMonth: 0
  };

  departmentLegend = [
    { name: 'Human Resources', count: 28, pct: '22%', color: '#3b82f6' },
    { name: 'Engineering', count: 32, pct: '26%', color: '#a855f7' },
    { name: 'Finance', count: 16, pct: '13%', color: '#06b6d4' },
    { name: 'Marketing', count: 12, pct: '10%', color: '#ec4899' },
    { name: 'Sales', count: 20, pct: '16%', color: '#f97316' },
    { name: 'Operations', count: 16, pct: '13%', color: '#10b981' }
  ];

  upcomingBirthdaysList = [
    { name: 'Amit Singh', department: 'Engineering', initials: 'AS', dateStr: 'Tomorrow', bg: '#3b82f6' },
    { name: 'Pooja Kumari', department: 'HR', initials: 'PK', dateStr: '14 Sep', bg: '#a855f7' },
    { name: 'Rohan Kumar', department: 'Finance', initials: 'RK', dateStr: '15 Sep', bg: '#f97316' },
    { name: 'Sneha Tiwari', department: 'Marketing', initials: 'ST', dateStr: '16 Sep', bg: '#10b981' },
    { name: 'Vikas Patel', department: 'Operations', initials: 'VK', dateStr: '17 Sep', bg: '#eab308' }
  ];

  recentActivities = [
    { type: 'join', icon: 'fas fa-user-plus', text: 'New employee onboarded to the organization', time: 'Today', iconBg: '#dcfce7', iconColor: '#16a34a' },
    { type: 'leave', icon: 'fas fa-calendar-minus', text: 'Leave request pending approval', time: 'Today', iconBg: '#ffedd5', iconColor: '#ea580c' },
    { type: 'payroll', icon: 'fas fa-money-check-alt', text: 'Payroll records available for the current period', time: 'This week', iconBg: '#f3e8ff', iconColor: '#9333ea' },
    { type: 'alert', icon: 'fas fa-exclamation-triangle', text: 'Attendance summary generated for today', time: 'Today', iconBg: '#fee2e2', iconColor: '#dc2626' }
  ];

  pendingLeaveRequests = [
    { employee: 'Priya Sharma', leaveType: 'Casual Leave', from: '12 Sep', to: '13 Sep' },
    { employee: 'Amit Verma', leaveType: 'Sick Leave', from: '14 Sep', to: '14 Sep' },
    { employee: 'Neha Gupta', leaveType: 'Personal Leave', from: '15 Sep', to: '16 Sep' }
  ];

  constructor(
    private authService: AuthService,
    private dashboardService: DashboardService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    const user = this.authService.currentUser;
    if (user) {
      this.adminName = `${user.firstName} ${user.lastName}`.trim() || 'Admin User';
    }

    const today = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    this.currentDayStr = days[today.getDay()];
    this.currentDateStr = `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;

    this.loadStats();
  }

  loadStats(): void {
    this.dashboardService.getStats().subscribe({
      next: (s) => {
        this.stats.totalEmployees = s.totalEmployees || 124;
        this.stats.activeEmployees = s.activeEmployees || 118;
        this.stats.departments = s.departments || 8;
        this.stats.branches = s.branches || 12;
        this.stats.teams = s.teams || 6;
        this.stats.onLeaveToday = s.onLeaveToday || 6;
        this.stats.pendingLeaves = s.pendingLeaves || 3;
        this.stats.openPositions = s.openPositions || 0;
        this.stats.candidatesInPipeline = s.candidatesInPipeline || 0;
        this.stats.hiredThisMonth = s.hiredThisMonth || 0;
        this.stats.monthlyPayrollNet = s.monthlyPayrollNet || 0;
        this.stats.payrollProcessedThisMonth = s.payrollProcessedThisMonth || 0;
      },
      error: () => {}
    });
  }

  approveLeave(req: any): void {
    this.toast.success(`Approved leave for ${req.employee}`);
    this.pendingLeaveRequests = this.pendingLeaveRequests.filter(r => r !== req);
  }

  rejectLeave(req: any): void {
    this.toast.info(`Rejected leave for ${req.employee}`);
    this.pendingLeaveRequests = this.pendingLeaveRequests.filter(r => r !== req);
  }
}