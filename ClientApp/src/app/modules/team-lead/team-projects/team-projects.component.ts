import { Component, OnInit } from '@angular/core';
import { ProjectService, ToastService } from '../../../core/services';
import { Project, ProjectMember, EmployeeOption } from '../../../core/models';

@Component({
  selector: 'app-tl-projects',
  templateUrl: './team-projects.component.html',
  styleUrls: ['./team-projects.component.scss']
})
export class TlProjectsComponent implements OnInit {
  projects: Project[] = [];
  membersByProject: Record<string, ProjectMember[]> = {};
  loading = true;

  selectedForAssign: Project | null = null;
  candidates: EmployeeOption[] = [];
  selectedCandidateIds = new Set<string>();

  constructor(
    private projectService: ProjectService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.loading = true;
    this.projectService.getAssignedToMe().subscribe({
      next: (projects) => {
        this.projects = projects;
        projects.forEach(p => this.loadMembers(p.id));
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toast.error('Failed to load projects');
      }
    });
  }

  loadMembers(projectId: string): void {
    this.projectService.getMembers(projectId).subscribe({
      next: (members) => this.membersByProject[projectId] = members,
      error: () => this.membersByProject[projectId] = []
    });
  }

  membersFor(projectId: string): ProjectMember[] {
    return this.membersByProject[projectId] || [];
  }

  memberInitial(name: string): string {
    return (name || '?').trim().charAt(0).toUpperCase();
  }

  openAssign(project: Project): void {
    this.selectedForAssign = project;
    this.selectedCandidateIds = new Set();
    this.candidates = [];
    this.projectService.getCandidates(project.id).subscribe({
      next: (candidates) => this.candidates = candidates,
      error: () => this.toast.error('Failed to load team members')
    });
  }

  closeAssign(): void {
    this.selectedForAssign = null;
    this.candidates = [];
  }

  isSelected(id: string): boolean {
    return this.selectedCandidateIds.has(id);
  }

  toggleCandidate(id: string): void {
    if (this.selectedCandidateIds.has(id)) {
      this.selectedCandidateIds.delete(id);
    } else {
      this.selectedCandidateIds.add(id);
    }
  }

  saveAssign(): void {
    if (!this.selectedForAssign) return;
    const ids = Array.from(this.selectedCandidateIds);
    if (ids.length === 0) {
      this.toast.error('Select at least one team member.');
      return;
    }
    this.projectService.assignMembers(this.selectedForAssign.id, ids).subscribe({
      next: (members) => {
        this.membersByProject[this.selectedForAssign!.id] = members;
        this.toast.success('Team members assigned');
        this.closeAssign();
      },
      error: (err) => this.toast.error(err?.error?.message || 'Failed to assign members')
    });
  }

  removeMember(projectId: string, member: ProjectMember): void {
    this.projectService.removeMember(projectId, member.employeeId).subscribe({
      next: (members) => {
        this.membersByProject[projectId] = members;
        this.toast.success('Member removed');
      },
      error: (err) => this.toast.error(err?.error?.message || 'Failed to remove member')
    });
  }
}