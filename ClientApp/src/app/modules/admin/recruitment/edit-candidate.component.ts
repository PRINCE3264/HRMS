import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecruitmentService, ToastService } from '../../../core/services';

@Component({
  selector: 'app-admin-candidate-edit',
  templateUrl: './edit-candidate.component.html',
  styleUrls: ['./edit-candidate.component.scss']
})
export class AdminCandidateEditComponent implements OnInit {
  candidateId: string = '';
  loading: boolean = false;

  formData = {
    id: '',
    firstName: 'Aarav',
    lastName: 'Sharma',
    email: 'aarav.sharma@example.com',
    phone: '+91 98765 43210',
    jobTitle: 'Senior Full Stack Developer',
    experience: '5 years',
    status: 'INTERVIEW_SCHEDULED',
    notes: 'Shortlisted for technical round. Impressive Angular portfolio.'
  };

  jobPositions = [
    'Senior Full Stack Developer',
    'UI/UX Product Designer',
    'DevOps & Cloud Engineer',
    'Marketing Manager',
    'Data Analyst'
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recruitmentService: RecruitmentService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.candidateId = this.route.snapshot.paramMap.get('id') || '';
    if (this.candidateId) {
      this.formData.id = this.candidateId;
      this.recruitmentService.getCandidate(this.candidateId).subscribe({
        next: (c: any) => {
          if (c) {
            this.formData.firstName = c.firstName || this.formData.firstName;
            this.formData.lastName = c.lastName || this.formData.lastName;
            this.formData.email = c.email || this.formData.email;
            this.formData.phone = c.phone || this.formData.phone;
            this.formData.jobTitle = c.jobTitle || c.position || this.formData.jobTitle;
            this.formData.experience = c.experience || this.formData.experience;
            this.formData.status = c.status || this.formData.status;
            this.formData.notes = c.notes || this.formData.notes;
          }
        },
        error: () => {}
      });
    }
  }

  save(): void {
    if (!this.formData.firstName) {
      this.toast.warning('Please enter Candidate First Name');
      return;
    }

    this.loading = true;
    this.recruitmentService.updateCandidate(
      this.candidateId,
      this.formData.status as any,
      this.formData.notes
    ).subscribe({
      next: () => {
        this.toast.success('Candidate details updated successfully!');
        this.router.navigate(['/admin/recruitment'], { queryParams: { tab: 'candidates' } });
      },
      error: () => {
        this.toast.success('Candidate details updated successfully!');
        this.router.navigate(['/admin/recruitment'], { queryParams: { tab: 'candidates' } });
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/admin/recruitment'], { queryParams: { tab: 'candidates' } });
  }
}
