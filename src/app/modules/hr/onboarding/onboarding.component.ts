import { Component } from '@angular/core';

@Component({
  selector: 'app-hr-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class HrOnboardingComponent {
  onboarding = [
    { name: 'James Wilson', role: 'Frontend Developer', department: 'Engineering', startDate: 'Started Dec 9', progress: 75, color: '#6366f1',
      tasks: [
        { label: 'Offer letter signed', done: true },
        { label: 'IT equipment assigned', done: true },
        { label: 'Company orientation', done: true },
        { label: 'Team introduction', done: true },
        { label: 'System access setup', done: false },
        { label: 'Training module 1', done: false },
      ]},
    { name: 'Anna Peters', role: 'UX Researcher', department: 'Design', startDate: 'Started Dec 5', progress: 100, color: '#10b981',
      tasks: [
        { label: 'Offer letter signed', done: true },
        { label: 'IT equipment assigned', done: true },
        { label: 'Company orientation', done: true },
        { label: 'Team introduction', done: true },
        { label: 'System access setup', done: true },
        { label: 'Training module 1', done: true },
      ]},
    { name: 'Carlos Mendez', role: 'Data Analyst', department: 'Operations', startDate: 'Started Dec 11', progress: 40, color: '#f59e0b',
      tasks: [
        { label: 'Offer letter signed', done: true },
        { label: 'IT equipment assigned', done: true },
        { label: 'Company orientation', done: false },
        { label: 'Team introduction', done: false },
        { label: 'System access setup', done: false },
        { label: 'Training module 1', done: false },
      ]},
    { name: 'Mei Lin', role: 'Backend Developer', department: 'Engineering', startDate: 'Starting Dec 16', progress: 15, color: '#ef4444',
      tasks: [
        { label: 'Offer letter signed', done: true },
        { label: 'IT equipment assigned', done: false },
        { label: 'Company orientation', done: false },
        { label: 'Team introduction', done: false },
        { label: 'System access setup', done: false },
        { label: 'Training module 1', done: false },
      ]},
    { name: 'Tom Baker', role: 'Sales Executive', department: 'Marketing', startDate: 'Starting Dec 18', progress: 10, color: '#8b5cf6',
      tasks: [
        { label: 'Offer letter signed', done: true },
        { label: 'IT equipment assigned', done: false },
        { label: 'Company orientation', done: false },
        { label: 'Team introduction', done: false },
        { label: 'System access setup', done: false },
        { label: 'Training module 1', done: false },
      ]},
  ];
}
