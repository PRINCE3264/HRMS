import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../../../core/services';

@Component({
  selector: 'app-tl-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class TlAnnouncementsComponent implements OnInit {
  searchTerm = '';
  filterCategory = '';
  announcements: any[] = [];

  private categoryMap: Record<string, { icon: string; iconBg: string; iconColor: string }> = {
    'Company': { icon: 'fas fa-building', iconBg: '#dbeafe', iconColor: '#2563eb' },
    'HR': { icon: 'fas fa-users', iconBg: '#dcfce7', iconColor: '#16a34a' },
    'IT': { icon: 'fas fa-server', iconBg: '#fee2e2', iconColor: '#dc2626' },
    'Events': { icon: 'fas fa-calendar-alt', iconBg: '#fef3c7', iconColor: '#d97706' },
  };

  constructor(private announcementService: AnnouncementService) {}

  ngOnInit(): void {
    this.announcementService.getAnnouncements().subscribe(data => {
      this.announcements = data.map(a => {
        const cat = this.deriveCategory(a);
        const cfg = this.categoryMap[cat] || this.categoryMap['Company'];
        const d = new Date(a.publishedDate);
        return {
          title: a.title,
          content: a.content,
          date: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          author: (a as any).authorName || a.author || 'HR Department',
          category: cat,
          icon: cfg.icon,
          iconBg: cfg.iconBg,
          iconColor: cfg.iconColor,
          read: false,
          tags: a.targetAudience?.length ? [...a.targetAudience] : [a.priority || 'General'],
        };
      });
    });
  }

  private deriveCategory(a: any): string {
    const aud: string[] = a.targetAudience || [];
    if (aud.some(x => x.toLowerCase().includes('hr'))) return 'HR';
    if (aud.some(x => x.toLowerCase().includes('it'))) return 'IT';
    if (a.isPinned) return 'Events';
    return 'Company';
  }

  get filteredAnnouncements() {
    return this.announcements.filter(a => {
      const matchSearch = !this.searchTerm || a.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || a.content.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchCategory = !this.filterCategory || a.category === this.filterCategory;
      return matchSearch && matchCategory;
    });
  }
}
