import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService, ManagementService, ToastService } from '../../../../core/services';
import { Department, ManagedEmployee, Team } from '../../../../core/models';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-hr-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.scss']
})
export class HrDepartmentDetailComponent implements OnInit {
  departmentId = '';
  department: Department | null = null;
  employees: ManagedEmployee[] = [];
  deptEmployees: ManagedEmployee[] = [];
  teams: Team[] = [];

  loading = true;

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
    private route: ActivatedRoute,
    private router: Router,
    private departmentService: DepartmentService,
    private managementService: ManagementService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.departmentId = params['id'];
      if (this.departmentId) {
        this.loadData(this.departmentId);
      }
    });
  }

  loadData(id: string): void {
    this.loading = true;
    this.departmentService.getDepartment(id).subscribe({
      next: (dept: Department) => {
        this.department = dept;
        this.loadEmployeesAndTeams();
      },
      error: () => {
        this.loading = false;
        this.toast.error('Failed to load department details');
        this.router.navigate(['/hr/departments']);
      }
    });
  }

  private loadEmployeesAndTeams(): void {
    this.managementService.getEmployees().subscribe({
      next: (emps: any[]) => {
        this.employees = emps;
        if (this.department) {
          this.deptEmployees = emps.filter(
            (e: any) => e.department?.toLowerCase() === this.department?.name.toLowerCase() ||
                  e.department?.toLowerCase() === this.department?.code.toLowerCase()
          );
        }
      }
    });

    this.departmentService.getTeams().subscribe({
      next: (teamsData: any) => {
        this.teams = teamsData;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  get activeTeams(): Team[] {
    if (!this.department || !this.teams) return [];
    return this.teams.filter(
      t => t.departmentId === this.department?.id || t.departmentName === this.department?.name
    );
  }

  getHeadName(): string {
    return this.department?.headName || 'Unassigned';
  }

  getDepartmentCover(): string {
    if (!this.department) return '/assets/images/hrms-office.jpg';
    if (this.department.imageUrl) return this.resolveImage(this.department.imageUrl);
    if (this.defaultCoverImages[this.department.name]) return this.defaultCoverImages[this.department.name];
    return '/assets/images/hrms-office.jpg';
  }

  getDepartmentTheme() {
    if (!this.department) {
      return { icon: 'fas fa-building', bg: '#e2e8f0', color: '#475569', pillBg: '#e2e8f0', pillColor: '#334155' };
    }
    if (this.deptThemeMap[this.department.name]) {
      return this.deptThemeMap[this.department.name];
    }
    return { icon: 'fas fa-building', bg: '#e2e8f0', color: '#475569', pillBg: '#e2e8f0', pillColor: '#334155' };
  }

  resolveImage(url?: string): string {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) return url;
    return environment.apiBaseUrl.replace(/\/api$/, '') + url;
  }

  async deactivateDepartment(): Promise<void> {
    if (!this.department) return;
    const confirmed = await this.toast.confirm(
      `Deactivate department "${this.department.name}"?`,
      'This action will set department status to inactive.'
    );
    if (!confirmed) return;

    this.departmentService.deleteDepartment(this.department.id).subscribe({
      next: () => {
        this.toast.success('Department deactivated successfully');
        this.router.navigate(['/hr/departments']);
      },
      error: (err: any) => this.toast.error(err?.error?.message || 'Failed to deactivate department')
    });
  }
}
