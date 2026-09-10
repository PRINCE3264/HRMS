import { Component } from '@angular/core';

@Component({
  selector: 'app-hr-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss']
})
export class HrPayrollComponent {
  activeTab = 'payslips';
  payslips = [
    { employeeId: 'EMP001', name: 'John Smith', department: 'Engineering', basic: 8500, bonus: 1200, deductions: 2125, net: 7575, status: 'Paid', color: '#6366f1' },
    { employeeId: 'EMP002', name: 'Emily Davis', department: 'Marketing', basic: 6500, bonus: 800, deductions: 1625, net: 5675, status: 'Paid', color: '#10b981' },
    { employeeId: 'EMP003', name: 'Robert Wilson', department: 'Finance', basic: 7200, bonus: 1000, deductions: 1800, net: 6400, status: 'Paid', color: '#f59e0b' },
    { employeeId: 'EMP004', name: 'Lisa Anderson', department: 'Design', basic: 7000, bonus: 600, deductions: 1750, net: 5850, status: 'Pending', color: '#ef4444' },
    { employeeId: 'EMP005', name: 'James Brown', department: 'Engineering', basic: 9000, bonus: 1500, deductions: 2250, net: 8250, status: 'Paid', color: '#06b6d4' },
    { employeeId: 'EMP006', name: 'Sarah Johnson', department: 'HR', basic: 7800, bonus: 900, deductions: 1950, net: 6750, status: 'Paid', color: '#8b5cf6' },
  ];
  deductions = [
    { type: 'Federal Tax', description: 'Federal income tax withholding', employeeShare: '15-25%', employerShare: 'N/A', status: 'Active' },
    { type: 'Social Security', description: 'FICA Social Security (6.2%)', employeeShare: '6.2%', employerShare: '6.2%', status: 'Active' },
    { type: 'Medicare', description: 'FICA Medicare (1.45%)', employeeShare: '1.45%', employerShare: '1.45%', status: 'Active' },
    { type: 'Health Insurance', description: 'Company health plan premium', employeeShare: '$200/month', employerShare: '$450/month', status: 'Active' },
    { type: '401(k) Contribution', description: 'Retirement savings plan', employeeShare: '5-10%', employerShare: '3% match', status: 'Active' },
  ];
  bonuses = [
    { name: 'John Smith', type: 'Performance Bonus', amount: 5000, period: 'Q4 2024', status: 'Approved', color: '#6366f1' },
    { name: 'Emily Davis', type: 'Holiday Bonus', amount: 1500, period: 'Dec 2024', status: 'Approved', color: '#10b981' },
    { name: 'James Brown', type: 'Project Completion', amount: 3000, period: 'Dec 2024', status: 'Pending', color: '#06b6d4' },
    { name: 'Robert Wilson', type: 'Performance Bonus', amount: 4000, period: 'Q4 2024', status: 'Approved', color: '#f59e0b' },
  ];
  getTotal(field: string): number {
    return this.payslips.reduce((sum, p) => sum + (p as any)[field], 0);
  }
}
