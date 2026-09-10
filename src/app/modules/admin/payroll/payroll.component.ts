import { Component } from '@angular/core';
import { TableColumn } from '../../../core/models';

@Component({
  selector: 'app-admin-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss']
})
export class AdminPayrollComponent {
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
  payrollData = [
    { employeeId: 'EMP001', name: 'John Smith', department: 'Engineering', basicSalary: 8500, allowances: 2200, deductions: 1480, netPay: 9220, status: 'PAID' },
    { employeeId: 'EMP002', name: 'Sarah Johnson', department: 'HR', basicSalary: 9200, allowances: 1800, deductions: 1560, netPay: 9440, status: 'PAID' },
    { employeeId: 'EMP003', name: 'Michael Chen', department: 'Engineering', basicSalary: 11000, allowances: 2500, deductions: 1920, netPay: 11580, status: 'PAID' },
    { employeeId: 'EMP004', name: 'Emily Davis', department: 'Marketing', basicSalary: 6500, allowances: 1500, deductions: 1080, netPay: 6920, status: 'PENDING' },
    { employeeId: 'EMP005', name: 'Robert Wilson', department: 'Finance', basicSalary: 7800, allowances: 1600, deductions: 1280, netPay: 8120, status: 'PAID' },
    { employeeId: 'EMP006', name: 'Lisa Anderson', department: 'Design', basicSalary: 7200, allowances: 1400, deductions: 1180, netPay: 7420, status: 'PAID' },
    { employeeId: 'EMP007', name: 'David Lee', department: 'Engineering', basicSalary: 5500, allowances: 1200, deductions: 920, netPay: 5780, status: 'PENDING' },
    { employeeId: 'EMP008', name: 'Jennifer Brown', department: 'Sales', basicSalary: 6000, allowances: 2000, deductions: 1120, netPay: 6880, status: 'ON_HOLD' },
  ];

  onAction(event: { action: string; row: any }): void {
    console.log(event.action, event.row);
  }
}
