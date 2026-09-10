import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class EmpAnnouncementsComponent {
  searchTerm = '';
  filterCategory = '';

  announcements = [
    { title: 'Company Holiday Schedule', content: 'The office will be closed from December 25th to January 1st for the winter holidays. Normal operations resume on January 2nd.', date: 'Dec 15, 2025', author: 'HR Department', category: 'Company', icon: 'fas fa-snowflake', iconBg: '#dbeafe', iconColor: '#2563eb', read: false, tags: ['Holiday', 'Important'] },
    { title: 'New Work From Home Policy', content: 'Starting January 2026, employees can work from home up to 2 days per week. Coordinate with your team lead for scheduling.', date: 'Dec 14, 2025', author: 'HR Department', category: 'HR', icon: 'fas fa-home', iconBg: '#dcfce7', iconColor: '#16a34a', read: false, tags: ['Policy', 'WFH'] },
    { title: 'IT System Maintenance', content: 'Scheduled maintenance on Dec 20th from 10 PM to 2 AM EST. The HRM portal will be unavailable during this time.', date: 'Dec 13, 2025', author: 'IT Team', category: 'IT', icon: 'fas fa-server', iconBg: '#fee2e2', iconColor: '#dc2626', read: true, tags: ['Maintenance', 'IT'] },
    { title: 'Year-End Celebration', content: 'Join us on December 30th at the main conference hall for awards, entertainment, and dinner. RSVP by Dec 22nd.', date: 'Dec 12, 2025', author: 'Events Committee', category: 'Events', icon: 'fas fa-glass-cheers', iconBg: '#fef3c7', iconColor: '#d97706', read: true, tags: ['Event', 'Social'] },
    { title: 'Performance Review Cycle', content: 'Q4 performance reviews start Jan 5th. Complete self-assessments by Jan 15th. One-on-one reviews through Jan 31st.', date: 'Dec 10, 2025', author: 'HR Department', category: 'HR', icon: 'fas fa-chart-line', iconBg: '#f3e8ff', iconColor: '#7c3aed', read: true, tags: ['Performance', 'Review'] },
    { title: 'Office Safety Drills', content: 'Mandatory fire safety drill on Dec 18th at 2:00 PM. All employees must participate. Updated assembly points on floor maps.', date: 'Dec 8, 2025', author: 'Admin Team', category: 'Company', icon: 'fas fa-fire-extinguisher', iconBg: '#fee2e2', iconColor: '#dc2626', read: true, tags: ['Safety', 'Mandatory'] },
    { title: 'Benefits Enrollment', content: 'Annual benefits enrollment period is Dec 1-20. Review your options in the HR portal and update your selections.', date: 'Dec 1, 2025', author: 'HR Department', category: 'HR', icon: 'fas fa-heart', iconBg: '#fce7f3', iconColor: '#db2777', read: true, tags: ['Benefits', 'Deadline'] },
  ];

  get filteredAnnouncements() {
    return this.announcements.filter(a => {
      const matchSearch = !this.searchTerm || a.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchCat = !this.filterCategory || a.category === this.filterCategory;
      return matchSearch && matchCat;
    });
  }
}
