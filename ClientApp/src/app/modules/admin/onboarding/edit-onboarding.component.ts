import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingService, ToastService } from '../../../core/services';

@Component({
  selector: 'app-admin-onboarding-edit',
  templateUrl: './edit-onboarding.component.html',
  styleUrls: ['./edit-onboarding.component.scss']
})
export class AdminOnboardingEditComponent implements OnInit {
  candidateId: string = '';
  loading: boolean = false;

  formData = {
    id: '',
    employeeName: 'Nathan Brooks',
    position: 'Software Developer',
    department: 'Engineering',
    startDate: '2024-12-16',
    mentorName: 'Michael Chen',
    email: 'nathan.b@envision.com',
    phone: '+1 (555) 234-5678',
    status: 'IN_PROGRESS',
    notes: 'Initial IT setup completed smoothly.'
  };

  departments = ['Engineering', 'Marketing', 'Sales', 'Design', 'Finance', 'Human Resources'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private trainingService: TrainingService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.candidateId = this.route.snapshot.paramMap.get('id') || '';
    if (this.candidateId) {
      this.loadCandidate();
    }
  }

  loadCandidate(): void {
    this.formData.id = this.candidateId;
  }

  save(): void {
    if (!this.formData.employeeName || !this.formData.position) {
      this.toast.warning('Please enter employee name and position');
      return;
    }

    this.loading = true;
    this.toast.success('Onboarding details updated successfully!');
    this.router.navigate(['/admin/onboarding']);
  }

  cancel(): void {
    this.router.navigate(['/admin/onboarding']);
  }
}
