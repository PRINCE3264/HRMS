import { Component, OnInit } from '@angular/core';
import { PerformanceService, ToastService, EmployeeService } from '../../../core/services';
import { PerformanceReview, KPI, PerformanceFeedback, FeedbackCategory, Employee } from '../../../core/models';

@Component({
  selector: 'app-hr-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class HrPerformanceComponent implements OnInit {
  activeTab = 'reviews';
  reviews: any[] = [];
  goals: any[] = [];
  feedbacks: PerformanceFeedback[] = [];
  employees: Employee[] = [];
  selectedEmployeeId: string = '';

  private deptColors: string[] = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#06b6d4', '#8b5cf6', '#ec4899'];

  constructor(
    private performanceService: PerformanceService,
    private toastService: ToastService,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.loadReviews();
    this.loadKpis();
    this.loadFeedbacks();
    this.loadEmployees();
  }

  loadReviews(): void {
    this.performanceService.getReviews().subscribe({
      next: (data) => {
        this.reviews = data.map((r, i) => ({
          name: r.employeeName,
          department: '',
          period: r.period,
          rating: r.overallRating,
          reviewer: r.reviewerName,
          status: r.status,
          color: this.deptColors[i % this.deptColors.length],
          id: r.id,
        }));
      }
    });
  }

  loadKpis(): void {
    this.performanceService.getKpis().subscribe({
      next: (data) => {
        this.goals = data.map((k, i) => ({
          employee: k.employeeName,
          goal: k.title,
          category: k.description || 'General',
          progress: k.targetValue > 0 ? Math.round((k.currentValue / k.targetValue) * 100) : 0,
          dueDate: k.period,
          status: k.status || 'On Track',
          color: this.deptColors[i % this.deptColors.length],
        }));
      }
    });
  }

  loadFeedbacks(): void {
    const empId = this.selectedEmployeeId || undefined;
    this.performanceService.getFeedbacks(empId).subscribe({
      next: (data) => {
        this.feedbacks = data;
      }
    });
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        this.employees = data;
      }
    });
  }

  onEmployeeFilterChange(): void {
    this.loadFeedbacks();
  }

  deleteFeedback(id: string): void {
    this.performanceService.deleteFeedback(id).subscribe({
      next: () => {
        this.toastService.success('Feedback deleted.');
        this.loadFeedbacks();
      },
      error: () => {
        this.toastService.error('Failed to delete feedback.');
      }
    });
  }

  formatDate(iso: string): string {
    if (!iso) return '';
    return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  getFeedbackColor(index: number): string {
    return this.deptColors[index % this.deptColors.length];
  }
}
