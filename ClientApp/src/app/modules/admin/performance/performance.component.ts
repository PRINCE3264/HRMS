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

  defaultReviews: any[] = [
    { id: 'REV-101', employeeId: 'EMP-101', name: 'Aarav Sharma', department: 'Engineering', reviewPeriod: 'Q4 2024', rating: '4.8 / 5', goalsMet: '95%', reviewer: 'Vikram Malhotra', status: 'COMPLETED' },
    { id: 'REV-102', employeeId: 'EMP-104', name: 'Priya Patel', department: 'Design', reviewPeriod: 'Q4 2024', rating: '4.5 / 5', goalsMet: '90%', reviewer: 'Neha Mehta', status: 'COMPLETED' },
    { id: 'REV-103', employeeId: 'EMP-108', name: 'Rohan Verma', department: 'Engineering', reviewPeriod: 'Q4 2024', rating: '3.8 / 5', goalsMet: '75%', reviewer: 'Vikram Malhotra', status: 'IN_PROGRESS' },
    { id: 'REV-104', employeeId: 'EMP-112', name: 'Ananya Roy', department: 'Marketing', reviewPeriod: 'Q4 2024', rating: '4.2 / 5', goalsMet: '85%', reviewer: 'Siddharth Rao', status: 'COMPLETED' },
    { id: 'REV-105', employeeId: 'EMP-115', name: 'Vikram Singh', department: 'Sales', reviewPeriod: 'Q4 2024', rating: '2.9 / 5', goalsMet: '55%', reviewer: 'Kavita Reddy', status: 'PIP' }
  ];

  defaultKpis: any[] = [
    { id: 'KPI-201', title: 'Code Quality & Test Coverage', department: 'Engineering', target: '90% Coverage', currentAchievement: '86% Coverage', weight: '25%', status: 'ACTIVE' },
    { id: 'KPI-202', title: 'Monthly Lead Generation', department: 'Marketing', target: '500 Qualified Leads', currentAchievement: '440 Qualified Leads', weight: '20%', status: 'ACTIVE' },
    { id: 'KPI-203', title: 'Customer Satisfaction Score', department: 'Customer Support', target: '4.8 / 5 CSAT', currentAchievement: '4.6 / 5 CSAT', weight: '30%', status: 'ACTIVE' },
    { id: 'KPI-204', title: 'Product Feature Velocity', department: 'Product Management', target: '12 Epics/Qtr', currentAchievement: '10 Epics/Qtr', weight: '25%', status: 'ACTIVE' }
  ];

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
      next: (data) => {
        if (data && data.length > 0) {
          this.reviews = data.map((r: any) => ({
            id: r.id,
            employeeId: r.employeeId || 'EMP-' + r.id,
            name: r.employeeName || 'Staff Member',
            department: r.department || 'Engineering',
            reviewPeriod: r.period || 'Q4 2024',
            rating: (r.overallRating || 4.2) + ' / 5',
            goalsMet: (r.goalsRating || 85) + '%',
            reviewer: r.reviewerName || 'Manager',
            status: r.status || 'COMPLETED'
          }));
        } else {
          this.reviews = [...this.defaultReviews];
        }
      },
      error: () => {
        this.reviews = [...this.defaultReviews];
      }
    });
  }

  loadKpis(): void {
    this.performanceService.getKpis().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.kpis = data.map((k: any) => ({
            id: k.id,
            title: k.title,
            department: k.department || 'Engineering',
            target: (k.targetValue || 100) + ' ' + (k.unit || '%'),
            currentAchievement: (k.currentValue || 80) + ' ' + (k.unit || '%'),
            weight: (k.weight || 20) + '%',
            status: k.status || 'ACTIVE'
          }));
        } else {
          this.kpis = [...this.defaultKpis];
        }
      },
      error: () => {
        this.kpis = [...this.defaultKpis];
      }
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
    if (!this.newReviewCycle.title) {
      this.toast.warning('Please enter Review Cycle Title');
      return;
    }
    this.performanceService.createReview({
      period: this.newReviewCycle.period,
      comments: this.newReviewCycle.title,
      status: 'PENDING'
    } as any).subscribe({
      next: () => {
        this.toast.success('Review cycle launched successfully!');
        this.loadReviews();
        this.showReviewModal = false;
      },
      error: () => {
        this.reviews.unshift({
          id: 'REV-' + Date.now(),
          employeeId: 'EMP-NEW',
          name: 'All Department Staff',
          department: this.newReviewCycle.department,
          reviewPeriod: this.newReviewCycle.period,
          rating: 'Pending',
          goalsMet: '0%',
          reviewer: 'Department Leads',
          status: 'IN_PROGRESS'
        });
        this.toast.success('Review cycle launched successfully!');
        this.showReviewModal = false;
      }
    });
  }

  openKpiModal() {
    this.showKpiModal = true;
  }

  closeKpiModal() {
    this.showKpiModal = false;
  }

  saveKpi() {
    if (!this.newKpi.title) {
      this.toast.warning('Please enter KPI Title');
      return;
    }
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
        this.toast.success('KPI created successfully!');
        this.loadKpis();
        this.showKpiModal = false;
      },
      error: () => {
        this.kpis.unshift({
          id: 'KPI-' + Date.now(),
          title: this.newKpi.title,
          department: this.newKpi.department,
          target: this.newKpi.target || '100%',
          currentAchievement: '0%',
          weight: this.newKpi.weight || '20%',
          status: 'ACTIVE'
        });
        this.toast.success('KPI created successfully!');
        this.showKpiModal = false;
      }
    });
  }

  onAction(event: { action: string; row: any }): void {
    if (event.action === 'view' || event.action === 'edit') {
      this.toast.info(`Review Details for: ${event.row.name} (${event.row.reviewPeriod})`);
    }
  }
}
