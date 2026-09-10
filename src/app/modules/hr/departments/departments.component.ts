import { Component } from '@angular/core';

@Component({
  selector: 'app-hr-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class HrDepartmentsComponent {
  showAddModal = false;
  departments = [
    { name: 'Engineering', icon: 'fas fa-code', color: '#6366f1', description: 'Software development and technical operations', employeeCount: 82, teamCount: 8, budget: '$2.4M', hod: 'Alex Thompson', status: 'Active' },
    { name: 'Marketing', icon: 'fas fa-bullhorn', color: '#10b981', description: 'Brand management, digital marketing and communications', employeeCount: 38, teamCount: 5, budget: '$1.1M', hod: 'Rachel Green', status: 'Active' },
    { name: 'Finance', icon: 'fas fa-chart-line', color: '#f59e0b', description: 'Financial planning, accounting and budget management', employeeCount: 30, teamCount: 4, budget: '$890K', hod: 'Mark Stevens', status: 'Active' },
    { name: 'Design', icon: 'fas fa-palette', color: '#ef4444', description: 'UI/UX design and creative services', employeeCount: 28, teamCount: 3, budget: '$780K', hod: 'Sophia Lee', status: 'Active' },
    { name: 'Human Resources', icon: 'fas fa-users', color: '#8b5cf6', description: 'Talent acquisition, employee relations and benefits', employeeCount: 22, teamCount: 4, budget: '$650K', hod: 'Sarah Johnson', status: 'Active' },
    { name: 'Operations', icon: 'fas fa-cogs', color: '#06b6d4', description: 'Business operations and process management', employeeCount: 48, teamCount: 6, budget: '$1.8M', hod: 'David Park', status: 'Active' },
  ];
}
