import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecruitmentService, ToastService } from '../../../core/services';
import { TableColumn } from '../../../core/models';

@Component({
  selector: 'app-admin-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.scss']
})
export class AdminRecruitmentComponent implements OnInit, OnDestroy {
  activeTab: string = 'openings';
  searchTerm: string = '';
  statusFilter: string = 'ALL';

  showJobModal: boolean = false;
  newJob = {
    title: '',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    salaryRange: '',
    status: 'ACTIVE'
  };

  showCandidateModal: boolean = false;
  newCandidate = {
    name: '',
    position: '',
    experience: '',
    phone: '',
    email: '',
    status: 'NEW'
  };

  private querySub?: Subscription;

  jobOpenings: any[] = [];

  candidateColumns: TableColumn[] = [
    { key: 'name', label: 'Candidate', sortable: true },
    { key: 'position', label: 'Position', sortable: true },
    { key: 'appliedDate', label: 'Applied', type: 'date', sortable: true },
    { key: 'phone', label: 'Phone' },
    { key: 'email', label: 'Email' },
    { key: 'status', label: 'Status', type: 'status' }
  ];

  candidateActions = [
    { label: 'View', icon: 'fas fa-eye', action: 'view', color: '#4461f6' },
    { label: 'Schedule', icon: 'fas fa-calendar', action: 'schedule', color: '#10b981' },
    { label: 'Reject', icon: 'fas fa-times', action: 'reject', color: '#ef4444' }
  ];

  candidates: any[] = [];

  constructor(private route: ActivatedRoute, private recruitmentService: RecruitmentService, private toast: ToastService) {}

  ngOnInit(): void {
    this.querySub = this.route.queryParams.subscribe(params => {
      if (params['tab']) {
        const tab = params['tab'].toLowerCase();
        if (tab === 'openings' || tab === 'jobs') {
          this.activeTab = 'openings';
        } else if (tab === 'candidates' || tab === 'pipeline') {
          this.activeTab = 'candidates';
        }
      }
    });
    this.loadJobs();
    this.loadCandidates();
  }

  ngOnDestroy(): void {
    if (this.querySub) {
      this.querySub.unsubscribe();
    }
  }

  loadJobs(): void {
    this.recruitmentService.getJobs().subscribe({
      next: (data) => this.jobOpenings = data.map((j: any) => ({
        id: j.id,
        title: j.title,
        department: j.departmentName,
        location: j.branchName || '',
        type: j.employmentType,
        salaryRange: j.salaryRange || '',
        status: j.status,
        postedDate: j.postedDate || j.postingDate || '',
        applicants: j.candidateCount || 0
      })),
      error: () => this.toast.error('Failed to load job openings')
    });
  }

  loadCandidates(): void {
    this.recruitmentService.getCandidates().subscribe({
      next: (data) => this.candidates = data.map((c: any) => ({
        id: c.id,
        name: c.firstName + ' ' + c.lastName,
        position: c.jobTitle,
        appliedDate: c.createdAt,
        phone: c.phone,
        email: c.email,
        status: c.status
      })),
      error: () => this.toast.error('Failed to load candidates')
    });
  }

  get filteredJobOpenings() {
    return this.jobOpenings.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            job.department.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            job.location.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesStatus = this.statusFilter === 'ALL' || job.status === this.statusFilter;
      return matchesSearch && matchesStatus;
    });
  }

  get filteredCandidates() {
    return this.candidates.filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            c.position.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            c.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesSearch;
    });
  }

  openJobModal() {
    this.showJobModal = true;
  }

  closeJobModal() {
    this.showJobModal = false;
  }

  saveJob() {
    if (!this.newJob.title) return;
    this.recruitmentService.createJob({
      title: this.newJob.title,
      departmentName: this.newJob.department,
      employmentType: this.newJob.type,
      salaryRange: this.newJob.salaryRange,
      description: this.newJob.title,
      requirements: '',
      vacancies: 1,
      status: this.newJob.status
    } as any).subscribe({
      next: () => {
        this.toast.success('Job posting created');
        this.loadJobs();
        this.newJob = { title: '', department: 'Engineering', location: 'Remote', type: 'Full-time', salaryRange: '', status: 'ACTIVE' };
        this.showJobModal = false;
      },
      error: () => this.toast.error('Failed to create job posting')
    });
  }

  openCandidateModal() {
    this.showCandidateModal = true;
  }

  closeCandidateModal() {
    this.showCandidateModal = false;
  }

  saveCandidate() {
    if (!this.newCandidate.name) return;
    const nameParts = this.newCandidate.name.split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    this.recruitmentService.createCandidate({
      firstName,
      lastName,
      email: this.newCandidate.email,
      phone: this.newCandidate.phone,
      jobTitle: this.newCandidate.position,
      status: 'NEW'
    } as any).subscribe({
      next: () => {
        this.toast.success('Candidate added');
        this.loadCandidates();
        this.newCandidate = { name: '', position: '', experience: '', phone: '', email: '', status: 'NEW' };
        this.showCandidateModal = false;
      },
      error: () => this.toast.error('Failed to add candidate')
    });
  }

  onAction(event: { action: string; row: any }): void {
    if (event.action === 'reject') {
      this.recruitmentService.updateCandidate(event.row.id, 'REJECTED' as any).subscribe({
        next: () => { this.toast.success('Candidate rejected'); this.loadCandidates(); },
        error: () => this.toast.error('Failed to reject candidate')
      });
    } else if (event.action === 'schedule') {
      this.recruitmentService.updateCandidate(event.row.id, 'INTERVIEW_SCHEDULED' as any).subscribe({
        next: () => { this.toast.success('Interview scheduled'); this.loadCandidates(); },
        error: () => this.toast.error('Failed to schedule interview')
      });
    }
  }
}
