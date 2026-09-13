import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService, ToastService } from '../../../core/services';
import { Branch } from '../../../core/models';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-admin-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.scss']
})
export class AdminBranchFormComponent implements OnInit {
  isEdit = false;
  branchId = '';
  loading = false;
  saving = false;

  form = {
    name: '',
    code: '',
    address: '',
    city: '',
    state: '',
    country: '',
    phone: '',
    email: '',
    imageUrl: '',
    status: 'Active'
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private departmentService: DepartmentService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEdit = true;
        this.branchId = params['id'];
        this.loadBranchData(this.branchId);
      }
    });
  }

  private loadBranchData(id: string): void {
    this.loading = true;
    this.departmentService.getBranches().subscribe({
      next: (branches: Branch[]) => {
        this.loading = false;
        const b = branches.find(item => item.id === id);
        if (b) {
          this.form = {
            name: b.name,
            code: b.code,
            address: b.address || '',
            city: b.city || '',
            state: b.state || '',
            country: b.country || '',
            phone: b.phone || '',
            email: b.email || '',
            imageUrl: b.imageUrl || '',
            status: b.status || 'Active'
          };
        } else {
          this.toast.error('Branch not found');
          this.router.navigate(['/admin/branches']);
        }
      },
      error: () => {
        this.loading = false;
        this.toast.error('Failed to load branch details');
        this.router.navigate(['/admin/branches']);
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
    this.departmentService.uploadBranchImage(file).subscribe({
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
      this.toast.error('Branch name is required');
      return;
    }
    if (!this.form.code.trim()) {
      this.toast.error('Branch code is required');
      return;
    }
    if (!this.form.city.trim()) {
      this.toast.error('City is required');
      return;
    }

    this.saving = true;
    const payload = {
      name: this.form.name.trim(),
      code: this.form.code.trim(),
      address: this.form.address || undefined,
      city: this.form.city.trim(),
      state: this.form.state.trim(),
      country: this.form.country.trim(),
      phone: this.form.phone || undefined,
      email: this.form.email || undefined,
      imageUrl: this.form.imageUrl || undefined,
      status: this.form.status
    };

    const request = this.isEdit
      ? this.departmentService.updateBranch(this.branchId, payload)
      : this.departmentService.createBranch(payload);

    request.subscribe({
      next: () => {
        this.saving = false;
        this.toast.success(this.isEdit ? 'Branch updated successfully' : 'Branch created successfully');
        this.router.navigate(['/admin/branches']);
      },
      error: (err) => {
        this.saving = false;
        this.toast.error(err?.error?.message || 'Failed to save branch');
      }
    });
  }
}
