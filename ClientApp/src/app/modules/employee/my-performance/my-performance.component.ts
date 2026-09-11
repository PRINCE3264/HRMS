import { Component, OnInit } from '@angular/core';
import { PerformanceService, ToastService } from '../../../core/services';

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
export class EmpPerformanceComponent implements OnInit {
  selectedYear = '2025';
  activeFeedbackModal: PerformanceRecord | null = null;
  showToast = false;
  toastMsg = '';

  metrics: { name: string; score: number; icon: string; color: string }[] = [];

  recentRatings: { period: string; stars: number; score: number; date: string }[] = [];

  history: PerformanceRecord[] = [];

  private kpiIcons = ['fa-tasks', 'fa-clock', 'fa-code', 'fa-user-check', 'fa-users', 'fa-comments'];
  private kpiColors = ['#00a8ff', '#6366f1', '#10b981', '#8b5cf6', '#ec4899', '#f59e0b'];

  constructor(
    private performanceService: PerformanceService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.performanceService.getMyReviews().subscribe({
      next: reviews => {
        this.buildHistory(reviews || []);
        this.buildRecentRatings(reviews || []);
      },
      error: () => this.toast.error('Failed to load performance reviews.')
    });

    this.performanceService.getMyKpis().subscribe({
      next: kpis => {
        this.metrics = (kpis || []).map((k, i) => {
          const pct = k.targetValue ? Math.round((k.currentValue / k.targetValue) * 100) : 0;
          return {
            name: k.title || k.description,
            score: Math.min(100, Math.max(0, pct)),
            icon: this.kpiIcons[i % this.kpiIcons.length],
            color: this.kpiColors[i % this.kpiColors.length]
          };
        });
      },
      error: () => this.metrics = []
    });
  }

  private buildHistory(reviews: any[]): void {
    this.history = reviews.map(r => ({
      period: r.period || '',
      tasksCompleted: 0,
      onTimeRate: Math.round(Number(r.goalsRating) || 0),
      qualityScore: Math.round(Number(r.competencyRating) || 0),
      overall: Math.round(Number(r.overallRating) || 0),
      reviewer: r.reviewerName || '',
      reviewerRole: '',
      feedback: r.comments || '',
      strengths: [],
      areasForGrowth: []
    }));
    const years = this.history.map(h => (h.period.match(/\d{4}/) || [''])[0]);
    const cleanYears = years.filter(Boolean);
    if (cleanYears.length) {
      const latest = cleanYears.sort().pop() as string;
      this.selectedYear = latest;
    }
  }

  private buildRecentRatings(reviews: any[]): void {
    this.recentRatings = reviews
      .sort((a, b) => String(b.createdAt || '').localeCompare(String(a.createdAt || '')))
      .map(r => ({
        period: r.period || '',
        stars: Math.max(1, Math.min(5, Math.round((Number(r.overallRating) || 0) / 20))),
        score: Math.round(Number(r.overallRating) || 0),
        date: this.formatDate(r.createdAt)
      }));
  }

  private formatDate(value?: string): string {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
  }

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
    this.toast.success('Generating and downloading Performance Review PDF report...');
  }

  private triggerToast(msg: string): void {
    this.toastMsg = msg;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3000);
  }
}