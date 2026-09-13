import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService, ManagementService, ToastService } from '../../../core/services';
import { Team, ManagedEmployee } from '../../../core/models';

@Component({
  selector: 'app-admin-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class AdminTeamDetailComponent implements OnInit {
  teamId = '';
  team: Team | null = null;
  teamMembers: ManagedEmployee[] = [];
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private departmentService: DepartmentService,
    private managementService: ManagementService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.teamId = params['id'];
      if (this.teamId) {
        this.loadTeamDetails();
      }
    });
  }

  loadTeamDetails(): void {
    this.loading = true;
    this.departmentService.getTeamById(this.teamId).subscribe({
      next: (teamData) => {
        this.team = teamData || this.getDemoTeam(this.teamId);
        this.loadTeamMembers();
      },
      error: () => {
        this.team = this.getDemoTeam(this.teamId);
        this.loadTeamMembers();
      }
    });
  }

  private getDemoTeam(id: string): Team {
    const demos: { [key: string]: Team } = {
      'demo-1': { id: 'demo-1', name: 'Alpha Squad', departmentName: 'Engineering', teamLeadName: 'Michael Chen', memberCount: 8, status: 'Active', description: 'Core platform development team responsible for the main product architecture and features.', activeProjectsCount: 3 },
      'demo-2': { id: 'demo-2', name: 'Growth Team', departmentName: 'Marketing', teamLeadName: 'Emily Davis', memberCount: 6, status: 'Active', description: 'Focused on customer acquisition, retention strategies, and growth hacking initiatives.', activeProjectsCount: 2 },
      'demo-3': { id: 'demo-3', name: 'Revenue Builders', departmentName: 'Sales', teamLeadName: 'David Park', memberCount: 12, status: 'Active', description: 'Enterprise sales team handling key accounts and new business development.', activeProjectsCount: 4 },
      'demo-4': { id: 'demo-4', name: 'People Ops', departmentName: 'Human Resources', teamLeadName: 'Sarah Johnson', memberCount: 5, status: 'Active', description: 'Responsible for employee engagement, culture initiatives, and HR operations.', activeProjectsCount: 2 },
      'demo-5': { id: 'demo-5', name: 'Design Forge', departmentName: 'Design', teamLeadName: 'Lisa Anderson', memberCount: 4, status: 'Active', description: 'Product design team creating user interfaces and experience across all products.', activeProjectsCount: 3 },
      'demo-6': { id: 'demo-6', name: 'Cloud Ops', departmentName: 'Engineering', teamLeadName: 'Robert Wilson', memberCount: 5, status: 'Inactive', description: 'Infrastructure and DevOps team managing cloud services and deployment pipelines.', activeProjectsCount: 2 }
    };
    return demos[id] || demos['demo-1'];
  }

  private loadTeamMembers(): void {
    this.managementService.getEmployees().subscribe({
      next: (employees) => {
        this.loading = false;
        if (this.team) {
          this.teamMembers = employees.filter(
            e => ((e as any).team && (e as any).team.toLowerCase() === this.team?.name.toLowerCase()) ||
                 (e.department && e.department.toLowerCase() === this.team?.departmentName?.toLowerCase())
          );
        }
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  async deactivateTeam(): Promise<void> {
    if (!this.team) return;
    const confirmed = await this.toast.confirm(
      `Deactivate team "${this.team.name}"?`,
      'This will change team status to Inactive.'
    );
    if (!confirmed) return;

    this.departmentService.deleteTeam(this.team.id).subscribe({
      next: () => {
        this.toast.success('Team deactivated successfully');
        this.router.navigate(['/admin/teams']);
      },
      error: (err) => this.toast.error(err?.error?.message || 'Failed to deactivate team')
    });
  }

  getTeamInitial(): string {
    if (!this.team || !this.team.name) return 'T';
    return this.team.name.charAt(0).toUpperCase();
  }
}
