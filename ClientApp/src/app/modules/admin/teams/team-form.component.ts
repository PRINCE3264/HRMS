import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService, ManagementService, ToastService } from '../../../core/services';
import { Department, ManagedEmployee, Team } from '../../../core/models';

@Component({
  selector: 'app-admin-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class AdminTeamFormComponent implements OnInit {
  isEdit = false;
  teamId = '';
  loading = false;
  submitting = false;

  departments: Department[] = [];
  employees: ManagedEmployee[] = [];

  form = {
    name: '',
    departmentId: '',
    teamLeadId: '',
    description: '',
    status: 'Active',
    activeProjectsCount: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private departmentService: DepartmentService,
    private managementService: ManagementService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadDropdownData();
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEdit = true;
        this.teamId = params['id'];
        this.loadTeamData(this.teamId);
      }
    });
  }

  private loadDropdownData(): void {
    this.departmentService.getDepartments().subscribe({
      next: (depts) => this.departments = depts,
      error: () => {}
    });

    this.managementService.getEmployees().subscribe({
      next: (emps) => this.employees = emps,
      error: () => {}
    });
  }

  private loadTeamData(id: string): void {
    this.loading = true;
    this.departmentService.getTeamById(id).subscribe({
      next: (team) => {
        this.loading = false;
        if (team) {
          this.form = {
            name: team.name || '',
            departmentId: team.departmentId || '',
            teamLeadId: team.teamLeadId || '',
            description: team.description || '',
            status: team.status || 'Active',
            activeProjectsCount: team.activeProjectsCount || 0
          };
        }
      },
      error: () => {
        this.loading = false;
        this.toast.error('Failed to load team details');
      }
    });
  }

  onSubmit(): void {
    if (!this.form.name.trim()) {
      this.toast.error('Team name is required');
      return;
    }

    this.submitting = true;
    const selectedDept = this.departments.find(d => d.id === this.form.departmentId);
    const selectedLead = this.employees.find(e => e.id === this.form.teamLeadId);

    const payload: Partial<Team> = {
      name: this.form.name.trim(),
      departmentId: this.form.departmentId || undefined,
      departmentName: selectedDept ? selectedDept.name : undefined,
      teamLeadId: this.form.teamLeadId || undefined,
      teamLeadName: selectedLead ? selectedLead.fullName : undefined,
      description: this.form.description.trim() || undefined,
      status: this.form.status,
      activeProjectsCount: Number(this.form.activeProjectsCount) || 0
    };

    const request$ = this.isEdit
      ? this.departmentService.updateTeam(this.teamId, payload)
      : this.departmentService.createTeam(payload);

    request$.subscribe({
      next: () => {
        this.submitting = false;
        this.toast.success(this.isEdit ? 'Team updated successfully' : 'Team created successfully');
        this.router.navigate(['/admin/teams']);
      },
      error: (err) => {
        this.submitting = false;
        this.toast.error(err?.error?.message || 'Failed to save team');
      }
    });
  }
}
