import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TableColumn } from '../../../core/models';

@Component({
  selector: 'app-admin-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class AdminEmployeesComponent {
  columns: TableColumn[] = [
    { key: 'employeeId', label: 'ID', sortable: true, width: '100px' },
    { key: 'name', label: 'Employee Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'department', label: 'Department', sortable: true },
    { key: 'designation', label: 'Designation', sortable: true },
    { key: 'joiningDate', label: 'Joining Date', type: 'date', sortable: true },
    { key: 'status', label: 'Status', type: 'status' }
  ];
  tableActions = [
    { label: 'View', icon: 'fas fa-eye', action: 'view', color: '#3b82f6' },
    { label: 'Edit', icon: 'fas fa-edit', action: 'edit', color: '#f59e0b' },
    { label: 'Delete', icon: 'fas fa-trash', action: 'delete', color: '#ef4444' }
  ];
  employees = [
    { employeeId: 'EMP001', name: 'John Smith', email: 'john@hrm.com', department: 'Engineering', designation: 'Senior Developer', joiningDate: '2023-01-15', status: 'ACTIVE' },
    { employeeId: 'EMP002', name: 'Sarah Johnson', email: 'sarah@hrm.com', department: 'HR', designation: 'HR Manager', joiningDate: '2022-06-20', status: 'ACTIVE' },
    { employeeId: 'EMP003', name: 'Michael Chen', email: 'michael@hrm.com', department: 'Engineering', designation: 'Team Lead', joiningDate: '2021-03-10', status: 'ACTIVE' },
    { employeeId: 'EMP004', name: 'Emily Davis', email: 'emily@hrm.com', department: 'Marketing', designation: 'Marketing Specialist', joiningDate: '2023-08-01', status: 'ACTIVE' },
    { employeeId: 'EMP005', name: 'Robert Wilson', email: 'robert@hrm.com', department: 'Finance', designation: 'Financial Analyst', joiningDate: '2022-11-15', status: 'ACTIVE' },
    { employeeId: 'EMP006', name: 'Lisa Anderson', email: 'lisa@hrm.com', department: 'Design', designation: 'UI/UX Designer', joiningDate: '2023-04-22', status: 'ACTIVE' },
    { employeeId: 'EMP007', name: 'David Lee', email: 'david@hrm.com', department: 'Engineering', designation: 'Software Developer', joiningDate: '2024-01-10', status: 'ACTIVE' },
    { employeeId: 'EMP008', name: 'Jennifer Brown', email: 'jennifer@hrm.com', department: 'Sales', designation: 'Sales Executive', joiningDate: '2023-06-15', status: 'INACTIVE' },
  ];

  constructor(private router: Router) {}

  onAction(event: { action: string; row: any }): void {
    switch (event.action) {
      case 'view':
        this.router.navigate(['/employees', event.row.employeeId]);
        break;
      case 'edit':
        this.router.navigate(['/employees', event.row.employeeId, 'edit']);
        break;
      case 'delete':
        this.employees = this.employees.filter(e => e.employeeId !== event.row.employeeId);
        break;
      default:
        break;
    }
  }
}