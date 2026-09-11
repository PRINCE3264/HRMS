import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../../../core/services';

interface AnnouncementView {
  title: string;
  content: string;
  date: string;
  author: string;
  category: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  read: boolean;
  tags: string[];
}

@Component({
  selector: 'app-emp-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class EmpAnnouncementsComponent implements OnInit {
  searchTerm = '';
  filterCategory = '';

  announcements: AnnouncementView[] = [];

  private icons = ['fas fa-snowflake', 'fas fa-home', 'fas fa-server', 'fas fa-glass-cheers', 'fas fa-chart-line', 'fas fa-fire-extinguisher', 'fas fa-heart', 'fas fa-bullhorn'];
  private iconBgs = ['#dbeafe', '#dcfce7', '#fee2e2', '#fef3c7', '#f3e8ff', '#cffafe', '#fce7f3', '#f1f5f9'];
  private iconColors = ['#2563eb', '#16a34a', '#dc2626', '#d97706', '#7c3aed', '#0891b2', '#db2777', '#64748b'];

  constructor(private announcementService: AnnouncementService) {}

  ngOnInit(): void {
    this.loadAnnouncements();
  }

  private loadAnnouncements(): void {
    this.announcementService.getAnnouncements().subscribe({
      next: list => {
        this.announcements = (list || []).map((ann, i) => ({
          title: ann.title || '',
          content: ann.content || '',
          date: this.formatDate(ann.publishedDate),
          author: (ann as any).authorName || ann.author || '',
          category: (ann as any).category || (ann as any).authorRole || 'Company',
          icon: this.icons[i % this.icons.length],
          iconBg: this.iconBgs[i % this.iconBgs.length],
          iconColor: this.iconColors[i % this.iconColors.length],
          read: !!ann.isPinned,
          tags: [ann.priority, ...(ann.targetAudience || [])].filter(Boolean).slice(0, 3)
        }));
      },
      error: () => {
        this.announcements = [];
      }
    });
  }

  private formatDate(value?: string): string {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  get filteredAnnouncements() {
    return this.announcements.filter(a => {
      const matchSearch = !this.searchTerm || a.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchCat = !this.filterCategory || a.category === this.filterCategory;
      return matchSearch && matchCat;
    });
  }
}