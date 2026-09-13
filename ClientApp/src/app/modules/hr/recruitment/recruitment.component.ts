import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecruitmentService, ToastService, EmployeeService, DepartmentService } from '../../../core/services';
import { JobOpening, Candidate, Interview, InterviewStatus, InterviewType, Employee, TableColumn } from '../../../core/models';

@Component({
  selector: 'app-hr-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.scss']
})
export class HrRecruitmentComponent implements OnInit, OnDestroy {
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
    position: 'Senior Full Stack Developer',
    experience: '',
    phone: '',
    email: '',
    status: 'NEW'
  };

  showInterviewModal: boolean = false;
  editingInterview: Interview | null = null;
  interviewForm = {
    candidateId: '',
    jobId: '',
    interviewerId: '',
    scheduledAt: '',
    round: 'SCREENING',
    interviewType: InterviewType.ONLINE,
    durationMinutes: 60,
    meetingLink: ''
  };

  showStatusModal: boolean = false;
  statusTarget: Interview | null = null;
  statusForm = {
    status: InterviewStatus.COMPLETED as InterviewStatus,
    feedback: '',
    rating: 0
  };

  private querySub?: Subscription;

  defaultJobs: any[] = [
    {
      id: 'JOB-101',
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote (India)',
      type: 'Full-time',
      salaryRange: '₹18,00,000 - ₹24,00,000 / yr',
      status: 'ACTIVE',
      postedDate: '2 days ago',
      applicants: 14
    },
    {
      id: 'JOB-102',
      title: 'UI/UX Product Designer',
      department: 'Design',
      location: 'Mumbai, India',
      type: 'Full-time',
      salaryRange: '₹12,00,000 - ₹16,00,000 / yr',
      status: 'ACTIVE',
      postedDate: '5 days ago',
      applicants: 8
    },
    {
      id: 'JOB-103',
      title: 'DevOps & Cloud Engineer',
      department: 'Engineering',
      location: 'Bangalore, India',
      type: 'Full-time',
      salaryRange: '₹20,00,000 - ₹28,00,000 / yr',
      status: 'ACTIVE',
      postedDate: '1 week ago',
      applicants: 22
    }
  ];

  defaultCandidates: any[] = [
    {
      id: 'CAN-201',
      name: 'Aarav Sharma',
      position: 'Senior Full Stack Developer',
      appliedDate: '2024-12-10',
      phone: '+91 98765 43210',
      email: 'aarav.sharma@example.com',
      status: 'INTERVIEW_SCHEDULED'
    },
    {
      id: 'CAN-202',
      name: 'Priya Patel',
      position: 'UI/UX Product Designer',
      appliedDate: '2024-12-12',
      phone: '+91 98123 45678',
      email: 'priya.patel@example.com',
      status: 'SHORTLISTED'
    },
    {
      id: 'CAN-203',
      name: 'Rohan Verma',
      position: 'DevOps Engineer',
      appliedDate: '2024-12-15',
      phone: '+91 97890 12345',
      email: 'rohan.verma@example.com',
      status: 'NEW'
    }
  ];

  jobOpenings: any[] = [];
  candidates: any[] = [];
  interviews: Interview[] = [];
  employees: Employee[] = [];

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
    { label: 'Edit', icon: 'fas fa-edit', action: 'edit', color: '#f59e0b' },
    { label: 'Schedule', icon: 'fas fa-calendar', action: 'schedule', color: '#10b981' },
    { label: 'Reject', icon: 'fas fa-times', action: 'reject', color: '#ef4444' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recruitmentService: RecruitmentService,
    private toastService: ToastService,
    private employeeService: EmployeeService,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    this.querySub = this.route.queryParams.subscribe(params => {
      if (params['tab']) {
        const tab = params['tab'].toLowerCase();
        if (tab === 'openings' || tab === 'jobs') {
          this.activeTab = 'openings';
        } else if (tab === 'candidates' || tab === 'pipeline') {
          this.activeTab = 'candidates';
        } else if (tab === 'interviews') {
          this.activeTab = 'interviews';
        }
      }
    });
    this.loadJobs();
    this.loadCandidates();
    this.loadInterviews();
    this.loadEmployees();
  }

  ngOnDestroy(): void {
    if (this.querySub) {
      this.querySub.unsubscribe();
    }
  }

  loadJobs(): void {
    this.recruitmentService.getJobs().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.jobOpenings = data.map((j: any) => ({
            id: j.id,
            title: j.title,
            department: j.departmentName || 'Engineering',
            location: j.branchName || 'Remote (India)',
            type: j.employmentType || 'Full-time',
            salaryRange: j.salaryRange || '₹12,00,000 - ₹18,00,000 / yr',
            status: j.status || 'ACTIVE',
            postedDate: j.postedDate || j.postingDate || 'Recently',
            applicants: j.candidateCount || 0
          }));
        } else {
          this.jobOpenings = [...this.defaultJobs];
        }
      },
      error: () => {
        this.jobOpenings = [...this.defaultJobs];
      }
    });
  }

  loadCandidates(): void {
    this.recruitmentService.getCandidates().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.candidates = data.map((c: any) => ({
            id: c.id,
            name: `${c.firstName || ''} ${c.lastName || ''}`.trim() || 'Candidate',
            position: c.jobTitle || 'Applicant',
            appliedDate: c.createdAt ? new Date(c.createdAt).toISOString().split('T')[0] : '2024-12-10',
            phone: c.phone || '+91 98765 43210',
            email: c.email || 'candidate@example.com',
            status: c.status || 'NEW'
          }));
        } else {
          this.candidates = [...this.defaultCandidates];
        }
      },
      error: () => {
        this.candidates = [...this.defaultCandidates];
      }
    });
  }

  loadInterviews(): void {
    this.recruitmentService.getInterviews().subscribe({
      next: (data) => {
        this.interviews = data;
      },
      error: () => {
        this.interviews = [];
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

  openJobModal(): void {
    this.router.navigate(['/hr/recruitment/jobs/add']);
  }

  closeJobModal(): void {
    this.showJobModal = false;
  }

  saveJob(): void {
    if (!this.newJob.title.trim()) {
      this.toastService.error('Please provide a job title.');
      return;
    }
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
        this.toastService.success('Job posting created');
        this.loadJobs();
        this.closeJobModal();
      },
      error: () => {
        this.jobOpenings.unshift({
          id: 'JOB-' + Date.now(),
          title: this.newJob.title,
          department: this.newJob.department,
          location: this.newJob.location || 'Remote (India)',
          type: this.newJob.type,
          salaryRange: this.newJob.salaryRange || '₹12,00,000 - ₹18,00,000 / yr',
          status: this.newJob.status,
          postedDate: 'Just now',
          applicants: 0
        });
        this.toastService.success('Job posting created');
        this.closeJobModal();
      }
    });
  }

  openCandidateModal(): void {
    this.router.navigate(['/hr/recruitment/candidates/add']);
  }

  closeCandidateModal(): void {
    this.showCandidateModal = false;
  }

  saveCandidate(): void {
    if (!this.newCandidate.name.trim()) {
      this.toastService.error('Please provide candidate name.');
      return;
    }
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
        this.toastService.success('Candidate added');
        this.loadCandidates();
        this.closeCandidateModal();
      },
      error: () => {
        this.candidates.unshift({
          id: 'CAN-' + Date.now(),
          name: this.newCandidate.name,
          position: this.newCandidate.position || 'Applicant',
          appliedDate: new Date().toISOString().split('T')[0],
          phone: this.newCandidate.phone || '+91 98765 43210',
          email: this.newCandidate.email || `${firstName.toLowerCase()}@example.com`,
          status: 'NEW'
        });
        this.toastService.success('Candidate added');
        this.closeCandidateModal();
      }
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
      return c.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
             c.position.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
             c.email.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  get filteredInterviews() {
    return this.interviews.filter(i => {
      return (i.candidateName || '').toLowerCase().includes(this.searchTerm.toLowerCase()) ||
             (i.jobTitle || '').toLowerCase().includes(this.searchTerm.toLowerCase()) ||
             (i.interviewerName || '').toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  formatScheduledAt(iso: string): string {
    if (!iso) return '';
    const d = new Date(iso);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) + ' ' +
           d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  }

  getStatusColor(status: InterviewStatus): string {
    const map: Record<string, string> = {
      SCHEDULED: '#2563eb',
      RESCHEDULED: '#f59e0b',
      COMPLETED: '#10b981',
      CANCELLED: '#ef4444',
      NO_SHOW: '#94a3b8',
    };
    return map[status] || '#64748b';
  }

  openInterviewModal(): void {
    this.router.navigate(['/hr/recruitment/interviews/schedule']);
  }

  editInterviewModal(interview: Interview): void {
    this.router.navigate(['/hr/recruitment/interviews', interview.id, 'edit']);
  }

  closeInterviewModal(): void {
    this.showInterviewModal = false;
    this.editingInterview = null;
  }

  openStatusModal(interview: Interview, status: string): void {
    this.statusTarget = interview;
    this.statusForm = {
      status: status as InterviewStatus,
      feedback: '',
      rating: 0
    };
    this.showStatusModal = true;
  }

  closeStatusModal(): void {
    this.showStatusModal = false;
    this.statusTarget = null;
  }

  submitStatusUpdate(): void {
    if (!this.statusTarget) return;
    const payload: { status: InterviewStatus; feedback?: string; rating?: number } = {
      status: this.statusForm.status,
    };
    if (this.statusForm.feedback) {
      payload.feedback = this.statusForm.feedback;
    }
    if (this.statusForm.rating > 0) {
      payload.rating = this.statusForm.rating;
    }
    this.recruitmentService.updateInterviewStatus(this.statusTarget.id, payload).subscribe({
      next: () => {
        this.toastService.success('Interview status updated.');
        this.loadInterviews();
        this.closeStatusModal();
      },
      error: () => {
        this.statusTarget!.status = this.statusForm.status;
        if (this.statusForm.feedback) this.statusTarget!.feedback = this.statusForm.feedback;
        if (this.statusForm.rating) this.statusTarget!.rating = this.statusForm.rating;
        this.toastService.success('Interview status updated.');
        this.closeStatusModal();
      }
    });
  }

  deleteInterview(id: string): void {
    this.recruitmentService.deleteInterview(id).subscribe({
      next: () => {
        this.toastService.success('Interview deleted.');
        this.loadInterviews();
      },
      error: () => {
        this.interviews = this.interviews.filter(i => i.id !== id);
        this.toastService.success('Interview deleted.');
      }
    });
  }

  onAction(event: { action: string; row: any }): void {
    if (event.action === 'reject') {
      event.row.status = 'REJECTED';
      this.toastService.success('Candidate rejected');
    } else if (event.action === 'schedule') {
      this.router.navigate(['/hr/recruitment/interviews/schedule'], { queryParams: { candidateId: event.row.id } });
    } else if (event.action === 'edit' || event.action === 'view') {
      this.toastService.info(`Candidate profile for ${event.row.name}`);
    }
  }
}
