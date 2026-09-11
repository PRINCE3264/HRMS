import { Component, OnInit } from '@angular/core';
import { PerformanceService, ToastService, AuthService } from '../../../core/services';

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
export class EmpTasksComponent implements OnInit {
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

  showReviewModal = false;
  selectedTaskForReview: TaskItem | null = null;
  reviewForm = {
    rating: 5,
    quality: 'Excellent',
    comment: ''
  };

  tasks: TaskItem[] = [];

  showToast = false;
  toastMsg = '';

  constructor(
    private performanceService: PerformanceService,
    private authService: AuthService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  private loadTasks(): void {
    this.performanceService.getMyTasks().subscribe({
      next: list => {
        this.tasks = (list || []).map((t: any) => ({
          id: t.id,
          title: t.title,
          department: t.projectName || t.assignedByName || 'General',
          description: t.description || '',
          leadName: t.assignedByName || t.assignedToName || 'Team Lead',
          startDate: this.formatDate(t.dueDate),
          endDate: this.formatDate(t.dueDate),
          reportsCount: 0,
          membersCount: 1,
          status: this.mapStatus(t.status),
          priority: t.priority as any,
          reviewRating: t.rating,
          reviewComment: t.reviewComments,
          reviewDate: t.completedDate ? this.formatDate(t.completedDate) : undefined,
          reviewQuality: this.mapQuality(Number(t.rating) || 0)
        }));
      },
      error: () => {
        this.tasks = [];
        this.toast.error('Failed to load tasks.');
      }
    });
  }

  private mapStatus(status: any): TaskItem['status'] {
    const s = String(status || '').toUpperCase();
    if (s === 'COMPLETED') return 'Completed';
    if (s === 'BLOCKED') return 'On Hold';
    if (s === 'IN_REVIEW' || s === 'IN_PROGRESS' || s === 'TODO') return 'Active';
    return 'Planning';
  }

  private mapQuality(rating: number): string {
    if (rating >= 5) return 'Excellent';
    if (rating >= 4) return 'Good';
    if (rating >= 3) return 'Satisfactory';
    if (rating >= 2) return 'Needs Improvement';
    return 'Excellent';
  }

  private statusToApi(status: TaskItem['status']): string {
    if (status === 'Completed') return 'COMPLETED';
    if (status === 'On Hold') return 'BLOCKED';
    return 'IN_PROGRESS';
  }

  private formatDate(value?: string): string {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  }

  get filteredTasks(): TaskItem[] {
    return this.tasks.filter(t => {
      if (this.selectedStatus !== 'All Status' && t.status !== this.selectedStatus) {
        return false;
      }
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
      this.toast.error('Please enter a task title.');
      return;
    }
    const employeeId = this.authService.currentUser?.employeeId;
    if (!employeeId) {
      this.tasks.unshift({
        id: Date.now().toString(),
        title: this.newTask.title,
        department: this.newTask.department || 'General',
        description: this.newTask.description || '',
        leadName: this.newTask.leadName || 'Current User',
        startDate: this.newTask.startDate || this.formatDate(new Date().toISOString()),
        endDate: this.newTask.endDate || this.formatDate(new Date(Date.now() + 86400000 * 90).toISOString()),
        reportsCount: Number(this.newTask.reportsCount || 0),
        membersCount: Number(this.newTask.membersCount || 1),
        status: (this.newTask.status as any) || 'Active'
      });
      this.showAddTaskModal = false;
      this.toast.success('New task added successfully!');
      return;
    }
    this.performanceService.createTask({
      title: this.newTask.title,
      description: this.newTask.description || '',
      assignedToId: employeeId,
      priority: 'MEDIUM' as any,
      dueDate: this.newTask.endDate || new Date().toISOString(),
      estimatedHours: undefined
    }).subscribe({
      next: () => {
        this.showAddTaskModal = false;
        this.toast.success('New task created successfully!');
        this.loadTasks();
      },
      error: () => this.toast.error('Failed to create task.')
    });
  }

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
    const task = this.selectedTaskForReview;
    this.performanceService.reviewTask(task.id, {
      rating: this.reviewForm.rating,
      reviewComments: this.reviewForm.comment,
      status: this.statusToApi(task.status)
    }).subscribe({
      next: () => {
        this.showReviewModal = false;
        this.selectedTaskForReview = null;
        this.toast.success(`Review submitted for task "${task.title}"!`);
        this.loadTasks();
      },
      error: () => this.toast.error('Failed to submit review.')
    });
  }

  private triggerToast(msg: string): void {
    this.toastMsg = msg;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3000);
  }
}