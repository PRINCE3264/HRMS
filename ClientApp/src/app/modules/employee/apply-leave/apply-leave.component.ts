import { Component, OnInit } from '@angular/core';
import { LeaveService, ToastService } from '../../../core/services';

@Component({
  selector: 'app-emp-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.scss']
})
export class EmpApplyLeaveComponent implements OnInit {
  submitted = false;
  submitting = false;
  leaveForm = { type: '', duration: 'full', startDate: '', endDate: '', contact: '', reason: '' };

  balances: { type: string; remaining: number }[] = [];

  constructor(
    private leaveService: LeaveService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadBalances();
  }

  private loadBalances(): void {
    this.leaveService.getBalances().subscribe({
      next: data => {
        this.balances = (data || []).map(b => ({ type: b.leaveType, remaining: b.remaining }));
      },
      error: () => this.toast.error('Failed to load leave balances.')
    });
  }

  get calculatedDays(): number {
    if (!this.leaveForm.startDate || !this.leaveForm.endDate) return 0;
    const start = new Date(this.leaveForm.startDate);
    const end = new Date(this.leaveForm.endDate);
    const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    return diff > 0 ? diff : 0;
  }

  submitLeave() {
    if (!this.leaveForm.type || !this.leaveForm.startDate || !this.leaveForm.endDate || !this.leaveForm.reason) {
      return;
    }
    this.submitting = true;
    this.leaveService.apply({
      leaveType: this.leaveForm.type,
      startDate: this.leaveForm.startDate,
      endDate: this.leaveForm.endDate,
      reason: this.leaveForm.reason
    }).subscribe({
      next: () => {
        this.submitted = true;
        this.toast.success('Leave request submitted successfully!');
        this.loadBalances();
        this.submitting = false;
      },
      error: () => {
        this.toast.error('Failed to submit leave request.');
        this.submitting = false;
      }
    });
  }
}