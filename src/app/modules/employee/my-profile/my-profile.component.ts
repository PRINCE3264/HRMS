import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-emp-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class EmpProfileComponent implements OnInit {
  profileData = {
    firstName: 'PRINCE',
    lastName: 'VIDYARTHI',
    email: 'princekumarvidyarthi4@gmail.com',
    phone: '+91 98765 43210',
    role: 'Employee',
    organization: 'Envision Beyond India Pvt Ltd',
    employeeId: 'EMP-1059',
    department: 'Engineering & Technology',
    team: 'Backend & Cloud Infrastructure',
    workShift: 'General Shift (09:30 AM - 06:30 PM)',
    reportingManager: 'Praveen Singh',
    joinedDate: '06 Sep 2026',
    avatarUrl: ''
  };

  stats = {
    presentDays: 3,
    leaveBalance: 33,
    attendanceRate: '75%'
  };

  preferences = {
    pushNotifications: true,
    gpsGeofence: 'Active'
  };

  showEditModal = false;
  editForm = { ...this.profileData };
  toastMessage = '';
  showToast = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const user = this.authService.currentUser;
    if (user) {
      if (user.firstName) this.profileData.firstName = user.firstName.toUpperCase();
      if (user.lastName) this.profileData.lastName = user.lastName.toUpperCase();
      if (user.email) this.profileData.email = user.email;
      if (user.employeeId) this.profileData.employeeId = user.employeeId;
      if (user.department) this.profileData.department = user.department;
      if (user.designation) this.profileData.role = user.designation;
      if (user.avatar) this.profileData.avatarUrl = user.avatar;
    }
  }

  get fullName(): string {
    return `${this.profileData.firstName} ${this.profileData.lastName}`.trim();
  }

  openEditModal(): void {
    this.editForm = { ...this.profileData };
    this.showEditModal = true;
  }

  closeEditModal(): void {
    this.showEditModal = false;
  }

  saveProfile(): void {
    this.profileData = { ...this.editForm };
    this.showEditModal = false;
    this.displayToast('Profile updated successfully!');
  }

  triggerFileInput(fileInput: HTMLInputElement): void {
    fileInput.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileData.avatarUrl = e.target.result;
        this.displayToast('Profile picture updated successfully!');
      };
      reader.readAsDataURL(file);
    }
  }

  togglePushNotifications(): void {
    this.preferences.pushNotifications = !this.preferences.pushNotifications;
    this.displayToast(`Push notifications ${this.preferences.pushNotifications ? 'enabled' : 'disabled'}`);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

  private displayToast(msg: string): void {
    this.toastMessage = msg;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }
}

