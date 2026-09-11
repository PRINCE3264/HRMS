import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { LeaveService, ToastService } from '../../../core/services';
import { LeaveStatus } from '../../../core/models';

@Component({
  selector: 'app-tl-leave',
  templateUrl: './team-leave.component.html',
  styleUrls: ['./team-leave.component.scss']
})
export class TlLeaveComponent implements OnInit {
  pendingRequests: any[] = [];
  leaveHistory: any[] = [];

  constructor(
    private leaveService: LeaveService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    forkJoin({
      pending: this.leaveService.getPending(),
      approved: this.leaveService.getRequests({ status: 'APPROVED' }),
      rejected: this.leaveService.getRequests({ status: 'REJECTED' })
    }).subscribe(({ pending, approved, rejected }) => {
      this.pendingRequests = pending.map(r => this.mapLeave(r));
      const all = [...approved.items.map(r => this.mapLeaveHistory(r)), ...rejected.items.map(r => this.mapLeaveHistory(r))];
      this.leaveHistory = all.sort((a, b) => new Date(b.from).getTime() - new Date(a.from).getTime());
    });
  }

  private mapLeave(r: any) {
    return {
      id: r.id,
      name: r.employeeName,
      type: r.leaveType,
      from: this.formatDate(r.startDate),
      to: this.formatDate(r.endDate),
      days: r.totalDays,
      reason: r.reason,
      appliedOn: this.formatDate(r.createdAt)
    };
  }

  private mapLeaveHistory(r: any) {
    return {
      id: r.id,
      name: r.employeeName,
      type: r.leaveType,
      from: this.formatDate(r.startDate),
      to: this.formatDate(r.endDate),
      days: r.totalDays,
      status: r.status,
      reviewedBy: r.approvedBy || 'System'
    };
  }

  private formatDate(d: string): string {
    return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  get approvedCount() { return this.leaveHistory.filter(h => h.status === 'APPROVED').length; }
  get rejectedCount() { return this.leaveHistory.filter(h => h.status === 'REJECTED').length; }
  get onLeaveCount() { return this.leaveHistory.filter(h => h.status === 'APPROVED').length; }

  approveRequest(req: any) {
    this.leaveService.approveOrReject(req.id, LeaveStatus.APPROVED).subscribe({
      next: () => {
        this.toastService.success(`Leave request for ${req.name} approved`);
        this.loadData();
      },
      error: () => this.toastService.error('Failed to approve leave request')
    });
  }

  rejectRequest(req: any) {
    this.leaveService.approveOrReject(req.id, LeaveStatus.REJECTED).subscribe({
      next: () => {
        this.toastService.success(`Leave request for ${req.name} rejected`);
        this.loadData();
      },
      error: () => this.toastService.error('Failed to reject leave request')
    });
  }
}
