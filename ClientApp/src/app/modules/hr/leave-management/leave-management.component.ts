import { Component, OnInit } from '@angular/core';
import { LeaveService, ToastService, ExcelExportService } from '../../../core/services';

export interface AdminLeaveRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;
  avatar?: string;
  leaveType: string;
  fromDate: string;
  toDate: string;
  days: number;
  reason: string;
  appliedOn: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'CANCELLED';
  rejectionReason?: string;
}

export interface LeaveBalanceOverview {
  employeeId: string;
  employeeName: string;
  department: string;
  avatar?: string;
  annualTaken: number;
  annualTotal: number;
  sickTaken: number;
  sickTotal: number;
  casualTaken: number;
  casualTotal: number;
  totalRemaining: number;
}

@Component({
  selector: 'app-hr-leave',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.scss']
})
export class HrLeaveComponent implements OnInit {
  activeTab: 'pending' | 'approved' | 'rejected' | 'balance' = 'pending';

  leaveRequests: AdminLeaveRecord[] = [];
  leaveBalances: LeaveBalanceOverview[] = [];
  searchTerm = '';
  selectedType = '';
  loading = false;

  // Row Selection State
  selectedIds = new Set<string>();

  // Selected Record for Details Modal
  selectedRequest: AdminLeaveRecord | null = null;
  showDetailsModal = false;
  showRejectModal = false;
  rejectReasonInput = '';
  rejectingRecord: AdminLeaveRecord | null = null;

  leaveTypes = ['Casual Leave', 'Sick Leave', 'Annual Leave', 'Maternity Leave', 'Paternity Leave', 'Earned Leave'];

  // Metrics
  metrics = {
    pending: 0,
    approved: 0,
    rejected: 0,
    onLeaveToday: 0
  };

  private sampleLeaveRequests: AdminLeaveRecord[] = [
    {
      id: 'leave-101',
      employeeId: 'EMP-24-0001',
      employeeName: 'Rahul Sharma',
      department: 'Engineering',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120',
      leaveType: 'Casual Leave',
      fromDate: '2026-09-15',
      toDate: '2026-09-17',
      days: 3,
      reason: 'Attending family function in hometown',
      appliedOn: '2026-09-12',
      status: 'PENDING'
    },
    {
      id: 'leave-102',
      employeeId: 'EMP-24-0002',
      employeeName: 'Priya Verma',
      department: 'Marketing',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120',
      leaveType: 'Sick Leave',
      fromDate: '2026-09-11',
      toDate: '2026-09-12',
      days: 2,
      reason: 'Severe viral fever and flu, advised bed rest by doctor',
      appliedOn: '2026-09-10',
      status: 'APPROVED'
    },
    {
      id: 'leave-103',
      employeeId: 'EMP-24-0003',
      employeeName: 'Amit Kumar',
      department: 'Human Resources',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
      leaveType: 'Annual Leave',
      fromDate: '2026-09-20',
      toDate: '2026-09-25',
      days: 6,
      reason: 'Planned family vacation to Himachal',
      appliedOn: '2026-09-08',
      status: 'PENDING'
    },
    {
      id: 'leave-104',
      employeeId: 'EMP-24-0004',
      employeeName: 'Neha Gupta',
      department: 'Sales',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120',
      leaveType: 'Maternity Leave',
      fromDate: '2026-10-01',
      toDate: '2026-12-31',
      days: 90,
      reason: 'Standard 90-day maternity leave application supported by medical certification',
      appliedOn: '2026-09-05',
      status: 'APPROVED'
    },
    {
      id: 'leave-105',
      employeeId: 'EMP-24-0005',
      employeeName: 'Vikram Singh',
      department: 'Finance',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120',
      leaveType: 'Casual Leave',
      fromDate: '2026-09-14',
      toDate: '2026-09-14',
      days: 1,
      reason: 'Urgent personal work at bank and registrar office',
      appliedOn: '2026-09-11',
      status: 'PENDING'
    },
    {
      id: 'leave-106',
      employeeId: 'EMP-24-0006',
      employeeName: 'Ananya Roy',
      department: 'Design',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120',
      leaveType: 'Earned Leave',
      fromDate: '2026-09-01',
      toDate: '2026-09-03',
      days: 3,
      reason: 'Personal work',
      appliedOn: '2026-08-28',
      status: 'REJECTED',
      rejectionReason: 'Overlapping sprint launch deadline with core design deliverables'
    },
    {
      id: 'leave-107',
      employeeId: 'EMP-24-0007',
      employeeName: 'Rajesh Patel',
      department: 'Engineering',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=120',
      leaveType: 'Paternity Leave',
      fromDate: '2026-09-18',
      toDate: '2026-09-24',
      days: 7,
      reason: 'Paternity leave for newborn child care',
      appliedOn: '2026-09-09',
      status: 'PENDING'
    },
    {
      id: 'leave-108',
      employeeId: 'EMP-24-0008',
      employeeName: 'Pooja Mehta',
      department: 'Marketing',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120',
      leaveType: 'Sick Leave',
      fromDate: '2026-09-13',
      toDate: '2026-09-13',
      days: 1,
      reason: 'Severe migraine headache',
      appliedOn: '2026-09-13',
      status: 'APPROVED'
    }
  ];

  private sampleLeaveBalances: LeaveBalanceOverview[] = [
    { employeeId: 'EMP-24-0001', employeeName: 'Rahul Sharma', department: 'Engineering', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120', annualTaken: 5, annualTotal: 15, sickTaken: 2, sickTotal: 10, casualTaken: 3, casualTotal: 7, totalRemaining: 22 },
    { employeeId: 'EMP-24-0002', employeeName: 'Priya Verma', department: 'Marketing', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120', annualTaken: 2, annualTotal: 15, sickTaken: 4, sickTotal: 10, casualTaken: 1, casualTotal: 7, totalRemaining: 25 },
    { employeeId: 'EMP-24-0003', employeeName: 'Amit Kumar', department: 'Human Resources', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120', annualTaken: 8, annualTotal: 15, sickTaken: 1, sickTotal: 10, casualTaken: 2, casualTotal: 7, totalRemaining: 21 },
    { employeeId: 'EMP-24-0004', employeeName: 'Neha Gupta', department: 'Sales', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120', annualTaken: 10, annualTotal: 15, sickTaken: 3, sickTotal: 10, casualTaken: 4, casualTotal: 7, totalRemaining: 15 },
    { employeeId: 'EMP-24-0005', employeeName: 'Vikram Singh', department: 'Finance', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120', annualTaken: 4, annualTotal: 15, sickTaken: 0, sickTotal: 10, casualTaken: 2, casualTotal: 7, totalRemaining: 26 },
    { employeeId: 'EMP-24-0006', employeeName: 'Ananya Roy', department: 'Design', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120', annualTaken: 6, annualTotal: 15, sickTaken: 2, sickTotal: 10, casualTaken: 1, casualTotal: 7, totalRemaining: 23 },
    { employeeId: 'EMP-24-0007', employeeName: 'Rajesh Patel', department: 'Engineering', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=120', annualTaken: 3, annualTotal: 15, sickTaken: 1, sickTotal: 10, casualTaken: 0, casualTotal: 7, totalRemaining: 28 },
    { employeeId: 'EMP-24-0008', employeeName: 'Pooja Mehta', department: 'Marketing', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120', annualTaken: 1, annualTotal: 15, sickTaken: 3, sickTotal: 10, casualTaken: 2, casualTotal: 7, totalRemaining: 26 }
  ];

  constructor(
    private leaveService: LeaveService,
    private toast: ToastService,
    private excelExport: ExcelExportService
  ) {}

  ngOnInit(): void {
    this.loadLeaveRequests();
    this.leaveBalances = [...this.sampleLeaveBalances];
  }

  switchTab(tab: 'pending' | 'approved' | 'rejected' | 'balance'): void {
    this.activeTab = tab;
    this.clearSelection();
  }

  loadLeaveRequests(): void {
    this.loading = true;
    const local = localStorage.getItem('hrm_hr_leaves');
    if (local) {
      try {
        this.leaveRequests = JSON.parse(local);
        this.calculateMetrics();
        this.loading = false;
        return;
      } catch (e) {
        console.error('Failed to parse local leave records', e);
      }
    }

    this.leaveService.getRequests({ page: 1, pageSize: 100 }).subscribe({
      next: (res) => {
        if (res && res.items && res.items.length > 0) {
          this.leaveRequests = res.items.map((lr: any, idx: number) => this.enhanceLeaveRecord(lr, idx));
        } else {
          this.leaveRequests = [...this.sampleLeaveRequests];
        }
        this.saveToStorage();
        this.calculateMetrics();
        this.loading = false;
      },
      error: () => {
        this.leaveRequests = [...this.sampleLeaveRequests];
        this.saveToStorage();
        this.calculateMetrics();
        this.loading = false;
      }
    });
  }

  private enhanceLeaveRecord(lr: any, idx: number): AdminLeaveRecord {
    const sample = this.sampleLeaveRequests[idx % this.sampleLeaveRequests.length];
    return {
      id: lr.id || `leave-${idx + 1}`,
      employeeId: lr.employeeId || sample.employeeId,
      employeeName: lr.employeeName || sample.employeeName,
      department: lr.department || sample.department,
      avatar: sample.avatar,
      leaveType: lr.leaveType || sample.leaveType,
      fromDate: lr.startDate ? lr.startDate.slice(0, 10) : sample.fromDate,
      toDate: lr.endDate ? lr.endDate.slice(0, 10) : sample.toDate,
      days: lr.totalDays ?? sample.days,
      reason: lr.reason || sample.reason,
      appliedOn: lr.createdAt ? lr.createdAt.slice(0, 10) : sample.appliedOn,
      status: lr.status || sample.status,
      rejectionReason: lr.rejectionReason || sample.rejectionReason
    };
  }

  calculateMetrics(): void {
    const today = new Date().toISOString().slice(0, 10);
    this.metrics.pending = this.leaveRequests.filter(r => r.status === 'PENDING').length;
    this.metrics.approved = this.leaveRequests.filter(r => r.status === 'APPROVED').length;
    this.metrics.rejected = this.leaveRequests.filter(r => r.status === 'REJECTED').length;
    this.metrics.onLeaveToday = this.leaveRequests.filter(r =>
      r.status === 'APPROVED' && r.fromDate <= today && r.toDate >= today
    ).length;
  }

  get countPending(): number {
    return this.leaveRequests.filter(r => r.status === 'PENDING').length;
  }

  get countApproved(): number {
    return this.leaveRequests.filter(r => r.status === 'APPROVED').length;
  }

  get countRejected(): number {
    return this.leaveRequests.filter(r => r.status === 'REJECTED').length;
  }

  get filteredRequests(): AdminLeaveRecord[] {
    const targetStatus = this.activeTab.toUpperCase();

    return this.leaveRequests.filter(r => {
      const matchStatus = r.status === targetStatus;

      const matchSearch = !this.searchTerm ||
        r.employeeName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        r.employeeId.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        r.department.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        r.reason.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchType = !this.selectedType || r.leaveType === this.selectedType;

      return matchStatus && matchSearch && matchType;
    });
  }

  get filteredBalances(): LeaveBalanceOverview[] {
    return this.leaveBalances.filter(b => {
      return !this.searchTerm ||
        b.employeeName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        b.employeeId.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        b.department.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  // Row Selection Logic
  get isAllSelected(): boolean {
    const list = this.filteredRequests;
    if (list.length === 0) return false;
    return list.every(r => this.selectedIds.has(r.id));
  }

  get isSomeSelected(): boolean {
    const list = this.filteredRequests;
    if (list.length === 0) return false;
    return list.some(r => this.selectedIds.has(r.id)) && !this.isAllSelected;
  }

  toggleSelectAll(): void {
    const list = this.filteredRequests;
    if (this.isAllSelected) {
      list.forEach(r => this.selectedIds.delete(r.id));
    } else {
      list.forEach(r => this.selectedIds.add(r.id));
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

  approveLeave(record: AdminLeaveRecord, event?: Event): void {
    if (event) event.stopPropagation();
    record.status = 'APPROVED';
    this.saveToStorage();
    this.calculateMetrics();

    this.leaveService.approveOrReject(record.id, 'APPROVED' as any).subscribe({
      next: () => {},
      error: () => {}
    });

    this.toast.success(`Leave request for ${record.employeeName} approved`);
    if (this.selectedRequest?.id === record.id) {
      this.selectedRequest.status = 'APPROVED';
    }
  }

  openRejectModal(record: AdminLeaveRecord, event?: Event): void {
    if (event) event.stopPropagation();
    this.rejectingRecord = record;
    this.rejectReasonInput = '';
    this.showRejectModal = true;
  }

  confirmReject(): void {
    if (!this.rejectingRecord) return;
    this.rejectingRecord.status = 'REJECTED';
    this.rejectingRecord.rejectionReason = this.rejectReasonInput.trim() || 'Not specified';
    this.saveToStorage();
    this.calculateMetrics();

    this.leaveService.approveOrReject(this.rejectingRecord.id, 'REJECTED' as any).subscribe({
      next: () => {},
      error: () => {}
    });

    this.toast.success(`Leave request for ${this.rejectingRecord.employeeName} rejected`);
    if (this.selectedRequest?.id === this.rejectingRecord.id) {
      this.selectedRequest.status = 'REJECTED';
      this.selectedRequest.rejectionReason = this.rejectingRecord.rejectionReason;
    }
    this.showRejectModal = false;
    this.rejectingRecord = null;
  }

  viewDetails(record: AdminLeaveRecord): void {
    this.selectedRequest = record;
    this.showDetailsModal = true;
  }

  exportToExcel(): void {
    if (this.activeTab === 'balance') {
      const exportData = this.filteredBalances.map(b => ({
        'Employee Code': b.employeeId,
        'Employee Name': b.employeeName,
        'Department': b.department,
        'Annual Taken': b.annualTaken,
        'Annual Total': b.annualTotal,
        'Sick Taken': b.sickTaken,
        'Sick Total': b.sickTotal,
        'Casual Taken': b.casualTaken,
        'Casual Total': b.casualTotal,
        'Total Remaining': b.totalRemaining
      }));
      this.excelExport.exportToExcel(exportData, `Leave_Balances_${new Date().toISOString().slice(0, 10)}`);
      this.toast.success(`Exported leave balance overview to Excel`);
      return;
    }

    let recordsToExport: AdminLeaveRecord[] = [];
    if (this.selectedIds.size > 0) {
      recordsToExport = this.leaveRequests.filter(r => this.selectedIds.has(r.id));
    } else {
      recordsToExport = this.filteredRequests;
    }

    if (recordsToExport.length === 0) {
      this.toast.error('No records available to export');
      return;
    }

    const exportData = recordsToExport.map(r => ({
      'Employee Code': r.employeeId,
      'Employee Name': r.employeeName,
      'Department': r.department,
      'Leave Type': r.leaveType,
      'Start Date': r.fromDate,
      'End Date': r.toDate,
      'Total Days': r.days,
      'Reason': r.reason,
      'Applied On': r.appliedOn,
      'Status': r.status,
      'Rejection Reason': r.rejectionReason || 'N/A'
    }));

    const fileName = this.selectedIds.size > 0
      ? `Leave_Requests_${this.activeTab}_Selected_${this.selectedIds.size}_Records`
      : `Leave_Requests_${this.activeTab}_${new Date().toISOString().slice(0, 10)}`;

    this.excelExport.exportToExcel(exportData, fileName);
    this.toast.success(`Exported ${recordsToExport.length} leave record(s) to Excel`);
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'APPROVED': return 'badge-success';
      case 'PENDING': return 'badge-warning';
      case 'REJECTED': return 'badge-danger';
      default: return 'badge-secondary';
    }
  }

  private saveToStorage(): void {
    localStorage.setItem('hrm_hr_leaves', JSON.stringify(this.leaveRequests));
  }
}
