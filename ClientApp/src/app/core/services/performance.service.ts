import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from './base-api.service';
import { PerformanceReview, KPI, Task, TaskPriority, TaskStatus, PerformanceFeedback, FeedbackCategory } from '../models';

@Injectable({ providedIn: 'root' })
export class PerformanceService extends BaseApiService {

  getReviews(employeeId?: string): Observable<PerformanceReview[]> {
    return this.http.get<any>(`${this.apiBase}/performance/reviews`, { params: this.buildParams({ employeeId }) })
      .pipe(map(res => this.unwrap<PerformanceReview[]>(res)));
  }

  getReviewsByEmployee(employeeId: string): Observable<PerformanceReview[]> {
    return this.http.get<any>(`${this.apiBase}/performance/reviews/employee/${employeeId}`)
      .pipe(map(res => this.unwrap<PerformanceReview[]>(res)));
  }

  getMyReviews(): Observable<PerformanceReview[]> {
    return this.http.get<any>(`${this.apiBase}/performance/reviews/my`)
      .pipe(map(res => this.unwrap<PerformanceReview[]>(res)));
  }

  createReview(data: Partial<PerformanceReview>): Observable<PerformanceReview> {
    return this.http.post<any>(`${this.apiBase}/performance/reviews`, data)
      .pipe(map(res => this.unwrap<PerformanceReview>(res)));
  }

  updateReview(id: string, data: Partial<PerformanceReview>): Observable<PerformanceReview> {
    return this.http.put<any>(`${this.apiBase}/performance/reviews/${id}`, data)
      .pipe(map(res => this.unwrap<PerformanceReview>(res)));
  }

  deleteReview(id: string): Observable<boolean> {
    return this.http.delete<any>(`${this.apiBase}/performance/reviews/${id}`)
      .pipe(map(res => true));
  }

  getKpis(employeeId?: string): Observable<KPI[]> {
    return this.http.get<any>(`${this.apiBase}/performance/kpis`, { params: this.buildParams({ employeeId }) })
      .pipe(map(res => this.unwrap<KPI[]>(res)));
  }

  getKpisByEmployee(employeeId: string): Observable<KPI[]> {
    return this.http.get<any>(`${this.apiBase}/performance/kpis/employee/${employeeId}`)
      .pipe(map(res => this.unwrap<KPI[]>(res)));
  }

  getMyKpis(): Observable<KPI[]> {
    return this.http.get<any>(`${this.apiBase}/performance/kpis/my`)
      .pipe(map(res => this.unwrap<KPI[]>(res)));
  }

  createKpi(data: Partial<KPI>): Observable<KPI> {
    return this.http.post<any>(`${this.apiBase}/performance/kpis`, data)
      .pipe(map(res => this.unwrap<KPI>(res)));
  }

  updateKpi(id: string, data: Partial<KPI>): Observable<KPI> {
    return this.http.put<any>(`${this.apiBase}/performance/kpis/${id}`, data)
      .pipe(map(res => this.unwrap<KPI>(res)));
  }

  deleteKpi(id: string): Observable<boolean> {
    return this.http.delete<any>(`${this.apiBase}/performance/kpis/${id}`)
      .pipe(map(res => true));
  }

  getMyTasks(): Observable<Task[]> {
    return this.http.get<any>(`${this.apiBase}/tasks/my`)
      .pipe(map(res => this.unwrap<Task[]>(res)));
  }

  getTasksByEmployee(employeeId: string): Observable<Task[]> {
    return this.http.get<any>(`${this.apiBase}/tasks/employee/${employeeId}`)
      .pipe(map(res => this.unwrap<Task[]>(res)));
  }

  getAssignedByMe(): Observable<Task[]> {
    return this.http.get<any>(`${this.apiBase}/tasks/assigned-by`)
      .pipe(map(res => this.unwrap<Task[]>(res)));
  }

  createTask(data: { title: string; description?: string; assignedToId: string; priority?: TaskPriority; dueDate: string; estimatedHours?: number }): Observable<Task> {
    return this.http.post<any>(`${this.apiBase}/tasks`, data)
      .pipe(map(res => this.unwrap<Task>(res)));
  }

  updateTaskStatus(id: string, status: TaskStatus): Observable<Task> {
    return this.http.put<any>(`${this.apiBase}/tasks/${id}/status`, JSON.stringify(status), { headers: { 'Content-Type': 'application/json' } })
      .pipe(map(res => this.unwrap<Task>(res)));
  }

  reviewTask(id: string, data: { status?: string; rating?: number; reviewComments?: string; actualHours?: number }): Observable<Task> {
    return this.http.put<any>(`${this.apiBase}/tasks/${id}/review`, data)
      .pipe(map(res => this.unwrap<Task>(res)));
  }

  deleteTask(id: string): Observable<boolean> {
    return this.http.delete<any>(`${this.apiBase}/tasks/${id}`)
      .pipe(map(res => true));
  }

  getFeedbacks(employeeId?: string): Observable<PerformanceFeedback[]> {
    return this.http.get<any>(`${this.apiBase}/performance/feedback`, { params: this.buildParams({ employeeId }) })
      .pipe(map(res => this.unwrap<PerformanceFeedback[]>(res)));
  }

  getFeedbacksAboutMe(): Observable<PerformanceFeedback[]> {
    return this.http.get<any>(`${this.apiBase}/performance/feedback/about-me`)
      .pipe(map(res => this.unwrap<PerformanceFeedback[]>(res)));
  }

  getFeedbacksByMe(): Observable<PerformanceFeedback[]> {
    return this.http.get<any>(`${this.apiBase}/performance/feedback/by-me`)
      .pipe(map(res => this.unwrap<PerformanceFeedback[]>(res)));
  }

  submitFeedback(data: { targetEmployeeId: string; reviewPeriod: string; category: FeedbackCategory; rating: number; comments: string }): Observable<PerformanceFeedback> {
    return this.http.post<any>(`${this.apiBase}/performance/feedback`, data)
      .pipe(map(res => this.unwrap<PerformanceFeedback>(res)));
  }

  deleteFeedback(id: string): Observable<boolean> {
    return this.http.delete<any>(`${this.apiBase}/performance/feedback/${id}`)
      .pipe(map(res => true));
  }
}