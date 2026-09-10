import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AdminAnnouncementsComponent {
  announcements = [
    {
      title: 'Year-End Holiday Schedule 2024', author: 'HR Department', date: 'Dec 18, 2024',
      tag: 'Important', tagColor: '#fee2e2', color: '#ef4444', icon: 'fas fa-exclamation-circle', pinned: true,
      content: 'Please note the office will be closed from December 25, 2024 to January 1, 2025. All employees are requested to plan their work accordingly. Emergency contacts will be available during the holiday period.',
      views: 234, comments: 12
    },
    {
      title: 'New Employee Wellness Program Launch', author: 'Sarah Johnson', date: 'Dec 15, 2024',
      tag: 'HR', tagColor: '#ecfdf5', color: '#10b981', icon: 'fas fa-heart', pinned: false,
      content: 'We are excited to announce our new employee wellness program starting January 2025. The program includes gym memberships, mental health support, and wellness workshops. Sign-ups will begin next week.',
      views: 189, comments: 8
    },
    {
      title: 'Office Relocation Notice - Floor 5', author: 'Admin Team', date: 'Dec 12, 2024',
      tag: 'General', tagColor: '#ede9fe', color: '#8b5cf6', icon: 'fas fa-building', pinned: false,
      content: 'The Engineering team will be relocating to Floor 5 starting January 6, 2025. Detailed floor plans and seating arrangements will be shared by end of this week.',
      views: 156, comments: 15
    },
    {
      title: 'Annual Company Town Hall', author: 'CEO Office', date: 'Dec 10, 2024',
      tag: 'Events', tagColor: '#fef3c7', color: '#f59e0b', icon: 'fas fa-calendar-check', pinned: false,
      content: 'Join us for the annual company town hall on December 20, 2024 at 3:00 PM in the main auditorium. We will be discussing the year\'s achievements, 2025 roadmap, and employee awards.',
      views: 312, comments: 22
    },
    {
      title: 'Updated Remote Work Policy', author: 'HR Department', date: 'Dec 5, 2024',
      tag: 'Important', tagColor: '#fee2e2', color: '#ef4444', icon: 'fas fa-file-alt', pinned: false,
      content: 'The remote work policy has been updated effective immediately. Employees can now work from home up to 3 days per week with manager approval. Please review the updated policy document.',
      views: 278, comments: 18
    },
  ];
}
