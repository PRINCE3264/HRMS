import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.scss']
})
export class EmpApplyLeaveComponent {
  submitted = false;
  leaveForm = { type: '', duration: 'full', startDate: '', endDate: '', contact: '', reason: '' };

  balances = [
    { type: 'Annual', remaining: 15 },
    { type: 'Sick', remaining: 8 },
    { type: 'Personal', remaining: 4 },
  ];

  get calculatedDays(): number {
    if (!this.leaveForm.startDate || !this.leaveForm.endDate) return 0;
    const start = new Date(this.leaveForm.startDate);
    const end = new Date(this.leaveForm.endDate);
    const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    return diff > 0 ? diff : 0;
  }

  submitLeave() {
    if (this.leaveForm.type && this.leaveForm.startDate && this.leaveForm.endDate && this.leaveForm.reason) {
      this.submitted = true;
    }
  }
}
