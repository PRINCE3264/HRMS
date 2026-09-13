import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService, ToastService } from '../../../core/services';
import { Designation, Department } from '../../../core/models';

@Component({
  selector: 'app-admin-designation-form',
  templateUrl: './designation-form.component.html',
  styleUrls: ['./designation-form.component.scss']
})
export class AdminDesignationFormComponent implements OnInit {
  isEdit = false;
  designationId = '';
  loading = false;
  saving = false;

  departments: Department[] = [];

  form = {
    title: '',
    level: '',
    departmentId: '',
    minSalary: '',
    maxSalary: '',
    status: 'Active'
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private departmentService: DepartmentService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadDepartments();
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEdit = true;
        this.designationId = params['id'];
        this.loadDesignationData(this.designationId);
      }
    });
  }

  private loadDepartments(): void {
    this.departmentService.getDepartments().subscribe({
      next: (data) => this.departments = data,
      error: () => this.toast.error('Failed to load departments')
    });
  }

  private loadDesignationData(id: string): void {
    this.loading = true;
    this.departmentService.getDesignations().subscribe({
      next: (designations: Designation[]) => {
        this.loading = false;
        const des = designations.find(d => d.id === id);
        if (des) {
          this.form = {
            title: des.title,
            level: des.level,
            departmentId: des.departmentId || '',
            minSalary: des.minSalary != null ? String(des.minSalary) : '',
            maxSalary: des.maxSalary != null ? String(des.maxSalary) : '',
            status: des.status || 'Active'
          };
        } else {
          this.toast.error('Designation not found');
          this.router.navigate(['/admin/designations']);
        }
      },
      error: () => {
        this.loading = false;
        this.toast.error('Failed to load designation details');
        this.router.navigate(['/admin/designations']);
      }
    });
  }

  onSubmit(): void {
    if (!this.form.title.trim()) {
      this.toast.error('Designation title is required');
      return;
    }
    if (!this.form.level.trim()) {
      this.toast.error('Level is required');
      return;
    }

    this.saving = true;
    const payload = {
      title: this.form.title.trim(),
      level: this.form.level.trim(),
      departmentId: this.form.departmentId || undefined,
      minSalary: this.form.minSalary !== '' ? Number(this.form.minSalary) : undefined,
      maxSalary: this.form.maxSalary !== '' ? Number(this.form.maxSalary) : undefined,
      status: this.form.status
    };

    const request = this.isEdit
      ? this.departmentService.updateDesignation(this.designationId, payload)
      : this.departmentService.createDesignation(payload);

    request.subscribe({
      next: () => {
        this.saving = false;
        this.toast.success(this.isEdit ? 'Designation updated successfully' : 'Designation created successfully');
        this.router.navigate(['/admin/designations']);
      },
      error: (err) => {
        this.saving = false;
        this.toast.error(err?.error?.message || 'Failed to save designation');
      }
    });
  }
}
