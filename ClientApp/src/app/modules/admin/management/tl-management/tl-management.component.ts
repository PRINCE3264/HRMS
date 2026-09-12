import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagementService, ToastService } from '../../../../core/services';
import { TeamLeadManagement, ManagedEmployee, TableColumn } from '../../../../core/models';

@Component({
  selector: 'app-admin-tl-management',
  templateUrl: './tl-management.component.html',
  styleUrls: ['./tl-management.component.scss']
})
export class AdminTlManagementComponent implements OnInit {
  teamLeads: TeamLeadManagement[] = [];
  candidates: ManagedEmployee[] = [];
  selectedEmployeeId = '';
  assigning = false;
  loading = true;

  showRevokeConfirm = false;
  revoking: TeamLeadManagement | null = null;

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
    { label: 'Open Projects', icon: 'fas fa-project-diagram', action: 'projects', color: '#10b981' },
    { label: 'Revoke TL', icon: 'fas fa-user-minus', action: 'revoke', color: '#ef4444' }
  ];

  constructor(
    private managementService: ManagementService,
    private router: Router,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadTeamLeads();
    this.loadCandidates();
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

  loadCandidates(): void {
    this.managementService.getEmployees().subscribe({
      next: (data) => this.refreshCandidates(data),
      error: () => this.toast.error('Failed to load employees')
    });
  }

  refreshCandidates(data: ManagedEmployee[]): void {
    this.candidates = (data || []).filter(
      (e) => e.hasAccount && e.active && e.role !== 'TL' && e.role !== 'ADMIN'
    );
    if (!this.candidates.some((c) => c.id === this.selectedEmployeeId)) {
      this.selectedEmployeeId = '';
    }
  }

  assignAsTL(): void {
    if (!this.selectedEmployeeId) {
      this.toast.warning('Select an employee to assign as Team Lead');
      return;
    }
    this.assigning = true;
    this.managementService.assignRole(this.selectedEmployeeId, 'TL').subscribe({
      next: () => {
        this.assigning = false;
        this.toast.success('Employee assigned as Team Lead');
        this.reloadAll();
      },
      error: () => {
        this.assigning = false;
        this.toast.error('Failed to assign role');
      }
    });
  }

  onAction(event: { action: string; row: TeamLeadManagement }): void {
    if (event.action === 'projects') {
      this.router.navigate(['/admin/projects']);
    } else if (event.action === 'revoke') {
      this.revoking = event.row;
      this.showRevokeConfirm = true;
    }
  }

  confirmRevoke(): void {
    if (!this.revoking) return;
    const employee = this.revoking;
    this.revoking = null;
    this.showRevokeConfirm = false;
    this.managementService.assignRole(employee.id, 'EMPLOYEE').subscribe({
      next: () => {
        this.toast.success(`${employee.fullName} is no longer a Team Lead`);
        this.reloadAll();
      },
      error: () => this.toast.error('Failed to revoke role')
    });
  }

  cancelRevoke(): void {
    this.revoking = null;
    this.showRevokeConfirm = false;
  }

  reloadAll(): void {
    this.loadTeamLeads();
    this.managementService.getEmployees().subscribe((data) => this.refreshCandidates(data));
  }

  get totalMembers(): number {
    return this.teamLeads.reduce((sum, t) => sum + t.teamMembersCount, 0);
  }

  get totalProjects(): number {
    return this.teamLeads.reduce((sum, t) => sum + t.activeProjectsCount, 0);
  }
}