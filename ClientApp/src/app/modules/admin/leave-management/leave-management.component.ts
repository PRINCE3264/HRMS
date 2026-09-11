import { Component, OnInit } from '@angular/core';
import { LeaveService, ToastService } from '../../../core/services';
import { TableColumn } from '../../../core/models';

@Component({
  selector: 'app-admin-leave',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.scss']
})
export class AdminLeaveComponent implements OnInit {
  columns: TableColumn[] = [
    { key: 'employeeId', label: 'ID', sortable: true, width: '100px' },
    { key: 'name', label: 'Employee', sortable: true },
    { key: 'leaveType', label: 'Leave Type', sortable: true },
    { key: 'fromDate', label: 'From', type: 'date', sortable: true },
    { key: 'toDate', label: 'To', type: 'date', sortable: true },
    { key: 'days', label: 'Days', sortable: true },
    { key: 'reason', label: 'Reason' },
    { key: 'status', label: 'Status', type: 'status' }
  ];
  tableActions = [
    { label: 'Approve', icon: 'fas fa-check', action: 'approve', color: '#10b981' },
    { label: 'Reject', icon: 'fas fa-times', action: 'reject', color: '#ef4444' },
    { label: 'View', icon: 'fas fa-eye', action: 'view', color: '#3b82f6' }
  ];
  leaveRequests: any[] = [];

  constructor(private leaveService: LeaveService, private toast: ToastService) {}

  ngOnInit(): void {
    this.loadLeaveRequests();
  }

  loadLeaveRequests(): void {
    this.leaveService.getRequests({ page: 1, pageSize: 50 }).subscribe({
      next: (res) => this.leaveRequests = res.items.map((lr: any) => ({
        id: lr.id,
        employeeId: lr.employeeId,
        name: lr.employeeName,
        leaveType: lr.leaveType,
        fromDate: lr.startDate,
        toDate: lr.endDate,
        days: lr.totalDays,
        reason: lr.reason,
        status: lr.status
      })),
      error: () => this.toast.error('Failed to load leave requests')
    });
  }

  onAction(event: { action: string; row: any }): void {
    if (event.action === 'approve') {
      this.leaveService.approveOrReject(event.row.id, 'APPROVED' as any).subscribe({
        next: () => { this.toast.success('Leave approved'); this.loadLeaveRequests(); },
        error: () => this.toast.error('Failed to approve leave')
      });
    } else if (event.action === 'reject') {
      this.leaveService.approveOrReject(event.row.id, 'REJECTED' as any).subscribe({
        next: () => { this.toast.success('Leave rejected'); this.loadLeaveRequests(); },
        error: () => this.toast.error('Failed to reject leave')
      });
    }
  }
}
