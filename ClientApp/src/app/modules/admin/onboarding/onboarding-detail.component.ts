import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../../core/services';

@Component({
  selector: 'app-admin-onboarding-detail',
  templateUrl: './onboarding-detail.component.html',
  styleUrls: ['./onboarding-detail.component.scss']
})
export class AdminOnboardingDetailComponent implements OnInit {
  candidateId: string = '';
  newNoteText: string = '';

  candidate: any = {
    id: 'OB-101',
    name: 'Nathan Brooks',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    initials: 'NB',
    status: 'In Progress',
    statusClass: 'status-green',
    position: 'Software Developer',
    department: 'Engineering',
    joinDate: 'Dec 16, 2024',
    accentColor: '#2563eb',
    progress: 75,
    mentor: 'Michael Chen',
    email: 'nathan.b@envision.com',
    phone: '+1 (555) 234-5678',
    documents: [
      { name: 'ID Proof & Passport', verified: true },
      { name: 'Signed Offer Letter', verified: true },
      { name: 'Tax W-4 Form', verified: true },
      { name: 'Bank Details Form', verified: false }
    ],
    notes: [
      { author: 'Michael Chen', time: 'Yesterday at 4:30 PM', text: 'Completed IT setup smoothly. Access granted to GitHub & Jira.' }
    ],
    tasks: [
      { label: 'Account setup', done: true },
      { label: 'IT equipment issued', done: true },
      { label: 'HR orientation', done: true },
      { label: 'Team introduction', done: true },
      { label: 'Project assignment', done: false },
      { label: 'First week review', done: false }
    ]
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.candidateId = this.route.snapshot.paramMap.get('id') || '';
  }

  toggleTask(task: any): void {
    task.done = !task.done;
    const completedCount = this.candidate.tasks.filter((t: any) => t.done).length;
    this.candidate.progress = Math.round((completedCount / this.candidate.tasks.length) * 100);
    this.toast.info(`Task "${task.label}" updated.`);
  }

  toggleDoc(doc: any): void {
    doc.verified = !doc.verified;
    this.toast.info(`${doc.name} status updated to ${doc.verified ? 'Verified' : 'Pending'}`);
  }

  addNote(): void {
    if (!this.newNoteText.trim()) return;
    this.candidate.notes.unshift({
      author: 'HR Admin',
      time: 'Just now',
      text: this.newNoteText.trim()
    });
    this.newNoteText = '';
    this.toast.success('Note added.');
  }

  editCandidate(): void {
    this.router.navigate(['/admin/onboarding', this.candidateId || '101', 'edit']);
  }

  back(): void {
    this.router.navigate(['/admin/onboarding']);
  }
}
