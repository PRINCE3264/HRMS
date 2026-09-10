import { Component } from '@angular/core';

@Component({
  selector: 'app-tl-leave',
  templateUrl: './team-leave.component.html',
  styleUrls: ['./team-leave.component.scss']
})
export class TlLeaveComponent {
  pendingRequests = [
    { name: 'David Lee', type: 'Annual Leave', from: 'Dec 22, 2025', to: 'Dec 26, 2025', days: 5, reason: 'Family vacation during holidays', appliedOn: 'Dec 10' },
    { name: 'Anna Wilson', type: 'Sick Leave', from: 'Dec 18, 2025', to: 'Dec 18, 2025', days: 1, reason: 'Feeling unwell, need rest', appliedOn: 'Dec 17' },
  ];

  leaveHistory = [
    { name: 'John Smith', type: 'Annual Leave', from: 'Dec 1', to: 'Dec 3', days: 3, status: 'APPROVED', reviewedBy: 'You' },
    { name: 'Emily Davis', type: 'Personal Leave', from: 'Nov 28', to: 'Nov 28', days: 1, status: 'APPROVED', reviewedBy: 'You' },
    { name: 'Maria Garcia', type: 'Sick Leave', from: 'Nov 20', to: 'Nov 22', days: 3, status: 'APPROVED', reviewedBy: 'You' },
    { name: 'James Brown', type: 'Annual Leave', from: 'Dec 15', to: 'Dec 16', days: 2, status: 'REJECTED', reviewedBy: 'You' },
    { name: 'Robert Taylor', type: 'Maternity Leave', from: 'Jan 5', to: 'Mar 5', days: 60, status: 'APPROVED', reviewedBy: 'HR Admin' },
  ];

  get approvedCount() { return this.leaveHistory.filter(h => h.status === 'APPROVED').length; }
  get rejectedCount() { return this.leaveHistory.filter(h => h.status === 'REJECTED').length; }
  get onLeaveCount() { return 2; }

  approveRequest(req: any) {
    this.leaveHistory.unshift({ ...req, status: 'APPROVED', reviewedBy: 'You', type: req.type, from: req.from, to: req.to });
    this.pendingRequests = this.pendingRequests.filter(r => r !== req);
  }

  rejectRequest(req: any) {
    this.leaveHistory.unshift({ ...req, status: 'REJECTED', reviewedBy: 'You', type: req.type, from: req.from, to: req.to });
    this.pendingRequests = this.pendingRequests.filter(r => r !== req);
  }
}
