import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService, DepartmentService, ToastService } from '../../../core/services';

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
  departments: { id: string; name: string }[] = [];
  designations: { id: string; title: string }[] = [];
  branches: { id: string; name: string }[] = [];
  employmentTypes = ['Full-Time', 'Part-Time', 'Contract', 'Internship', 'Probation'];
  submitted = false;
  isSubmitting = false;
  editingId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private toast: ToastService
  ) {}

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
      employeeId: [''],
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

    this.loadLookups();

    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.editingId = id;
        this.loadEmployee(id);
      }
    });
  }

  loadLookups(): void {
    this.departmentService.getDepartments().subscribe({
      next: (data) => this.departments = data.map(d => ({ id: d.id, name: d.name })),
      error: () => this.toast.error('Failed to load departments')
    });
    this.departmentService.getDesignations().subscribe({
      next: (data) => this.designations = data.map(d => ({ id: d.id, title: d.title })),
      error: () => this.toast.error('Failed to load designations')
    });
    this.departmentService.getBranches().subscribe({
      next: (data) => this.branches = data.map(b => ({ id: b.id, name: b.name })),
      error: () => this.toast.error('Failed to load branches')
    });
  }

  loadEmployee(id: string): void {
    this.employeeService.getEmployee(id).subscribe({
      next: (e: any) => {
        this.employeeForm.patchValue({
          firstName: e.firstName,
          lastName: e.lastName,
          email: e.email,
          phone: e.phone,
          gender: e.gender,
          dateOfBirth: e.dateOfBirth,
          maritalStatus: e.maritalStatus,
          nationality: e.nationality,
          address: e.address,
          city: e.city,
          state: e.state,
          country: e.country,
          postalCode: e.zipCode || e.postalCode,
          emergencyContactName: e.emergencyContactName,
          emergencyContactPhone: e.emergencyContactPhone,
          emergencyContactRelation: e.emergencyContactRelation,
          employeeId: e.employeeId,
          department: e.departmentId,
          designation: e.designationId,
          branch: e.branchId,
          joiningDate: e.joiningDate,
          employmentType: e.employmentType,
          reportingManager: e.reportingManagerName || '',
          bankName: e.bankName,
          accountNumber: e.bankAccountNumber,
          ifscCode: e.ifscCode,
          basicSalary: e.salary ?? '',
          allowances: ''
        });
      },
      error: () => this.toast.error('Failed to load employee')
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
      const v = this.employeeForm.value;
      const payload: any = {
        firstName: v.firstName,
        lastName: v.lastName,
        email: v.email,
        phone: v.phone,
        gender: v.gender,
        dateOfBirth: v.dateOfBirth,
        maritalStatus: v.maritalStatus,
        nationality: v.nationality,
        address: v.address,
        city: v.city,
        state: v.state,
        country: v.country,
        zipCode: v.postalCode,
        emergencyContactName: v.emergencyContactName,
        emergencyContactPhone: v.emergencyContactPhone,
        emergencyContactRelation: v.emergencyContactRelation,
        departmentId: v.department,
        designationId: v.designation,
        branchId: v.branch,
        joiningDate: v.joiningDate,
        employmentType: v.employmentType,
        reportingManagerName: v.reportingManager,
        bankName: v.bankName,
        bankAccountNumber: v.accountNumber,
        ifscCode: v.ifscCode,
        salary: v.basicSalary ?? 0
      };

      if (this.editingId) {
        this.employeeService.updateEmployee(this.editingId, payload).subscribe({
          next: () => {
            this.toast.success('Employee updated successfully');
            this.isSubmitting = false;
            this.router.navigate(['/admin/employees', this.editingId]);
          },
          error: () => { this.toast.error('Failed to update employee'); this.isSubmitting = false; }
        });
      } else {
        this.employeeService.createEmployee(payload).subscribe({
          next: () => {
            this.toast.success('Employee added successfully');
            this.isSubmitting = false;
            this.submitted = true;
          },
          error: () => { this.toast.error('Failed to create employee'); this.isSubmitting = false; }
        });
      }
    }
  }
}