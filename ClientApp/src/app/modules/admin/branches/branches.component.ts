import { Component, OnInit } from '@angular/core';
import { DepartmentService, ToastService } from '../../../core/services';
import { Branch } from '../../../core/models';

interface BranchCard extends Branch {
  color: string;
}

@Component({
  selector: 'app-admin-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class AdminBranchesComponent implements OnInit {
  branches: BranchCard[] = [];

  showForm = false;
  isEdit = false;
  editingId = '';
  form = {
    name: '',
    code: '',
    address: '',
    city: '',
    state: '',
    country: '',
    phone: '',
    email: ''
  };

  private gradients = [
    'linear-gradient(135deg, #6366f1, #818cf8)',
    'linear-gradient(135deg, #06b6d4, #22d3ee)',
    'linear-gradient(135deg, #10b981, #34d399)',
    'linear-gradient(135deg, #f59e0b, #fbbf24)',
    'linear-gradient(135deg, #8b5cf6, #a78bfa)',
    'linear-gradient(135deg, #ec4899, #f472b6)'
  ];

  constructor(private departmentService: DepartmentService, private toast: ToastService) {}

  ngOnInit(): void {
    this.loadBranches();
  }

  loadBranches(): void {
    this.departmentService.getBranches().subscribe({
      next: (data) => this.branches = data.map((b: Branch, i: number) => ({
        ...b,
        color: this.gradients[i % this.gradients.length]
      })),
      error: () => this.toast.error('Failed to load branches')
    });
  }

  getLocation(branch: Branch): string {
    return [branch.city, branch.state, branch.country].filter(Boolean).join(', ') || 'Location not set';
  }

  openAdd(): void {
    this.isEdit = false;
    this.editingId = '';
    this.form = {
      name: '',
      code: '',
      address: '',
      city: '',
      state: '',
      country: '',
      phone: '',
      email: ''
    };
    this.showForm = true;
  }

  openEdit(branch: Branch): void {
    this.isEdit = true;
    this.editingId = branch.id;
    this.form = {
      name: branch.name,
      code: branch.code,
      address: branch.address || '',
      city: branch.city,
      state: branch.state,
      country: branch.country,
      phone: branch.phone || '',
      email: branch.email || ''
    };
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm = false;
  }

  saveForm(): void {
    if (!this.form.name.trim()) {
      this.toast.error('Branch name is required.');
      return;
    }
    if (!this.form.code.trim()) {
      this.toast.error('Branch code is required.');
      return;
    }
    if (!this.form.city.trim()) {
      this.toast.error('City is required.');
      return;
    }

    const payload = {
      name: this.form.name.trim(),
      code: this.form.code.trim(),
      address: this.form.address || undefined,
      city: this.form.city.trim(),
      state: this.form.state.trim(),
      country: this.form.country.trim(),
      phone: this.form.phone || undefined,
      email: this.form.email || undefined
    };

    const request = this.isEdit
      ? this.departmentService.updateBranch(this.editingId, payload)
      : this.departmentService.createBranch(payload);

    request.subscribe({
      next: () => {
        this.toast.success(this.isEdit ? 'Branch updated' : 'Branch created');
        this.closeForm();
        this.loadBranches();
      },
      error: (err) => this.toast.error(err?.error?.message || 'Failed to save branch')
    });
  }

  deleteBranch(branch: Branch): void {
    if (!confirm(`Deactivate branch "${branch.name}"?`)) return;
    this.departmentService.deleteBranch(branch.id).subscribe({
      next: () => {
        this.toast.success('Branch deactivated');
        this.loadBranches();
      },
      error: (err) => this.toast.error(err?.error?.message || 'Failed to delete branch')
    });
  }
}