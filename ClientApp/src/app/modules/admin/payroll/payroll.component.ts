import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PayrollService, ToastService } from '../../../core/services';
import { TableColumn } from '../../../core/models';

@Component({
  selector: 'app-admin-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss']
})
export class AdminPayrollComponent implements OnInit {
  columns: TableColumn[] = [
    { key: 'employeeId', label: 'ID', sortable: true, width: '100px' },
    { key: 'name', label: 'Employee', sortable: true },
    { key: 'department', label: 'Department', sortable: true },
    { key: 'basicSalary', label: 'Basic Salary', type: 'currency', sortable: true },
    { key: 'allowances', label: 'Allowances', type: 'currency', sortable: true },
    { key: 'deductions', label: 'Deductions', type: 'currency', sortable: true },
    { key: 'netPay', label: 'Net Pay', type: 'currency', sortable: true },
    { key: 'status', label: 'Status', type: 'status' }
  ];
  tableActions = [
    { label: 'Payslip', icon: 'fas fa-file-pdf', action: 'payslip', color: '#ef4444' },
    { label: 'Edit', icon: 'fas fa-edit', action: 'edit', color: '#f59e0b' }
  ];
  payrollData: any[] = [];

  constructor(
    private payrollService: PayrollService,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPayroll();
  }

  loadPayroll(): void {
    this.payrollService.getPayroll({ page: 1, pageSize: 50 }).subscribe({
      next: (res) => this.payrollData = res.items.map((p: any) => ({
        employeeId: p.employeeId,
        name: p.employeeName,
        department: p.department,
        basicSalary: p.basicSalary,
        allowances: p.allowances,
        deductions: p.deductions,
        netPay: p.netPay,
        status: p.status
      })),
      error: () => this.toast.error('Failed to load payroll data')
    });
  }

  onAction(event: { action: string; row: any }): void {
    if (event.action === 'payslip') {
      this.payrollService.getPayslip(event.row.id || event.row.employeeId).subscribe({
        next: () => {
          this.toast.success('Payslip available in payroll record');
        },
        error: () => this.toast.error('Failed to load payslip')
      });
    } else if (event.action === 'edit') {
      this.router.navigate(['/admin/payroll/salary-structures']);
    }
  }

  goToSalaryStructures(): void {
    this.router.navigate(['/admin/payroll/salary-structures']);
  }

  goToReports(): void {
    this.router.navigate(['/admin/payroll/reports']);
  }
}
