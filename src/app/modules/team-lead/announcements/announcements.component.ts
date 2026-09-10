import { Component } from '@angular/core';

@Component({
  selector: 'app-tl-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class TlAnnouncementsComponent {
  searchTerm = '';
  filterCategory = '';

  announcements = [
    { title: 'Company Holiday Schedule', content: 'Please note that the office will be closed from December 25th to January 1st for the winter holidays. Normal operations will resume on January 2nd. Ensure all pending tasks are completed or handed over before the break.', date: 'Dec 15, 2025', author: 'HR Department', category: 'Company', icon: 'fas fa-snowflake', iconBg: '#dbeafe', iconColor: '#2563eb', read: false, tags: ['Holiday', 'Important'] },
    { title: 'New Work From Home Policy', content: 'Starting January 2026, employees can work from home up to 2 days per week. Please coordinate with your team lead to schedule your remote days. The policy document has been shared via email.', date: 'Dec 14, 2025', author: 'HR Department', category: 'HR', icon: 'fas fa-home', iconBg: '#dcfce7', iconColor: '#16a34a', read: false, tags: ['Policy', 'WFH'] },
    { title: 'IT System Maintenance', content: 'Scheduled maintenance on the HRM portal will take place on December 20th from 10 PM to 2 AM EST. During this time, the system will be unavailable. Please plan your activities accordingly.', date: 'Dec 13, 2025', author: 'IT Team', category: 'IT', icon: 'fas fa-server', iconBg: '#fee2e2', iconColor: '#dc2626', read: true, tags: ['Maintenance', 'IT'] },
    { title: 'Year-End Celebration', content: 'Join us for the annual year-end celebration on December 30th at the main conference hall. There will be awards, entertainment, and dinner. RSVP by December 22nd.', date: 'Dec 12, 2025', author: 'Events Committee', category: 'Events', icon: 'fas fa-glass-cheers', iconBg: '#fef3c7', iconColor: '#d97706', read: true, tags: ['Event', 'Social'] },
    { title: 'Performance Review Cycle', content: 'The Q4 performance review cycle will begin on January 5th. Team leads should complete all self-assessments by January 15th. One-on-one reviews will be scheduled through January 31st.', date: 'Dec 10, 2025', author: 'HR Department', category: 'HR', icon: 'fas fa-chart-line', iconBg: '#f3e8ff', iconColor: '#7c3aed', read: true, tags: ['Performance', 'Review'] },
    { title: 'Office Safety Drills', content: 'Mandatory fire safety drill scheduled for December 18th at 2:00 PM. All employees must participate. Assembly points have been updated on the floor maps.', date: 'Dec 8, 2025', author: 'Admin Team', category: 'Company', icon: 'fas fa-fire-extinguisher', iconBg: '#fee2e2', iconColor: '#dc2626', read: true, tags: ['Safety', 'Mandatory'] },
  ];

  get filteredAnnouncements() {
    return this.announcements.filter(a => {
      const matchSearch = !this.searchTerm || a.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || a.content.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchCategory = !this.filterCategory || a.category === this.filterCategory;
      return matchSearch && matchCategory;
    });
  }
}
