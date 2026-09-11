import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, EmployeeService, AttendanceService, LeaveService, ToastService } from '../../../core/services';

@Component({
  selector: 'app-emp-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class EmpProfileComponent implements OnInit {
  profileData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: 'Employee',
    organization: 'Envision Beyond India Pvt Ltd',
    employeeId: '',
    department: '',
    team: '',
    workShift: 'General Shift (09:30 AM - 06:30 PM)',
    reportingManager: '',
    joinedDate: '',
    avatarUrl: ''
  };

  stats = {
    presentDays: 0,
    leaveBalance: 0,
    attendanceRate: '0%'
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
    private employeeService: EmployeeService,
    private attendanceService: AttendanceService,
    private leaveService: LeaveService,
    private toast: ToastService,
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
    this.loadProfile();
    this.loadStats();
  }

  private loadProfile(): void {
    const id = this.authService.currentUser?.employeeId;
    if (!id) return;
    this.employeeService.getEmployee(id).subscribe({
      next: emp => {
        if (emp.firstName) this.profileData.firstName = emp.firstName.toUpperCase();
        if (emp.lastName) this.profileData.lastName = emp.lastName.toUpperCase();
        if (emp.email) this.profileData.email = emp.email;
        if (emp.phone) this.profileData.phone = emp.phone;
        if (emp.employeeId) this.profileData.employeeId = emp.employeeId;
        if (emp.department) this.profileData.department = emp.department;
        if (emp.teamName) this.profileData.team = emp.teamName;
        if (emp.designation) this.profileData.role = emp.designation;
        if (emp.reportingManagerName) this.profileData.reportingManager = emp.reportingManagerName;
        if (emp.joiningDate) this.profileData.joinedDate = this.formatDate(emp.joiningDate);
        if (emp.avatar) this.profileData.avatarUrl = emp.avatar;
      },
      error: () => this.toast.error('Failed to load profile details.')
    });
  }

  private loadStats(): void {
    const id = this.authService.currentUser?.employeeId;
    if (!id) return;
    this.attendanceService.getByEmployee(id).subscribe({
      next: records => {
        const list = records || [];
        const present = list.filter(r => {
          const s = String(r.status || '').toUpperCase();
          return s === 'PRESENT' || s === 'LATE';
        }).length;
        const total = list.length || 1;
        this.stats.presentDays = present;
        this.stats.attendanceRate = Math.round((present / total) * 100) + '%';
      },
      error: () => undefined
    });
    this.leaveService.getBalances().subscribe({
      next: balances => {
        this.stats.leaveBalance = (balances || []).reduce((sum, b) => sum + (Number(b.remaining) || 0), 0);
      },
      error: () => undefined
    });
  }

  private formatDate(value?: string): string {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
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
    this.toast.success('Profile updated successfully!');
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
        this.toast.success('Profile picture updated successfully!');
      };
      reader.readAsDataURL(file);
    }
  }

  togglePushNotifications(): void {
    this.preferences.pushNotifications = !this.preferences.pushNotifications;
    this.toast.success(`Push notifications ${this.preferences.pushNotifications ? 'enabled' : 'disabled'}`);
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