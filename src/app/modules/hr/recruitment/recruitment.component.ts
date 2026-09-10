import { Component } from '@angular/core';

@Component({
  selector: 'app-hr-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.scss']
})
export class HrRecruitmentComponent {
  activeTab = 'jobs';
  jobPostings = [
    { title: 'Senior Frontend Developer', department: 'Engineering', location: 'New York', type: 'Full-time', salary: '$120K - $150K', status: 'Open', applicantCount: 24, posted: '5 days ago', colorDots: ['#6366f1','#10b981','#f59e0b','#ef4444'] },
    { title: 'Product Designer', department: 'Design', location: 'Remote', type: 'Full-time', salary: '$95K - $120K', status: 'Open', applicantCount: 18, posted: '1 week ago', colorDots: ['#8b5cf6','#06b6d4','#ec4899'] },
    { title: 'DevOps Engineer', department: 'Engineering', location: 'San Francisco', type: 'Full-time', salary: '$130K - $160K', status: 'Open', applicantCount: 12, posted: '3 days ago', colorDots: ['#14b8a6','#f97316'] },
    { title: 'Marketing Manager', department: 'Marketing', location: 'Chicago', type: 'Full-time', salary: '$85K - $105K', status: 'On Hold', applicantCount: 32, posted: '2 weeks ago', colorDots: ['#6366f1','#10b981'] },
    { title: 'Data Analyst', department: 'Operations', location: 'Remote', type: 'Contract', salary: '$70K - $90K', status: 'Open', applicantCount: 8, posted: '1 day ago', colorDots: ['#ef4444'] },
    { title: 'HR Coordinator', department: 'Human Resources', location: 'New York', type: 'Full-time', salary: '$55K - $70K', status: 'Closed', applicantCount: 42, posted: '1 month ago', colorDots: ['#6366f1','#f59e0b','#10b981','#8b5cf6'] },
  ];
  candidates = [
    { name: 'Alex Rivera', email: 'alex.r@email.com', position: 'Senior Frontend Developer', stage: 'Technical', rating: 4, appliedDate: 'Dec 10, 2024', color: '#6366f1' },
    { name: 'Priya Sharma', email: 'priya.s@email.com', position: 'Product Designer', stage: 'Interview', rating: 5, appliedDate: 'Dec 08, 2024', color: '#10b981' },
    { name: 'Marcus Johnson', email: 'marcus.j@email.com', position: 'DevOps Engineer', stage: 'Screening', rating: 3, appliedDate: 'Dec 12, 2024', color: '#f59e0b' },
    { name: 'Sophie Chen', email: 'sophie.c@email.com', position: 'Senior Frontend Developer', stage: 'Offer', rating: 5, appliedDate: 'Dec 01, 2024', color: '#ef4444' },
    { name: 'Daniel Okafor', email: 'daniel.o@email.com', position: 'Data Analyst', stage: 'Interview', rating: 4, appliedDate: 'Dec 11, 2024', color: '#06b6d4' },
  ];
  interviews = [
    { candidate: 'Priya Sharma', position: 'Product Designer', interviewer: 'Sophia Lee', dateTime: 'Dec 18, 2024 10:00 AM', type: 'Video Call', status: 'Scheduled', color: '#10b981' },
    { candidate: 'Alex Rivera', position: 'Sr. Frontend Dev', interviewer: 'Alex Thompson', dateTime: 'Dec 17, 2024 2:00 PM', type: 'On-site', status: 'Completed', color: '#6366f1' },
    { candidate: 'Daniel Okafor', position: 'Data Analyst', interviewer: 'James Brown', dateTime: 'Dec 19, 2024 11:00 AM', type: 'Video Call', status: 'Scheduled', color: '#06b6d4' },
    { candidate: 'Marcus Johnson', position: 'DevOps Engineer', interviewer: 'David Kim', dateTime: 'Dec 20, 2024 3:00 PM', type: 'Phone', status: 'Pending', color: '#f59e0b' },
  ];
}
