import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class AdminOnboardingComponent {
  activeOnboardings = [
    {
      name: 'Nathan Brooks', position: 'Software Developer', department: 'Engineering', joinDate: 'Dec 16, 2024',
      initials: 'NB', color: '#6366f1', progress: 75, mentor: 'Michael Chen',
      tasks: [
        { label: 'Account setup', done: true },
        { label: 'IT equipment issued', done: true },
        { label: 'HR orientation', done: true },
        { label: 'Team introduction', done: true },
        { label: 'Project assignment', done: false },
        { label: 'First week review', done: false },
      ]
    },
    {
      name: 'Sophia Chen', position: 'Marketing Specialist', department: 'Marketing', joinDate: 'Dec 18, 2024',
      initials: 'SC', color: '#8b5cf6', progress: 50, mentor: 'Emily Davis',
      tasks: [
        { label: 'Account setup', done: true },
        { label: 'IT equipment issued', done: true },
        { label: 'HR orientation', done: true },
        { label: 'Team introduction', done: false },
        { label: 'Tool access', done: false },
        { label: 'First week review', done: false },
      ]
    },
    {
      name: 'Marcus Johnson', position: 'Sales Executive', department: 'Sales', joinDate: 'Dec 20, 2024',
      initials: 'MJ', color: '#06b6d4', progress: 25, mentor: 'David Park',
      tasks: [
        { label: 'Account setup', done: true },
        { label: 'IT equipment issued', done: true },
        { label: 'HR orientation', done: false },
        { label: 'Sales training', done: false },
        { label: 'CRM access', done: false },
        { label: 'First week review', done: false },
      ]
    },
    {
      name: 'Olivia Park', position: 'Financial Analyst', department: 'Finance', joinDate: 'Dec 22, 2024',
      initials: 'OP', color: '#f59e0b', progress: 10, mentor: 'Robert Wilson',
      tasks: [
        { label: 'Account setup', done: true },
        { label: 'IT equipment issued', done: false },
        { label: 'HR orientation', done: false },
        { label: 'Finance tools access', done: false },
        { label: 'Compliance training', done: false },
        { label: 'First week review', done: false },
      ]
    },
  ];
}
