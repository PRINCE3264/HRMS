import { Component, OnInit } from '@angular/core';
import { DocumentService, ToastService } from '../../../core/services';
import { TableColumn } from '../../../core/models';

@Component({
  selector: 'app-admin-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class AdminDocumentsComponent implements OnInit {
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
    { label: 'Download', icon: 'fas fa-download', action: 'download', color: '#4461f6' },
    { label: 'Delete', icon: 'fas fa-trash', action: 'delete', color: '#ef4444' }
  ];

  documents: any[] = [];

  constructor(private documentService: DocumentService, private toast: ToastService) {}

  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments(): void {
    this.documentService.getDocuments().subscribe({
      next: (data) => this.documents = data.map((d: any) => ({
        id: d.id,
        name: d.name,
        category: d.category,
        uploadedBy: d.uploadedByName,
        uploadDate: d.uploadedAt,
        size: this.formatSize(d.fileSize),
        type: d.type,
        status: 'ACTIVE'
      })),
      error: () => this.toast.error('Failed to load documents')
    });
  }

  private formatSize(bytes: number): string {
    if (!bytes) return '—';
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }

  get filteredDocuments() {
    return this.documents.filter(doc => {
      const matchesSearch = doc.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            doc.uploadedBy.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = this.selectedCategory === 'ALL' || doc.category === this.selectedCategory;
      const matchesType = this.selectedType === 'ALL' || doc.type === this.selectedType;
      return matchesSearch && matchesCategory && matchesType;
    });
  }

  getCategoryCount(catName: string): number {
    return this.documents.filter(d => d.category === catName).length;
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
      uploadedBy: 'Admin User',
      uploadDate: new Date().toISOString().split('T')[0],
      size: this.newDoc.size,
      type: this.newDoc.type,
      status: this.newDoc.status
    });
    this.newDoc = { name: '', category: 'Policies', size: '250 KB', type: 'PDF', status: 'ACTIVE' };
    this.showUploadModal = false;
    this.toast.success('Document upload simulated (no upload API available)');
  }

  onAction(event: { action: string; row: any }): void {
    if (event.action === 'delete') {
      this.documents = this.documents.filter(d => d.id !== event.row.id);
      this.toast.success('Document removed');
    } else if (event.action === 'download') {
      if (event.row.fileUrl || event.row.name) {
        window.open(event.row.fileUrl || '', '_blank');
      }
    }
  }
}