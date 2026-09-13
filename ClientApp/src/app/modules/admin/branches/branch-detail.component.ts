import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService, ManagementService, ToastService } from '../../../core/services';
import { Branch, ManagedEmployee } from '../../../core/models';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-admin-branch-detail',
  templateUrl: './branch-detail.component.html',
  styleUrls: ['./branch-detail.component.scss']
})
export class AdminBranchDetailComponent implements OnInit {
  branchId = '';
  branch: Branch | null = null;
  branchEmployees: ManagedEmployee[] = [];
  loading = true;

  defaultCoverImages: { [key: string]: string } = {
    'Head Office': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    'Pune Office': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    'Bangalore Office': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80'
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private departmentService: DepartmentService,
    private managementService: ManagementService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.branchId = params['id'];
      if (this.branchId) {
        this.loadBranchData(this.branchId);
      }
    });
  }

  loadBranchData(id: string): void {
    this.loading = true;
    this.departmentService.getBranches().subscribe({
      next: (branches: Branch[]) => {
        const b = branches.find(item => item.id === id);
        if (b) {
          this.branch = b;
          this.loadEmployees();
        } else {
          this.loading = false;
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

  private loadEmployees(): void {
    this.managementService.getEmployees().subscribe({
      next: (emps) => {
        this.loading = false;
        if (this.branch) {
          this.branchEmployees = emps.filter(
            e => e.branch?.toLowerCase() === this.branch?.name.toLowerCase() ||
                 e.branch?.toLowerCase() === this.branch?.code.toLowerCase() ||
                 e.branch?.toLowerCase() === this.branch?.city.toLowerCase()
          );
        }
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  getBranchCover(): string {
    if (!this.branch) return '/assets/images/hrms-office.jpg';
    if (this.branch.imageUrl) return this.resolveImage(this.branch.imageUrl);
    if (this.defaultCoverImages[this.branch.name]) return this.defaultCoverImages[this.branch.name];
    return 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80';
  }

  resolveImage(url?: string): string {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) return url;
    return environment.apiBaseUrl.replace(/\/api$/, '') + url;
  }

  async deactivateBranch(): Promise<void> {
    if (!this.branch) return;
    const confirmed = await this.toast.confirm(
      `Deactivate branch "${this.branch.name}"?`,
      'This action will set the branch status to inactive.'
    );
    if (!confirmed) return;

    this.departmentService.deleteBranch(this.branch.id).subscribe({
      next: () => {
        this.toast.success('Branch deactivated successfully');
        this.router.navigate(['/admin/branches']);
      },
      error: (err) => this.toast.error(err?.error?.message || 'Failed to deactivate branch')
    });
  }
}
