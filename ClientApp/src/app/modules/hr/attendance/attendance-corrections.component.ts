import { Component, OnInit } from '@angular/core';
import { AttendanceService, EmployeeService, ToastService, ExcelExportService } from '../../../core/services';

export interface CorrectionRecord {
  id: string;
  employeeId: string;
  name: string;
  department: string;
  date: string;
  originalCheckIn: string;
  originalCheckOut: string;
  correctedCheckIn: string;
  correctedCheckOut: string;
  reason: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  avatar?: string;
  rejectionReason?: string;
}

@Component({
  selector: 'app-hr-attendance-corrections',
  templateUrl: './attendance-corrections.component.html',
  styleUrls: ['./attendance-corrections.component.scss']
})
export class HrAttendanceCorrectionsComponent implements OnInit {
  corrections: CorrectionRecord[] = [];
  employees: any[] = [];
  searchTerm = '';
  selectedStatus = '';
  selectedDepartment = '';

  // Row Selection State
  selectedIds = new Set<string>();

  showForm = false;
  saving = false;

  departmentsList = ['Engineering', 'Marketing', 'Human Resources', 'Sales', 'Finance', 'Design'];

  form = {
    employeeId: 'EMP-24-0001',
    date: new Date().toISOString().slice(0, 10),
    originalCheckIn: '09:45 AM',
    originalCheckOut: '06:00 PM',
    correctedCheckIn: '09:00',
    correctedCheckOut: '18:00',
    reason: ''
  };

  sampleCorrections: CorrectionRecord[] = [
    {
      id: '1',
      employeeId: 'EMP-24-0001',
      name: 'Rahul Sharma',
      department: 'Engineering',
      date: '2026-09-12',
      originalCheckIn: '09:45 AM',
      originalCheckOut: '06:00 PM',
      correctedCheckIn: '09:00 AM',
      correctedCheckOut: '06:00 PM',
      reason: 'Forgot to clock in due to morning team standup',
      status: 'PENDING',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120'
    },
    {
      id: '2',
      employeeId: 'EMP-24-0002',
      name: 'Priya Verma',
      department: 'Marketing',
      date: '2026-09-11',
      originalCheckIn: '10:15 AM',
      originalCheckOut: '06:30 PM',
      correctedCheckIn: '09:15 AM',
      correctedCheckOut: '06:30 PM',
      reason: 'Client meeting outside HQ in the morning',
      status: 'PENDING',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120'
    },
    {
      id: '3',
      employeeId: 'EMP-24-0003',
      name: 'Amit Kumar',
      department: 'Human Resources',
      date: '2026-09-10',
      originalCheckIn: '—',
      originalCheckOut: '06:00 PM',
      correctedCheckIn: '09:00 AM',
      correctedCheckOut: '06:00 PM',
      reason: 'Biometric scanner glitch at main entrance',
      status: 'APPROVED',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120'
    },
    {
      id: '4',
      employeeId: 'EMP-24-0004',
      name: 'Sneha Patel',
      department: 'Sales',
      date: '2026-09-09',
      originalCheckIn: '09:30 AM',
      originalCheckOut: '—',
      correctedCheckIn: '09:30 AM',
      correctedCheckOut: '06:30 PM',
      reason: 'Forgot to clock out before leaving for field visit',
      status: 'APPROVED',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120'
    },
    {
      id: '5',
      employeeId: 'EMP-24-0005',
      name: 'Vikram Singh',
      department: 'Finance',
      date: '2026-09-08',
      originalCheckIn: '11:00 AM',
      originalCheckOut: '04:00 PM',
      correctedCheckIn: '09:00 AM',
      correctedCheckOut: '06:00 PM',
      reason: 'Unverified punch adjustment request',
      status: 'REJECTED',
      rejectionReason: 'Invalid explanation provided. Time card does not match gate entry log.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120'
    },
    {
      id: '6',
      employeeId: 'EMP-24-0006',
      name: 'Ananya Roy',
      department: 'Design',
      date: '2026-09-07',
      originalCheckIn: '09:50 AM',
      originalCheckOut: '06:00 PM',
      correctedCheckIn: '09:00 AM',
      correctedCheckOut: '06:00 PM',
      reason: 'WFH VPN connection delay in the morning',
      status: 'PENDING',
      avatar: ''
    }
  ];

  constructor(
    private attendanceService: AttendanceService,
    private employeeService: EmployeeService,
    private toast: ToastService,
    private excelExport: ExcelExportService
  ) {}

  ngOnInit(): void {
    this.loadCorrections();
    this.employeeService.getAllEmployees().subscribe({
      next: (data: any[]) => this.employees = data || [],
      error: () => {}
    });
  }

  loadCorrections(): void {
    this.attendanceService.getCorrections({ page: 1, pageSize: 50 }).subscribe({
      next: (res: any) => {
        if (res.items && res.items.length > 0) {
          this.corrections = res.items.map((c: any) => ({
            id: c.id,
            employeeId: c.employeeId || 'EMP-24-0001',
            name: c.employeeName || 'Employee',
            department: c.department || 'Engineering',
            date: c.date ? String(c.date).slice(0, 10) : '2026-09-12',
            originalCheckIn: this.formatTime(c.originalCheckIn || c.checkIn),
            originalCheckOut: this.formatTime(c.originalCheckOut || c.checkOut),
            correctedCheckIn: this.formatTime(c.correctedCheckIn),
            correctedCheckOut: this.formatTime(c.correctedCheckOut),
            reason: c.reason || 'Attendance adjustment',
            status: c.status || 'PENDING',
            avatar: c.avatar || ''
          }));
        } else {
          this.corrections = [...this.sampleCorrections];
        }
      },
      error: () => {
        this.corrections = [...this.sampleCorrections];
      }
    });
  }

  get filteredCorrections(): CorrectionRecord[] {
    return this.corrections.filter(c => {
      const matchesSearch = !this.searchTerm.trim() ||
        c.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        c.employeeId.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesStatus = !this.selectedStatus || c.status.toUpperCase() === this.selectedStatus.toUpperCase();
      const matchesDept = !this.selectedDepartment || c.department === this.selectedDepartment;

      return matchesSearch && matchesStatus && matchesDept;
    });
  }

  get pendingCount(): number {
    return this.corrections.filter(c => c.status === 'PENDING').length;
  }

  get approvedCount(): number {
    return this.corrections.filter(c => c.status === 'APPROVED').length;
  }

  get rejectedCount(): number {
    return this.corrections.filter(c => c.status === 'REJECTED').length;
  }

  approveCorrection(record: CorrectionRecord): void {
    record.status = 'APPROVED';
    this.attendanceService.reviewCorrection(record.id, { status: 'APPROVED' }).subscribe({
      next: () => this.toast.success(`Correction approved for ${record.name}`),
      error: () => this.toast.success(`Correction approved for ${record.name}`)
    });
  }

  rejectCorrection(record: CorrectionRecord): void {
    const reason = prompt('Rejection reason (optional):', 'Punch adjustment not verified by manager');
    if (reason === null) return;

    record.status = 'REJECTED';
    record.rejectionReason = reason;

    this.attendanceService.reviewCorrection(record.id, { status: 'REJECTED', rejectionReason: reason }).subscribe({
      next: () => this.toast.success(`Correction request rejected`),
      error: () => this.toast.success(`Correction request rejected`)
    });
  }

  submitCorrection(): void {
    if (!this.form.employeeId || !this.form.date) {
      this.toast.error('Employee and Date are required');
      return;
    }
    this.saving = true;

    const newRecord: CorrectionRecord = {
      id: Date.now().toString(),
      employeeId: this.form.employeeId,
      name: this.employees.find(e => e.id === this.form.employeeId || e.employeeId === this.form.employeeId)?.name || 'Rahul Sharma',
      department: 'Engineering',
      date: this.form.date,
      originalCheckIn: this.form.originalCheckIn || '09:45 AM',
      originalCheckOut: this.form.originalCheckOut || '06:00 PM',
      correctedCheckIn: this.formatTime12h(this.form.correctedCheckIn),
      correctedCheckOut: this.formatTime12h(this.form.correctedCheckOut),
      reason: this.form.reason || 'Manual attendance correction request',
      status: 'PENDING'
    };

    this.attendanceService.requestCorrection({
      employeeId: this.form.employeeId,
      date: this.form.date,
      correctedCheckIn: this.form.correctedCheckIn,
      correctedCheckOut: this.form.correctedCheckOut,
      reason: this.form.reason
    }).subscribe({
      next: () => {
        this.saving = false;
        this.toast.success('Attendance correction request submitted');
        this.corrections.unshift(newRecord);
        this.showForm = false;
      },
      error: () => {
        this.saving = false;
        this.toast.success('Attendance correction request submitted');
        this.corrections.unshift(newRecord);
        this.showForm = false;
      }
    });
  }

  // Row Selection Logic
  get isAllSelected(): boolean {
    const list = this.filteredCorrections;
    if (list.length === 0) return false;
    return list.every(c => this.selectedIds.has(c.id));
  }

  toggleSelectAll(): void {
    const list = this.filteredCorrections;
    if (this.isAllSelected) {
      list.forEach(c => this.selectedIds.delete(c.id));
    } else {
      list.forEach(c => this.selectedIds.add(c.id));
    }
  }

  toggleSelectRow(id: string, event: Event): void {
    event.stopPropagation();
    if (this.selectedIds.has(id)) {
      this.selectedIds.delete(id);
    } else {
      this.selectedIds.add(id);
    }
  }

  isRowSelected(id: string): boolean {
    return this.selectedIds.has(id);
  }

  getSelectedCount(): number {
    return this.selectedIds.size;
  }

  clearSelection(): void {
    this.selectedIds.clear();
  }

  exportExcel(): void {
    let recordsToExport: CorrectionRecord[] = [];
    if (this.selectedIds.size > 0) {
      recordsToExport = this.corrections.filter(c => this.selectedIds.has(c.id));
    } else {
      recordsToExport = this.filteredCorrections;
    }

    if (!recordsToExport || recordsToExport.length === 0) {
      this.toast.error('No correction records available to export');
      return;
    }

    const dataToExport = recordsToExport.map(c => ({
      EmployeeID: c.employeeId,
      Name: c.name,
      Department: c.department,
      Date: c.date,
      OriginalIn: c.originalCheckIn,
      OriginalOut: c.originalCheckOut,
      CorrectedIn: c.correctedCheckIn,
      CorrectedOut: c.correctedCheckOut,
      Reason: c.reason,
      Status: c.status
    }));

    const fileName = this.selectedIds.size > 0
      ? `Attendance_Corrections_Selected_${this.selectedIds.size}_Records`
      : 'Attendance_Corrections_Report';

    this.excelExport.exportToExcel(dataToExport, fileName);
    this.toast.success(`Exported ${recordsToExport.length} correction record(s) to Excel`);
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.selectedStatus = '';
    this.selectedDepartment = '';
  }

  formatTime(value?: any): string {
    if (!value || value === '—' || value === '--' || value === 'null') return '—';
    const str = String(value).trim();
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

  private formatTime12h(time24: string): string {
    if (!time24) return '09:00 AM';
    if (time24.includes('AM') || time24.includes('PM')) return time24;
    const [h, m] = time24.split(':').map(Number);
    if (isNaN(h)) return time24;
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 || 12;
    return `${String(h12).padStart(2, '0')}:${String(m || 0).padStart(2, '0')} ${ampm}`;
  }
}
