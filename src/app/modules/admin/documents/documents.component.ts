import { Component } from '@angular/core';
import { TableColumn } from '../../../core/models';

@Component({
  selector: 'app-admin-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class AdminDocumentsComponent {
  categories = [
    { name: 'Policies', count: 24, icon: 'fas fa-file-alt', color: '#6366f1' },
    { name: 'Contracts', count: 156, icon: 'fas fa-file-signature', color: '#8b5cf6' },
    { name: 'Forms', count: 38, icon: 'fas fa-file-invoice', color: '#06b6d4' },
    { name: 'Templates', count: 42, icon: 'fas fa-file-word', color: '#10b981' },
    { name: 'Certificates', count: 89, icon: 'fas fa-award', color: '#f59e0b' },
    { name: 'Handbooks', count: 12, icon: 'fas fa-book', color: '#ef4444' },
  ];
  columns: TableColumn[] = [
    { key: 'name', label: 'Document Name', sortable: true },
    { key: 'category', label: 'Category', sortable: true },
    { key: 'uploadedBy', label: 'Uploaded By', sortable: true },
    { key: 'uploadDate', label: 'Upload Date', type: 'date', sortable: true },
    { key: 'size', label: 'Size' },
    { key: 'type', label: 'Type' },
    { key: 'status', label: 'Status', type: 'status' }
  ];
  tableActions = [
    { label: 'Download', icon: 'fas fa-download', action: 'download', color: '#3b82f6' },
    { label: 'Delete', icon: 'fas fa-trash', action: 'delete', color: '#ef4444' }
  ];
  documents = [
    { name: 'Employee Handbook 2024.pdf', category: 'Handbooks', uploadedBy: 'Sarah Johnson', uploadDate: '2024-11-01', size: '2.4 MB', type: 'PDF', status: 'ACTIVE' },
    { name: 'Non-Disclosure Agreement.docx', category: 'Contracts', uploadedBy: 'Legal Team', uploadDate: '2024-10-15', size: '156 KB', type: 'DOCX', status: 'ACTIVE' },
    { name: 'Leave Application Form.pdf', category: 'Forms', uploadedBy: 'HR Team', uploadDate: '2024-09-20', size: '89 KB', type: 'PDF', status: 'ACTIVE' },
    { name: 'Salary Revision Policy.pdf', category: 'Policies', uploadedBy: 'Robert Wilson', uploadDate: '2024-08-10', size: '340 KB', type: 'PDF', status: 'ACTIVE' },
    { name: 'Offer Letter Template.docx', category: 'Templates', uploadedBy: 'Sarah Johnson', uploadDate: '2024-07-05', size: '125 KB', type: 'DOCX', status: 'ACTIVE' },
    { name: 'ISO Certification.pdf', category: 'Certificates', uploadedBy: 'Quality Team', uploadDate: '2024-06-15', size: '5.2 MB', type: 'PDF', status: 'ACTIVE' },
    { name: 'Work From Home Policy.pdf', category: 'Policies', uploadedBy: 'Sarah Johnson', uploadDate: '2024-12-01', size: '198 KB', type: 'PDF', status: 'ACTIVE' },
    { name: 'IT Security Guidelines.pdf', category: 'Policies', uploadedBy: 'IT Team', uploadDate: '2024-11-20', size: '420 KB', type: 'PDF', status: 'DRAFT' },
  ];

  onAction(event: { action: string; row: any }): void {
    console.log(event.action, event.row);
  }
}
