import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { PerformanceService, EmployeeService, AuthService } from '../../../core/services';

export interface KpiItem {
  label: string;
  current: number;
  target: number;
  unit: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  trend: number;
  category: string;
}

export interface KpiTrendItem {
  kpi: string;
  category: string;
  oct: string;
  nov: string;
  dec: string;
  trendUp: boolean;
  trendValue: string;
  status: 'ON_TRACK' | 'AT_RISK' | 'EXCEEDED' | 'NEEDS_ATTENTION';
}

export interface MemberKpi {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  completionRate: number;
  productivity: number;
  qualityScore: number;
  status: 'EXCELLENT' | 'GOOD' | 'NEEDS_IMPROVEMENT';
}

@Component({
  selector: 'app-tl-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.scss']
})
export class TlKpiComponent implements OnInit {
  selectedPeriod = 'Q3 2026';
  selectedCategory = 'ALL';

  kpis: KpiItem[] = [];
  trends: KpiTrendItem[] = [];
  memberKpis: MemberKpi[] = [];

  private iconPool = [
    { icon: 'fas fa-check-circle', iconBg: '#dcfce7', iconColor: '#16a34a' },
    { icon: 'fas fa-bolt', iconBg: '#fef3c7', iconColor: '#d97706' },
    { icon: 'fas fa-clock', iconBg: '#dbeafe', iconColor: '#2563eb' },
    { icon: 'fas fa-code', iconBg: '#f3e8ff', iconColor: '#9333ea' },
    { icon: 'fas fa-tachometer-alt', iconBg: '#fee2e2', iconColor: '#dc2626' },
    { icon: 'fas fa-smile', iconBg: '#e0f2fe', iconColor: '#0284c7' },
  ];

  constructor(
    private performanceService: PerformanceService,
    private employeeService: EmployeeService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const user = this.authService.currentUser;

    forkJoin({
      kpis: this.performanceService.getKpis(),
      reviews: this.performanceService.getReviews(),
      employees: this.employeeService.getAllEmployees()
    }).subscribe(({ kpis, reviews, employees }) => {
      const team = user?.employeeId
        ? employees.filter(e => e.reportingManagerId === user.employeeId)
        : employees;

      this.kpis = kpis.map((k, i) => {
        const cfg = this.iconPool[i % this.iconPool.length];
        const pct = k.targetValue ? Math.round((k.currentValue / k.targetValue) * 100) : 0;
        return {
          label: k.title,
          current: k.currentValue,
          target: k.targetValue,
          unit: k.unit || '%',
          icon: cfg.icon,
          iconBg: cfg.iconBg,
          iconColor: cfg.iconColor,
          trend: pct - 80,
          category: (k.status || 'DELIVERY').toUpperCase()
        };
      });

      if (this.kpis.length === 0) {
        this.kpis = [
          { label: 'Task Completion Rate', current: 85, target: 95, unit: '%', icon: 'fas fa-check-circle', iconBg: '#dcfce7', iconColor: '#16a34a', trend: 5, category: 'DELIVERY' },
          { label: 'Team Productivity Score', current: 82, target: 90, unit: '%', icon: 'fas fa-bolt', iconBg: '#fef3c7', iconColor: '#d97706', trend: 3, category: 'EFFICIENCY' },
        ];
      }

      this.trends = this.kpis.map(k => {
        const v = k.current;
        const prev = v - k.trend;
        const prev2 = prev - Math.floor(Math.random() * 5);
        return {
          kpi: k.label,
          category: k.category,
          oct: prev2 + k.unit,
          nov: prev + k.unit,
          dec: v + k.unit,
          trendUp: k.trend > 0,
          trendValue: (k.trend > 0 ? '+' : '') + k.trend + '%',
          status: v >= k.target ? 'EXCEEDED' : v >= k.target * 0.8 ? 'ON_TRACK' : 'AT_RISK' as any
        };
      });

      const teamIds = new Set(team.map(e => e.id));
      const teamReviews = reviews.filter(r => teamIds.has(r.employeeId));

      this.memberKpis = team.map(e => {
        const rev = teamReviews.find(r => r.employeeId === e.id);
        const rating = rev?.overallRating || 0;
        const pctScore = Math.round(rating * 20);
        return {
          id: e.id,
          name: `${e.firstName} ${e.lastName}`,
          role: e.designation,
          completionRate: pctScore || 85,
          productivity: Math.round((rev?.goalsRating ?? 0) * 20) || 80,
          qualityScore: Math.round((rev?.competencyRating ?? 0) * 20) || 85,
          status: pctScore >= 90 ? 'EXCELLENT' : pctScore >= 70 ? 'GOOD' : 'NEEDS_IMPROVEMENT' as any
        };
      });

      if (this.memberKpis.length === 0) {
        this.memberKpis = [
          { id: '1', name: 'No team members', role: 'N/A', completionRate: 0, productivity: 0, qualityScore: 0, status: 'GOOD' }
        ];
      }
    });
  }

  get overallHealthScore(): number {
    const total = this.kpis.reduce((acc, kpi) => acc + this.getProgressPercent(kpi), 0);
    return Math.round(total / this.kpis.length);
  }

  get exceededCount(): number {
    return this.kpis.filter(k => this.getProgressPercent(k) >= 100).length;
  }

  get atRiskCount(): number {
    return this.kpis.filter(k => this.getProgressPercent(k) < 80).length;
  }

  getProgressPercent(kpi: KpiItem): number {
    if (!kpi.target) return 0;
    return Math.min(Math.round((kpi.current / kpi.target) * 100), 100);
  }

  getProgressColor(pct: number): string {
    if (pct >= 90) return '#16a34a';
    if (pct >= 75) return '#2563eb';
    if (pct >= 60) return '#d97706';
    return '#dc2626';
  }

  getInitial(name: string): string {
    return name ? name.charAt(0).toUpperCase() : 'U';
  }
}
