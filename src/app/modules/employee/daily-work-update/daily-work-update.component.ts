import { Component, OnInit } from '@angular/core';

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

  pastUpdates: WorkUpdateItem[] = [
    {
      id: '1',
      date: '10 Sep 2026',
      project: 'HRM Portal - Fullstack Development',
      accomplishments: 'Redesigned My Profile & Check In / Out UI matching client mockups with live timer tracking.',
      inProgress: 'Integrating Break Tracker and Daily Work Update module with media upload.',
      blockers: 'None',
      tomorrowPlan: 'Finalize Admin Employee Management views.',
      hours: 8,
      status: 'Approved',
      screenshot: {
        name: 'profile_redesign_preview.png',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
      },
      video: {
        name: 'ui_demo_walkthrough.mp4',
        size: '14.2 MB',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
      }
    },
    {
      id: '2',
      date: '09 Sep 2026',
      project: 'UI/UX Redesign & Optimization',
      accomplishments: 'Implemented ocean blue theme gradient sidebar with customizable logo and smooth submenus.',
      inProgress: 'Dashboard widgets optimization.',
      blockers: 'Awaiting API schema confirmation for attendance logs.',
      tomorrowPlan: 'Start My Profile view implementation.',
      hours: 7.5,
      status: 'Approved',
      screenshot: {
        name: 'sidebar_ocean_blue.png',
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
      }
    }
  ];

  showToast = false;
  toastMsg = '';

  ngOnInit(): void {}

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

    const formattedDate = new Date(this.workForm.date).toLocaleDateString('en-GB', {
      day: '2-digit', month: 'short', year: 'numeric'
    });

    this.pastUpdates.unshift({
      id: Date.now().toString(),
      date: formattedDate,
      project: this.workForm.project,
      accomplishments: this.workForm.accomplishments,
      inProgress: this.workForm.inProgress || 'N/A',
      blockers: this.workForm.blockers || 'None',
      tomorrowPlan: this.workForm.tomorrowPlan || 'N/A',
      hours: this.workForm.hoursSpent,
      status: 'Submitted',
      screenshot: this.screenshotFile ? { ...this.screenshotFile } : null,
      video: this.videoFile ? { ...this.videoFile } : null
    });

    this.workForm.accomplishments = '';
    this.workForm.inProgress = '';
    this.workForm.blockers = '';
    this.workForm.tomorrowPlan = '';
    this.screenshotFile = null;
    this.videoFile = null;

    this.triggerToast('Daily work update submitted with attachments!');
  }

  private triggerToast(msg: string): void {
    this.toastMsg = msg;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3000);
  }
}

