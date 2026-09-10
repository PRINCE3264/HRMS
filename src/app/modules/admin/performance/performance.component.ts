import { Component } from '@angular/core';
import { TableColumn } from '../../../core/models';

@Component({
  selector: 'app-admin-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class AdminPerformanceComponent {
  columns: TableColumn[] = [
    { key: 'employeeId', label: 'ID', sortable: true, width: '100px' },
    { key: 'name', label: 'Employee', sortable: true },
    { key: 'department', label: 'Department', sortable: true },
    { key: 'reviewPeriod', label: 'Review Period', sortable: true },
    { key: 'rating', label: 'Rating', sortable: true },
    { key: 'goalsMet', label: 'Goals Met', sortable: true },
    { key: 'reviewer', label: 'Reviewer' },
    { key: 'status', label: 'Status', type: 'status' }
  ];
  tableActions = [
    { label: 'View', icon: 'fas fa-eye', action: 'view', color: '#3b82f6' },
    { label: 'Edit', icon: 'fas fa-edit', action: 'edit', color: '#f59e0b' }
  ];
  reviews = [
    { employeeId: 'EMP001', name: 'John Smith', department: 'Engineering', reviewPeriod: 'Q4 2024', rating: '4.5/5', goalsMet: '90%', reviewer: 'Michael Chen', status: 'COMPLETED' },
    { employeeId: 'EMP002', name: 'Sarah Johnson', department: 'HR', reviewPeriod: 'Q4 2024', rating: '4.8/5', goalsMet: '95%', reviewer: 'VP HR', status: 'COMPLETED' },
    { employeeId: 'EMP003', name: 'Michael Chen', department: 'Engineering', reviewPeriod: 'Q4 2024', rating: '4.2/5', goalsMet: '85%', reviewer: 'CTO', status: 'COMPLETED' },
    { employeeId: 'EMP004', name: 'Emily Davis', department: 'Marketing', reviewPeriod: 'Q4 2024', rating: '3.8/5', goalsMet: '72%', reviewer: 'Marketing Dir.', status: 'PENDING' },
    { employeeId: 'EMP005', name: 'Robert Wilson', department: 'Finance', reviewPeriod: 'Q4 2024', rating: '4.0/5', goalsMet: '80%', reviewer: 'CFO', status: 'COMPLETED' },
    { employeeId: 'EMP006', name: 'Lisa Anderson', department: 'Design', reviewPeriod: 'Q4 2024', rating: '4.6/5', goalsMet: '88%', reviewer: 'Design Lead', status: 'IN_PROGRESS' },
    { employeeId: 'EMP007', name: 'David Lee', department: 'Engineering', reviewPeriod: 'Q4 2024', rating: '3.5/5', goalsMet: '65%', reviewer: 'Michael Chen', status: 'IN_PROGRESS' },
    { employeeId: 'EMP008', name: 'Jennifer Brown', department: 'Sales', reviewPeriod: 'Q4 2024', rating: '3.2/5', goalsMet: '55%', reviewer: 'David Park', status: 'PIP' },
  ];

  onAction(event: { action: string; row: any }): void {
    console.log(event.action, event.row);
  }
}
