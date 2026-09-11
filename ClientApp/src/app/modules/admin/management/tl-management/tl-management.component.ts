import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagementService, ToastService } from '../../../../core/services';
import { TeamLeadManagement } from '../../../../core/models';
import { TableColumn } from '../../../../core/models';

@Component({
  selector: 'app-admin-tl-management',
  templateUrl: './tl-management.component.html',
  styleUrls: ['./tl-management.component.scss']
})
export class AdminTlManagementComponent implements OnInit {
  teamLeads: TeamLeadManagement[] = [];
  loading = true;

  columns: TableColumn[] = [
    { key: 'employeeCode', label: 'Code', sortable: true, width: '110px' },
    { key: 'fullName', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'designation', label: 'Designation', sortable: true },
    { key: 'department', label: 'Department', sortable: true },
    { key: 'teamName', label: 'Team', sortable: true },
    { key: 'teamMembersCount', label: 'Team Size', type: 'number', sortable: true, align: 'center' },
    { key: 'activeProjectsCount', label: 'Active Projects', type: 'number', sortable: true, align: 'center' }
  ];

  tableActions = [
    { label: 'Open Projects', icon: 'fas fa-project-diagram', action: 'projects', color: '#10b981' }
  ];

  constructor(
    private managementService: ManagementService,
    private router: Router,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadTeamLeads();
  }

  loadTeamLeads(): void {
    this.loading = true;
    this.managementService.getTeamLeads().subscribe({
      next: (data) => {
        this.teamLeads = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toast.error('Failed to load team leads');
      }
    });
  }

  onAction(event: { action: string; row: TeamLeadManagement }): void {
    this.router.navigate(['/admin/projects']);
  }

  get totalMembers(): number {
    return this.teamLeads.reduce((sum, t) => sum + t.teamMembersCount, 0);
  }

  get totalProjects(): number {
    return this.teamLeads.reduce((sum, t) => sum + t.activeProjectsCount, 0);
  }
}