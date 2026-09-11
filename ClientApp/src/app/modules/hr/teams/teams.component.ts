import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../../core/services';
import { Team } from '../../../core/models';

@Component({
  selector: 'app-hr-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class HrTeamsComponent implements OnInit {
  teams: any[] = [];

  private teamMeta: Record<string, { icon: string; color: string; tags: string[]; progress: number }> = {};

  private defaultStyles = [
    { icon: 'fas fa-laptop-code', color: '#6366f1', tags: ['Team'], progress: 50 },
    { icon: 'fas fa-rocket', color: '#10b981', tags: ['Growth'], progress: 60 },
    { icon: 'fas fa-bezier-curve', color: '#ef4444', tags: ['Design'], progress: 70 },
    { icon: 'fas fa-server', color: '#f59e0b', tags: ['Backend'], progress: 55 },
    { icon: 'fas fa-search', color: '#8b5cf6', tags: ['Talent'], progress: 40 },
    { icon: 'fas fa-chart-bar', color: '#06b6d4', tags: ['Analytics'], progress: 45 },
  ];

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.loadTeams();
  }

  loadTeams(): void {
    this.departmentService.getTeams().subscribe({
      next: (data) => {
        this.teams = data.map((t, i) => {
          const style = this.defaultStyles[i % this.defaultStyles.length];
          return {
            id: t.id,
            name: t.name,
            icon: style.icon,
            color: style.color,
            department: t.departmentName,
            lead: t.teamLeadName,
            memberCount: t.memberCount,
            memberAvatars: t.teamLeadName ? [t.teamLeadName.charAt(0)] : [],
            tags: style.tags,
            status: t.status || 'Active',
            progress: style.progress,
          };
        });
      }
    });
  }
}
