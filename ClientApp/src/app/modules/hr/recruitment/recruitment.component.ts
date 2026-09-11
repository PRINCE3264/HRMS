import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecruitmentService, ToastService, EmployeeService, DepartmentService } from '../../../core/services';
import { JobOpening, Candidate, Interview, InterviewStatus, InterviewType, Employee } from '../../../core/models';

@Component({
  selector: 'app-hr-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.scss']
})
export class HrRecruitmentComponent implements OnInit, OnDestroy {
  activeTab: string = 'jobs';
  searchTerm: string = '';
  selectedStage: string = 'ALL';

  showJobModal: boolean = false;
  newJob = {
    title: '',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    salary: '$90K - $120K',
    status: 'Open'
  };

  showCandidateModal: boolean = false;
  newCandidate = {
    name: '',
    email: '',
    position: 'Senior Frontend Developer',
    stage: 'Screening',
    rating: 4
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

  jobPostings: any[] = [];
  candidates: any[] = [];
  interviews: Interview[] = [];
  employees: Employee[] = [];

  colorPool = ['#4461f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#14b8a6'];

  constructor(
    private route: ActivatedRoute,
    private recruitmentService: RecruitmentService,
    private toastService: ToastService,
    private employeeService: EmployeeService,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    this.querySub = this.route.queryParams.subscribe(params => {
      if (params['tab']) {
        const tab = params['tab'].toLowerCase();
        if (tab === 'jobs' || tab === 'openings') {
          this.activeTab = 'jobs';
        } else if (tab === 'pipeline' || tab === 'candidates') {
          this.activeTab = 'pipeline';
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
        this.jobPostings = data.map((j, i) => ({
          id: j.id,
          title: j.title,
          department: j.departmentName,
          location: j.branchName || 'Remote',
          type: j.employmentType,
          salary: j.salaryRange || 'TBD',
          status: j.status,
          applicantCount: j.vacancies || 0,
          posted: j.postedDate ? new Date(j.postedDate).toLocaleDateString() : '',
          colorDots: this.colorPool.slice(0, Math.min(4, (j.vacancies || 0) + 1)),
        }));
      }
    });
  }

  loadCandidates(): void {
    this.recruitmentService.getCandidates().subscribe({
      next: (data) => {
        this.candidates = data.map((c, i) => ({
          id: c.id,
          name: `${c.firstName} ${c.lastName}`,
          email: c.email,
          position: c.jobTitle,
          stage: this.mapCandidateStatus(c.status),
          rating: c.rating || 3,
          appliedDate: new Date(c.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          color: this.colorPool[i % this.colorPool.length],
        }));
      }
    });
  }

  loadInterviews(): void {
    this.recruitmentService.getInterviews().subscribe({
      next: (data) => {
        this.interviews = data;
      }
    });
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        this.employees = data;
      }
    });
  }

  openJobModal(): void {
    this.newJob = {
      title: '',
      department: '',
      location: 'Remote',
      type: 'Full-time',
      salary: '',
      status: 'Open'
    };
    this.showJobModal = true;
  }

  closeJobModal(): void {
    this.showJobModal = false;
  }

  saveJob(): void {
    if (!this.newJob.title.trim()) {
      this.toastService.error('Please provide a job title.');
      return;
    }
    this.departmentService.getDepartments().subscribe({
      next: (depts) => {
        const dept = depts.find(d => d.name === this.newJob.department) || depts[0];
        if (!dept) {
          this.toastService.error('No department found for this job posting.');
          return;
        }
        this.departmentService.getDesignations().subscribe({
          next: (designations) => {
            this.departmentService.getBranches().subscribe({
              next: (branches) => {
                const payload: Partial<JobOpening> = {
                  title: this.newJob.title,
                  departmentId: dept.id,
                  designationId: designations.length ? designations[0].id : dept.id,
                  branchId: branches.length ? branches[0].id : dept.id,
                  employmentType: this.newJob.type,
                  salaryRange: this.newJob.salary,
                  vacancies: 1,
                  description: '',
                  requirements: ''
                };
                this.recruitmentService.createJob(payload).subscribe({
                  next: () => {
                    this.toastService.success('Job posting created.');
                    this.loadJobs();
                    this.closeJobModal();
                  },
                  error: () => {
                    this.toastService.error('Failed to create job posting.');
                  }
                });
              }
            });
          }
        });
      },
      error: () => {
        this.toastService.error('Failed to load departments.');
      }
    });
  }

  openCandidateModal(): void {
    this.newCandidate = {
      name: '',
      email: '',
      position: this.jobPostings.length ? this.jobPostings[0].title : '',
      stage: 'Screening',
      rating: 4
    };
    this.showCandidateModal = true;
  }

  closeCandidateModal(): void {
    this.showCandidateModal = false;
  }

  saveCandidate(): void {
    const name = this.newCandidate.name.trim();
    if (!name || !this.newCandidate.email.trim()) {
      this.toastService.error('Please provide candidate name and email.');
      return;
    }
    const matchingJob = this.jobPostings.find(j => j.title === this.newCandidate.position)
      || this.jobPostings[0];
    if (!matchingJob) {
      this.toastService.error('No job openings available for this candidate.');
      return;
    }
    const nameParts = name.split(' ');
    const payload: Partial<Candidate> = {
      firstName: nameParts[0],
      lastName: nameParts.slice(1).join(' ') || '-',
      email: this.newCandidate.email.trim(),
      jobId: matchingJob.id,
      rating: this.newCandidate.rating
    };
    this.recruitmentService.createCandidate(payload).subscribe({
      next: () => {
        this.toastService.success('Candidate added.');
        this.loadCandidates();
        this.closeCandidateModal();
      },
      error: () => {
        this.toastService.error('Failed to add candidate.');
      }
    });
  }

  private mapCandidateStatus(status: string): string {
    const map: Record<string, string> = {
      'NEW': 'Screening',
      'SCREENING': 'Screening',
      'INTERVIEW_SCHEDULED': 'Interview',
      'INTERVIEWED': 'Technical',
      'OFFERED': 'Offer',
      'HIRED': 'Hired',
      'REJECTED': 'Rejected',
    };
    return map[status] || 'Screening';
  }

  get filteredJobs() {
    return this.jobPostings.filter(job => {
      return job.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
             job.department.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
             job.location.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  get filteredCandidates() {
    return this.candidates.filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            c.position.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            c.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesStage = this.selectedStage === 'ALL' || c.stage.toLowerCase() === this.selectedStage.toLowerCase();
      return matchesSearch && matchesStage;
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
    this.editingInterview = null;
    this.interviewForm = {
      candidateId: '',
      jobId: '',
      interviewerId: '',
      scheduledAt: '',
      round: 'SCREENING',
      interviewType: InterviewType.ONLINE,
      durationMinutes: 60,
      meetingLink: ''
    };
    this.showInterviewModal = true;
  }

  editInterviewModal(interview: Interview): void {
    this.editingInterview = interview;
    this.interviewForm = {
      candidateId: interview.candidateId,
      jobId: interview.jobId,
      interviewerId: interview.interviewerId || '',
      scheduledAt: interview.scheduledAt ? new Date(interview.scheduledAt).toISOString().slice(0, 16) : '',
      round: interview.round,
      interviewType: interview.interviewType,
      durationMinutes: interview.durationMinutes,
      meetingLink: interview.meetingLink || ''
    };
    this.showInterviewModal = true;
  }

  closeInterviewModal(): void {
    this.showInterviewModal = false;
    this.editingInterview = null;
  }

  saveInterview(): void {
    if (!this.interviewForm.candidateId || !this.interviewForm.jobId || !this.interviewForm.scheduledAt) return;
    const candidate = this.candidates.find(c => c.id === this.interviewForm.candidateId);
    const job = this.jobPostings.find(j => j.id === this.interviewForm.jobId);
    const employee = this.employees.find(e => e.id === this.interviewForm.interviewerId);
    const payload: Partial<Interview> = {
      candidateId: this.interviewForm.candidateId,
      candidateName: candidate ? candidate.name : '',
      jobId: this.interviewForm.jobId,
      jobTitle: job ? job.title : '',
      interviewerId: this.interviewForm.interviewerId,
      interviewerName: employee ? `${employee.firstName} ${employee.lastName}` : '',
      scheduledAt: new Date(this.interviewForm.scheduledAt).toISOString(),
      round: this.interviewForm.round,
      interviewType: this.interviewForm.interviewType,
      durationMinutes: this.interviewForm.durationMinutes,
      meetingLink: this.interviewForm.meetingLink || undefined,
    };

    if (this.editingInterview) {
      this.recruitmentService.updateInterview(this.editingInterview.id, payload).subscribe({
        next: () => {
          this.toastService.success('Interview updated.');
          this.loadInterviews();
          this.closeInterviewModal();
        },
        error: () => {
          this.toastService.error('Failed to update interview.');
        }
      });
    } else {
      this.recruitmentService.scheduleInterview(payload).subscribe({
        next: () => {
          this.toastService.success('Interview scheduled.');
          this.loadInterviews();
          this.closeInterviewModal();
        },
        error: () => {
          this.toastService.error('Failed to schedule interview.');
        }
      });
    }
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
        this.toastService.error('Failed to update interview status.');
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
        this.toastService.error('Failed to delete interview.');
      }
    });
  }

  advanceStage(candidate: any) {
    const stages = ['Screening', 'Technical', 'Interview', 'Offer', 'Hired'];
    const currentIndex = stages.indexOf(candidate.stage);
    if (currentIndex < stages.length - 1) {
      candidate.stage = stages[currentIndex + 1];
    }
  }
}
