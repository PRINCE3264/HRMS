import { Component } from '@angular/core';
import { TableColumn } from '../../../core/models';

@Component({
  selector: 'app-admin-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.scss']
})
export class AdminRecruitmentComponent {
  activeTab = 'openings';
  jobOpenings = [
    { title: 'Senior Frontend Developer', department: 'Engineering', location: 'New York, NY', type: 'Full-time', salaryRange: '$110,000 - $145,000/yr', status: 'ACTIVE', postedDate: '5 days ago', applicants: 24 },
    { title: 'DevOps Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time', salaryRange: '$100,000 - $135,000/yr', status: 'ACTIVE', postedDate: '2 weeks ago', applicants: 18 },
    { title: 'Marketing Manager', department: 'Marketing', location: 'San Francisco, CA', type: 'Full-time', salaryRange: '$90,000 - $120,000/yr', status: 'ACTIVE', postedDate: '1 week ago', applicants: 31 },
    { title: 'Data Analyst', department: 'Finance', location: 'New York, NY', type: 'Full-time', salaryRange: '$70,000 - $95,000/yr', status: 'PAUSED', postedDate: '3 weeks ago', applicants: 42 },
    { title: 'UI/UX Designer', department: 'Design', location: 'Remote', type: 'Contract', salaryRange: '$80,000 - $110,000/yr', status: 'ACTIVE', postedDate: '4 days ago', applicants: 15 },
  ];
  candidateColumns: TableColumn[] = [
    { key: 'name', label: 'Candidate', sortable: true },
    { key: 'position', label: 'Position', sortable: true },
    { key: 'experience', label: 'Experience', sortable: true },
    { key: 'appliedDate', label: 'Applied', type: 'date', sortable: true },
    { key: 'phone', label: 'Phone' },
    { key: 'status', label: 'Status', type: 'status' }
  ];
  candidateActions = [
    { label: 'View', icon: 'fas fa-eye', action: 'view', color: '#3b82f6' },
    { label: 'Schedule', icon: 'fas fa-calendar', action: 'schedule', color: '#10b981' },
    { label: 'Reject', icon: 'fas fa-times', action: 'reject', color: '#ef4444' }
  ];
  candidates = [
    { name: 'Alice Cooper', position: 'Senior Frontend Developer', experience: '7 years', appliedDate: '2024-12-14', phone: '+1 (555) 123-4567', status: 'INTERVIEW' },
    { name: 'Brian Adams', position: 'Senior Frontend Developer', experience: '5 years', appliedDate: '2024-12-15', phone: '+1 (555) 234-5678', status: 'SHORTLISTED' },
    { name: 'Clara Bennett', position: 'DevOps Engineer', experience: '6 years', appliedDate: '2024-12-05', phone: '+1 (555) 345-6789', status: 'INTERVIEW' },
    { name: 'Daniel Fox', position: 'Marketing Manager', experience: '8 years', appliedDate: '2024-12-08', phone: '+1 (555) 456-7890', status: 'OFFERED' },
    { name: 'Eva Martinez', position: 'Data Analyst', experience: '3 years', appliedDate: '2024-12-01', phone: '+1 (555) 567-8901', status: 'PENDING' },
    { name: 'Frank Wilson', position: 'UI/UX Designer', experience: '4 years', appliedDate: '2024-12-16', phone: '+1 (555) 678-9012', status: 'PENDING' },
    { name: 'Grace Kim', position: 'Senior Frontend Developer', experience: '6 years', appliedDate: '2024-12-12', phone: '+1 (555) 789-0123', status: 'REJECTED' },
  ];

  onAction(event: { action: string; row: any }): void {
    console.log(event.action, event.row);
  }
}
