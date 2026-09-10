import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-admin-system-settings',
  templateUrl: './system-settings.component.html',
  styleUrls: ['./system-settings.component.scss']
})
export class AdminSystemSettingsComponent implements OnInit {
  activeSection = 'general';
  userRole = 'EMPLOYEE';
  isAdmin = false;
  showToast = false;
  toastMsg = '';

  companyName = 'Envision Beyond India Pvt Ltd';
  premisesName = 'Envision Beyond India Pvt Ltd, Society, Anand Mahal Rd, beside Silver Park, in front of Sneh Sankul Wadi, Giriraj Society, Adajan, Surat, Gujarat 395009';
  latitude = '21.1986872';
  longitude = '72.7965515';
  geofencePerimeter = '500';

  shiftStartTime = '09:30';
  shiftEndTime = '18:30';
  gracePeriodMins = '15';
  minHours = '8';
  maxBreakMins = '60';

  weekDays = [
    { name: 'Monday', checked: false }, { name: 'Tuesday', checked: false },
    { name: 'Wednesday', checked: false }, { name: 'Thursday', checked: false },
    { name: 'Friday', checked: false }, { name: 'Saturday', checked: true },
    { name: 'Sunday', checked: true }
  ];

  leavePolicies = [
    { type: 'Annual Leave', days: 20, carryForward: 5, encashment: true },
    { type: 'Sick Leave', days: 12, carryForward: 0, encashment: false },
    { type: 'Personal Leave', days: 5, carryForward: 0, encashment: false },
    { type: 'Maternity Leave', days: 90, carryForward: 0, encashment: false },
    { type: 'Paternity Leave', days: 15, carryForward: 0, encashment: false },
    { type: 'Bereavement Leave', days: 5, carryForward: 0, encashment: false },
  ];

  notificationSettings = [
    { title: 'Leave Request', description: 'When an employee submits a leave request', email: true, push: true },
    { title: 'Leave Approval', description: 'When a leave request is approved or rejected', email: true, push: true },
    { title: 'Payroll Processing', description: 'Monthly payroll processing notification', email: true, push: false },
    { title: 'New Employee Onboarding', description: 'When a new employee is added to the system', email: true, push: true },
    { title: 'Performance Review', description: 'Performance review reminders and completions', email: true, push: false },
    { title: 'Birthday Wishes', description: 'Employee birthday notifications', email: false, push: true },
    { title: 'System Updates', description: 'System maintenance and update notifications', email: true, push: false },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const u = this.authService.currentUser;
    if (u) {
      this.userRole = u.role;
      this.isAdmin = u.role === 'ADMIN';
    }
  }

  openGoogleMaps(): void {
    window.open(`https://www.google.com/maps?q=${this.latitude},${this.longitude}`, '_blank');
  }

  saveSettings(): void {
    if (!this.isAdmin) {
      this.triggerToast('Read-only mode: Only System Admins can modify settings.');
      return;
    }
    this.triggerToast('System settings saved successfully!');
  }

  private triggerToast(msg: string): void {
    this.toastMsg = msg;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3000);
  }
}
