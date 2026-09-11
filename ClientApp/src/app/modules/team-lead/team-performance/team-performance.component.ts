import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { PerformanceService, EmployeeService, AuthService } from '../../../core/services';

@Component({
  selector: 'app-tl-performance',
  templateUrl: './team-performance.component.html',
  styleUrls: ['./team-performance.component.scss']
})
export class TlPerformanceComponent implements OnInit {
  performances: any[] = [];

  constructor(
    private performanceService: PerformanceService,
    private employeeService: EmployeeService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    const user = this.authService.currentUser;
    if (!user?.employeeId) return;

    forkJoin({
      reviews: this.performanceService.getReviews(),
      employees: this.employeeService.getAllEmployees(),
      tasks: this.performanceService.getAssignedByMe()
    }).subscribe(({ reviews, employees, tasks }) => {
      const team = employees.filter(e => e.reportingManagerId === user.employeeId);
      this.performances = team.map(e => {
        const rev = reviews.find(r => r.employeeId === e.id);
        const completed = tasks.filter(t =>
          (t.assignedTo === e.id || (t as any).assignedToId === e.id) &&
          (t.status === 'COMPLETED' || (t as any).status === 'DONE')
        ).length;
        const rating = rev?.overallRating || 0;
        const pct = Math.round(rating * 20);
        return {
          name: `${e.firstName} ${e.lastName}`,
          designation: e.designation,
          tasksCompleted: completed,
          avgRating: Math.round(rating),
          punctuality: rev ? Math.round(rev.competencyRating * 20) || 90 : 90,
          quality: rev ? Math.round(rev.goalsRating * 20) || 85 : 85,
          overall: pct || 85
        };
      });
    });
  }

  getProgressColor(val: number): string {
    if (val >= 90) return '#10b981';
    if (val >= 75) return '#6366f1';
    if (val >= 60) return '#f59e0b';
    return '#ef4444';
  }

  getOverallLevel(val: number): string {
    if (val >= 90) return 'excellent';
    if (val >= 80) return 'good';
    if (val >= 65) return 'average';
    return 'poor';
  }
}
