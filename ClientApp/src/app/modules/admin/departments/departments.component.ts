import { Component, OnInit } from '@angular/core';
import { DepartmentService, ManagementService, ToastService } from '../../../core/services';
import { Department, ManagedEmployee } from '../../../core/models';

@Component({
  selector: 'app-admin-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class AdminDepartmentsComponent implements OnInit {
  departments: Department[] = [];
  employees: ManagedEmployee[] = [];

  showForm = false;
  isEdit = false;
  editingId = '';
  form = {
    name: '',
    code: '',
    description: '',
    headId: ''
  };

  constructor(
    private departmentService: DepartmentService,
    private managementService: ManagementService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadDepartments();
    this.loadEmployees();
  }

  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe({
      next: (data) => this.departments = data,
      error: () => this.toast.error('Failed to load departments')
    });
  }

  private loadEmployees(): void {
    this.managementService.getEmployees().subscribe({
      next: (data) => this.employees = data,
      error: () => this.toast.error('Failed to load employees')
    });
  }

  getHeadName(dept: Department): string {
    return dept.headName || 'Unassigned';
  }

  openAdd(): void {
    this.isEdit = false;
    this.editingId = '';
    this.form = { name: '', code: '', description: '', headId: '' };
    this.showForm = true;
  }

  openEdit(dept: Department): void {
    this.isEdit = true;
    this.editingId = dept.id;
    this.form = {
      name: dept.name,
      code: dept.code,
      description: dept.description || '',
      headId: dept.headId || ''
    };
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm = false;
  }

  saveForm(): void {
    if (!this.form.name.trim()) {
      this.toast.error('Department name is required.');
      return;
    }
    if (!this.form.code.trim()) {
      this.toast.error('Department code is required.');
      return;
    }

    const payload = {
      name: this.form.name.trim(),
      code: this.form.code.trim(),
      description: this.form.description || undefined,
      headId: this.form.headId || undefined
    };

    const request = this.isEdit
      ? this.departmentService.updateDepartment(this.editingId, payload)
      : this.departmentService.createDepartment(payload);

    request.subscribe({
      next: () => {
        this.toast.success(this.isEdit ? 'Department updated' : 'Department created');
        this.closeForm();
        this.loadDepartments();
      },
      error: (err) => this.toast.error(err?.error?.message || 'Failed to save department')
    });
  }

  async deleteDepartment(dept: Department): Promise<void> {
    const confirmed = await this.toast.confirm(`Deactivate department "${dept.name}"?`, 'This action will deactivate the selected department.');
    if (!confirmed) return;
    this.departmentService.deleteDepartment(dept.id).subscribe({
      next: () => {
        this.toast.success('Department deactivated');
        this.loadDepartments();
      },
      error: (err) => this.toast.error(err?.error?.message || 'Failed to delete department')
    });
  }
}