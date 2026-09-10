import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class AdminEmployeeDetailComponent {
  activeTab = 'personal';
  tabs = [
    { id: 'personal', label: 'Personal', icon: 'fas fa-user' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-phone' },
    { id: 'job', label: 'Job', icon: 'fas fa-briefcase' },
    { id: 'documents', label: 'Documents', icon: 'fas fa-folder-open' },
    { id: 'attendance', label: 'Attendance', icon: 'fas fa-clock' },
    { id: 'leave', label: 'Leave History', icon: 'fas fa-calendar-alt' },
    { id: 'salary', label: 'Salary', icon: 'fas fa-money-bill' },
    { id: 'performance', label: 'Performance', icon: 'fas fa-star' },
    { id: 'activity', label: 'Activity', icon: 'fas fa-history' }
  ];

  employee = {
    employeeId: 'EMP001',
    firstName: 'John',
    lastName: 'Smith',
    name: 'John Smith',
    email: 'john@hrm.com',
    phone: '+1 555-0101',
    gender: 'Male',
    dateOfBirth: '1992-04-15',
    maritalStatus: 'Married',
    nationality: 'American',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    country: 'USA',
    postalCode: '10001',
    emergencyContactName: 'Jane Smith',
    emergencyContactPhone: '+1 555-0102',
    emergencyContactRelation: 'Spouse',
    department: 'Engineering',
    designation: 'Senior Developer',
    branch: 'Head Office',
    joiningDate: '2023-01-15',
    employmentType: 'Full-Time',
    reportingManager: 'Michael Chen',
    bankName: 'Chase Bank',
    accountNumber: '**** 4532',
    ifscCode: 'CHASUS33',
    basicSalary: 8500,
    allowances: 1200,
    status: 'ACTIVE',
    avatar: ''
  };

  attendance = [
    { date: '2026-09-10', clockIn: '09:02 AM', clockOut: '06:05 PM', status: 'Present', hours: '9.05' },
    { date: '2026-09-09', clockIn: '08:58 AM', clockOut: '05:50 PM', status: 'Present', hours: '8.87' },
    { date: '2026-09-08', clockIn: '09:15 AM', clockOut: '06:10 PM', status: 'Present', hours: '8.92' },
    { date: '2026-09-07', clockIn: '--', clockOut: '--', status: 'Weekend', hours: '--' },
    { date: '2026-09-06', clockIn: '--', clockOut: '--', status: 'Weekend', hours: '--' },
    { date: '2026-09-05', clockIn: '09:30 AM', clockOut: '06:02 PM', status: 'Late', hours: '8.53' },
    { date: '2026-09-04', clockIn: '08:55 AM', clockOut: '05:58 PM', status: 'Present', hours: '9.05' },
    { date: '2026-09-03', clockIn: '--', clockOut: '--', status: 'Absent', hours: '--' },
  ];

  leaveHistory = [
    { type: 'Annual Leave', from: '2026-08-20', to: '2026-08-24', days: 5, status: 'Approved', reason: 'Family vacation' },
    { type: 'Sick Leave', from: '2026-07-10', to: '2026-07-11', days: 2, status: 'Approved', reason: 'Medical appointment' },
    { type: 'Personal Leave', from: '2026-06-05', to: '2026-06-05', days: 1, status: 'Rejected', reason: 'Personal matter' },
    { type: 'Annual Leave', from: '2026-05-15', to: '2026-05-17', days: 3, status: 'Approved', reason: 'Short trip' },
  ];

  documents = [
    { name: 'Resume_JohnSmith.pdf', type: 'PDF', size: '245 KB', uploadedDate: '2023-01-10' },
    { name: 'ID_Proof.pdf', type: 'PDF', size: '1.2 MB', uploadedDate: '2023-01-10' },
    { name: 'Offer_Letter.pdf', type: 'PDF', size: '180 KB', uploadedDate: '2023-01-12' },
    { name: 'Experience_Certificate.pdf', type: 'PDF', size: '320 KB', uploadedDate: '2023-01-12' },
  ];

  performance = {
    rating: 4.5,
    goalScore: 88,
    competencyScore: 92,
    comments: 'Excellent performer with strong technical skills and great team collaboration. Consistently delivers high-quality work and mentors junior developers effectively.'
  };

  activities = [
    { icon: 'fas fa-file-alt', text: 'Updated project documentation', time: '2 hours ago', color: '#6366f1' },
    { icon: 'fas fa-check-circle', text: 'Completed sprint task: API integration', time: '5 hours ago', color: '#22c55e' },
    { icon: 'fas fa-comment', text: 'Commented on code review', time: 'Yesterday', color: '#f59e0b' },
    { icon: 'fas fa-upload', text: 'Uploaded design mockups', time: '2 days ago', color: '#8b5cf6' },
    { icon: 'fas fa-user-plus', text: 'Added to project team', time: '3 days ago', color: '#6366f1' },
    { icon: 'fas fa-calendar-check', text: 'Marked attendance', time: '3 days ago', color: '#22c55e' },
  ];

  constructor(public route: ActivatedRoute) {}

  setTab(id: string): void {
    this.activeTab = id;
  }

  getInitials(): string {
    return this.employee.firstName.charAt(0) + this.employee.lastName.charAt(0);
  }

  getFullName(): string {
    return this.employee.name;
  }
}
