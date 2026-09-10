import { Component } from '@angular/core';

export interface PerformanceRecord {
  period: string;
  tasksCompleted: number;
  onTimeRate: number;
  qualityScore: number;
  overall: number;
  reviewer: string;
  reviewerRole: string;
  feedback: string;
  strengths: string[];
  areasForGrowth: string[];
}

@Component({
  selector: 'app-emp-performance',
  templateUrl: './my-performance.component.html',
  styleUrls: ['./my-performance.component.scss']
})
export class EmpPerformanceComponent {
  selectedYear = '2025';
  activeFeedbackModal: PerformanceRecord | null = null;
  showToast = false;
  toastMsg = '';

  metrics = [
    { name: 'Task Completion', score: 88, icon: 'fa-tasks', color: '#00a8ff' },
    { name: 'On-Time Delivery', score: 82, icon: 'fa-clock', color: '#6366f1' },
    { name: 'Code Quality', score: 91, icon: 'fa-code', color: '#10b981' },
    { name: 'Punctuality', score: 95, icon: 'fa-user-check', color: '#8b5cf6' },
    { name: 'Collaboration', score: 87, icon: 'fa-users', color: '#ec4899' },
    { name: 'Communication', score: 84, icon: 'fa-comments', color: '#f59e0b' },
  ];

  recentRatings = [
    { period: 'Q4 2025', stars: 5, score: 88, date: '15 Dec 2025' },
    { period: 'Q3 2025', stars: 4, score: 82, date: '18 Sep 2025' },
    { period: 'Q2 2025', stars: 4, score: 78, date: '20 Jun 2025' },
    { period: 'Q1 2025', stars: 4, score: 84, date: '22 Mar 2025' },
  ];

  history: PerformanceRecord[] = [
    {
      period: 'Q4 2025',
      tasksCompleted: 18,
      onTimeRate: 88,
      qualityScore: 92,
      overall: 88,
      reviewer: 'Sarah Johnson',
      reviewerRole: 'Engineering Manager',
      feedback: 'Excellent quarter! Delivered key modules ahead of schedule with zero critical bugs. Great initiative in mentoring junior developers.',
      strengths: ['High Code Quality', 'Leadership & Mentorship', 'System Architecture'],
      areasForGrowth: ['Documentation polish']
    },
    {
      period: 'Q3 2025',
      tasksCompleted: 16,
      onTimeRate: 82,
      qualityScore: 88,
      overall: 82,
      reviewer: 'Sarah Johnson',
      reviewerRole: 'Engineering Manager',
      feedback: 'Solid performance throughout Q3. Consistently met targets and demonstrated strong teamwork during sprint crunch periods.',
      strengths: ['Team Collaboration', 'Problem Solving'],
      areasForGrowth: ['Time estimation accuracy']
    },
    {
      period: 'Q2 2025',
      tasksCompleted: 14,
      onTimeRate: 75,
      qualityScore: 85,
      overall: 78,
      reviewer: 'Sarah Johnson',
      reviewerRole: 'Engineering Manager',
      feedback: 'Handled complex feature implementations well. Focus on improving sprint deadline predictability for complex tasks.',
      strengths: ['Technical Depth', 'Product Knowledge'],
      areasForGrowth: ['Sprint pacing']
    },
    {
      period: 'Q1 2025',
      tasksCompleted: 17,
      onTimeRate: 85,
      qualityScore: 90,
      overall: 84,
      reviewer: 'Sarah Johnson',
      reviewerRole: 'Engineering Manager',
      feedback: 'Strong start to the year! Refactored legacy core modules resulting in a 30% performance boost.',
      strengths: ['Code Refactoring', 'Performance Optimization'],
      areasForGrowth: ['Cross-team syncs']
    }
  ];

  get filteredHistory(): PerformanceRecord[] {
    return this.history.filter(h => h.period.includes(this.selectedYear));
  }

  getScoreColor(score: number): string {
    if (score >= 90) return '#10b981';
    if (score >= 80) return '#0066ff';
    if (score >= 65) return '#f59e0b';
    return '#ef4444';
  }

  getOverallLevel(val: number): string {
    if (val >= 90) return 'EXCELLENT';
    if (val >= 80) return 'GOOD';
    return 'AVERAGE';
  }

  openFeedback(item: PerformanceRecord): void {
    this.activeFeedbackModal = item;
  }

  closeFeedback(): void {
    this.activeFeedbackModal = null;
  }

  downloadReport(): void {
    this.triggerToast('Generating and downloading Performance Review PDF report...');
  }

  private triggerToast(msg: string): void {
    this.toastMsg = msg;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3000);
  }
}
