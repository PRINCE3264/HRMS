import { Component } from '@angular/core';

@Component({
  selector: 'app-tl-performance',
  templateUrl: './team-performance.component.html',
  styleUrls: ['./team-performance.component.scss']
})
export class TlPerformanceComponent {
  performances = [
    { name: 'John Smith', designation: 'Senior Developer', tasksCompleted: 24, avgRating: 5, punctuality: 98, quality: 95, overall: 95 },
    { name: 'Emily Davis', designation: 'Developer', tasksCompleted: 20, avgRating: 4, punctuality: 95, quality: 88, overall: 88 },
    { name: 'David Lee', designation: 'Junior Developer', tasksCompleted: 14, avgRating: 3, punctuality: 82, quality: 75, overall: 72 },
    { name: 'Maria Garcia', designation: 'Developer', tasksCompleted: 18, avgRating: 4, punctuality: 90, quality: 90, overall: 88 },
    { name: 'James Brown', designation: 'Senior Developer', tasksCompleted: 26, avgRating: 5, punctuality: 99, quality: 97, overall: 97 },
    { name: 'Anna Wilson', designation: 'Developer', tasksCompleted: 16, avgRating: 4, punctuality: 88, quality: 82, overall: 82 },
    { name: 'Robert Taylor', designation: 'QA Engineer', tasksCompleted: 22, avgRating: 4, punctuality: 92, quality: 90, overall: 86 },
    { name: 'Sophie Martin', designation: 'UI Designer', tasksCompleted: 15, avgRating: 4, punctuality: 94, quality: 92, overall: 90 },
    { name: 'Laura Thomas', designation: 'Developer', tasksCompleted: 19, avgRating: 4, punctuality: 91, quality: 85, overall: 84 },
    { name: 'Kevin Jackson', designation: 'Senior Developer', tasksCompleted: 23, avgRating: 5, punctuality: 97, quality: 94, overall: 94 },
  ];

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
