import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  loading = false;
  showPassword = false;
  errorMessage = '';
  returnUrl = '/dashboard';
  isDarkMode = false;
  activeDot = 0;
  private carouselInterval: any;

  heroSlides = [
    {
      title: 'Employee Management',
      sub: 'People • Roles • Growth',
      quote: 'A smarter way to manage your workforce from hiring to growth — all in one place.'
    },
    {
      title: 'Leave & Attendance',
      sub: 'Track • Approve • Insights',
      quote: 'Real-time tracking, intelligent leave approvals, and seamless attendance management.'
    },
    {
      title: 'Performance & Reports',
      sub: 'Data • Decisions • Success',
      quote: 'Actionable analytics, appraisal reviews, and data-driven workforce decisions.'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/dashboard']);
      return;
    }
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';

    const savedTheme = localStorage.getItem('hrm_auth_theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
    }

    this.carouselInterval = setInterval(() => {
      this.activeDot = (this.activeDot + 1) % 3;
    }, 3500);
  }

  ngOnDestroy(): void {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  setSlide(index: number): void {
    this.activeDot = index;
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('hrm_auth_theme', this.isDarkMode ? 'dark' : 'light');
  }

  fillDemo(email: string): void {
    this.loginForm.patchValue({ email, password: 'password123' });
  }

  isFieldInvalid(field: string): boolean {
    const f = this.loginForm.get(field);
    return !!(f && f.invalid && (f.dirty || f.touched));
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.errorMessage = '';
    const { email, password } = this.loginForm.value;
    this.authService.login({ email, password }).subscribe({
      next: () => {
        this.router.navigateByUrl(this.returnUrl);
      },
      error: (err) => {
        this.errorMessage = err.message || 'Login failed. Please try again.';
        this.loading = false;
      }
    });
  }

  loginWithGoogle(): void {
    this.loading = true;
    this.authService.login({ email: 'emp@hrm.com', password: 'password123' }).subscribe({
      next: () => {
        this.router.navigateByUrl(this.returnUrl);
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}
