import { Component, OnInit } from '@angular/core';
import { DocumentService, ToastService } from '../../../core/services';
import { Document } from '../../../core/models';

@Component({
  selector: 'app-hr-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class HrDocumentsComponent implements OnInit {
  activeTab = 'all';
  documents: any[] = [];
  showUploadModal = false;
  uploadCategory = 'POLICIES';
  pickedFile: File | null = null;

  constructor(
    private documentService: DocumentService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments(): void {
    this.documentService.getDocuments().subscribe({
      next: (data) => {
        this.documents = data.map(d => {
          const ext = d.type?.toUpperCase() || 'PDF';
          const iconInfo = this.getIconInfo(ext);
          return {
            id: d.id,
            name: d.name,
            extension: ext,
            category: d.category,
            department: 'All',
            version: '1.0',
            lastUpdated: new Date(d.uploadedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            uploadedBy: d.uploadedBy,
            icon: iconInfo.icon,
            iconColor: iconInfo.color,
            url: d.fileUrl,
          };
        });
      }
    });
  }

  onFilePicked(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.pickedFile = input.files?.[0] || null;
  }

  saveDocument(): void {
    if (!this.pickedFile) return;
    this.documentService.uploadDocument(this.pickedFile, undefined, this.uploadCategory).subscribe({
      next: () => {
        this.toast.success('Document uploaded.');
        this.showUploadModal = false;
        this.pickedFile = null;
        this.loadDocuments();
      },
      error: () => this.toast.error('Upload failed.')
    });
  }

  downloadDocument(doc: any): void {
    this.documentService.downloadDocument(doc.id).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = doc.name;
        a.click();
        URL.revokeObjectURL(url);
      },
      error: () => this.toast.error('Download failed.')
    });
  }

  async deleteDocument(doc: any): Promise<void> {
    const confirmed = await this.toast.confirm('Delete Document?', 'Are you sure you want to delete this document?');
    if (!confirmed) return;
    this.documentService.deleteDocument(doc.id).subscribe({
      next: () => {
        this.toast.success('Document deleted.');
        this.documents = this.documents.filter(d => d.id !== doc.id);
      },
      error: () => this.toast.error('Delete failed.')
    });
  }

  private getIconInfo(ext: string): { icon: string; color: string } {
    switch (ext) {
      case 'PDF': return { icon: 'fas fa-file-pdf', color: '#ef4444' };
      case 'DOCX': case 'DOC': return { icon: 'fas fa-file-word', color: '#3b82f6' };
      case 'XLSX': case 'XLS': return { icon: 'fas fa-file-excel', color: '#10b981' };
      default: return { icon: 'fas fa-file', color: '#64748b' };
    }
  }

  getFilteredDocs() {
    if (this.activeTab === 'all') return this.documents;
    return this.documents.filter(d => d.category.toLowerCase() === this.activeTab);
  }
}
