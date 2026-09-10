import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class AdminReportsComponent {
  activeTab = 'overview';
  headcountData = [
    { label: 'Engineering', value: 68 }, { label: 'Marketing', value: 32 },
    { label: 'Sales', value: 45 }, { label: 'HR', value: 18 },
    { label: 'Finance', value: 28 }, { label: 'Design', value: 22 },
    { label: 'Others', value: 35 }
  ];
  genderData = [
    { label: 'Male', value: 142, color: '#6366f1' },
    { label: 'Female', value: 98, color: '#ec4899' },
    { label: 'Non-binary', value: 8, color: '#06b6d4' }
  ];
  turnoverData = [
    { label: 'Jul', value: 4 }, { label: 'Aug', value: 6 },
    { label: 'Sep', value: 3 }, { label: 'Oct', value: 5 },
    { label: 'Nov', value: 2 }, { label: 'Dec', value: 7 }
  ];
  salaryData = [
    { level: 'Executive', avg: 200000, percent: 100, color: '#6366f1' },
    { level: 'VP', avg: 150000, percent: 75, color: '#8b5cf6' },
    { level: 'Senior', avg: 110000, percent: 55, color: '#06b6d4' },
    { level: 'Mid-Level', avg: 75000, percent: 37, color: '#10b981' },
    { level: 'Junior', avg: 50000, percent: 25, color: '#f59e0b' },
    { level: 'Intern', avg: 28000, percent: 14, color: '#94a3b8' },
  ];
  quickReports = [
    { name: 'Employee Directory', description: 'Complete list of all employees', icon: 'fas fa-address-book', color: '#6366f1' },
    { name: 'Attendance Summary', description: 'Monthly attendance report', icon: 'fas fa-calendar-check', color: '#10b981' },
    { name: 'Leave Balance', description: 'Current leave balances', icon: 'fas fa-calendar-alt', color: '#f59e0b' },
    { name: 'Payroll Register', description: 'Monthly payroll breakdown', icon: 'fas fa-file-invoice-dollar', color: '#ef4444' },
    { name: 'Performance Summary', description: 'Quarterly performance ratings', icon: 'fas fa-star', color: '#8b5cf6' },
    { name: 'Training Completion', description: 'Training program completion rates', icon: 'fas fa-graduation-cap', color: '#06b6d4' },
  ];
}
