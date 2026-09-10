import { Component } from '@angular/core';

@Component({
  selector: 'app-hr-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class HrTeamsComponent {
  teams = [
    { name: 'Frontend Squad', icon: 'fas fa-laptop-code', color: '#6366f1', department: 'Engineering', lead: 'Alex Thompson', memberCount: 8, memberAvatars: ['A','J','K','S'], tags: ['Angular','TypeScript','UI'], status: 'Active', progress: 72 },
    { name: 'Growth Marketing', icon: 'fas fa-rocket', color: '#10b981', department: 'Marketing', lead: 'Rachel Green', memberCount: 6, memberAvatars: ['R','M','L'], tags: ['SEO','Content','Analytics'], status: 'Active', progress: 58 },
    { name: 'Product Design', icon: 'fas fa-bezier-curve', color: '#ef4444', department: 'Design', lead: 'Sophia Lee', memberCount: 5, memberAvatars: ['S','N','T'], tags: ['Figma','UX Research','Prototyping'], status: 'Active', progress: 85 },
    { name: 'Backend Core', icon: 'fas fa-server', color: '#f59e0b', department: 'Engineering', lead: 'David Kim', memberCount: 10, memberAvatars: ['D','P','M','R'], tags: ['Node.js','PostgreSQL','AWS'], status: 'Active', progress: 64 },
    { name: 'Talent Acquisition', icon: 'fas fa-search', color: '#8b5cf6', department: 'HR', lead: 'Sarah Johnson', memberCount: 4, memberAvatars: ['S','C'], tags: ['Recruiting','Onboarding'], status: 'Planning', progress: 30 },
    { name: 'Data Analytics', icon: 'fas fa-chart-bar', color: '#06b6d4', department: 'Operations', lead: 'James Brown', memberCount: 7, memberAvatars: ['J','F','W'], tags: ['Python','Tableau','ML'], status: 'Active', progress: 45 },
  ];
}
