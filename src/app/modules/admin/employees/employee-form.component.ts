import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class AdminEmployeeFormComponent implements OnInit {
  employeeForm!: FormGroup;
  currentStep = 1;
  steps = [
    { label: 'Personal Info', icon: 'fas fa-user' },
    { label: 'Contact Info', icon: 'fas fa-phone' },
    { label: 'Job Details', icon: 'fas fa-briefcase' },
    { label: 'Salary & Bank', icon: 'fas fa-money-bill' }
  ];
  departments = ['Engineering', 'Human Resources', 'Marketing', 'Finance', 'Sales', 'Design'];
  designations = ['Software Developer', 'Senior Developer', 'Team Lead', 'HR Manager', 'Marketing Specialist', 'Financial Analyst', 'UI/UX Designer', 'Sales Executive'];
  branches = ['Head Office', 'Mumbai Branch', 'Bangalore Branch'];
  employmentTypes = ['Full-Time', 'Part-Time', 'Contract', 'Internship', 'Probation'];
  submitted = false;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s]{10,15}$/)]],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      maritalStatus: [''],
      nationality: [''],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: [''],
      country: ['', Validators.required],
      postalCode: [''],
      emergencyContactName: [''],
      emergencyContactPhone: [''],
      emergencyContactRelation: [''],
      employeeId: ['', [Validators.required]],
      department: ['', Validators.required],
      designation: ['', Validators.required],
      branch: ['', Validators.required],
      joiningDate: ['', Validators.required],
      employmentType: ['', Validators.required],
      reportingManager: [''],
      bankName: [''],
      accountNumber: [''],
      ifscCode: [''],
      basicSalary: ['', [Validators.required, Validators.min(0)]],
      allowances: [''],
    });
  }

  nextStep(): void {
    if (this.currentStep < 4) this.currentStep++;
  }

  prevStep(): void {
    if (this.currentStep > 1) this.currentStep--;
  }

  isFieldInvalid(field: string): boolean {
    const f = this.employeeForm.get(field);
    return !!(f && f.invalid && (f.dirty || f.touched));
  }

  onSubmit(): void {
    Object.keys(this.employeeForm.controls).forEach(k => this.employeeForm.get(k)?.markAsTouched());
    if (this.employeeForm.valid) {
      this.isSubmitting = true;
      setTimeout(() => {
        this.submitted = true;
        this.isSubmitting = false;
      }, 1500);
    }
  }
}
