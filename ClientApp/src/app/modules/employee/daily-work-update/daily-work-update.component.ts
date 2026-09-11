import { Component, OnInit } from '@angular/core';
import { WorkUpdateService, ToastService } from '../../../core/services';
import { DailyWorkUpdate } from '../../../core/models';

export interface WorkUpdateItem {
  id: string;
  date: string;
  project: string;
  accomplishments: string;
  inProgress: string;
  blockers: string;
  tomorrowPlan: string;
  hours: number;
  status: string;
  screenshot?: { name: string; url: string } | null;
  video?: { name: string; size: string; url: string } | null;
}

@Component({
  selector: 'app-emp-daily-work-update',
  templateUrl: './daily-work-update.component.html',
  styleUrls: ['./daily-work-update.component.scss']
})
export class EmpDailyWorkUpdateComponent implements OnInit {
  workForm = {
    date: new Date().toISOString().split('T')[0],
    project: 'HRM Portal - Fullstack Development',
    accomplishments: '',
    inProgress: '',
    blockers: '',
    tomorrowPlan: '',
    hoursSpent: 8
  };

  projects = [
    'HRM Portal - Fullstack Development',
    'Mobile Application Development',
    'Backend Cloud Infrastructure & API',
    'UI/UX Redesign & Optimization',
    'Database Maintenance & Auditing'
  ];

  screenshotFile: { name: string; url: string } | null = null;
  videoFile: { name: string; size: string; url: string } | null = null;

  previewMedia: { type: 'image' | 'video'; url: string; title: string } | null = null;

  pastUpdates: WorkUpdateItem[] = [];

  showToast = false;
  toastMsg = '';

  constructor(
    private workUpdateService: WorkUpdateService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadHistory();
  }

  private loadHistory(): void {
    this.workUpdateService.getMine().subscribe({
      next: updates => {
        this.pastUpdates = (updates || []).map(u => this.mapToItem(u));
      },
      error: () => {
        this.pastUpdates = [];
      }
    });
  }

  private mapToItem(u: DailyWorkUpdate): WorkUpdateItem {
    const formattedDate = new Date(u.date).toLocaleDateString('en-GB', {
      day: '2-digit', month: 'short', year: 'numeric'
    });
    return {
      id: u.id,
      date: formattedDate,
      project: u.tasksCompleted?.length ? u.tasksCompleted[0] : 'Daily Work Update',
      accomplishments: (u.tasksCompleted || []).join(', '),
      inProgress: u.workSummary || '',
      blockers: u.issuesBlockers || 'None',
      tomorrowPlan: '—',
      hours: u.hoursWorked || 0,
      status: u.status.charAt(0) + u.status.slice(1).toLowerCase(),
      screenshot: null,
      video: null
    };
  }

  onScreenshotSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.screenshotFile = {
          name: file.name,
          url: e.target.result
        };
        this.triggerToast('Work screenshot attached!');
      };
      reader.readAsDataURL(file);
    }
  }

  onVideoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
      const url = URL.createObjectURL(file);
      this.videoFile = {
        name: file.name,
        size: `${sizeMb} MB`,
        url: url
      };
      this.triggerToast('Video demo recording attached!');
    }
  }

  removeScreenshot(): void {
    this.screenshotFile = null;
  }

  removeVideo(): void {
    this.videoFile = null;
  }

  openMediaPreview(type: 'image' | 'video', url: string, title: string): void {
    this.previewMedia = { type, url, title };
  }

  closeMediaPreview(): void {
    this.previewMedia = null;
  }

  submitUpdate(): void {
    if (!this.workForm.accomplishments.trim()) {
      this.triggerToast('Please enter today\'s accomplishments.');
      return;
    }

    const payload: any = {
      tasksCompleted: this.workForm.accomplishments.split('\n').filter(t => t.trim()),
      workSummary: this.workForm.inProgress,
      issuesBlockers: this.workForm.blockers,
      hoursWorked: this.workForm.hoursSpent
    };

    this.workUpdateService.submit(payload).subscribe({
      next: (created) => {
        this.pastUpdates.unshift(this.mapToItem(created));
        this.workForm.accomplishments = '';
        this.workForm.inProgress = '';
        this.workForm.blockers = '';
        this.workForm.tomorrowPlan = '';
        this.screenshotFile = null;
        this.videoFile = null;
        this.toast.success('Daily work update submitted successfully!');
      },
      error: (err) => {
        const msg = err?.error?.message || err?.message || 'Failed to submit work update.';
        this.toast.error(msg);
      }
    });
  }

  deleteUpdate(item: WorkUpdateItem): void {
    this.workUpdateService.delete(item.id).subscribe({
      next: () => {
        this.pastUpdates = this.pastUpdates.filter(u => u.id !== item.id);
        this.toast.success('Work update deleted.');
      },
      error: (err) => {
        const msg = err?.error?.message || err?.message || 'Failed to delete work update.';
        this.toast.error(msg);
      }
    });
  }

  private triggerToast(msg: string): void {
    this.toastMsg = msg;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3000);
  }
}

