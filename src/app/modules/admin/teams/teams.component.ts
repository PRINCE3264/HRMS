import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class AdminTeamsComponent {
  showAdd = false;
  teams = [
    {
      name: 'Alpha Squad', department: 'Engineering', status: 'ACTIVE', color: '#6366f1',
      description: 'Core platform development team responsible for the main product architecture and features.',
      memberCount: 8, lead: 'Michael Chen', activeProjects: 3,
      memberAvatars: [{ initials: 'MC', color: '#6366f1' }, { initials: 'JS', color: '#06b6d4' }, { initials: 'DL', color: '#10b981' }]
    },
    {
      name: 'Growth Team', department: 'Marketing', status: 'ACTIVE', color: '#8b5cf6',
      description: 'Focused on customer acquisition, retention strategies, and growth hacking initiatives.',
      memberCount: 6, lead: 'Emily Davis', activeProjects: 2,
      memberAvatars: [{ initials: 'ED', color: '#8b5cf6' }, { initials: 'MG', color: '#f59e0b' }, { initials: 'KP', color: '#ef4444' }]
    },
    {
      name: 'Revenue Builders', department: 'Sales', status: 'ACTIVE', color: '#06b6d4',
      description: 'Enterprise sales team handling key accounts and new business development.',
      memberCount: 12, lead: 'David Park', activeProjects: 4,
      memberAvatars: [{ initials: 'DP', color: '#06b6d4' }, { initials: 'JB', color: '#10b981' }, { initials: 'RW', color: '#f59e0b' }]
    },
    {
      name: 'People Ops', department: 'Human Resources', status: 'ACTIVE', color: '#10b981',
      description: 'Responsible for employee engagement, culture initiatives, and HR operations.',
      memberCount: 5, lead: 'Sarah Johnson', activeProjects: 2,
      memberAvatars: [{ initials: 'SJ', color: '#10b981' }, { initials: 'LA', color: '#8b5cf6' }, { initials: 'NK', color: '#ef4444' }]
    },
    {
      name: 'Design Forge', department: 'Design', status: 'ACTIVE', color: '#f59e0b',
      description: 'Product design team creating user interfaces and experience across all products.',
      memberCount: 4, lead: 'Lisa Anderson', activeProjects: 3,
      memberAvatars: [{ initials: 'LA', color: '#f59e0b' }, { initials: 'CT', color: '#6366f1' }, { initials: 'RH', color: '#06b6d4' }]
    },
    {
      name: 'Cloud Ops', department: 'Engineering', status: 'ACTIVE', color: '#ec4899',
      description: 'Infrastructure and DevOps team managing cloud services and deployment pipelines.',
      memberCount: 5, lead: 'Robert Wilson', activeProjects: 2,
      memberAvatars: [{ initials: 'RW', color: '#ec4899' }, { initials: 'KT', color: '#6366f1' }, { initials: 'YH', color: '#10b981' }]
    },
  ];
}
