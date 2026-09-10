import { Component } from '@angular/core';
import { TableColumn } from '../../../core/models';

@Component({
  selector: 'app-hr-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class HrEmployeesComponent {
  columns: TableColumn[] = [
    { key: 'employeeId', label: 'ID', sortable: true },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'department', label: 'Department', sortable: true },
    { key: 'designation', label: 'Designation', sortable: true },
    { key: 'joiningDate', label: 'Joined', type: 'date', sortable: true },
    { key: 'status', label: 'Status', type: 'status' }
  ];
  actions = [
    { label: 'View', icon: 'fas fa-eye', action: 'view', color: '#3b82f6' },
    { label: 'Edit', icon: 'fas fa-edit', action: 'edit', color: '#f59e0b' }
  ];
  employees = [
    { employeeId: 'EMP001', name: 'John Smith', department: 'Engineering', designation: 'Senior Developer', joiningDate: '2023-01-15', status: 'ACTIVE' },
    { employeeId: 'EMP002', name: 'Emily Davis', department: 'Marketing', designation: 'Marketing Specialist', joiningDate: '2023-08-01', status: 'ACTIVE' },
    { employeeId: 'EMP003', name: 'Robert Wilson', department: 'Finance', designation: 'Financial Analyst', joiningDate: '2022-11-15', status: 'ACTIVE' },
    { employeeId: 'EMP004', name: 'Lisa Anderson', department: 'Design', designation: 'UI/UX Designer', joiningDate: '2023-04-22', status: 'ACTIVE' },
    { employeeId: 'EMP005', name: 'James Brown', department: 'Engineering', designation: 'DevOps Engineer', joiningDate: '2023-06-10', status: 'ACTIVE' },
    { employeeId: 'EMP006', name: 'Sarah Johnson', department: 'HR', designation: 'HR Manager', joiningDate: '2021-03-05', status: 'ACTIVE' },
    { employeeId: 'EMP007', name: 'Michael Chen', department: 'Operations', designation: 'Operations Lead', joiningDate: '2022-07-18', status: 'ON_LEAVE' },
    { employeeId: 'EMP008', name: 'David Lee', department: 'Finance', designation: 'Accountant', joiningDate: '2023-09-12', status: 'ACTIVE' },
    { employeeId: 'EMP009', name: 'Jessica Martinez', department: 'Marketing', designation: 'Content Strategist', joiningDate: '2024-01-08', status: 'ACTIVE' },
    { employeeId: 'EMP010', name: 'Daniel Kim', department: 'Engineering', designation: 'Frontend Developer', joiningDate: '2023-11-20', status: 'INACTIVE' },
  ];
  onAction(event: any) { console.log(event); }
}
