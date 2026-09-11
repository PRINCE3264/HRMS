import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  password = '';
  confirmPassword = '';
  submitted = false;
  showPassword = false;
  showConfirmPassword = false;
  isDarkMode = false;

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('hrm_auth_theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('hrm_auth_theme', this.isDarkMode ? 'dark' : 'light');
  }

  onSubmit(): void {
    if (this.password && this.password === this.confirmPassword) {
      this.submitted = true;
    }
  }
}
