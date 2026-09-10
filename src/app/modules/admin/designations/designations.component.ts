import { Component } from '@angular/core';
import { TableColumn } from '../../../core/models';

@Component({
  selector: 'app-admin-designations',
  templateUrl: './designations.component.html',
  styleUrls: ['./designations.component.scss']
})
export class AdminDesignationsComponent {
  showAdd = false;
  columns: TableColumn[] = [
    { key: 'code', label: 'Code', sortable: true, width: '100px' },
    { key: 'title', label: 'Designation Title', sortable: true },
    { key: 'department', label: 'Department', sortable: true },
    { key: 'level', label: 'Level', sortable: true },
    { key: 'minSalary', label: 'Min Salary', type: 'currency', sortable: true },
    { key: 'maxSalary', label: 'Max Salary', type: 'currency', sortable: true },
    { key: 'employeeCount', label: 'Employees', sortable: true },
    { key: 'status', label: 'Status', type: 'status' }
  ];
  tableActions = [
    { label: 'Edit', icon: 'fas fa-edit', action: 'edit', color: '#f59e0b' },
    { label: 'Delete', icon: 'fas fa-trash', action: 'delete', color: '#ef4444' }
  ];
  designations = [
    { code: 'DES001', title: 'Chief Technology Officer', department: 'Engineering', level: 'Executive', minSalary: 150000, maxSalary: 250000, employeeCount: 1, status: 'ACTIVE' },
    { code: 'DES002', title: 'VP of Engineering', department: 'Engineering', level: 'VP', minSalary: 120000, maxSalary: 180000, employeeCount: 2, status: 'ACTIVE' },
    { code: 'DES003', title: 'Senior Software Engineer', department: 'Engineering', level: 'Senior', minSalary: 90000, maxSalary: 140000, employeeCount: 12, status: 'ACTIVE' },
    { code: 'DES004', title: 'Software Engineer', department: 'Engineering', level: 'Mid', minSalary: 65000, maxSalary: 95000, employeeCount: 24, status: 'ACTIVE' },
    { code: 'DES005', title: 'Junior Software Engineer', department: 'Engineering', level: 'Junior', minSalary: 45000, maxSalary: 70000, employeeCount: 15, status: 'ACTIVE' },
    { code: 'DES006', title: 'HR Manager', department: 'Human Resources', level: 'Senior', minSalary: 80000, maxSalary: 120000, employeeCount: 3, status: 'ACTIVE' },
    { code: 'DES007', title: 'Marketing Manager', department: 'Marketing', level: 'Senior', minSalary: 75000, maxSalary: 110000, employeeCount: 4, status: 'ACTIVE' },
    { code: 'DES008', title: 'Financial Analyst', department: 'Finance', level: 'Mid', minSalary: 60000, maxSalary: 85000, employeeCount: 8, status: 'ACTIVE' },
    { code: 'DES009', title: 'Sales Executive', department: 'Sales', level: 'Mid', minSalary: 50000, maxSalary: 80000, employeeCount: 18, status: 'ACTIVE' },
    { code: 'DES010', title: 'UI/UX Designer', department: 'Design', level: 'Mid', minSalary: 55000, maxSalary: 90000, employeeCount: 7, status: 'ACTIVE' },
    { code: 'DES011', title: 'Intern', department: 'General', level: 'Intern', minSalary: 20000, maxSalary: 35000, employeeCount: 10, status: 'ACTIVE' },
  ];

  onAction(event: { action: string; row: any }): void {
    console.log(event.action, event.row);
  }
}
