import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../../core/services';
import { LeaveRequest, LeaveBalance } from '../../../core/models';

@Component({
  selector: 'app-hr-leave',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.scss']
})
export class HrLeaveComponent implements OnInit {
  activeTab = 'pending';
  leaves: any[] = [];
  leaveBalance: any[] = [];

  private deptColors: string[] = ['#10b981', '#6366f1', '#ef4444', '#f59e0b', '#06b6d4', '#8b5cf6', '#ec4899', '#14b8a6', '#f97316'];

  constructor(private leaveService: LeaveService) {}

  ngOnInit(): void {
    this.loadLeaves();
    this.loadBalances();
  }

  loadLeaves(): void {
    this.leaveService.getRequests({ pageSize: 100 }).subscribe({
      next: (data) => {
        this.leaves = data.items.map((l, i) => ({
          name: l.employeeName,
          type: l.leaveType,
          from: new Date(l.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          to: new Date(l.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          days: l.totalDays,
          reason: l.reason,
          status: this.mapStatus(l.status),
          color: this.deptColors[i % this.deptColors.length],
          id: l.id,
        }));
      }
    });
  }

  loadBalances(): void {
    this.leaveService.getBalances().subscribe({
      next: (data) => {
        const grouped: Record<string, any> = {};
        data.forEach(b => {
          if (!grouped[b.leaveType]) {
            grouped[b.leaveType] = { leaveType: b.leaveType, entitled: b.entitled, taken: b.taken, remaining: b.remaining };
          }
        });
        this.leaveBalance = Object.values(grouped);
      }
    });
  }

  private mapStatus(status: string): string {
    switch (status?.toLowerCase()) {
      case 'pending': return 'Pending';
      case 'approved': return 'Approved';
      case 'rejected': return 'Rejected';
      case 'cancelled': return 'Cancelled';
      default: return status;
    }
  }

  approveLeave(leave: any): void {
    this.leaveService.approveOrReject(leave.id, 'APPROVED' as any).subscribe({
      next: () => {
        leave.status = 'Approved';
        this.loadLeaves();
      }
    });
  }

  rejectLeave(leave: any): void {
    this.leaveService.approveOrReject(leave.id, 'REJECTED' as any).subscribe({
      next: () => {
        leave.status = 'Rejected';
        this.loadLeaves();
      }
    });
  }

  getFilteredLeaves() {
    if (this.activeTab === 'pending') return this.leaves.filter(l => l.status === 'Pending');
    if (this.activeTab === 'approved') return this.leaves.filter(l => l.status === 'Approved');
    if (this.activeTab === 'rejected') return this.leaves.filter(l => l.status === 'Rejected');
    return this.leaves;
  }
}
