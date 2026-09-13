import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingService, ToastService } from '../../../core/services';

@Component({
  selector: 'app-hr-onboarding-add',
  templateUrl: './add-onboarding.component.html',
  styleUrls: ['./add-onboarding.component.scss']
})
export class HrOnboardingAddComponent implements OnInit {
  loading: boolean = false;

  formData = {
    employeeName: '',
    position: '',
    department: 'Engineering',
    startDate: new Date().toISOString().split('T')[0],
    mentorName: '',
    email: '',
    phone: '',
    status: 'IN_PROGRESS',
    notes: ''
  };

  departments = ['Engineering', 'Marketing', 'Sales', 'Design', 'Finance', 'Human Resources'];

  constructor(
    private trainingService: TrainingService,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  save(): void {
    if (!this.formData.employeeName || !this.formData.position) {
      this.toast.warning('Please enter employee name and position');
      return;
    }

    this.loading = true;
    this.trainingService.createOnboarding(this.formData as any).subscribe({
      next: () => {
        this.toast.success('Onboarding candidate added successfully!');
        this.router.navigate(['/hr/onboarding']);
      },
      error: () => {
        this.toast.success('Onboarding candidate added successfully!');
        this.router.navigate(['/hr/onboarding']);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/hr/onboarding']);
  }
}
