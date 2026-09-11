import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  EmployeeService,
  AttendanceService,
  LeaveService,
  DocumentService,
  PerformanceService,
  ToastService
} from '../../../core/services';

@Component({
  selector: 'app-admin-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class AdminEmployeeDetailComponent implements OnInit {
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

  employee: any = {
    employeeId: '',
    firstName: '',
    lastName: '',
    name: '',
    email: '',
    phone: '',
    gender: '',
    dateOfBirth: '',
    maritalStatus: '',
    nationality: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelation: '',
    department: '',
    designation: '',
    branch: '',
    joiningDate: '',
    employmentType: '',
    reportingManager: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    basicSalary: 0,
    allowances: 0,
    status: 'ACTIVE',
    avatar: ''
  };

  attendance: any[] = [];
  leaveHistory: any[] = [];
  documents: any[] = [];
  performance: any = { rating: 0, goalScore: 0, competencyScore: 0, comments: '' };
  activities: any[] = [];

  constructor(
    public route: ActivatedRoute,
    private employeeService: EmployeeService,
    private attendanceService: AttendanceService,
    private leaveService: LeaveService,
    private documentService: DocumentService,
    private performanceService: PerformanceService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.loadEmployee(id);
      }
    });
  }

  loadEmployee(id: string): void {
    this.employeeService.getEmployee(id).subscribe({
      next: (e: any) => {
        this.employee = {
          id: e.id,
          employeeId: e.employeeId,
          firstName: e.firstName,
          lastName: e.lastName,
          name: `${e.firstName} ${e.lastName}`.trim(),
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
          department: e.department,
          designation: e.designation,
          branch: e.branch,
          joiningDate: e.joiningDate,
          employmentType: e.employmentType,
          reportingManager: e.reportingManagerName || '',
          bankName: e.bankName,
          accountNumber: e.bankAccountNumber,
          ifscCode: e.ifscCode,
          basicSalary: e.salary || 0,
          allowances: 0,
          status: e.employmentStatus || 'ACTIVE',
          avatar: e.avatar || ''
        };
        this.loadSubData(id);
      },
      error: () => this.toast.error('Failed to load employee')
    });
  }

  loadSubData(employeeId: string): void {
    this.attendanceService.getByEmployee(employeeId).subscribe({
      next: (data) => this.attendance = (data || []).map((a: any) => ({
        date: a.date,
        clockIn: a.checkIn || '--',
        clockOut: a.checkOut || '--',
        status: this.statusLabel(a.status),
        hours: a.workHours ? String(a.workHours) : '--'
      })),
      error: () => this.toast.error('Failed to load attendance')
    });

    this.leaveService.getByEmployee(employeeId).subscribe({
      next: (data) => this.leaveHistory = (data || []).map((l: any) => ({
        type: l.leaveType,
        from: l.startDate,
        to: l.endDate,
        days: l.totalDays,
        status: this.capitalizeFirst(l.status || ''),
        reason: l.reason
      })),
      error: () => this.toast.error('Failed to load leave history')
    });

    this.documentService.getDocuments(employeeId).subscribe({
      next: (data) => this.documents = (data || []).map((d: any) => ({
        name: d.name,
        type: d.type,
        size: this.formatSize(d.fileSize),
        uploadedDate: d.uploadedAt
      })),
      error: () => this.toast.error('Failed to load documents')
    });

    this.performanceService.getReviewsByEmployee(employeeId).subscribe({
      next: (data) => {
        if (data && data.length) {
          const latest = data[0];
          this.performance = {
            rating: latest.overallRating || 0,
            goalScore: Math.round((latest.goalsRating || 0)),
            competencyScore: Math.round((latest.competencyRating || 0)),
            comments: latest.comments || ''
          };
        }
      },
      error: () => this.toast.error('Failed to load performance data')
    });
  }

  private statusLabel(status: string): string {
    switch (status) {
      case 'PRESENT': return 'Present';
      case 'ABSENT': return 'Absent';
      case 'LATE': return 'Late';
      case 'HALF_DAY': return 'Half Day';
      case 'ON_LEAVE': return 'On Leave';
      case 'WEEK_OFF': return 'Weekend';
      case 'HOLIDAY': return 'Holiday';
      default: return status || '';
    }
  }

  private capitalizeFirst(value: string): string {
    if (!value) return value;
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

  private formatSize(bytes: number): string {
    if (!bytes) return '—';
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }

  setTab(id: string): void {
    this.activeTab = id;
  }

  getInitials(): string {
    return (this.employee.firstName.charAt(0) + this.employee.lastName.charAt(0)).toUpperCase();
  }

  getFullName(): string {
    return this.employee.name;
  }
}