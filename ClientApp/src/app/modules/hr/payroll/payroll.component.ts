import { Component, OnInit } from '@angular/core';
import { PayrollService } from '../../../core/services';
import { PayrollRecord } from '../../../core/models';

@Component({
  selector: 'app-hr-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss']
})
export class HrPayrollComponent implements OnInit {
  activeTab = 'payslips';
  payslips: any[] = [];
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

  private deptColors: Record<string, string> = {
    'Engineering': '#6366f1',
    'Marketing': '#10b981',
    'Finance': '#f59e0b',
    'Design': '#ef4444',
    'HR': '#8b5cf6',
    'Operations': '#06b6d4',
  };

  constructor(private payrollService: PayrollService) {}

  ngOnInit(): void {
    this.loadPayroll();
  }

  loadPayroll(): void {
    this.payrollService.getPayroll({ pageSize: 100 }).subscribe({
      next: (data) => {
        this.payslips = data.items.map(p => ({
          employeeId: p.employeeId,
          name: p.employeeName,
          department: p.department,
          basic: p.basicSalary,
          bonus: p.allowances,
          deductions: p.deductions,
          net: p.netPay,
          status: p.status,
          color: this.deptColors[p.department] || '#6366f1',
          id: p.id,
        }));
      }
    });
  }

  getTotal(field: string): number {
    return this.payslips.reduce((sum, p) => sum + (p as any)[field], 0);
  }
}
