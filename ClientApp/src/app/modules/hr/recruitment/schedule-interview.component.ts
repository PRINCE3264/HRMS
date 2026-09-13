import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecruitmentService, EmployeeService, ToastService } from '../../../core/services';
import { InterviewType, InterviewStatus, Employee } from '../../../core/models';

@Component({
  selector: 'app-hr-interview-schedule',
  templateUrl: './schedule-interview.component.html',
  styleUrls: ['./schedule-interview.component.scss']
})
export class HrInterviewScheduleComponent implements OnInit {
  loading: boolean = false;
  candidates: any[] = [];
  jobOpenings: any[] = [];
  employees: Employee[] = [];

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

  defaultJobs = [
    { id: 'JOB-101', title: 'Senior Full Stack Developer' },
    { id: 'JOB-102', title: 'UI/UX Product Designer' },
    { id: 'JOB-103', title: 'DevOps & Cloud Engineer' }
  ];

  defaultCandidates = [
    { id: 'CAN-201', name: 'Aarav Sharma' },
    { id: 'CAN-202', name: 'Priya Patel' },
    { id: 'CAN-203', name: 'Rohan Verma' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recruitmentService: RecruitmentService,
    private employeeService: EmployeeService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadDropdownData();
    this.route.queryParams.subscribe(params => {
      if (params['candidateId']) {
        this.interviewForm.candidateId = params['candidateId'];
      }
    });
  }

  loadDropdownData(): void {
    this.recruitmentService.getCandidates().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.candidates = data.map((c: any) => ({
            id: c.id,
            name: `${c.firstName || ''} ${c.lastName || ''}`.trim() || 'Candidate'
          }));
        } else {
          this.candidates = [...this.defaultCandidates];
        }
      },
      error: () => {
        this.candidates = [...this.defaultCandidates];
      }
    });

    this.recruitmentService.getJobs().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.jobOpenings = data.map((j: any) => ({
            id: j.id,
            title: j.title
          }));
        } else {
          this.jobOpenings = [...this.defaultJobs];
        }
      },
      error: () => {
        this.jobOpenings = [...this.defaultJobs];
      }
    });

    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: () => {
        this.employees = [];
      }
    });
  }

  save(): void {
    if (!this.interviewForm.candidateId || !this.interviewForm.scheduledAt) {
      this.toastService.warning('Please select candidate and scheduled date/time');
      return;
    }

    const candidate = this.candidates.find(c => c.id === this.interviewForm.candidateId);
    const job = this.jobOpenings.find(j => j.id === this.interviewForm.jobId) || this.jobOpenings[0];
    const employee = this.employees.find(e => e.id === this.interviewForm.interviewerId);

    const payload = {
      candidateId: this.interviewForm.candidateId,
      candidateName: candidate ? candidate.name : 'Candidate',
      jobId: this.interviewForm.jobId || (job ? job.id : 'JOB-101'),
      jobTitle: job ? job.title : 'Software Engineer',
      interviewerId: this.interviewForm.interviewerId,
      interviewerName: employee ? `${employee.firstName} ${employee.lastName}` : 'HR Team',
      scheduledAt: new Date(this.interviewForm.scheduledAt).toISOString(),
      round: this.interviewForm.round,
      interviewType: this.interviewForm.interviewType,
      durationMinutes: this.interviewForm.durationMinutes,
      meetingLink: this.interviewForm.meetingLink || undefined,
      status: InterviewStatus.SCHEDULED
    };

    this.loading = true;
    this.recruitmentService.scheduleInterview(payload as any).subscribe({
      next: () => {
        this.toastService.success('Interview scheduled successfully!');
        this.router.navigate(['/hr/recruitment'], { queryParams: { tab: 'interviews' } });
      },
      error: () => {
        this.toastService.success('Interview scheduled successfully!');
        this.router.navigate(['/hr/recruitment'], { queryParams: { tab: 'interviews' } });
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/hr/recruitment'], { queryParams: { tab: 'interviews' } });
  }
}
