import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email = '';
  submitted = false;
  isDarkMode = false;

  constructor(private router: Router) {}

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
    if (this.email) {
      this.submitted = true;
    }
  }
}
