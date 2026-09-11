import { Component, OnInit } from '@angular/core';
import { DepartmentService, ToastService } from '../../../core/services';
import { TableColumn } from '../../../core/models';

@Component({
  selector: 'app-admin-designations',
  templateUrl: './designations.component.html',
  styleUrls: ['./designations.component.scss']
})
export class AdminDesignationsComponent implements OnInit {
  showAdd = false;
  columns: TableColumn[] = [
    { key: 'title', label: 'Designation Title', sortable: true },
    { key: 'departmentName', label: 'Department', sortable: true },
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
  designations: any[] = [];

  constructor(private departmentService: DepartmentService, private toast: ToastService) {}

  ngOnInit(): void {
    this.loadDesignations();
  }

  loadDesignations(): void {
    this.departmentService.getDesignations().subscribe({
      next: (data) => this.designations = data,
      error: () => this.toast.error('Failed to load designations')
    });
  }

  onAction(event: { action: string; row: any }): void {
    if (event.action === 'delete') {
      this.departmentService.deleteDesignation(event.row.id).subscribe({
        next: () => { this.toast.success('Designation deleted'); this.loadDesignations(); },
        error: () => this.toast.error('Failed to delete designation')
      });
    }
  }
}
