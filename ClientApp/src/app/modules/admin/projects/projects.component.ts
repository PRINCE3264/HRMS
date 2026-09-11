import { Component, OnInit } from '@angular/core';
import { ProjectService, DepartmentService, ToastService } from '../../../core/services';
import { Project, ProjectMember, EmployeeOption } from '../../../core/models';
import { TableColumn } from '../../../core/models';

@Component({
  selector: 'app-admin-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class AdminProjectsComponent implements OnInit {
  projects: Project[] = [];
  departments: any[] = [];
  teamLeads: EmployeeOption[] = [];

  columns: TableColumn[] = [
    { key: 'name', label: 'Project', sortable: true },
    { key: 'projectCode', label: 'Code', sortable: true },
    { key: 'departmentName', label: 'Department', sortable: true },
    { key: 'teamLeadName', label: 'Team Lead', sortable: true },
    { key: 'memberCount', label: 'Members', type: 'number', sortable: true }
  ];
  tableActions = [
    { label: 'Assign TL', icon: 'fas fa-user-tie', action: 'assign-tl', color: '#6366f1' },
    { label: 'Members', icon: 'fas fa-users', action: 'members', color: '#10b981' },
    { label: 'Edit', icon: 'fas fa-edit', action: 'edit', color: '#f59e0b' },
    { label: 'Delete', icon: 'fas fa-trash', action: 'delete', color: '#ef4444' }
  ];

  showForm = false;
  isEdit = false;
  editingId = '';
  form = {
    name: '',
    projectCode: '',
    description: '',
    departmentId: '',
    teamLeadId: '',
    priority: 'MEDIUM',
    startDate: '',
    endDate: ''
  };

  showAssignTl = false;
  assignTarget: Project | null = null;
  selectedTeamLeadId = '';

  showMembers = false;
  membersTarget: Project | null = null;
  members: ProjectMember[] = [];

  constructor(
    private projectService: ProjectService,
    private departmentService: DepartmentService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadProjects();
    this.departmentService.getDepartments().subscribe({
      next: (data) => this.departments = data,
      error: () => this.toast.error('Failed to load departments')
    });
    this.projectService.getTeamLeads().subscribe({
      next: (data) => this.teamLeads = data,
      error: () => this.toast.error('Failed to load team leads')
    });
  }

  private loadProjects(): void {
    this.projectService.getProjects().subscribe({
      next: (data) => this.projects = data.map(p => ({ ...p, status: p.status, priority: p.priority })),
      error: () => this.toast.error('Failed to load projects')
    });
  }

  today(): string {
    return new Date().toISOString().split('T')[0];
  }

  openAdd(): void {
    this.isEdit = false;
    this.editingId = '';
    this.form = {
      name: '',
      projectCode: '',
      description: '',
      departmentId: '',
      teamLeadId: '',
      priority: 'MEDIUM',
      startDate: this.today(),
      endDate: ''
    };
    this.showForm = true;
  }

  openEdit(project: Project): void {
    this.isEdit = true;
    this.editingId = project.id;
    this.form = {
      name: project.name,
      projectCode: project.projectCode,
      description: project.description || '',
      departmentId: project.departmentId,
      teamLeadId: project.teamLeadId || '',
      priority: project.priority,
      startDate: project.startDate ? project.startDate.split('T')[0] : this.today(),
      endDate: project.endDate ? project.endDate.split('T')[0] : ''
    };
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm = false;
  }

  saveForm(): void {
    if (!this.form.name.trim()) {
      this.toast.error('Project name is required.');
      return;
    }
    if (!this.form.departmentId) {
      this.toast.error('Please select a department.');
      return;
    }

    const teamLeadId = this.form.teamLeadId || undefined;
    const payload = {
      name: this.form.name.trim(),
      projectCode: this.form.projectCode || undefined,
      description: this.form.description || undefined,
      departmentId: this.form.departmentId,
      teamLeadId,
      priority: this.form.priority,
      startDate: this.form.startDate || undefined,
      endDate: this.form.endDate || undefined
    };

    const request = this.isEdit
      ? this.projectService.updateProject(this.editingId, { ...payload, status: 'IN_PROGRESS' })
      : this.projectService.createProject(payload);

    request.subscribe({
      next: () => {
        this.toast.success(this.isEdit ? 'Project updated' : 'Project created');
        this.closeForm();
        this.loadProjects();
      },
      error: (err) => this.toast.error(err?.error?.message || 'Failed to save project')
    });
  }

  onAction(event: { action: string; row: any }): void {
    const project: Project = event.row;
    switch (event.action) {
      case 'edit':
        this.openEdit(project);
        break;
      case 'assign-tl':
        this.openAssignTl(project);
        break;
      case 'members':
        this.openMembers(project);
        break;
      case 'delete':
        this.deleteProject(project);
        break;
    }
  }

  openAssignTl(project: Project): void {
    this.assignTarget = project;
    this.selectedTeamLeadId = project.teamLeadId || '';
    this.showAssignTl = true;
  }

  closeAssignTl(): void {
    this.showAssignTl = false;
    this.assignTarget = null;
  }

  saveAssignTl(): void {
    if (!this.assignTarget) return;
    const id = this.assignTarget.id;
    const teamLeadId = this.selectedTeamLeadId || undefined;
    this.projectService.assignTeamLead(id, teamLeadId).subscribe({
      next: () => {
        this.toast.success(teamLeadId ? 'Team lead assigned' : 'Team lead removed');
        this.closeAssignTl();
        this.loadProjects();
      },
      error: (err) => this.toast.error(err?.error?.message || 'Failed to assign team lead')
    });
  }

  openMembers(project: Project): void {
    this.membersTarget = project;
    this.members = [];
    this.showMembers = true;
    this.loadMembers(project.id);
  }

  closeMembers(): void {
    this.showMembers = false;
    this.membersTarget = null;
  }

  private loadMembers(projectId: string): void {
    this.projectService.getMembers(projectId).subscribe({
      next: (data) => this.members = data,
      error: (err) => this.toast.error(err?.error?.message || 'Failed to load members')
    });
  }

  removeMember(member: ProjectMember): void {
    if (!this.membersTarget) return;
    this.projectService.removeMember(this.membersTarget.id, member.employeeId).subscribe({
      next: (data) => {
        this.members = data;
        this.toast.success('Member removed');
        this.loadProjects();
      },
      error: (err) => this.toast.error(err?.error?.message || 'Failed to remove member')
    });
  }

  deleteProject(project: Project): void {
    if (!confirm(`Delete project "${project.name}"?`)) return;
    this.projectService.deleteProject(project.id).subscribe({
      next: () => {
        this.toast.success('Project deleted');
        this.loadProjects();
      },
      error: (err) => this.toast.error(err?.error?.message || 'Failed to delete project')
    });
  }

  getMemberInitial(name: string): string {
    return (name || '?').trim().charAt(0).toUpperCase();
  }
}