import { Component, OnInit } from '@angular/core';
import { AnnouncementService, ToastService } from '../../../core/services';

@Component({
  selector: 'app-admin-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AdminAnnouncementsComponent implements OnInit {
  announcements: any[] = [];

  private priorityConfig: Record<string, { tag: string; tagColor: string; color: string; icon: string }> = {
    'High': { tag: 'Important', tagColor: '#fee2e2', color: '#ef4444', icon: 'fas fa-exclamation-circle' },
    'Medium': { tag: 'General', tagColor: '#ede9fe', color: '#8b5cf6', icon: 'fas fa-building' },
    'Low': { tag: 'General', tagColor: '#ecfdf5', color: '#10b981', icon: 'fas fa-heart' },
    'NORMAL': { tag: 'General', tagColor: '#ecfdf5', color: '#10b981', icon: 'fas fa-info-circle' }
  };

  constructor(private announcementService: AnnouncementService, private toast: ToastService) {}

  ngOnInit(): void {
    this.loadAnnouncements();
  }

  loadAnnouncements(): void {
    this.announcementService.getAnnouncements().subscribe({
      next: (data) => this.announcements = data.map((a: any) => {
        const cfg = this.priorityConfig[a.priority] || this.priorityConfig['NORMAL'];
        return {
          title: a.title,
          author: a.author || a.authorName,
          date: a.publishedDate,
          tag: cfg.tag,
          tagColor: cfg.tagColor,
          color: cfg.color,
          icon: cfg.icon,
          pinned: a.isPinned,
          content: a.content,
          views: 0,
          comments: 0
        };
      }),
      error: () => this.toast.error('Failed to load announcements')
    });
  }
}
