import { Component, OnInit } from '@angular/core';
import { ProjectService, ToastService } from '../../../core/services';
import { Project } from '../../../core/models';

@Component({
  selector: 'app-emp-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class EmpProjectsComponent implements OnInit {
  projects: Project[] = [];
  loading = true;
  searchQuery = '';
  selectedStatus = 'ALL';

  statuses = ['ALL', 'NOT_STARTED', 'IN_PROGRESS', 'ON_HOLD', 'COMPLETED', 'CANCELLED'];

  constructor(
    private projectService: ProjectService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.loading = true;
    this.projectService.getMyProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toast.error('Failed to load projects');
      }
    });
  }

  get filteredProjects(): Project[] {
    return this.projects.filter(p => {
      if (this.selectedStatus !== 'ALL' && p.status !== this.selectedStatus) return false;
      if (this.searchQuery.trim()) {
        const q = this.searchQuery.toLowerCase();
        if (!p.name.toLowerCase().includes(q) &&
            !(p.description || '').toLowerCase().includes(q) &&
            !(p.departmentName || '').toLowerCase().includes(q) &&
            !(p.teamLeadName || '').toLowerCase().includes(q)) {
          return false;
        }
      }
      return true;
    });
  }

  progressPercent(p: Project): number {
    if (!p.memberCount) return 0;
    return Math.round((p.completedMemberCount / p.memberCount) * 100);
  }
}