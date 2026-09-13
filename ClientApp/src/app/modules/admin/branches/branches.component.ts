import { Component, OnInit } from '@angular/core';
import { DepartmentService, ManagementService, ToastService } from '../../../core/services';
import { Branch, ManagedEmployee } from '../../../core/models';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-admin-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class AdminBranchesComponent implements OnInit {
  branches: Branch[] = [];
  employees: ManagedEmployee[] = [];

  searchTerm = '';
  statusFilter = 'All Status';

  defaultCoverImages: { [key: string]: string } = {
    'Head Office': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    'Pune Office': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    'Bangalore Office': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80',
    'Delhi Office': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80',
    'Mumbai Office': 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80'
  };

  branchThemeMap: { [key: string]: { icon: string; bg: string; color: string; pillBg: string; pillColor: string; subtitle: string } } = {
    'Head Office': { icon: 'fas fa-building', bg: '#dbeafe', color: '#1d4ed8', pillBg: '#dbeafe', pillColor: '#1d4ed8', subtitle: 'Corporate Headquarters' },
    'Pune Office': { icon: 'fas fa-city', bg: '#dcfce7', color: '#15803d', pillBg: '#dcfce7', pillColor: '#15803d', subtitle: 'West Region Office' },
    'Bangalore Office': { icon: 'fas fa-network-wired', bg: '#ede9fe', color: '#6366f1', pillBg: '#ede9fe', pillColor: '#6366f1', subtitle: 'South Region Office' },
    'Delhi Office': { icon: 'fas fa-landmark', bg: '#fef3c7', color: '#b45309', pillBg: '#fef3c7', pillColor: '#b45309', subtitle: 'North Region Office' }
  };

  constructor(
    private departmentService: DepartmentService,
    private managementService: ManagementService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadBranches();
    this.loadEmployees();
  }

  loadBranches(): void {
    this.departmentService.getBranches().subscribe({
      next: (data) => this.branches = data,
      error: () => this.toast.error('Failed to load branches')
    });
  }

  private loadEmployees(): void {
    this.managementService.getEmployees().subscribe({
      next: (data) => this.employees = data,
      error: () => {}
    });
  }

  get filteredBranches(): Branch[] {
    return this.branches.filter(b => {
      const matchesSearch = !this.searchTerm.trim() ||
        b.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        b.code.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        b.city.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        (b.address && b.address.toLowerCase().includes(this.searchTerm.toLowerCase()));

      const matchesStatus = this.statusFilter === 'All Status' ||
        (this.statusFilter === 'Active' && b.status === 'Active') ||
        (this.statusFilter === 'Inactive' && b.status !== 'Active');

      return matchesSearch && matchesStatus;
    });
  }

  get activeBranchesCount(): number {
    return this.branches.filter(b => b.status === 'Active').length;
  }

  get inactiveBranchesCount(): number {
    return this.branches.filter(b => b.status !== 'Active').length;
  }

  get totalEmployeesCount(): number {
    return this.employees.length || this.branches.reduce((acc, b) => acc + (b.employeeCount || 0), 0);
  }

  getBranchCover(branch: Branch): string {
    if (branch.imageUrl) return this.resolveImage(branch.imageUrl);
    if (this.defaultCoverImages[branch.name]) return this.defaultCoverImages[branch.name];
    return 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80';
  }

  getBranchTheme(branch: Branch) {
    if (this.branchThemeMap[branch.name]) {
      return this.branchThemeMap[branch.name];
    }
    return {
      icon: 'fas fa-building',
      bg: '#e2e8f0',
      color: '#475569',
      pillBg: '#e2e8f0',
      pillColor: '#334155',
      subtitle: 'Regional Office'
    };
  }

  getLocationText(branch: Branch): string {
    const parts = [branch.address, branch.city, branch.state, branch.country].filter(Boolean);
    return parts.length > 0 ? parts.join(', ') : 'Address not specified';
  }

  resolveImage(url?: string): string {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) return url;
    return environment.apiBaseUrl.replace(/\/api$/, '') + url;
  }

  async deleteBranch(branch: Branch): Promise<void> {
    const confirmed = await this.toast.confirm(
      `Deactivate branch "${branch.name}"?`,
      'This action will set the branch status to inactive.'
    );
    if (!confirmed) return;

    this.departmentService.deleteBranch(branch.id).subscribe({
      next: () => {
        this.toast.success('Branch deactivated');
        this.loadBranches();
      },
      error: (err) => this.toast.error(err?.error?.message || 'Failed to delete branch')
    });
  }
}