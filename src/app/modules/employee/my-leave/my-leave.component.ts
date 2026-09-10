import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.scss']
})
export class EmpLeaveComponent {
  balances = [
    { type: 'Annual Leave', total: 20, used: 5, bg: '#dbeafe', color: '#2563eb' },
    { type: 'Sick Leave', total: 10, used: 2, bg: '#fee2e2', color: '#dc2626' },
    { type: 'Personal Leave', total: 5, used: 1, bg: '#fef3c7', color: '#d97706' },
    { type: 'Unpaid Leave', total: 10, used: 0, bg: '#f3e8ff', color: '#7c3aed' },
  ];

  history = [
    { type: 'Annual Leave', from: 'Dec 1, 2025', to: 'Dec 3, 2025', days: 3, reason: 'Family trip', status: 'APPROVED', approvedBy: 'Sarah Johnson' },
    { type: 'Sick Leave', from: 'Nov 18, 2025', to: 'Nov 18, 2025', days: 1, reason: 'Medical appointment', status: 'APPROVED', approvedBy: 'Sarah Johnson' },
    { type: 'Personal Leave', from: 'Nov 5, 2025', to: 'Nov 5, 2025', days: 1, reason: 'Personal work', status: 'APPROVED', approvedBy: 'Sarah Johnson' },
    { type: 'Annual Leave', from: 'Oct 20, 2025', to: 'Oct 22, 2025', days: 3, reason: 'Festival celebrations', status: 'APPROVED', approvedBy: 'Sarah Johnson' },
    { type: 'Sick Leave', from: 'Sep 12, 2025', to: 'Sep 13, 2025', days: 2, reason: 'Flu recovery', status: 'APPROVED', approvedBy: 'Sarah Johnson' },
    { type: 'Annual Leave', from: 'Jan 5, 2026', to: 'Jan 7, 2026', days: 3, reason: 'New year break', status: 'PENDING', approvedBy: '--' },
  ];
}
