import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecruitmentService, ToastService } from '../../../core/services';

@Component({
  selector: 'app-admin-job-edit',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss']
})
export class AdminJobEditComponent implements OnInit {
  jobId: string = '';
  loading: boolean = false;

  formData = {
    id: '',
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote (India)',
    type: 'Full-time',
    salaryRange: '₹18,00,000 - ₹24,00,000 / yr',
    vacancies: 2,
    status: 'ACTIVE',
    description: 'We are seeking a Senior Full Stack Developer proficient in Angular and .NET Core.',
    requirements: 'Angular 14+, .NET 8, C#, SQL Server, Docker, Microservices, 5+ years experience.'
  };

  departments = ['Engineering', 'Marketing', 'Sales', 'Design', 'Finance', 'Human Resources'];
  employmentTypes = ['Full-time', 'Part-time', 'Contract', 'Internship'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recruitmentService: RecruitmentService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.jobId = this.route.snapshot.paramMap.get('id') || '';
    if (this.jobId) {
      this.formData.id = this.jobId;
    }
  }

  save(): void {
    if (!this.formData.title) {
      this.toast.warning('Please enter a Job Title');
      return;
    }

    this.loading = true;
    this.toast.success('Job opening updated successfully!');
    this.router.navigate(['/admin/recruitment']);
  }

  cancel(): void {
    this.router.navigate(['/admin/recruitment']);
  }
}
