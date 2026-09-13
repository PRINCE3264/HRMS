import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PayrollService, ToastService, ExcelExportService } from '../../../core/services';
import { PayrollReport } from '../../../core/models';

@Component({
  selector: 'app-admin-payroll-reports',
  templateUrl: './payroll-reports.component.html',
  styleUrls: ['./payroll-reports.component.scss']
})
export class AdminPayrollReportsComponent implements OnInit {
  year = new Date().getFullYear();
  month = 'Sep';
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  years = [2026, 2025, 2024];

  report: PayrollReport | null = null;
  loading = false;

  // Top Pills Distribution
  deptCostDistribution = [
    { label: 'Engineering', amount: 215000, percentage: 40, color: '#6366f1', active: true },
    { label: 'Sales & Marketing', amount: 118000, percentage: 22, color: '#06b6d4', active: false },
    { label: 'Finance', amount: 82000, percentage: 15, color: '#10b981', active: false },
    { label: 'Design & UX', amount: 74000, percentage: 13, color: '#f59e0b', active: false },
    { label: 'Human Resources', amount: 53800, percentage: 10, color: '#ec4899', active: false }
  ];

  // Pie Chart 1: Compensation Distribution by Department
  deptCompensationData = {
    total: 245789945,
    highest: { name: 'Engineering', amount: 6354987 },
    lowest: { name: 'HR', amount: 887000 },
    items: [
      { name: 'Engineering', color: '#f87171', percent: 25 },
      { name: 'Product Management', color: '#3b82f6', percent: 18 },
      { name: 'Customer Services', color: '#84cc16', percent: 14 },
      { name: 'Marketing', color: '#c0a080', percent: 12 },
      { name: 'Sales', color: '#d946ef', percent: 10 },
      { name: 'R & D', color: '#ef4444', percent: 8 },
      { name: 'Finance', color: '#06b6d4', percent: 6 },
      { name: 'IT Services', color: '#eab308', percent: 4 },
      { name: 'HR', color: '#8b5cf6', percent: 2 },
      { name: 'Others', color: '#e2e8f0', percent: 1 }
    ]
  };

  // Pie Chart 2: Compensation Distribution by Location
  locationCompensationData = {
    total: 245789945,
    highest: { name: 'Hyderabad', amount: 6354987 },
    lowest: { name: 'Rajkot', amount: 887000 },
    items: [
      { name: 'Hyderabad', color: '#f87171', percent: 25 },
      { name: 'Mumbai', color: '#3b82f6', percent: 18 },
      { name: 'Bangalore', color: '#84cc16', percent: 14 },
      { name: 'Pune', color: '#c0a080', percent: 12 },
      { name: 'New Delhi', color: '#d946ef', percent: 10 },
      { name: 'Kolkata', color: '#ef4444', percent: 8 },
      { name: 'Bhopal', color: '#06b6d4', percent: 6 },
      { name: 'Bhubaneswar', color: '#eab308', percent: 4 },
      { name: 'Rajkot', color: '#8b5cf6', percent: 2 },
      { name: 'Others', color: '#e2e8f0', percent: 1 }
    ]
  };

  constructor(
    private payrollService: PayrollService,
    private toast: ToastService,
    private excelExportService: ExcelExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadReport();
  }

  loadReport(): void {
    this.loading = true;
    this.payrollService.getPayrollReport(this.year, this.month).subscribe({
      next: (data) => {
        if (data && data.employeeCount > 0) {
          this.report = data;
        } else {
          this.initMockReport();
        }
        this.loading = false;
      },
      error: () => {
        this.initMockReport();
        this.loading = false;
      }
    });
  }

  initMockReport(): void {
    const gross = 245789945;
    const deductions = 24578995;
    const net = gross - deductions;

    this.report = {
      totalBasic: 160000000,
      employeeCount: 450,
      processedCount: 450,
      totalEarnings: gross,
      totalDeductions: deductions,
      totalNetPay: net,
      averageSalary: Math.round(gross / 450),
      highestSalary: 6354987,
      lowestSalary: 887000,
      earningsComponents: [
        { name: 'Basic Salary', type: 'Earning', amount: 160000000 },
        { name: 'House Rent Allowance (HRA)', type: 'Earning', amount: 48500000 },
        { name: 'Special Allowances', type: 'Earning', amount: 22000000 },
        { name: 'Conveyance Allowance', type: 'Earning', amount: 9289945 },
        { name: 'Medical Allowance', type: 'Earning', amount: 6000000 }
      ],
      deductionComponents: [
        { name: 'Provident Fund (PF)', type: 'Deduction', amount: 12000000 },
        { name: 'Income Tax (TDS)', type: 'Deduction', amount: 9500000 },
        { name: 'Employee State Insurance (ESI)', type: 'Deduction', amount: 2078995 },
        { name: 'Professional Tax', type: 'Deduction', amount: 1000000 }
      ],
      chart: {
        labels: ['Engineering', 'Sales & Marketing', 'Finance', 'Design & UX', 'Human Resources'],
        datasets: [{ label: 'Department Payroll', data: [215000, 118000, 82000, 74000, 53800] }]
      }
    };
  }

  getConicGradient(items: { color: string; percent: number }[]): string {
    let accumulated = 0;
    const stops = items.map(item => {
      const start = accumulated;
      accumulated += item.percent;
      return `${item.color} ${start}% ${accumulated}%`;
    });
    return `conic-gradient(${stops.join(', ')})`;
  }

  exportReportToExcel(): void {
    if (!this.report) return;

    const summaryData = [
      { Category: 'Period', Value: `${this.month} ${this.year}` },
      { Category: 'Employees Covered', Value: this.report.employeeCount },
      { Category: 'Disbursements Processed', Value: this.report.processedCount },
      { Category: 'Total Gross Payroll (₹)', Value: this.report.totalEarnings },
      { Category: 'Total Statutory Deductions (₹)', Value: this.report.totalDeductions },
      { Category: 'Net Payable Amount (₹)', Value: this.report.totalNetPay },
      { Category: 'Average Salary (₹)', Value: this.report.averageSalary }
    ];

    this.excelExportService.exportToExcel(summaryData, `Payroll_Summary_${this.month}_${this.year}`);
    this.toast.success(`Exported ${this.month} ${this.year} Payroll Report to Excel!`);
  }

  goToPayroll(): void {
    this.router.navigate(['/admin/payroll']);
  }
}