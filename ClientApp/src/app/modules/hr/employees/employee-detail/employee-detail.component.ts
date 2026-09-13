import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  EmployeeService,
  AttendanceService,
  LeaveService,
  DocumentService,
  PerformanceService,
  ToastService
} from '../../../../core/services';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-hr-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class HrEmployeeDetailComponent implements OnInit {
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
    employeeId: 'EMP-24-0003',
    firstName: 'Team',
    lastName: 'Lead',
    name: 'Team Lead',
    email: 'tl@hrm.com',
    phone: '+91-9000000003',
    gender: 'Male',
    dateOfBirth: '1995-05-12',
    maritalStatus: 'Single',
    nationality: 'Indian',
    aadhaarNumber: 'XXXX XXXX 1234',
    panNumber: 'ABCDE1234F',
    bloodGroup: 'O+',
    religion: 'Hindu',
    address: '123 Main Street',
    city: 'Pune',
    state: 'Maharashtra',
    country: 'India',
    postalCode: '411001',
    emergencyContactName: 'John Smith',
    emergencyContactPhone: '+91-9876543210',
    emergencyContactRelation: 'Spouse',
    department: 'Engineering',
    designation: 'Team Lead',
    branch: 'Pune Office',
    joiningDate: '2024-01-15',
    employmentType: 'Full Time',
    reportingManager: 'John Smith',
    bankName: 'HDFC Bank',
    accountNumber: '987654321012',
    ifscCode: 'HDFC0001234',
    basicSalary: 120000,
    allowances: 15000,
    status: 'ACTIVE',
    exitDate: '',
    exitReason: '',
    avatar: '',
    quote: 'Leading teams to build better solutions.'
  };

  attendance: any[] = [];
  leaveHistory: any[] = [];
  documents: any[] = [];
  performance: any = { rating: 4.8, goalScore: 92, competencyScore: 88, comments: 'Exceptional team leadership and domain expertise.' };
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
          employeeId: e.employeeId || 'EMP-24-0003',
          firstName: e.firstName || 'Team',
          lastName: e.lastName || 'Lead',
          name: `${e.firstName || 'Team'} ${e.lastName || 'Lead'}`.trim(),
          email: e.email || 'tl@hrm.com',
          phone: e.phone || '+91-9000000003',
          gender: e.gender || 'Male',
          dateOfBirth: e.dateOfBirth ? String(e.dateOfBirth).slice(0, 10) : '1995-05-12',
          maritalStatus: e.maritalStatus || 'Single',
          nationality: e.nationality || 'Indian',
          aadhaarNumber: e.aadhaarNumber || 'XXXX XXXX 1234',
          panNumber: e.panNumber || 'ABCDE1234F',
          bloodGroup: e.bloodGroup || 'O+',
          religion: e.religion || 'Hindu',
          address: e.address || '123 Main Street',
          city: e.city || 'Pune',
          state: e.state || 'Maharashtra',
          country: e.country || 'India',
          postalCode: e.zipCode || e.postalCode || '411001',
          emergencyContactName: e.emergencyContactName || 'John Smith',
          emergencyContactPhone: e.emergencyContactPhone || '+91-9876543210',
          emergencyContactRelation: e.emergencyContactRelation || 'Spouse',
          department: e.department || 'Engineering',
          designation: e.designation || 'Team Lead',
          branch: e.branch || 'Pune Office',
          joiningDate: e.joiningDate ? String(e.joiningDate).slice(0, 10) : '2024-01-15',
          employmentType: e.employmentType || 'Full Time',
          reportingManager: e.reportingManagerName || 'John Smith',
          bankName: e.bankName || 'HDFC Bank',
          accountNumber: e.bankAccountNumber || '987654321012',
          ifscCode: e.ifscCode || 'HDFC0001234',
          basicSalary: e.salary || 120000,
          allowances: 15000,
          status: e.employmentStatus || 'ACTIVE',
          exitDate: e.exitDate || '',
          exitReason: e.exitReason || '',
          avatar: e.avatar || '',
          quote: e.quote || 'Leading teams to build better solutions.'
        };
        this.loadSubData(id);
      },
      error: () => this.toast.error('Failed to load employee')
    });
  }

  get isActive(): boolean {
    return this.employee.status === 'ACTIVE' || this.employee.status === 'PROBATION' || this.employee.status === 'NOTICE';
  }

  changeStatus(): void {
    if (this.isActive) {
      const exitDate = prompt('Exit date (YYYY-MM-DD):', new Date().toISOString().slice(0, 10));
      if (exitDate === null) return;
      const exitReason = prompt('Exit reason (optional):') ?? '';
      this.employeeService.setEmploymentStatus(this.employee.id, 'INACTIVE', exitDate, exitReason).subscribe({
        next: () => {
          this.employee.status = 'INACTIVE';
          this.employee.exitDate = exitDate;
          this.employee.exitReason = exitReason;
          this.toast.success('Employee deactivated');
        },
        error: () => this.toast.error('Failed to deactivate employee')
      });
    } else {
      this.employeeService.setEmploymentStatus(this.employee.id, 'ACTIVE').subscribe({
        next: () => {
          this.employee.status = 'ACTIVE';
          this.employee.exitDate = '';
          this.employee.exitReason = '';
          this.toast.success('Employee reactivated');
        },
        error: () => this.toast.error('Failed to reactivate employee')
      });
    }
  }

  loadSubData(employeeId: string): void {
    this.attendanceService.getByEmployee(employeeId).subscribe({
      next: (data: any) => this.attendance = (data || []).map((a: any) => ({
        date: a.date ? String(a.date).slice(0, 10) : '—',
        clockIn: this.formatTime(a.checkIn),
        clockOut: this.formatTime(a.checkOut),
        status: this.statusLabel(a.status),
        hours: this.formatHours(a.workHours)
      })),
      error: () => this.toast.error('Failed to load attendance')
    });

    this.leaveService.getByEmployee(employeeId).subscribe({
      next: (data: any) => this.leaveHistory = (data || []).map((l: any) => ({
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
      next: (data: any) => this.documents = (data || []).map((d: any) => ({
        name: d.name,
        type: d.type,
        size: this.formatSize(d.fileSize),
        uploadedDate: d.uploadedAt
      })),
      error: () => this.toast.error('Failed to load documents')
    });

    this.performanceService.getReviewsByEmployee(employeeId).subscribe({
      next: (data: any) => {
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

  formatTime(value?: any): string {
    if (!value || value === '—' || value === '--' || value === 'null') return '—';
    const str = String(value).trim();
    if (str === '—' || str === '--') return '—';
    
    if (str.includes('AM') || str.includes('PM')) return str;

    if (str.includes('T') || str.includes('-')) {
      const d = new Date(str);
      if (!isNaN(d.getTime())) {
        return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
      }
    }

    if (str.includes(':')) {
      const parts = str.split(':');
      let hours = parseInt(parts[0], 10);
      const minutes = parts[1] ? parts[1].slice(0, 2) : '00';
      if (!isNaN(hours)) {
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const hStr = String(hours).padStart(2, '0');
        return `${hStr}:${minutes} ${ampm}`;
      }
    }

    return str;
  }

  formatHours(value?: any): string {
    if (value === null || value === undefined || value === '' || value === '—' || value === '--') return '—';
    
    const strVal = String(value).replace(/hrs|hr|h|m/gi, '').trim();
    const num = parseFloat(strVal);
    if (isNaN(num) || num <= 0) return '0 hrs';

    const totalMinutes = Math.round(num * 60);
    if (totalMinutes < 1) return '< 1 min';
    
    const h = Math.floor(totalMinutes / 60);
    const m = totalMinutes % 60;
    
    if (h === 0) return `${m} mins`;
    if (m === 0) return `${h} hrs`;
    return `${h}h ${m}m`;
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

  resolveImage(url?: string): string {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) return url;
    return environment.apiBaseUrl.replace(/\/api$/, '') + url;
  }
}
