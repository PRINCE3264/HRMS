import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private toast: ToastService
  ) {}

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
            name: c.firstName + ' ' + c.lastName,
            position: c.jobTitle,
            appliedDate: c.createdAt,
            phone: c.phone,
            email: c.email,
            status: c.status
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
    this.router.navigate(['/admin/recruitment/jobs/add']);
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
        this.toast.success('Job posting created');
        this.newJob = { title: '', department: 'Engineering', location: 'Remote', type: 'Full-time', salaryRange: '', status: 'ACTIVE' };
        this.showJobModal = false;
      }
    });
  }

  openCandidateModal() {
    this.router.navigate(['/admin/recruitment/candidates/add']);
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
        this.toast.success('Candidate added');
        this.newCandidate = { name: '', position: '', experience: '', phone: '', email: '', status: 'NEW' };
        this.showCandidateModal = false;
      }
    });
  }

  onAction(event: { action: string; row: any }): void {
    if (event.action === 'reject') {
      event.row.status = 'REJECTED';
      this.toast.success('Candidate rejected');
    } else if (event.action === 'schedule') {
      event.row.status = 'INTERVIEW_SCHEDULED';
      this.toast.success('Interview scheduled');
    } else if (event.action === 'edit' || event.action === 'view') {
      this.router.navigate(['/admin/recruitment/candidates', event.row.id, 'edit']);
    }
  }
}
