import { Component, OnInit } from '@angular/core';
import { LeaveService, ToastService } from '../../../core/services';

@Component({
  selector: 'app-emp-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.scss']
})
export class EmpLeaveComponent implements OnInit {
  balances: { type: string; total: number; used: number; bg: string; color: string }[] = [];
  history: { type: string; from: string; to: string; days: number; reason: string; status: string; approvedBy: string }[] = [];

  private balanceColors: { [key: string]: { bg: string; color: string } } = {
    'Annual Leave': { bg: '#dbeafe', color: '#2563eb' },
    'Sick Leave': { bg: '#fee2e2', color: '#dc2626' },
    'Personal Leave': { bg: '#fef3c7', color: '#d97706' },
    'Unpaid Leave': { bg: '#f3e8ff', color: '#7c3aed' },
    'Maternity Leave': { bg: '#fce7f3', color: '#db2777' },
    'Paternity Leave': { bg: '#cffafe', color: '#0891b2' },
    'Compensatory Off': { bg: '#dcfce7', color: '#16a34a' },
    'Bereavement Leave': { bg: '#f1f5f9', color: '#64748b' }
  };

  constructor(
    private leaveService: LeaveService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.leaveService.getBalances().subscribe({
      next: data => {
        this.balances = (data || []).map(b => {
          const style = this.balanceColors[b.leaveType] || { bg: '#dbeafe', color: '#2563eb' };
          return {
            type: b.leaveType,
            total: b.entitled || 0,
            used: b.taken || 0,
            bg: style.bg,
            color: style.color
          };
        });
      },
      error: () => this.toast.error('Failed to load leave balances.')
    });

    this.leaveService.getMyLeave().subscribe({
      next: data => {
        this.history = (data || []).map(l => ({
          type: l.leaveType,
          from: this.formatDate(l.startDate),
          to: this.formatDate(l.endDate),
          days: l.totalDays || 0,
          reason: l.reason,
          status: l.status,
          approvedBy: l.approvedBy || '--'
        }));
      },
      error: () => this.toast.error('Failed to load leave history.')
    });
  }

  private formatDate(value?: string): string {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }
}