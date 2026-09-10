import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { UserRole } from '../../core/models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  loading = false;
  showPassword = false;
  showConfirmPassword = false;
  errorMessage = '';
  isDarkMode = false;

  roles = [
    { value: UserRole.EMPLOYEE, label: 'Employee' },
    { value: UserRole.TL, label: 'Team Lead' },
    { value: UserRole.HR, label: 'HR Manager' },
    { value: UserRole.ADMIN, label: 'Administrator' }
  ];

  departments = [
    'Engineering',
    'Human Resources',
    'Administration',
    'Finance',
    'Marketing',
    'Sales'
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/dashboard']);
      return;
    }

    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      role: [UserRole.EMPLOYEE, Validators.required],
      department: ['Engineering', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, { validators: this.passwordMatchValidator });

    const savedTheme = localStorage.getItem('hrm_auth_theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('hrm_auth_theme', this.isDarkMode ? 'dark' : 'light');
  }

  passwordMatchValidator(g: FormGroup) {
    const password = g.get('password')?.value;
    const confirmPassword = g.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  isFieldInvalid(field: string): boolean {
    const f = this.registerForm.get(field);
    return !!(f && f.invalid && (f.dirty || f.touched));
  }

  hasPasswordMismatch(): boolean {
    const confirmField = this.registerForm.get('confirmPassword');
    return !!(
      this.registerForm.hasError('passwordMismatch') &&
      confirmField && (confirmField.dirty || confirmField.touched)
    );
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    const { firstName, lastName, email, password, role, department } = this.registerForm.value;

    this.authService.register({
      firstName,
      lastName,
      email,
      password,
      role,
      department
    }).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.errorMessage = err.message || 'Registration failed. Please try again.';
        this.loading = false;
      }
    });
  }

  registerWithGoogle(): void {
    this.loading = true;
    this.authService.register({
      firstName: 'Google',
      lastName: 'User',
      email: 'user@gmail.com',
      password: 'password123',
      role: UserRole.EMPLOYEE,
      department: 'Engineering'
    }).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}
