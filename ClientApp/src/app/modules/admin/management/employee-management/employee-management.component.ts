import { Component, OnInit } from '@angular/core';
import { ManagementService, ToastService } from '../../../../core/services';
import { ManagedEmployee } from '../../../../core/models';
import { TableColumn } from '../../../../core/models';

@Component({
  selector: 'app-admin-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.scss']
})
export class AdminEmployeeManagementComponent implements OnInit {
  employees: ManagedEmployee[] = [];
  loading = true;
  selectedRole = 'ALL';

  roles = [
    { value: 'ALL', label: 'All Roles' },
    { value: 'ADMIN', label: 'Admin' },
    { value: 'HR', label: 'HR' },
    { value: 'TL', label: 'Team Lead' },
    { value: 'EMPLOYEE', label: 'Employee' }
  ];

  columns: TableColumn[] = [
    { key: 'employeeCode', label: 'Code', sortable: true, width: '110px' },
    { key: 'fullName', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'role', label: 'Role', sortable: true, align: 'center' },
    { key: 'designation', label: 'Designation', sortable: true },
    { key: 'department', label: 'Department', sortable: true },
    { key: 'teamName', label: 'Team', sortable: true }
  ];

  constructor(
    private managementService: ManagementService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.loading = true;
    this.managementService.getEmployees(this.selectedRole).subscribe({
      next: (data) => {
        this.employees = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toast.error('Failed to load employees');
      }
    });
  }

  onRoleChange(role: string): void {
    this.selectedRole = role;
    this.loadEmployees();
  }
}