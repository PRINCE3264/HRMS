import { Component, OnInit } from '@angular/core';
import { PerformanceService, EmployeeService, AuthService, ToastService } from '../../../core/services';
import { TaskPriority, TaskStatus } from '../../../core/models';

@Component({
  selector: 'app-tl-tasks',
  templateUrl: './team-tasks.component.html',
  styleUrls: ['./team-tasks.component.scss']
})
export class TlTasksComponent implements OnInit {
  filterAssignee = '';
  filterPriority = '';
  showAddTask = false;

  columns = [
    { key: 'TODO', title: 'To Do', color: '#94a3b8' },
    { key: 'IN_PROGRESS', title: 'In Progress', color: '#6366f1' },
    { key: 'IN_REVIEW', title: 'In Review', color: '#f59e0b' },
    { key: 'DONE', title: 'Done', color: '#10b981' },
  ];

  tasks: any[] = [];

  constructor(
    private performanceService: PerformanceService,
    private employeeService: EmployeeService,
    private authService: AuthService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.performanceService.getAssignedByMe().subscribe(data => {
      const now = new Date();
      this.tasks = data.map(t => ({
        id: t.id,
        title: t.title,
        description: t.description,
        assignee: t.assignedToName || 'Unassigned',
        assignedToId: t.assignedTo || (t as any).assignedToId,
        priority: t.priority || 'MEDIUM',
        status: t.status === 'COMPLETED' ? 'DONE' : t.status,
        dueDate: t.dueDate ? new Date(t.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'No date',
        isOverdue: t.dueDate ? new Date(t.dueDate) < now && t.status !== 'COMPLETED' : false
      }));
    });
  }

  get uniqueAssignees() { return [...new Set(this.tasks.map(t => t.assignee))]; }

  getColumnTasks(status: string) {
    return this.tasks.filter(t => {
      if (t.status !== status) return false;
      if (this.filterAssignee && t.assignee !== this.filterAssignee) return false;
      if (this.filterPriority && t.priority !== this.filterPriority) return false;
      return true;
    });
  }

  updateTaskStatus(taskId: string, newStatus: string) {
    const statusMap: Record<string, TaskStatus> = {
      'TODO': TaskStatus.TODO,
      'IN_PROGRESS': TaskStatus.IN_PROGRESS,
      'IN_REVIEW': TaskStatus.IN_REVIEW,
      'DONE': TaskStatus.COMPLETED
    };
    const mapped = statusMap[newStatus] || TaskStatus.IN_PROGRESS;
    this.performanceService.updateTaskStatus(taskId, mapped).subscribe({
      next: () => {
        this.toastService.success('Task status updated');
        this.loadTasks();
      },
      error: () => this.toastService.error('Failed to update task status')
    });
  }

  reviewTask(taskId: string, rating: number, comments: string) {
    this.performanceService.reviewTask(taskId, { status: 'COMPLETED', rating, reviewComments: comments }).subscribe({
      next: () => {
        this.toastService.success('Task reviewed successfully');
        this.loadTasks();
      },
      error: () => this.toastService.error('Failed to review task')
    });
  }
}
