import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PerformanceService, ToastService } from '../../../core/services';
import { TableColumn } from '../../../core/models';

@Component({
  selector: 'app-admin-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class AdminPerformanceComponent implements OnInit, OnDestroy {
  activeTab: string = 'reviews';
  searchTerm: string = '';
  statusFilter: string = 'ALL';

  showReviewModal: boolean = false;
  showKpiModal: boolean = false;

  newReviewCycle = {
    title: '',
    period: 'Q1 2025',
    department: 'Engineering',
    deadline: ''
  };

  newKpi = {
    title: '',
    department: 'Engineering',
    target: '100%',
    weight: '20%'
  };

  private querySub?: Subscription;

  reviewColumns: TableColumn[] = [
    { key: 'employeeId', label: 'ID', sortable: true, width: '90px' },
    { key: 'name', label: 'Employee', sortable: true },
    { key: 'department', label: 'Department', sortable: true },
    { key: 'reviewPeriod', label: 'Review Period', sortable: true },
    { key: 'rating', label: 'Rating', sortable: true },
    { key: 'goalsMet', label: 'Goals Met', sortable: true },
    { key: 'reviewer', label: 'Reviewer' },
    { key: 'status', label: 'Status', type: 'status' }
  ];

  reviewActions = [
    { label: 'View', icon: 'fas fa-eye', action: 'view', color: '#4461f6' },
    { label: 'Edit', icon: 'fas fa-edit', action: 'edit', color: '#f59e0b' }
  ];

  reviews: any[] = [];

  kpiColumns: TableColumn[] = [
    { key: 'title', label: 'KPI Title', sortable: true },
    { key: 'department', label: 'Department', sortable: true },
    { key: 'target', label: 'Target', sortable: true },
    { key: 'currentAchievement', label: 'Current Progress', sortable: true },
    { key: 'weight', label: 'Weight', sortable: true },
    { key: 'status', label: 'Status', type: 'status' }
  ];

  kpis: any[] = [];

  constructor(private route: ActivatedRoute, private performanceService: PerformanceService, private toast: ToastService) {}

  ngOnInit(): void {
    this.querySub = this.route.queryParams.subscribe(params => {
      if (params['tab']) {
        const tab = params['tab'].toLowerCase();
        if (tab === 'kpi' || tab === 'kpis') {
          this.activeTab = 'kpi';
        } else {
          this.activeTab = 'reviews';
        }
      }
    });
    this.loadReviews();
    this.loadKpis();
  }

  ngOnDestroy(): void {
    if (this.querySub) {
      this.querySub.unsubscribe();
    }
  }

  loadReviews(): void {
    this.performanceService.getReviews().subscribe({
      next: (data) => this.reviews = data.map((r: any) => ({
        id: r.id,
        employeeId: r.employeeId,
        name: r.employeeName,
        department: '',
        reviewPeriod: r.period,
        rating: r.overallRating + '/5',
        goalsMet: r.goalsRating + '%',
        reviewer: r.reviewerName,
        status: r.status
      })),
      error: () => this.toast.error('Failed to load reviews')
    });
  }

  loadKpis(): void {
    this.performanceService.getKpis().subscribe({
      next: (data) => this.kpis = data.map((k: any) => ({
        id: k.id,
        title: k.title,
        department: '',
        target: k.targetValue + ' ' + (k.unit || ''),
        currentAchievement: k.currentValue + ' ' + (k.unit || ''),
        weight: k.weight + '%',
        status: k.status
      })),
      error: () => this.toast.error('Failed to load KPIs')
    });
  }

  get filteredReviews() {
    return this.reviews.filter(r => {
      const matchesSearch = r.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            r.department.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            r.employeeId.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesStatus = this.statusFilter === 'ALL' || r.status === this.statusFilter;
      return matchesSearch && matchesStatus;
    });
  }

  get filteredKpis() {
    return this.kpis.filter(k => {
      return k.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
             k.department.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  openReviewModal() {
    this.showReviewModal = true;
  }

  closeReviewModal() {
    this.showReviewModal = false;
  }

  saveReviewCycle() {
    if (!this.newReviewCycle.title) return;
    this.performanceService.createReview({
      period: this.newReviewCycle.period,
      comments: this.newReviewCycle.title,
      status: 'PENDING'
    } as any).subscribe({
      next: () => {
        this.toast.success('Review cycle created');
        this.loadReviews();
        this.showReviewModal = false;
      },
      error: () => this.toast.error('Failed to create review cycle')
    });
  }

  openKpiModal() {
    this.showKpiModal = true;
  }

  closeKpiModal() {
    this.showKpiModal = false;
  }

  saveKpi() {
    if (!this.newKpi.title) return;
    this.performanceService.createKpi({
      title: this.newKpi.title,
      description: this.newKpi.title,
      targetValue: 100,
      currentValue: 0,
      unit: '%',
      weight: parseInt(this.newKpi.weight, 10) || 20,
      status: 'ACTIVE'
    } as any).subscribe({
      next: () => {
        this.toast.success('KPI created');
        this.loadKpis();
        this.showKpiModal = false;
      },
      error: () => this.toast.error('Failed to create KPI')
    });
  }

  onAction(event: { action: string; row: any }): void {
    console.log(event.action, event.row);
  }
}
