import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ReportService, ToastService, ExcelExportService } from '../../../core/services';

@Component({
  selector: 'app-admin-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class AdminReportsComponent implements OnInit, OnDestroy {
  activeTab: string = 'hr';
  selectedDateRange: string = 'THIS_MONTH';

  private querySub?: Subscription;

  headcountData: any = [
    { label: 'Engineering', value: 68 }, { label: 'Marketing', value: 32 },
    { label: 'Sales', value: 45 }, { label: 'HR', value: 18 },
    { label: 'Finance', value: 28 }, { label: 'Design', value: 22 },
    { label: 'Others', value: 35 }
  ];
  genderData = [
    { label: 'Male', value: 142, color: '#4461f6' },
    { label: 'Female', value: 98, color: '#ec4899' },
    { label: 'Non-binary', value: 8, color: '#06b6d4' }
  ];
  turnoverData = [
    { label: 'Jul', value: 4 }, { label: 'Aug', value: 6 },
    { label: 'Sep', value: 3 }, { label: 'Oct', value: 5 },
    { label: 'Nov', value: 2 }, { label: 'Dec', value: 7 }
  ];
  salaryData = [
    { level: 'Executive', avg: 200000, percent: 100, color: '#4461f6' },
    { level: 'VP', avg: 150000, percent: 75, color: '#8b5cf6' },
    { level: 'Senior', avg: 110000, percent: 55, color: '#06b6d4' },
    { level: 'Mid-Level', avg: 75000, percent: 37, color: '#10b981' },
    { level: 'Junior', avg: 50000, percent: 25, color: '#f59e0b' },
    { level: 'Intern', avg: 28000, percent: 14, color: '#94a3b8' },
  ];

  attendanceTrendData: any = [
    { label: 'Jul', value: 94 }, { label: 'Aug', value: 96 },
    { label: 'Sep', value: 92 }, { label: 'Oct', value: 95 },
    { label: 'Nov', value: 98 }, { label: 'Dec', value: 96 }
  ];
  attendanceBreakdownData = [
    { label: 'Present', value: 218, color: '#10b981' },
    { label: 'Late', value: 14, color: '#f59e0b' },
    { label: 'On Leave', value: 8, color: '#4461f6' },
    { label: 'Absent', value: 3, color: '#ef4444' }
  ];
  deptAttendanceData = [
    { dept: 'Engineering', rate: 96.5, present: 66, absent: 2 },
    { dept: 'Marketing', rate: 94.2, present: 30, absent: 2 },
    { dept: 'Sales', rate: 91.8, present: 41, absent: 4 },
    { dept: 'Human Resources', rate: 98.0, present: 18, absent: 0 },
    { dept: 'Finance', rate: 95.4, present: 27, absent: 1 }
  ];

  payrollExpensesData: any = [
    { label: 'Jul', value: 420000 }, { label: 'Aug', value: 435000 },
    { label: 'Sep', value: 430000 }, { label: 'Oct', value: 445000 },
    { label: 'Nov', value: 450000 }, { label: 'Dec', value: 480000 }
  ];
  payrollCategoryData = [
    { label: 'Base Salaries', value: 380000, color: '#4461f6' },
    { label: 'Bonuses & Incentives', value: 45000, color: '#10b981' },
    { label: 'Health Insurance', value: 32000, color: '#8b5cf6' },
    { label: 'Tax Deductions', value: 23000, color: '#f59e0b' }
  ];
  deptPayrollData = [
    { dept: 'Engineering', totalCost: '₹185,000', avgSalary: '₹115,000', employeeCount: 68 },
    { dept: 'Sales', totalCost: '₹110,000', avgSalary: '₹85,000', employeeCount: 45 },
    { dept: 'Marketing', totalCost: '₹72,000', avgSalary: '₹78,000', employeeCount: 32 },
    { dept: 'Finance', totalCost: '₹64,000', avgSalary: '₹92,000', employeeCount: 28 },
    { dept: 'Human Resources', totalCost: '₹49,000', avgSalary: '₹74,000', employeeCount: 18 }
  ];

  quickReports = [
    { name: 'Employee Directory', description: 'Complete list of all employees', icon: 'fas fa-address-book', color: '#4461f6' },
    { name: 'Attendance Summary', description: 'Monthly attendance report', icon: 'fas fa-calendar-check', color: '#10b981' },
    { name: 'Leave Balance', description: 'Current leave balances', icon: 'fas fa-calendar-alt', color: '#f59e0b' },
    { name: 'Payroll Register', description: 'Monthly payroll breakdown', icon: 'fas fa-file-invoice-dollar', color: '#ef4444' },
    { name: 'Performance Summary', description: 'Quarterly performance ratings', icon: 'fas fa-star', color: '#8b5cf6' },
    { name: 'Training Completion', description: 'Training program completion rates', icon: 'fas fa-graduation-cap', color: '#06b6d4' },
  ];

  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService,
    private toast: ToastService,
    private excelExport: ExcelExportService
  ) {}

  ngOnInit(): void {
    this.querySub = this.route.queryParams.subscribe(params => {
      if (params['tab']) {
        const tab = params['tab'].toLowerCase();
        if (tab === 'attendance') {
          this.activeTab = 'attendance';
        } else if (tab === 'payroll') {
          this.activeTab = 'payroll';
        } else {
          this.activeTab = 'hr';
        }
      }
    });
    this.loadReports();
  }

  ngOnDestroy(): void {
    if (this.querySub) {
      this.querySub.unsubscribe();
    }
  }

  loadReports(): void {
    this.reportService.getDepartmentDistribution().subscribe({
      next: (chart) => this.headcountData = this.chartToBarData(chart),
      error: () => this.toast.error('Failed to load department distribution')
    });
    this.reportService.getAttendanceTrend(7).subscribe({
      next: (chart) => this.attendanceTrendData = this.chartToBarData(chart),
      error: () => this.toast.error('Failed to load attendance trend')
    });
    this.reportService.getPayrollTrend(6).subscribe({
      next: (chart) => this.payrollExpensesData = this.chartToBarData(chart),
      error: () => this.toast.error('Failed to load payroll trend')
    });
  }

  private chartToBarData(chart: any): { label: string; value: number }[] {
    const labels: string[] = chart?.labels || [];
    const dataset = chart?.datasets?.[0];
    const data: number[] = dataset?.data || [];
    return labels.map((label: string, i: number) => ({ label, value: data[i] || 0 }));
  }

  exportReport(): void {
    if (this.activeTab === 'hr') {
      this.excelExport.exportToExcel(this.headcountData, 'HR_Headcount_Report');
    } else if (this.activeTab === 'attendance') {
      this.excelExport.exportToExcel(this.deptAttendanceData, 'Attendance_Report');
    } else if (this.activeTab === 'payroll') {
      this.excelExport.exportToExcel(this.deptPayrollData, 'Payroll_Report');
    } else {
      this.excelExport.exportToExcel(this.headcountData, 'HRM_Analytics_Report');
    }
    this.toast.success('Excel report downloaded successfully');
  }

  downloadQuickReport(report: any): void {
    const reportDataMap: Record<string, any[]> = {
      'Employee Directory': [
        { EmployeeID: 'EMP001', Name: 'John Doe', Department: 'Engineering', Position: 'Senior Dev' },
        { EmployeeID: 'EMP002', Name: 'Jane Smith', Department: 'HR', Position: 'HR Manager' }
      ],
      'Attendance Summary': this.deptAttendanceData,
      'Leave Balance': [
        { Employee: 'John Doe', CasualLeave: 5, SickLeave: 3, EarnedLeave: 12 },
        { Employee: 'Jane Smith', CasualLeave: 7, SickLeave: 4, EarnedLeave: 10 }
      ],
      'Payroll Register': this.deptPayrollData,
      'Performance Summary': [
        { Employee: 'John Doe', Rating: '4.8/5', Status: 'Exceeds Expectations' },
        { Employee: 'Jane Smith', Rating: '4.5/5', Status: 'Meets Expectations' }
      ],
      'Training Completion': [
        { Program: 'Cybersecurity 101', Enrolled: 120, Completed: 115, PassRate: '95.8%' },
        { Program: 'Leadership 2026', Enrolled: 25, Completed: 24, PassRate: '96.0%' }
      ]
    };

    const exportData = reportDataMap[report.name] || this.headcountData;
    const filename = report.name.replace(/\s+/g, '_');
    this.excelExport.exportToExcel(exportData, filename);
    this.toast.success(`${report.name} exported to Excel!`);
  }
}