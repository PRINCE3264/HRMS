import { Component, OnInit } from '@angular/core';
import { DepartmentService, ManagementService, ToastService } from '../../../core/services';
import { Department, ManagedEmployee, Team } from '../../../core/models';

@Component({
  selector: 'app-admin-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class AdminTeamsComponent implements OnInit {
  teams: Team[] = [];
  departments: Department[] = [];
  employees: ManagedEmployee[] = [];

  searchTerm = '';
  departmentFilter = 'All Departments';
  activeDropdownId: string | null = null;
  loading = false;

  private colorPalette = [
    { bg: '#2563eb', color: '#ffffff' }, // Blue (A)
    { bg: '#7c3aed', color: '#ffffff' }, // Purple (G)
    { bg: '#0891b2', color: '#ffffff' }, // Cyan (R)
    { bg: '#ef4444', color: '#ffffff' }, // Red (P)
    { bg: '#f59e0b', color: '#ffffff' }, // Amber (D)
    { bg: '#ec4899', color: '#ffffff' }, // Pink (C)
    { bg: '#10b981', color: '#ffffff' }  // Emerald
  ];

  defaultTeams: Team[] = [
    {
      id: 'demo-1',
      name: 'Alpha Squad',
      departmentName: 'Engineering',
      teamLeadName: 'Michael Chen',
      memberCount: 8,
      status: 'Active',
      description: 'Core platform development team responsible for the main product architecture and features.',
      activeProjectsCount: 3
    },
    {
      id: 'demo-2',
      name: 'Growth Team',
      departmentName: 'Marketing',
      teamLeadName: 'Emily Davis',
      memberCount: 6,
      status: 'Active',
      description: 'Focused on customer acquisition, retention strategies, and growth hacking initiatives.',
      activeProjectsCount: 2
    },
    {
      id: 'demo-3',
      name: 'Revenue Builders',
      departmentName: 'Sales',
      teamLeadName: 'David Park',
      memberCount: 12,
      status: 'Active',
      description: 'Enterprise sales team handling key accounts and new business development.',
      activeProjectsCount: 4
    },
    {
      id: 'demo-4',
      name: 'People Ops',
      departmentName: 'Human Resources',
      teamLeadName: 'Sarah Johnson',
      memberCount: 5,
      status: 'Active',
      description: 'Responsible for employee engagement, culture initiatives, and HR operations.',
      activeProjectsCount: 2
    },
    {
      id: 'demo-5',
      name: 'Design Forge',
      departmentName: 'Design',
      teamLeadName: 'Lisa Anderson',
      memberCount: 4,
      status: 'Active',
      description: 'Product design team creating user interfaces and experience across all products.',
      activeProjectsCount: 3
    },
    {
      id: 'demo-6',
      name: 'Cloud Ops',
      departmentName: 'Engineering',
      teamLeadName: 'Robert Wilson',
      memberCount: 5,
      status: 'Inactive',
      description: 'Infrastructure and DevOps team managing cloud services and deployment pipelines.',
      activeProjectsCount: 2
    }
  ];

  constructor(
    private departmentService: DepartmentService,
    private managementService: ManagementService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    this.departmentService.getTeams().subscribe({
      next: (data) => {
        this.teams = (data && data.length > 0) ? data : this.defaultTeams;
        this.loading = false;
      },
      error: () => {
        this.teams = this.defaultTeams;
        this.loading = false;
      }
    });

    this.departmentService.getDepartments().subscribe({
      next: (depts) => this.departments = depts,
      error: () => {}
    });

    this.managementService.getEmployees().subscribe({
      next: (emps) => this.employees = emps,
      error: () => {}
    });
  }

  get filteredTeams(): Team[] {
    return this.teams.filter(team => {
      const matchesSearch = !this.searchTerm.trim() ||
        team.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        (team.departmentName && team.departmentName.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        (team.teamLeadName && team.teamLeadName.toLowerCase().includes(this.searchTerm.toLowerCase()));

      const matchesDept = this.departmentFilter === 'All Departments' ||
        team.departmentName?.toLowerCase() === this.departmentFilter.toLowerCase() ||
        team.departmentId === this.departmentFilter;

      return matchesSearch && matchesDept;
    });
  }

  get activeTeamsCount(): number {
    return this.teams.filter(t => t.status === 'Active' || !t.status).length;
  }

  get inactiveTeamsCount(): number {
    return this.teams.filter(t => t.status && t.status !== 'Active').length;
  }

  get totalMembersCount(): number {
    return this.teams.reduce((sum, t) => sum + (t.memberCount || 0), 0);
  }

  getTeamColor(index: number) {
    return this.colorPalette[index % this.colorPalette.length];
  }

  getTeamInitial(name: string): string {
    if (!name) return 'T';
    return name.charAt(0).toUpperCase();
  }

  toggleDropdown(teamId: string, event: Event): void {
    event.stopPropagation();
    this.activeDropdownId = this.activeDropdownId === teamId ? null : teamId;
  }

  closeDropdowns(): void {
    this.activeDropdownId = null;
  }

  async deleteTeam(team: Team): Promise<void> {
    this.closeDropdowns();
    const confirmed = await this.toast.confirm(
      `Deactivate team "${team.name}"?`,
      'This will mark the selected team as inactive.'
    );
    if (!confirmed) return;

    this.departmentService.deleteTeam(team.id).subscribe({
      next: () => {
        this.toast.success('Team deactivated');
        this.loadData();
      },
      error: (err) => this.toast.error(err?.error?.message || 'Failed to deactivate team')
    });
  }
}
