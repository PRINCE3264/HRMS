import { Component } from '@angular/core';

@Component({
  selector: 'app-hr-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class HrAnnouncementsComponent {
  announcements = [
    { title: 'Holiday Season Office Schedule', author: 'Sarah Johnson', date: 'Dec 15, 2024', category: 'General', priority: 'High', icon: 'fas fa-calendar-star', iconBg: '#fef3c7', iconColor: '#d97706', content: 'Please note the updated office schedule for the holiday season. The office will be closed from December 25 to January 1. Employees are expected to complete all pending tasks before the break. Extended work-from-home options will be available for those who need to work during this period.', audience: 'All Employees', views: 248, likes: 42, comments: 12 },
    { title: 'New Health & Wellness Program Launch', author: 'HR Department', date: 'Dec 10, 2024', category: 'Benefits', priority: 'Medium', icon: 'fas fa-heartbeat', iconBg: '#fef2f2', iconColor: '#ef4444', content: 'We are excited to announce our new comprehensive Health & Wellness program starting January 2025. The program includes gym memberships, mental health support, nutrition counseling, and wellness challenges. Sign up through the HR portal to avail benefits.', audience: 'All Employees', views: 312, likes: 89, comments: 24 },
    { title: 'Q4 Performance Review Timeline', author: 'HR Department', date: 'Dec 08, 2024', category: 'Performance', priority: 'High', icon: 'fas fa-chart-line', iconBg: '#ede9fe', iconColor: '#7c3aed', content: 'Q4 performance reviews will commence from December 20. Managers are requested to complete self-assessments by December 18. Employee self-reviews are due by December 22. Final review meetings should be scheduled before December 31.', audience: 'All Employees', views: 186, likes: 15, comments: 8 },
    { title: 'New Remote Work Policy Update', author: 'Sarah Johnson', date: 'Dec 01, 2024', category: 'Policy', priority: 'Medium', icon: 'fas fa-home', iconBg: '#dbeafe', iconColor: '#2563eb', content: 'Updated remote work policy effective January 1, 2025. Employees may work remotely up to 3 days per week with manager approval. Full-time remote arrangements require VP-level approval. Please review the updated policy document in the Documents section.', audience: 'All Employees', views: 198, likes: 32, comments: 15 },
    { title: 'Annual Company Town Hall - Save the Date', author: 'CEO Office', date: 'Nov 28, 2024', category: 'Events', priority: 'Low', icon: 'fas fa-microphone', iconBg: '#ecfdf5', iconColor: '#10b981', content: 'Save the date for our annual Company Town Hall on January 10, 2025. This year we will be reviewing our achievements, sharing the vision for 2025, and recognizing outstanding employees. The event will be held in the main auditorium and streamed virtually.', audience: 'All Employees', views: 420, likes: 78, comments: 5 },
  ];
}
