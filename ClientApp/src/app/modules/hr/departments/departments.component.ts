import { Component, OnInit } from '@angular/core';
import { DepartmentService, ManagementService, ToastService } from '../../../core/services';
import { Department, ManagedEmployee, Team } from '../../../core/models';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-hr-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class HrDepartmentsComponent implements OnInit {
  departments: Department[] = [];
  employees: ManagedEmployee[] = [];
  teams: Team[] = [];

  searchTerm = '';
  statusFilter = 'All Status';
  activeDropdownId: string | null = null;

  // View Details Modal State
  selectedDeptForView: Department | null = null;
  viewingDeptEmployees: ManagedEmployee[] = [];

  // Edit / Create Form Modal State
  showForm = false;
  isEdit = false;
  editingId = '';
  form = {
    name: '',
    code: '',
    description: '',
    imageUrl: '',
    headId: ''
  };

  defaultCoverImages: { [key: string]: string } = {
    'Marketing': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80',
    'Human Resources': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    'Finance': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    'Sales': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80',
    'IT & Software': 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
    'Operations': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80'
  };

  deptThemeMap: { [key: string]: { icon: string; bg: string; color: string; pillBg: string; pillColor: string } } = {
    'Marketing': { icon: 'fas fa-bullhorn', bg: '#f3e8ff', color: '#9333ea', pillBg: '#f3e8ff', pillColor: '#7e22ce' },
    'Human Resources': { icon: 'fas fa-users-cog', bg: '#dcfce7', color: '#16a34a', pillBg: '#e0e7ff', pillColor: '#4338ca' },
    'Finance': { icon: 'fas fa-chart-line', bg: '#dbeafe', color: '#2563eb', pillBg: '#dbeafe', pillColor: '#1d4ed8' },
    'Sales': { icon: 'fas fa-bullseye', bg: '#fce7f3', color: '#db2777', pillBg: '#fce7f3', pillColor: '#be185d' },
    'IT & Software': { icon: 'fas fa-laptop-code', bg: '#e0e7ff', color: '#4f46e5', pillBg: '#e0e7ff', pillColor: '#3730a3' },
    'Operations': { icon: 'fas fa-cogs', bg: '#fef3c7', color: '#d97706', pillBg: '#fef3c7', pillColor: '#b45309' }
  };

  constructor(
    private departmentService: DepartmentService,
    private managementService: ManagementService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadDepartments();
    this.loadEmployees();
    this.loadTeams();
  }

  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe({
      next: (data: any) => this.departments = data,
      error: () => this.toast.error('Failed to load departments')
    });
  }

  private loadEmployees(): void {
    this.managementService.getEmployees().subscribe({
      next: (data: any) => this.employees = data,
      error: () => this.toast.error('Failed to load employees')
    });
  }

  private loadTeams(): void {
    this.departmentService.getTeams().subscribe({
      next: (data: any) => this.teams = data,
      error: () => {}
    });
  }

  get filteredDepartments(): Department[] {
    return this.departments.filter(dept => {
      const matchesSearch = !this.searchTerm.trim() ||
        dept.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        dept.code.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        (dept.description && dept.description.toLowerCase().includes(this.searchTerm.toLowerCase()));

      const matchesStatus = this.statusFilter === 'All Status' ||
        (this.statusFilter === 'Active' && dept.status === 'Active') ||
        (this.statusFilter === 'Inactive' && dept.status !== 'Active');

      return matchesSearch && matchesStatus;
    });
  }

  get activeDepartmentsCount(): number {
    return this.departments.filter(d => d.status === 'Active' || !d.status).length;
  }

  get inactiveDepartmentsCount(): number {
    return this.departments.filter(d => d.status && d.status !== 'Active').length;
  }

  get totalEmployeesCount(): number {
    return this.departments.reduce((sum, d) => sum + (d.employeeCount || 0), 0);
  }

  getTeamCount(deptId: string, deptName: string): number {
    if (!this.teams || this.teams.length === 0) return 0;
    return this.teams.filter(t => t.departmentId === deptId || t.departmentName === deptName).length;
  }

  getHeadName(dept: Department): string {
    return dept.headName || 'Unassigned';
  }

  getDepartmentCover(dept: Department): string {
    if (dept.imageUrl) return this.resolveImage(dept.imageUrl);
    if (this.defaultCoverImages[dept.name]) return this.defaultCoverImages[dept.name];
    return '/assets/images/hrms-office.jpg';
  }

  getDepartmentTheme(dept: Department) {
    if (this.deptThemeMap[dept.name]) {
      return this.deptThemeMap[dept.name];
    }
    return {
      icon: 'fas fa-building',
      bg: '#e2e8f0',
      color: '#475569',
      pillBg: '#e2e8f0',
      pillColor: '#334155'
    };
  }

  resolveImage(url?: string): string {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) return url;
    return environment.apiBaseUrl.replace(/\/api$/, '') + url;
  }

  toggleDropdown(deptId: string, event: Event): void {
    event.stopPropagation();
    this.activeDropdownId = this.activeDropdownId === deptId ? null : deptId;
  }

  closeDropdowns(): void {
    this.activeDropdownId = null;
  }

  // View Details Modal trigger
  openViewDetails(dept: Department): void {
    this.closeDropdowns();
    this.selectedDeptForView = dept;
    this.viewingDeptEmployees = this.employees.filter(
      e => e.department?.toLowerCase() === dept.name.toLowerCase() || e.department?.toLowerCase() === dept.code.toLowerCase()
    );
  }

  closeViewDetails(): void {
    this.selectedDeptForView = null;
    this.viewingDeptEmployees = [];
  }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || !input.files[0]) return;
    const file = input.files[0];
    this.departmentService.uploadImage(file).subscribe({
      next: (res: any) => {
        this.form.imageUrl = res.imageUrl;
        this.toast.success('Image uploaded');
      },
      error: (err: any) => this.toast.error(err?.error?.message || 'Failed to upload image')
    });
    input.value = '';
  }

  removeImage(): void {
    this.form.imageUrl = '';
  }

  openAdd(): void {
    this.isEdit = false;
    this.editingId = '';
    this.form = { name: '', code: '', description: '', imageUrl: '', headId: '' };
    this.showForm = true;
  }

  openEdit(dept: Department): void {
    this.isEdit = true;
    this.editingId = dept.id;
    this.form = {
      name: dept.name,
      code: dept.code,
      description: dept.description || '',
      imageUrl: dept.imageUrl || '',
      headId: dept.headId || ''
    };
    this.showForm = true;
    this.closeDropdowns();
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
      imageUrl: this.form.imageUrl || undefined,
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
      error: (err: any) => this.toast.error(err?.error?.message || 'Failed to save department')
    });
  }

  async deleteDepartment(dept: Department): Promise<void> {
    this.closeDropdowns();
    const confirmed = await this.toast.confirm(`Deactivate department "${dept.name}"?`, 'This action will deactivate the selected department.');
    if (!confirmed) return;
    this.departmentService.deleteDepartment(dept.id).subscribe({
      next: () => {
        this.toast.success('Department deactivated');
        this.loadDepartments();
      },
      error: (err: any) => this.toast.error(err?.error?.message || 'Failed to delete department')
    });
  }
}
