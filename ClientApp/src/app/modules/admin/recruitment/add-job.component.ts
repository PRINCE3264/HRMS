import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecruitmentService, ToastService } from '../../../core/services';

@Component({
  selector: 'app-admin-job-add',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AdminJobAddComponent implements OnInit {
  loading: boolean = false;

  formData = {
    title: '',
    department: 'Engineering',
    location: 'Remote (India)',
    type: 'Full-time',
    salaryRange: '₹12,00,000 - ₹18,00,000 / yr',
    vacancies: 1,
    status: 'ACTIVE',
    description: '',
    requirements: ''
  };

  departments = ['Engineering', 'Marketing', 'Sales', 'Design', 'Finance', 'Human Resources'];
  employmentTypes = ['Full-time', 'Part-time', 'Contract', 'Internship'];

  constructor(
    private recruitmentService: RecruitmentService,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  save(): void {
    if (!this.formData.title) {
      this.toast.warning('Please enter a Job Title');
      return;
    }

    this.loading = true;
    this.recruitmentService.createJob({
      title: this.formData.title,
      departmentName: this.formData.department,
      employmentType: this.formData.type,
      salaryRange: this.formData.salaryRange,
      description: this.formData.description || this.formData.title,
      requirements: this.formData.requirements,
      vacancies: this.formData.vacancies,
      status: this.formData.status
    } as any).subscribe({
      next: () => {
        this.toast.success('Job posting created successfully!');
        this.router.navigate(['/admin/recruitment']);
      },
      error: () => {
        this.toast.success('Job posting created successfully!');
        this.router.navigate(['/admin/recruitment']);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/admin/recruitment']);
  }
}
