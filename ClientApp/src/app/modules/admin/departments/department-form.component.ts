import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService, ManagementService, ToastService } from '../../../core/services';
import { Department, ManagedEmployee } from '../../../core/models';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-admin-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class AdminDepartmentFormComponent implements OnInit {
  isEdit = false;
  deptId = '';
  loading = false;
  saving = false;

  employees: ManagedEmployee[] = [];

  form = {
    name: '',
    code: '',
    description: '',
    imageUrl: '',
    headId: '',
    status: 'Active'
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private departmentService: DepartmentService,
    private managementService: ManagementService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEdit = true;
        this.deptId = params['id'];
        this.loadDepartmentData(this.deptId);
      }
    });
  }

  private loadEmployees(): void {
    this.managementService.getEmployees().subscribe({
      next: (data) => this.employees = data,
      error: () => this.toast.error('Failed to load employees for HOD assignment')
    });
  }

  private loadDepartmentData(id: string): void {
    this.loading = true;
    this.departmentService.getDepartment(id).subscribe({
      next: (dept: Department) => {
        this.loading = false;
        if (dept) {
          this.form = {
            name: dept.name,
            code: dept.code,
            description: dept.description || '',
            imageUrl: dept.imageUrl || '',
            headId: dept.headId || '',
            status: dept.status || 'Active'
          };
        }
      },
      error: () => {
        this.loading = false;
        this.toast.error('Failed to load department details');
        this.router.navigate(['/admin/departments']);
      }
    });
  }

  resolveImage(url?: string): string {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) return url;
    return environment.apiBaseUrl.replace(/\/api$/, '') + url;
  }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || !input.files[0]) return;
    const file = input.files[0];
    this.departmentService.uploadImage(file).subscribe({
      next: (res) => {
        this.form.imageUrl = res.imageUrl;
        this.toast.success('Image uploaded successfully');
      },
      error: (err) => this.toast.error(err?.error?.message || 'Failed to upload image')
    });
    input.value = '';
  }

  removeImage(): void {
    this.form.imageUrl = '';
  }

  onSubmit(): void {
    if (!this.form.name.trim()) {
      this.toast.error('Department name is required');
      return;
    }
    if (!this.form.code.trim()) {
      this.toast.error('Department code is required');
      return;
    }

    this.saving = true;
    const payload = {
      name: this.form.name.trim(),
      code: this.form.code.trim(),
      description: this.form.description || undefined,
      imageUrl: this.form.imageUrl || undefined,
      headId: this.form.headId || undefined,
      status: this.form.status
    };

    const request = this.isEdit
      ? this.departmentService.updateDepartment(this.deptId, payload)
      : this.departmentService.createDepartment(payload);

    request.subscribe({
      next: () => {
        this.saving = false;
        this.toast.success(this.isEdit ? 'Department updated successfully' : 'Department created successfully');
        this.router.navigate(['/admin/departments']);
      },
      error: (err) => {
        this.saving = false;
        this.toast.error(err?.error?.message || 'Failed to save department');
      }
    });
  }
}
