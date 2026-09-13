import { Component, OnInit } from '@angular/core';
import { DocumentService, ToastService } from '../../../core/services';

@Component({
  selector: 'app-hr-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class HrDocumentsComponent implements OnInit {
  searchTerm: string = '';
  selectedCategory: string = 'ALL';
  selectedType: string = 'ALL';

  showUploadModal: boolean = false;
  newDoc = {
    name: '',
    category: 'Policies',
    size: '250 KB',
    type: 'PDF',
    status: 'ACTIVE'
  };

  categories = [
    { name: 'Policies', count: 24, icon: 'fas fa-file-alt', color: 'linear-gradient(135deg, #4461f6, #1e40af)' },
    { name: 'Contracts', count: 156, icon: 'fas fa-file-signature', color: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' },
    { name: 'Forms', count: 38, icon: 'fas fa-file-invoice', color: 'linear-gradient(135deg, #06b6d4, #0e7490)' },
    { name: 'Templates', count: 42, icon: 'fas fa-file-word', color: 'linear-gradient(135deg, #10b981, #047857)' },
    { name: 'Certificates', count: 89, icon: 'fas fa-award', color: 'linear-gradient(135deg, #f59e0b, #b45309)' },
    { name: 'Handbooks', count: 12, icon: 'fas fa-book', color: 'linear-gradient(135deg, #f43f5e, #be123c)' },
  ];

  documents: any[] = [];

  fallbackDocuments = [
    { id: 1, name: 'Employee Handbook 2025.pdf', category: 'Policies', uploadedBy: 'HR Manager', uploadDate: '2025-01-10', size: '2.4 MB', type: 'PDF', status: 'ACTIVE' },
    { id: 2, name: 'Standard Employment Agreement.docx', category: 'Contracts', uploadedBy: 'Legal Dept', uploadDate: '2025-01-15', size: '450 KB', type: 'DOCX', status: 'ACTIVE' },
    { id: 3, name: 'Leave Application Form.pdf', category: 'Forms', uploadedBy: 'HR Admin', uploadDate: '2025-02-01', size: '180 KB', type: 'PDF', status: 'ACTIVE' },
    { id: 4, name: 'Performance Review Template.docx', category: 'Templates', uploadedBy: 'HR Team', uploadDate: '2025-02-05', size: '320 KB', type: 'DOCX', status: 'ACTIVE' },
    { id: 5, name: 'ISO 9001 Compliance Certificate.pdf', category: 'Certificates', uploadedBy: 'Quality Ops', uploadDate: '2025-02-12', size: '1.2 MB', type: 'PDF', status: 'ACTIVE' },
    { id: 6, name: 'IT & Data Security Policy.pdf', category: 'Policies', uploadedBy: 'IT Security', uploadDate: '2025-02-20', size: '980 KB', type: 'PDF', status: 'ACTIVE' }
  ];

  constructor(private documentService: DocumentService, private toast: ToastService) {}

  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments(): void {
    this.documentService.getDocuments().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.documents = data.map((d: any) => ({
            id: d.id,
            name: d.name,
            category: d.category || 'Policies',
            uploadedBy: d.uploadedByName || d.uploadedBy || 'HR User',
            uploadDate: d.uploadedAt ? new Date(d.uploadedAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
            size: this.formatSize(d.fileSize),
            type: d.type?.toUpperCase() || 'PDF',
            status: 'ACTIVE'
          }));
        } else {
          this.documents = [...this.fallbackDocuments];
        }
      },
      error: () => {
        this.documents = [...this.fallbackDocuments];
      }
    });
  }

  private formatSize(bytes: number): string {
    if (!bytes) return '250 KB';
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }

  get filteredDocuments() {
    return this.documents.filter(doc => {
      const matchesSearch = doc.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            doc.uploadedBy.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = this.selectedCategory === 'ALL' || doc.category.toLowerCase() === this.selectedCategory.toLowerCase();
      const matchesType = this.selectedType === 'ALL' || doc.type === this.selectedType;
      return matchesSearch && matchesCategory && matchesType;
    });
  }

  getCategoryCount(catName: string): number {
    return this.documents.filter(d => d.category?.toLowerCase() === catName.toLowerCase()).length;
  }

  filterByCategory(catName: string) {
    if (this.selectedCategory === catName) {
      this.selectedCategory = 'ALL';
    } else {
      this.selectedCategory = catName;
    }
  }

  openUploadModal() {
    this.showUploadModal = true;
  }

  closeUploadModal() {
    this.showUploadModal = false;
  }

  saveDocument() {
    if (!this.newDoc.name) return;
    this.documents.unshift({
      id: Date.now(),
      name: this.newDoc.name,
      category: this.newDoc.category,
      uploadedBy: 'HR Specialist',
      uploadDate: new Date().toISOString().split('T')[0],
      size: this.newDoc.size,
      type: this.newDoc.type,
      status: this.newDoc.status
    });
    this.newDoc = { name: '', category: 'Policies', size: '250 KB', type: 'PDF', status: 'ACTIVE' };
    this.showUploadModal = false;
    this.toast.success('Document uploaded successfully');
  }

  onAction(event: { action: string; row: any }): void {
    if (event.action === 'delete') {
      this.documents = this.documents.filter(d => d.id !== event.row.id);
      this.toast.success('Document removed');
    } else if (event.action === 'download') {
      if (event.row.fileUrl || event.row.name) {
        window.open(event.row.fileUrl || '', '_blank');
      } else {
        this.toast.info('Downloading file: ' + event.row.name);
      }
    }
  }
}
