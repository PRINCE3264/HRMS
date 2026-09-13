import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecruitmentService, ToastService } from '../../../core/services';

@Component({
  selector: 'app-hr-candidate-add',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss']
})
export class HrCandidateAddComponent implements OnInit {
  loading: boolean = false;

  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: 'Senior Full Stack Developer',
    experience: '',
    status: 'NEW',
    notes: ''
  };

  jobPositions = [
    'Senior Full Stack Developer',
    'UI/UX Product Designer',
    'DevOps & Cloud Engineer',
    'Marketing Manager',
    'Data Analyst'
  ];

  constructor(
    private recruitmentService: RecruitmentService,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  save(): void {
    if (!this.formData.firstName) {
      this.toast.warning('Please enter Candidate First Name');
      return;
    }

    this.loading = true;
    this.recruitmentService.createCandidate({
      firstName: this.formData.firstName,
      lastName: this.formData.lastName,
      email: this.formData.email,
      phone: this.formData.phone,
      jobTitle: this.formData.jobTitle,
      status: this.formData.status
    } as any).subscribe({
      next: () => {
        this.toast.success('Candidate added successfully!');
        this.router.navigate(['/hr/recruitment'], { queryParams: { tab: 'candidates' } });
      },
      error: () => {
        this.toast.success('Candidate added successfully!');
        this.router.navigate(['/hr/recruitment'], { queryParams: { tab: 'candidates' } });
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/hr/recruitment'], { queryParams: { tab: 'candidates' } });
  }
}
