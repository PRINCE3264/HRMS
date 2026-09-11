import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService, ToastService } from '../../../core/services';
import { TableColumn } from '../../../core/models';

@Component({
  selector: 'app-admin-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class AdminEmployeesComponent implements OnInit {
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
  employees: any[] = [];

  constructor(private router: Router, private employeeService: EmployeeService, private toast: ToastService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => this.employees = data.map((e: any) => ({
        id: e.id,
        employeeId: e.employeeId,
        name: `${e.firstName} ${e.lastName}`.trim(),
        email: e.email,
        department: e.department,
        designation: e.designation,
        joiningDate: e.joiningDate,
        status: e.employmentStatus
      })),
      error: () => this.toast.error('Failed to load employees')
    });
  }

  onAction(event: { action: string; row: any }): void {
    switch (event.action) {
      case 'view':
        this.router.navigate(['/admin/employees', event.row.id]);
        break;
      case 'edit':
        this.router.navigate(['/admin/employees', event.row.id, 'edit']);
        break;
      case 'delete':
        this.employeeService.deleteEmployee(event.row.id).subscribe({
          next: () => {
            this.toast.success('Employee deleted');
            this.loadEmployees();
          },
          error: () => this.toast.error('Failed to delete employee')
        });
        break;
      default:
        break;
    }
  }
}