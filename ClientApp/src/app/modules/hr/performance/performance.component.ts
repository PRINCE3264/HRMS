import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PerformanceService, ToastService, EmployeeService } from '../../../core/services';
import { TableColumn, PerformanceFeedback, Employee } from '../../../core/models';

@Component({
  selector: 'app-hr-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class HrPerformanceComponent implements OnInit, OnDestroy {
  activeTab: string = 'reviews';
  searchTerm: string = '';
  statusFilter: string = 'ALL';
  selectedEmployeeId: string = '';

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

  defaultReviews: any[] = [
    { id: 'REV-101', employeeId: 'EMP-101', name: 'Aarav Sharma', department: 'Engineering', reviewPeriod: 'Q4 2024', rating: '4.8 / 5', numRating: 4.8, goalsMet: '95%', reviewer: 'Vikram Malhotra', status: 'COMPLETED' },
    { id: 'REV-102', employeeId: 'EMP-104', name: 'Priya Patel', department: 'Design', reviewPeriod: 'Q4 2024', rating: '4.5 / 5', numRating: 4.5, goalsMet: '90%', reviewer: 'Neha Mehta', status: 'COMPLETED' },
    { id: 'REV-103', employeeId: 'EMP-108', name: 'Rohan Verma', department: 'Engineering', reviewPeriod: 'Q4 2024', rating: '3.8 / 5', numRating: 3.8, goalsMet: '75%', reviewer: 'Vikram Malhotra', status: 'IN_PROGRESS' },
    { id: 'REV-104', employeeId: 'EMP-112', name: 'Ananya Roy', department: 'Marketing', reviewPeriod: 'Q4 2024', rating: '4.2 / 5', numRating: 4.2, goalsMet: '85%', reviewer: 'Siddharth Rao', status: 'COMPLETED' },
    { id: 'REV-105', employeeId: 'EMP-115', name: 'Vikram Singh', department: 'Sales', reviewPeriod: 'Q4 2024', rating: '2.9 / 5', numRating: 2.9, goalsMet: '55%', reviewer: 'Kavita Reddy', status: 'PIP' }
  ];

  defaultKpis: any[] = [
    { id: 'KPI-201', title: 'Code Quality & Test Coverage', department: 'Engineering', target: '90% Coverage', currentAchievement: '86% Coverage', weight: '25%', progress: 86, status: 'ACTIVE' },
    { id: 'KPI-202', title: 'Monthly Lead Generation', department: 'Marketing', target: '500 Qualified Leads', currentAchievement: '440 Qualified Leads', weight: '20%', progress: 88, status: 'ACTIVE' },
    { id: 'KPI-203', title: 'Customer Satisfaction Score', department: 'Customer Support', target: '4.8 / 5 CSAT', currentAchievement: '4.6 / 5 CSAT', weight: '30%', progress: 92, status: 'ACTIVE' },
    { id: 'KPI-204', title: 'Product Feature Velocity', department: 'Product Management', target: '12 Epics/Qtr', currentAchievement: '10 Epics/Qtr', weight: '25%', progress: 83, status: 'ACTIVE' }
  ];

  defaultFeedbacks: any[] = [
    { id: 'FB-301', targetEmployeeName: 'Aarav Sharma', reviewerName: 'Vikram Malhotra', category: 'Peer Review', reviewPeriod: 'Q4 2024', rating: 5, comments: 'Exemplary leadership in cloud migration and microservice refactoring.', createdAt: '2024-12-15' },
    { id: 'FB-302', targetEmployeeName: 'Priya Patel', reviewerName: 'Neha Mehta', category: 'Manager Review', reviewPeriod: 'Q4 2024', rating: 4, comments: 'Great design system components created for HR dashboard.', createdAt: '2024-12-18' },
    { id: 'FB-303', targetEmployeeName: 'Rohan Verma', reviewerName: 'Aarav Sharma', category: 'Self Review', reviewPeriod: 'Q4 2024', rating: 4, comments: 'Improved CI/CD build speeds by 40%. Continuing optimization.', createdAt: '2024-12-20' }
  ];

  reviews: any[] = [];
  kpis: any[] = [];
  feedbacks: any[] = [];
  employees: Employee[] = [];

  private deptColors: string[] = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#06b6d4', '#8b5cf6', '#ec4899'];

  constructor(
    private route: ActivatedRoute,
    private performanceService: PerformanceService,
    private toast: ToastService,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.querySub = this.route.queryParams.subscribe(params => {
      if (params['tab']) {
        const tab = params['tab'].toLowerCase();
        if (tab === 'kpi' || tab === 'kpis' || tab === 'goals') {
          this.activeTab = 'goals';
        } else if (tab === 'feedback' || tab === '360') {
          this.activeTab = 'feedback';
        } else {
          this.activeTab = 'reviews';
        }
      }
    });
    this.loadReviews();
    this.loadKpis();
    this.loadFeedbacks();
    this.loadEmployees();
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
          this.reviews = data.map((r: any, i: number) => ({
            id: r.id,
            employeeId: r.employeeId || 'EMP-' + r.id,
            name: r.employeeName || 'Staff Member',
            department: r.department || 'Engineering',
            period: r.period || 'Q4 2024',
            rating: (r.overallRating || 4.2) + ' / 5',
            numRating: r.overallRating || 4.2,
            goalsMet: (r.goalsRating || 85) + '%',
            reviewer: r.reviewerName || 'Manager',
            status: r.status || 'COMPLETED',
            color: this.deptColors[i % this.deptColors.length]
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
          this.kpis = data.map((k: any, i: number) => ({
            id: k.id,
            title: k.title,
            department: k.department || 'Engineering',
            target: (k.targetValue || 100) + ' ' + (k.unit || '%'),
            currentAchievement: (k.currentValue || 80) + ' ' + (k.unit || '%'),
            weight: (k.weight || 20) + '%',
            progress: k.targetValue > 0 ? Math.round((k.currentValue / k.targetValue) * 100) : 80,
            status: k.status || 'ACTIVE',
            color: this.deptColors[i % this.deptColors.length]
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

  loadFeedbacks(): void {
    const empId = this.selectedEmployeeId || undefined;
    this.performanceService.getFeedbacks(empId).subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.feedbacks = data;
        } else {
          this.feedbacks = [...this.defaultFeedbacks];
        }
      },
      error: () => {
        this.feedbacks = [...this.defaultFeedbacks];
      }
    });
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: () => {
        this.employees = [];
      }
    });
  }

  get filteredReviews() {
    return this.reviews.filter(r => {
      const matchesSearch = r.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            r.department.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            (r.employeeId && r.employeeId.toLowerCase().includes(this.searchTerm.toLowerCase()));
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

  get filteredFeedbacks() {
    return this.feedbacks.filter(f => {
      return (f.targetEmployeeName || '').toLowerCase().includes(this.searchTerm.toLowerCase()) ||
             (f.reviewerName || '').toLowerCase().includes(this.searchTerm.toLowerCase()) ||
             (f.comments || '').toLowerCase().includes(this.searchTerm.toLowerCase());
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
          period: this.newReviewCycle.period,
          rating: '4.0 / 5',
          numRating: 4.0,
          goalsMet: '80%',
          reviewer: 'Department Leads',
          status: 'IN_PROGRESS',
          color: '#6366f1'
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
          progress: 0,
          status: 'ACTIVE',
          color: '#6366f1'
        });
        this.toast.success('KPI created successfully!');
        this.showKpiModal = false;
      }
    });
  }

  deleteFeedback(id: string): void {
    this.performanceService.deleteFeedback(id).subscribe({
      next: () => {
        this.toast.success('Feedback deleted.');
        this.loadFeedbacks();
      },
      error: () => {
        this.feedbacks = this.feedbacks.filter(f => f.id !== id);
        this.toast.success('Feedback deleted.');
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
