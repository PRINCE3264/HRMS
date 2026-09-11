import { Component, OnInit } from '@angular/core';
import { DepartmentService, ToastService } from '../../../core/services';

@Component({
  selector: 'app-admin-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class AdminTeamsComponent implements OnInit {
  showAdd = false;
  teams: any[] = [];

  private colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ec4899'];

  constructor(private departmentService: DepartmentService, private toast: ToastService) {}

  ngOnInit(): void {
    this.loadTeams();
  }

  loadTeams(): void {
    this.departmentService.getTeams().subscribe({
      next: (data) => this.teams = data.map((t: any, i: number) => ({
        ...t,
        color: this.colors[i % this.colors.length],
        lead: t.teamLeadName || '',
        description: '',
        activeProjects: 0,
        memberAvatars: []
      })),
      error: () => this.toast.error('Failed to load teams')
    });
  }
}
