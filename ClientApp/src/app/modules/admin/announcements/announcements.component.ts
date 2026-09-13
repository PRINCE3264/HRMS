import { Component, OnInit } from '@angular/core';
import { AnnouncementService, ToastService } from '../../../core/services';

@Component({
  selector: 'app-admin-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AdminAnnouncementsComponent implements OnInit {
  announcements: any[] = [];
  selectedFilter: string = 'All';
  showModal: boolean = false;

  newAnnouncement = {
    title: '',
    category: 'General',
    priority: 'Medium',
    content: '',
    isPinned: false
  };

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
          id: a.id,
          title: a.title,
          author: a.author || a.authorName || 'HR Admin',
          date: a.publishedDate || new Date().toISOString().split('T')[0],
          tag: a.category || cfg.tag,
          tagColor: cfg.tagColor,
          color: cfg.color,
          icon: cfg.icon,
          pinned: a.isPinned,
          content: a.content,
          views: a.views || Math.floor(Math.random() * 80) + 20,
          comments: a.comments || Math.floor(Math.random() * 8)
        };
      }),
      error: () => this.toast.error('Failed to load announcements')
    });
  }

  get filteredAnnouncements() {
    if (this.selectedFilter === 'All') return this.announcements;
    if (this.selectedFilter === 'Important') {
      return this.announcements.filter(a => a.pinned || a.tag === 'Important' || a.tag === 'High');
    }
    return this.announcements.filter(a => a.tag?.toLowerCase() === this.selectedFilter.toLowerCase());
  }

  get pinnedCount(): number {
    return this.announcements.filter(a => a.pinned).length;
  }

  get importantCount(): number {
    return this.announcements.filter(a => a.tag === 'Important' || a.tag === 'High').length;
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  saveAnnouncement() {
    if (!this.newAnnouncement.title || !this.newAnnouncement.content) {
      this.toast.error('Please fill in required fields');
      return;
    }

    const cfg = this.priorityConfig[this.newAnnouncement.priority] || this.priorityConfig['NORMAL'];
    const item = {
      id: Date.now(),
      title: this.newAnnouncement.title,
      author: 'HR Admin',
      date: new Date().toISOString().split('T')[0],
      tag: this.newAnnouncement.category,
      tagColor: cfg.tagColor,
      color: cfg.color,
      icon: cfg.icon,
      pinned: this.newAnnouncement.isPinned,
      content: this.newAnnouncement.content,
      views: 1,
      comments: 0
    };

    this.announcements.unshift(item);
    this.newAnnouncement = { title: '', category: 'General', priority: 'Medium', content: '', isPinned: false };
    this.showModal = false;
    this.toast.success('Announcement published successfully');
  }

  deleteAnnouncement(id: any) {
    this.announcements = this.announcements.filter(a => a.id !== id);
    this.toast.success('Announcement deleted');
  }
}
