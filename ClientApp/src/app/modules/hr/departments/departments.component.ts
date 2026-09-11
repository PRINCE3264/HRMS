import { Component, OnInit } from '@angular/core';
import { DepartmentService, ToastService } from '../../../core/services';
import { Department } from '../../../core/models';

@Component({
  selector: 'app-hr-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class HrDepartmentsComponent implements OnInit {
  showAddModal = false;
  searchTerm = '';

  newDept = {
    name: '',
    description: '',
    hod: '',
    budget: ''
  };

  departments: any[] = [];

  private deptMeta: Record<string, { icon: string; color: string; teamCount: number; budget: string; openPositions: number }> = {
    'Engineering':       { icon: 'fas fa-code', color: '#4461f6', teamCount: 8, budget: '$2.4M', openPositions: 3 },
    'Marketing':         { icon: 'fas fa-bullhorn', color: '#10b981', teamCount: 5, budget: '$1.1M', openPositions: 1 },
    'Finance':           { icon: 'fas fa-chart-line', color: '#f59e0b', teamCount: 4, budget: '$890K', openPositions: 2 },
    'Design':            { icon: 'fas fa-palette', color: '#ec4899', teamCount: 3, budget: '$780K', openPositions: 1 },
    'Human Resources':   { icon: 'fas fa-users', color: '#8b5cf6', teamCount: 4, budget: '$650K', openPositions: 0 },
    'Operations':        { icon: 'fas fa-cogs', color: '#06b6d4', teamCount: 6, budget: '$1.8M', openPositions: 4 },
    'HR':                { icon: 'fas fa-users', color: '#8b5cf6', teamCount: 4, budget: '$650K', openPositions: 0 },
  };

  constructor(private departmentService: DepartmentService, private toastService: ToastService) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe({
      next: (data) => {
        this.departments = data.map(d => {
          const meta = this.deptMeta[d.name] || { icon: 'fas fa-building', color: '#6366f1', teamCount: 0, budget: 'TBD', openPositions: 0 };
          return {
            id: d.id,
            name: d.name,
            icon: meta.icon,
            color: meta.color,
            description: d.description || 'No description provided.',
            employeeCount: d.employeeCount,
            teamCount: meta.teamCount,
            budget: meta.budget,
            hod: d.headName || 'Unassigned',
            status: d.status || 'Active',
            openPositions: meta.openPositions,
          };
        });
      }
    });
  }

  get filteredDepartments() {
    if (!this.searchTerm.trim()) return this.departments;
    const s = this.searchTerm.toLowerCase();
    return this.departments.filter(d =>
      d.name.toLowerCase().includes(s) ||
      d.description.toLowerCase().includes(s) ||
      d.hod.toLowerCase().includes(s)
    );
  }

  get totalEmployees() {
    return this.departments.reduce((a, d) => a + d.employeeCount, 0);
  }

  get totalTeams() {
    return this.departments.reduce((a, d) => a + d.teamCount, 0);
  }

  openAddModal() {
    this.newDept = { name: '', description: '', hod: '', budget: '' };
    this.showAddModal = true;
  }

  closeModal() {
    this.showAddModal = false;
  }

  saveDepartment() {
    if (!this.newDept.name.trim()) return;
    this.departmentService.createDepartment({
      name: this.newDept.name,
      description: this.newDept.description,
    }).subscribe({
      next: () => {
        this.toastService.success('Department created successfully');
        this.loadDepartments();
        this.showAddModal = false;
      },
      error: () => {
        this.toastService.error('Failed to create department');
      }
    });
  }
}
