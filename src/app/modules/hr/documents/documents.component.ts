import { Component } from '@angular/core';

@Component({
  selector: 'app-hr-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class HrDocumentsComponent {
  activeTab = 'all';
  documents = [
    { name: 'Employee Handbook 2024', extension: 'PDF', category: 'Policy', department: 'All', version: '3.2', lastUpdated: 'Dec 01, 2024', uploadedBy: 'Sarah Johnson', icon: 'fas fa-file-pdf', iconColor: '#ef4444' },
    { name: 'Leave Policy', extension: 'PDF', category: 'Policy', department: 'All', version: '2.1', lastUpdated: 'Nov 15, 2024', uploadedBy: 'Sarah Johnson', icon: 'fas fa-file-pdf', iconColor: '#ef4444' },
    { name: 'John Smith - Employment Contract', extension: 'DOCX', category: 'Contract', department: 'Engineering', version: '1.0', lastUpdated: 'Jan 15, 2023', uploadedBy: 'HR Admin', icon: 'fas fa-file-word', iconColor: '#3b82f6' },
    { name: 'W-4 Tax Form Template', extension: 'PDF', category: 'Form', department: 'Finance', version: '1.0', lastUpdated: 'Jan 01, 2024', uploadedBy: 'Mark Stevens', icon: 'fas fa-file-pdf', iconColor: '#ef4444' },
    { name: 'Code of Conduct', extension: 'PDF', category: 'Policy', department: 'All', version: '2.0', lastUpdated: 'Sep 20, 2024', uploadedBy: 'Sarah Johnson', icon: 'fas fa-file-pdf', iconColor: '#ef4444' },
    { name: 'Direct Deposit Form', extension: 'PDF', category: 'Form', department: 'Finance', version: '1.1', lastUpdated: 'Mar 10, 2024', uploadedBy: 'Mark Stevens', icon: 'fas fa-file-pdf', iconColor: '#ef4444' },
    { name: 'Health Insurance Certificate', extension: 'PDF', category: 'Certificate', department: 'All', version: '1.0', lastUpdated: 'Jan 01, 2024', uploadedBy: 'HR Admin', icon: 'fas fa-file-certificate', iconColor: '#10b981' },
    { name: 'Remote Work Policy', extension: 'PDF', category: 'Policy', department: 'All', version: '1.5', lastUpdated: 'Oct 05, 2024', uploadedBy: 'Sarah Johnson', icon: 'fas fa-file-pdf', iconColor: '#ef4444' },
    { name: 'NDA Agreement Template', extension: 'DOCX', category: 'Contract', department: 'Legal', version: '2.0', lastUpdated: 'Aug 12, 2024', uploadedBy: 'Legal Team', icon: 'fas fa-file-word', iconColor: '#3b82f6' },
  ];
  getFilteredDocs() {
    if (this.activeTab === 'all') return this.documents;
    return this.documents.filter(d => d.category.toLowerCase() === this.activeTab);
  }
}
