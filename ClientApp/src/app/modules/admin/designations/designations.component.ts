import { Component, OnInit } from '@angular/core';
import { DepartmentService, ToastService } from '../../../core/services';
import { Designation, Department, TableColumn } from '../../../core/models';

@Component({
  selector: 'app-admin-designations',
  templateUrl: './designations.component.html',
  styleUrls: ['./designations.component.scss']
})
export class AdminDesignationsComponent implements OnInit {
  showForm = false;
  isEdit = false;
  editingId = '';
  departments: Department[] = [];

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
  designations: Designation[] = [];

  form = {
    title: '',
    level: '',
    departmentId: '',
    minSalary: '',
    maxSalary: ''
  };

  constructor(private departmentService: DepartmentService, private toast: ToastService) {}

  ngOnInit(): void {
    this.loadDesignations();
    this.departmentService.getDepartments().subscribe({
      next: (data) => this.departments = data,
      error: () => this.toast.error('Failed to load departments')
    });
  }

  loadDesignations(): void {
    this.departmentService.getDesignations().subscribe({
      next: (data) => this.designations = data,
      error: () => this.toast.error('Failed to load designations')
    });
  }

  openAdd(): void {
    this.isEdit = false;
    this.editingId = '';
    this.form = { title: '', level: '', departmentId: '', minSalary: '', maxSalary: '' };
    this.showForm = true;
  }

  openEdit(des: Designation): void {
    this.isEdit = true;
    this.editingId = des.id;
    this.form = {
      title: des.title,
      level: des.level,
      departmentId: des.departmentId || '',
      minSalary: des.minSalary != null ? String(des.minSalary) : '',
      maxSalary: des.maxSalary != null ? String(des.maxSalary) : ''
    };
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm = false;
  }

  saveForm(): void {
    if (!this.form.title.trim()) {
      this.toast.error('Designation title is required.');
      return;
    }
    if (!this.form.level.trim()) {
      this.toast.error('Level is required.');
      return;
    }

    const payload = {
      title: this.form.title.trim(),
      level: this.form.level.trim(),
      departmentId: this.form.departmentId || undefined,
      minSalary: this.form.minSalary !== '' ? Number(this.form.minSalary) : undefined,
      maxSalary: this.form.maxSalary !== '' ? Number(this.form.maxSalary) : undefined
    };

    const request = this.isEdit
      ? this.departmentService.updateDesignation(this.editingId, payload)
      : this.departmentService.createDesignation(payload);

    request.subscribe({
      next: () => {
        this.toast.success(this.isEdit ? 'Designation updated' : 'Designation created');
        this.closeForm();
        this.loadDesignations();
      },
      error: (err) => this.toast.error(err?.error?.message || 'Failed to save designation')
    });
  }

  onAction(event: { action: string; row: any }): void {
    if (event.action === 'delete') {
      if (!confirm(`Deactivate designation "${event.row.title}"?`)) return;
      this.departmentService.deleteDesignation(event.row.id).subscribe({
        next: () => {
          this.toast.success('Designation deactivated');
          this.loadDesignations();
        },
        error: (err) => this.toast.error(err?.error?.message || 'Failed to delete designation')
      });
    } else if (event.action === 'edit') {
      this.openEdit(event.row);
    }
  }
}