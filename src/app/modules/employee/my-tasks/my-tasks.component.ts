import { Component } from '@angular/core';

export interface TaskItem {
  id: string;
  title: string;
  department: string;
  description: string;
  leadName: string;
  leadAvatar?: string;
  startDate: string;
  endDate: string;
  reportsCount: number;
  membersCount: number;
  status: 'Active' | 'Completed' | 'On Hold' | 'Planning';
  priority?: 'URGENT' | 'HIGH' | 'MEDIUM' | 'LOW';
  reviewRating?: number;
  reviewComment?: string;
  reviewDate?: string;
  reviewQuality?: string;
}

@Component({
  selector: 'app-emp-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class EmpTasksComponent {
  searchQuery = '';
  selectedStatus = 'All Status';

  statusList = ['All Status', 'Active', 'Completed', 'On Hold', 'Planning'];

  showAddTaskModal = false;
  newTask: Partial<TaskItem> = {
    title: '',
    department: 'AI & Research',
    description: '',
    leadName: 'Vikram Mehta (TL)',
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(Date.now() + 86400000 * 90).toISOString().split('T')[0],
    reportsCount: 0,
    membersCount: 1,
    status: 'Active'
  };

  // Review Modal State
  showReviewModal = false;
  selectedTaskForReview: TaskItem | null = null;
  reviewForm = {
    rating: 5,
    quality: 'Excellent',
    comment: ''
  };

  tasks: TaskItem[] = [
    {
      id: '1',
      title: 'AI Studio',
      department: 'AI & Research',
      description: 'Multilingual voice command assistant for automated clock-in & leaves',
      leadName: 'Vikram Mehta (TL)',
      startDate: 'Mar 10, 2026',
      endDate: 'Oct 20, 2026',
      reportsCount: 0,
      membersCount: 4,
      status: 'On Hold',
      reviewRating: 4,
      reviewQuality: 'Good',
      reviewComment: 'Voice command latency is low. Model accuracy tested at 96.4%.',
      reviewDate: 'Sep 02, 2026'
    },
    {
      id: '2',
      title: 'Etaprise',
      department: 'Enterprise Operations',
      description: 'Core organizational resource planning, HR payroll & attendance integration',
      leadName: 'Praveen Singh',
      startDate: 'Feb 01, 2026',
      endDate: 'Dec 15, 2026',
      reportsCount: 1,
      membersCount: 2,
      status: 'Active',
      reviewRating: 5,
      reviewQuality: 'Excellent',
      reviewComment: 'Outstanding execution and seamless integration with existing database.',
      reviewDate: 'Sep 08, 2026'
    },
    {
      id: '3',
      title: 'HRM Mobile Portal',
      department: 'UI/UX & Mobile',
      description: 'Cross-platform iOS & Android mobile application for employee self-service and daily shift tracking',
      leadName: 'Ananya Roy (PM)',
      startDate: 'Jan 15, 2026',
      endDate: 'Nov 30, 2026',
      reportsCount: 3,
      membersCount: 6,
      status: 'Active'
    },
    {
      id: '4',
      title: 'Analytics & Insights Dashboard',
      department: 'Data & BI',
      description: 'Real-time workforce performance analytics, attendance heatmaps, and automated PDF export pipeline',
      leadName: 'Rahul Sharma',
      startDate: 'Apr 05, 2026',
      endDate: 'Sep 25, 2026',
      reportsCount: 2,
      membersCount: 5,
      status: 'Planning'
    },
    {
      id: '5',
      title: 'Biometric IoT Gateways',
      department: 'Hardware & Security',
      description: 'Face recognition hardware integration and high-availability MQTT attendance synchronization',
      leadName: 'Kavita Patel',
      startDate: 'Nov 01, 2025',
      endDate: 'Jan 20, 2026',
      reportsCount: 4,
      membersCount: 3,
      status: 'Completed',
      reviewRating: 5,
      reviewQuality: 'Excellent',
      reviewComment: 'Passed all security audits with flying colors.',
      reviewDate: 'Jan 22, 2026'
    },
    {
      id: '6',
      title: 'Payroll Tax Engine 2.0',
      department: 'Finance Tech',
      description: 'Automated TDS tax calculation, Form 16 generation, and multi-state compliance auditing',
      leadName: 'Sanjay Gupta',
      startDate: 'Mar 01, 2026',
      endDate: 'Aug 14, 2026',
      reportsCount: 2,
      membersCount: 4,
      status: 'Active'
    }
  ];

  showToast = false;
  toastMsg = '';

  get filteredTasks(): TaskItem[] {
    return this.tasks.filter(t => {
      // Status filter
      if (this.selectedStatus !== 'All Status' && t.status !== this.selectedStatus) {
        return false;
      }
      // Search query filter
      if (this.searchQuery.trim()) {
        const q = this.searchQuery.toLowerCase();
        const matchTitle = t.title.toLowerCase().includes(q);
        const matchDesc = t.description.toLowerCase().includes(q);
        const matchDept = t.department.toLowerCase().includes(q);
        const matchLead = t.leadName.toLowerCase().includes(q);
        if (!matchTitle && !matchDesc && !matchDept && !matchLead) {
          return false;
        }
      }
      return true;
    });
  }

  getInitial(name: string): string {
    if (!name) return 'U';
    return name.trim().charAt(0).toUpperCase();
  }

  openAddTaskModal(): void {
    this.newTask = {
      title: '',
      department: 'AI & Research',
      description: '',
      leadName: 'Vikram Mehta (TL)',
      startDate: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      endDate: new Date(Date.now() + 86400000 * 90).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      reportsCount: 0,
      membersCount: 1,
      status: 'Active'
    };
    this.showAddTaskModal = true;
  }

  closeAddTaskModal(): void {
    this.showAddTaskModal = false;
  }

  saveNewTask(): void {
    if (!this.newTask.title?.trim()) {
      this.triggerToast('Please enter a task title.');
      return;
    }

    this.tasks.unshift({
      id: Date.now().toString(),
      title: this.newTask.title,
      department: this.newTask.department || 'General',
      description: this.newTask.description || '',
      leadName: this.newTask.leadName || 'Current User',
      startDate: this.newTask.startDate || 'Sep 11, 2026',
      endDate: this.newTask.endDate || 'Dec 31, 2026',
      reportsCount: Number(this.newTask.reportsCount || 0),
      membersCount: Number(this.newTask.membersCount || 1),
      status: (this.newTask.status as any) || 'Active'
    });

    this.showAddTaskModal = false;
    this.triggerToast('New task added successfully!');
  }

  // Task Review Modal Actions
  openReviewModal(task: TaskItem): void {
    this.selectedTaskForReview = task;
    this.reviewForm = {
      rating: task.reviewRating || 5,
      quality: task.reviewQuality || 'Excellent',
      comment: task.reviewComment || ''
    };
    this.showReviewModal = true;
  }

  closeReviewModal(): void {
    this.showReviewModal = false;
    this.selectedTaskForReview = null;
  }

  setStarRating(rating: number): void {
    this.reviewForm.rating = rating;
  }

  saveTaskReview(): void {
    if (!this.selectedTaskForReview) return;

    this.selectedTaskForReview.reviewRating = this.reviewForm.rating;
    this.selectedTaskForReview.reviewQuality = this.reviewForm.quality;
    this.selectedTaskForReview.reviewComment = this.reviewForm.comment;
    this.selectedTaskForReview.reviewDate = new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });

    this.showReviewModal = false;
    this.triggerToast(`Review submitted for task "${this.selectedTaskForReview.title}"!`);
    this.selectedTaskForReview = null;
  }

  private triggerToast(msg: string): void {
    this.toastMsg = msg;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3000);
  }
}



