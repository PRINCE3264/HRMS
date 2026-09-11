import { Component, OnInit } from '@angular/core';
import { DocumentService, ToastService } from '../../../core/services';

export interface DocumentItem {
  id: string;
  name: string;
  description: string;
  category: string;
  type: string;
  size: string;
  uploadedOn: string;
  expiry: string;
  status: string;
  url?: string;
}

@Component({
  selector: 'app-emp-documents',
  templateUrl: './my-documents.component.html',
  styleUrls: ['./my-documents.component.scss']
})
export class EmpDocumentsComponent implements OnInit {
  searchTerm = '';
  filterCategory = '';

  showUploadModal = false;
  selectedFile: { name: string; size: string; type: string; url: string } | null = null;
  private pickedFile: File | null = null;

  newDoc = {
    title: '',
    description: '',
    category: 'Employment' as const,
    expiryDate: ''
  };

  documents: DocumentItem[] = [];

  showToast = false;
  toastMsg = '';

  constructor(
    private documentService: DocumentService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadDocuments();
  }

  private loadDocuments(): void {
    this.documentService.getMyDocuments().subscribe({
      next: docs => {
        this.documents = (docs || []).map((doc: any) => ({
          id: doc.id,
          name: doc.name,
          description: doc.uploadedByName ? `Uploaded by ${doc.uploadedByName}` : 'Official document',
          category: doc.category || 'Other',
          type: this.mapDocType(doc.type),
          size: this.formatFileSize(doc.fileSize),
          uploadedOn: this.formatDate(doc.uploadedAt),
          expiry: '',
          status: 'VERIFIED',
          url: doc.fileUrl
        }));
      },
      error: () => {
        this.documents = [];
        this.toast.error('Failed to load documents.');
      }
    });
  }

  private mapDocType(type: string): string {
    const t = (type || '').toUpperCase();
    if (!t) return 'PDF';
    if (t === 'PDF' || t.includes('PDF')) return 'PDF';
    if (t === 'IMAGE' || t.includes('JPG') || t.includes('JPEG') || t.includes('PNG')) return 'Image';
    if (t.includes('DOC')) return 'Word';
    if (t.includes('XLS')) return 'Excel';
    return t;
  }

  private formatFileSize(bytes?: number): string {
    if (!bytes) return '--';
    if (bytes >= 1024 * 1024) return (bytes / 1024 / 1024).toFixed(1) + ' MB';
    if (bytes >= 1024) return Math.round(bytes / 1024) + ' KB';
    return bytes + ' B';
  }

  private formatDate(value?: string): string {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  get totalCount(): number { return this.documents.length; }
  get verifiedCount(): number { return this.documents.filter(d => d.status === 'VERIFIED').length; }
  get pendingCount(): number { return this.documents.filter(d => d.status === 'PENDING').length; }
  get expiringCount(): number { return this.documents.filter(d => this.isExpiringSoon(d.expiry)).length; }

  get filteredDocuments(): DocumentItem[] {
    return this.documents.filter(d => {
      const matchSearch = !this.searchTerm || d.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || d.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchCat = !this.filterCategory || d.category === this.filterCategory;
      return matchSearch && matchCat;
    });
  }

  getFileColor(type: string): string {
    const colors: any = { PDF: '#fee2e2', Image: '#dbeafe', Word: '#dcfce7', Excel: '#f3e8ff' };
    return colors[type] || '#f1f5f9';
  }

  getCatBg(cat: string): string {
    const bgs: any = { Identity: '#dbeafe', Employment: '#dcfce7', Education: '#fef3c7', Other: '#f3e8ff' };
    return bgs[cat] || '#f1f5f9';
  }

  getCatColor(cat: string): string {
    const cols: any = { Identity: '#2563eb', Employment: '#16a34a', Education: '#d97706', Other: '#7c3aed' };
    return cols[cat] || '#64748b';
  }

  isExpiringSoon(expiry: string): boolean {
    if (!expiry) return false;
    const exp = new Date(expiry);
    const now = new Date();
    const diff = exp.getTime() - now.getTime();
    return diff > 0 && diff < 90 * 24 * 60 * 60 * 1000;
  }

  openUploadModal(): void {
    this.newDoc = { title: '', description: '', category: 'Employment', expiryDate: '' };
    this.selectedFile = null;
    this.pickedFile = null;
    this.showUploadModal = true;
  }

  closeUploadModal(): void {
    this.showUploadModal = false;
    this.pickedFile = null;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.pickedFile = file;
      const ext = file.name.split('.').pop()?.toUpperCase() || 'PDF';
      const fileType = ext === 'PNG' || ext === 'JPG' || ext === 'JPEG' ? 'Image' : (ext === 'DOC' || ext === 'DOCX' ? 'Word' : 'PDF');
      const sizeMb = (file.size / 1024).toFixed(0);

      this.selectedFile = {
        name: file.name,
        size: `${sizeMb} KB`,
        type: fileType,
        url: URL.createObjectURL(file)
      };

      if (!this.newDoc.title) {
        this.newDoc.title = file.name;
      }
    }
  }

  saveDocument(): void {
    if (!this.pickedFile) {
      this.toast.error('Please select a file to upload.');
      return;
    }

    this.documentService.uploadDocument(this.pickedFile, undefined, this.newDoc.category).subscribe({
      next: () => {
        this.showUploadModal = false;
        this.pickedFile = null;
        this.selectedFile = null;
        this.loadDocuments();
        this.toast.success('Document uploaded successfully!');
      },
      error: (err) => {
        const msg = err?.error?.message || err?.message || 'Failed to upload document.';
        this.toast.error(msg);
      }
    });
  }

  deleteDocument(doc: DocumentItem): void {
    if (!confirm(`Are you sure you want to delete "${doc.name}"?`)) return;

    this.documentService.deleteDocument(doc.id).subscribe({
      next: () => {
        this.documents = this.documents.filter(d => d.id !== doc.id);
        this.toast.success('Document deleted.');
      },
      error: (err) => {
        const msg = err?.error?.message || err?.message || 'Failed to delete document.';
        this.toast.error(msg);
      }
    });
  }

  downloadDocument(doc: DocumentItem): void {
    this.documentService.downloadDocument(doc.id).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = doc.name;
        a.click();
        URL.revokeObjectURL(url);
      },
      error: (err) => {
        const msg = err?.error?.message || err?.message || 'Failed to download document.';
        this.toast.error(msg);
      }
    });
  }

  private triggerToast(msg: string): void {
    this.toastMsg = msg;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3000);
  }
}