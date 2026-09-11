import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../../../core/services';

@Component({
  selector: 'app-hr-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class HrAnnouncementsComponent implements OnInit {
  announcements: any[] = [];

  private iconMap: Record<string, { icon: string; iconBg: string; iconColor: string }> = {
    'General':    { icon: 'fas fa-calendar-star', iconBg: '#fef3c7', iconColor: '#d97706' },
    'Benefits':   { icon: 'fas fa-heartbeat', iconBg: '#fef2f2', iconColor: '#ef4444' },
    'Performance':{ icon: 'fas fa-chart-line', iconBg: '#ede9fe', iconColor: '#7c3aed' },
    'Policy':     { icon: 'fas fa-home', iconBg: '#dbeafe', iconColor: '#2563eb' },
    'Events':     { icon: 'fas fa-microphone', iconBg: '#ecfdf5', iconColor: '#10b981' },
  };

  private defaultIcon = { icon: 'fas fa-bullhorn', iconBg: '#fef3c7', iconColor: '#d97706' };

  constructor(private announcementService: AnnouncementService) {}

  ngOnInit(): void {
    this.loadAnnouncements();
  }

  loadAnnouncements(): void {
    this.announcementService.getAnnouncements().subscribe({
      next: (data) => {
        this.announcements = data.map(a => {
          const category = a.targetAudience?.length ? a.targetAudience[0] : 'General';
          const iconInfo = this.iconMap[category] || this.iconMap['General'];
          return {
            title: a.title,
            author: a.author,
            date: new Date(a.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            category,
            priority: a.priority || 'Medium',
            icon: iconInfo.icon,
            iconBg: iconInfo.iconBg,
            iconColor: iconInfo.iconColor,
            content: a.content,
            audience: a.targetAudience?.join(', ') || 'All Employees',
            views: 0,
            likes: 0,
            comments: 0,
          };
        });
      }
    });
  }
}
