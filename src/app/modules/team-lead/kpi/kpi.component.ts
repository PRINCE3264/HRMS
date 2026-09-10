import { Component } from '@angular/core';

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
export class TlKpiComponent {
  selectedPeriod = 'Q3 2026';
  selectedCategory = 'ALL';

  kpis: KpiItem[] = [
    { label: 'Task Completion Rate', current: 85, target: 95, unit: '%', icon: 'fas fa-check-circle', iconBg: '#dcfce7', iconColor: '#16a34a', trend: 5, category: 'DELIVERY' },
    { label: 'Team Productivity Score', current: 82, target: 90, unit: '%', icon: 'fas fa-bolt', iconBg: '#fef3c7', iconColor: '#d97706', trend: 3, category: 'EFFICIENCY' },
    { label: 'On-Time Delivery Rate', current: 78, target: 90, unit: '%', icon: 'fas fa-clock', iconBg: '#dbeafe', iconColor: '#2563eb', trend: -2, category: 'DELIVERY' },
    { label: 'Code & Deliverable Quality', current: 91, target: 85, unit: '/100', icon: 'fas fa-code', iconBg: '#f3e8ff', iconColor: '#9333ea', trend: 4, category: 'QUALITY' },
    { label: 'Sprint Velocity', current: 42, target: 45, unit: 'pts', icon: 'fas fa-tachometer-alt', iconBg: '#fee2e2', iconColor: '#dc2626', trend: 8, category: 'EFFICIENCY' },
    { label: 'Team Satisfaction Index', current: 4.3, target: 4.5, unit: '/5', icon: 'fas fa-smile', iconBg: '#e0f2fe', iconColor: '#0284c7', trend: 0.2, category: 'CULTURE' }
  ];

  trends: KpiTrendItem[] = [
    { kpi: 'Task Completion Rate', category: 'Delivery', oct: '78%', nov: '82%', dec: '85%', trendUp: true, trendValue: '+5%', status: 'ON_TRACK' },
    { kpi: 'Team Productivity', category: 'Efficiency', oct: '75%', nov: '79%', dec: '82%', trendUp: true, trendValue: '+3%', status: 'ON_TRACK' },
    { kpi: 'On-Time Delivery Rate', category: 'Delivery', oct: '85%', nov: '80%', dec: '78%', trendUp: false, trendValue: '-2%', status: 'AT_RISK' },
    { kpi: 'Code Quality Score', category: 'Quality', oct: '82%', nov: '87%', dec: '91%', trendUp: true, trendValue: '+4%', status: 'EXCEEDED' },
    { kpi: 'Sprint Velocity', category: 'Efficiency', oct: '35 pts', nov: '39 pts', dec: '42 pts', trendUp: true, trendValue: '+8%', status: 'ON_TRACK' },
    { kpi: 'Bug Resolution Speed', category: 'Quality', oct: '3.2d', nov: '2.8d', dec: '2.1d', trendUp: true, trendValue: '-25%', status: 'EXCEEDED' }
  ];

  memberKpis: MemberKpi[] = [
    { id: '1', name: 'PRINCE VIDYARTHI', role: 'Lead Software Engineer', completionRate: 94, productivity: 91, qualityScore: 95, status: 'EXCELLENT' },
    { id: '2', name: 'Jigar Chovatiya', role: 'Full Stack Engineer', completionRate: 88, productivity: 85, qualityScore: 90, status: 'EXCELLENT' },
    { id: '3', name: 'Ananya Roy', role: 'UI/UX Designer', completionRate: 82, productivity: 80, qualityScore: 88, status: 'GOOD' },
    { id: '4', name: 'Gaurav Modi', role: 'Frontend Engineer', completionRate: 75, productivity: 78, qualityScore: 82, status: 'GOOD' },
    { id: '5', name: 'Priya Patel', role: 'QA Engineer', completionRate: 68, productivity: 72, qualityScore: 78, status: 'NEEDS_IMPROVEMENT' }
  ];

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

