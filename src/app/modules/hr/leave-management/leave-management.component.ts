import { Component } from '@angular/core';

@Component({
  selector: 'app-hr-leave',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.scss']
})
export class HrLeaveComponent {
  activeTab = 'pending';
  leaves = [
    { name: 'Emily Davis', type: 'Annual Leave', from: 'Dec 20', to: 'Dec 22', days: 3, reason: 'Family vacation', status: 'Pending', color: '#10b981' },
    { name: 'John Smith', type: 'Sick Leave', from: 'Dec 18', to: 'Dec 18', days: 1, reason: 'Medical appointment', status: 'Pending', color: '#6366f1' },
    { name: 'Lisa Anderson', type: 'Personal Leave', from: 'Dec 21', to: 'Dec 22', days: 2, reason: 'Personal matters', status: 'Pending', color: '#ef4444' },
    { name: 'Robert Wilson', type: 'Annual Leave', from: 'Dec 25', to: 'Dec 31', days: 5, reason: 'Holiday break', status: 'Pending', color: '#f59e0b' },
    { name: 'James Brown', type: 'Sick Leave', from: 'Dec 19', to: 'Dec 20', days: 2, reason: 'Flu recovery', status: 'Pending', color: '#06b6d4' },
    { name: 'Jessica Martinez', type: 'Annual Leave', from: 'Dec 23', to: 'Dec 24', days: 2, reason: 'Christmas prep', status: 'Pending', color: '#f97316' },
    { name: 'Michael Chen', type: 'Maternity Leave', from: 'Nov 01', to: 'Jan 31', days: 60, reason: 'Maternity', status: 'Approved', color: '#ec4899' },
    { name: 'David Lee', type: 'Personal Leave', from: 'Dec 10', to: 'Dec 11', days: 2, reason: 'Family event', status: 'Approved', color: '#14b8a6' },
    { name: 'Sarah Johnson', type: 'Sick Leave', from: 'Dec 05', to: 'Dec 05', days: 1, reason: 'Headache', status: 'Rejected', color: '#8b5cf6' },
  ];
  leaveBalance = [
    { name: 'John Smith', annualUsed: 8, annualTotal: 15, sickUsed: 2, sickTotal: 10, personalUsed: 1, personalTotal: 5, color: '#6366f1' },
    { name: 'Emily Davis', annualUsed: 10, annualTotal: 15, sickUsed: 1, sickTotal: 10, personalUsed: 3, personalTotal: 5, color: '#10b981' },
    { name: 'Robert Wilson', annualUsed: 5, annualTotal: 15, sickUsed: 0, sickTotal: 10, personalUsed: 2, personalTotal: 5, color: '#f59e0b' },
    { name: 'Lisa Anderson', annualUsed: 12, annualTotal: 15, sickUsed: 3, sickTotal: 10, personalUsed: 4, personalTotal: 5, color: '#ef4444' },
    { name: 'James Brown', annualUsed: 7, annualTotal: 15, sickUsed: 5, sickTotal: 10, personalUsed: 0, personalTotal: 5, color: '#06b6d4' },
  ];
  getFilteredLeaves() {
    if (this.activeTab === 'pending') return this.leaves.filter(l => l.status === 'Pending');
    if (this.activeTab === 'approved') return this.leaves.filter(l => l.status === 'Approved');
    if (this.activeTab === 'rejected') return this.leaves.filter(l => l.status === 'Rejected');
    return this.leaves;
  }
}
