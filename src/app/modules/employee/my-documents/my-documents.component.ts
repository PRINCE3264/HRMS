import { Component } from '@angular/core';

export interface DocumentItem {
  id: string;
  name: string;
  description: string;
  category: 'Identity' | 'Employment' | 'Education' | 'Other';
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
export class EmpDocumentsComponent {
  searchTerm = '';
  filterCategory = '';

  showUploadModal = false;
  selectedFile: { name: string; size: string; type: string; url: string } | null = null;

  newDoc = {
    title: '',
    description: '',
    category: 'Employment' as const,
    expiryDate: ''
  };

  documents: DocumentItem[] = [
    { id: '1', name: 'Resume_2026.pdf', description: 'Updated professional resume & CV', category: 'Employment', type: 'PDF', size: '245 KB', uploadedOn: '10 Jan 2026', expiry: '', status: 'VERIFIED' },
    { id: '2', name: 'Government ID Proof.pdf', description: 'Government-issued photo ID card', category: 'Identity', type: 'PDF', size: '1.2 MB', uploadedOn: '15 Mar 2022', expiry: '15 Mar 2027', status: 'VERIFIED' },
    { id: '3', name: 'Passport Copy.pdf', description: 'Valid passport copy for travel clearance', category: 'Identity', type: 'PDF', size: '890 KB', uploadedOn: '15 Mar 2022', expiry: '20 Jun 2028', status: 'VERIFIED' },
    { id: '4', name: 'Degree Certificate.pdf', description: 'Bachelor of Computer Science Degree', category: 'Education', type: 'PDF', size: '2.1 MB', uploadedOn: '15 Mar 2022', expiry: '', status: 'VERIFIED' },
    { id: '5', name: 'Offer Letter.pdf', description: 'Signed employment offer letter', category: 'Employment', type: 'PDF', size: '156 KB', uploadedOn: '10 Mar 2022', expiry: '', status: 'VERIFIED' },
    { id: '6', name: 'Experience Certificate.pdf', description: 'Previous employer work experience letter', category: 'Employment', type: 'PDF', size: '203 KB', uploadedOn: '15 Mar 2022', expiry: '', status: 'VERIFIED' },
    { id: '7', name: 'Profile Photo.jpg', description: 'Professional headshot photograph', category: 'Other', type: 'Image', size: '890 KB', uploadedOn: '15 Mar 2022', expiry: '', status: 'VERIFIED' },
    { id: '8', name: 'Health Insurance Policy.pdf', description: 'Health insurance coverage documentation', category: 'Other', type: 'PDF', size: '340 KB', uploadedOn: '01 Apr 2026', expiry: '31 Oct 2026', status: 'PENDING' },
    { id: '9', name: 'Tax W-4 Form.pdf', description: 'Federal tax withholding form', category: 'Other', type: 'PDF', size: '178 KB', uploadedOn: '05 Jan 2026', expiry: '', status: 'VERIFIED' },
  ];

  showToast = false;
  toastMsg = '';

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
    this.showUploadModal = true;
  }

  closeUploadModal(): void {
    this.showUploadModal = false;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
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
    if (!this.selectedFile) {
      this.triggerToast('Please select a file to upload.');
      return;
    }

    const todayStr = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    let expStr = '';
    if (this.newDoc.expiryDate) {
      expStr = new Date(this.newDoc.expiryDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    }

    this.documents.unshift({
      id: Date.now().toString(),
      name: this.selectedFile.name,
      description: this.newDoc.description || 'Uploaded document',
      category: this.newDoc.category,
      type: this.selectedFile.type,
      size: this.selectedFile.size,
      uploadedOn: todayStr,
      expiry: expStr,
      status: 'PENDING',
      url: this.selectedFile.url
    });

    this.showUploadModal = false;
    this.triggerToast('Document uploaded successfully!');
  }

  deleteDocument(doc: DocumentItem): void {
    this.documents = this.documents.filter(d => d.id !== doc.id);
    this.triggerToast(`Document "${doc.name}" deleted.`);
  }

  downloadDocument(doc: DocumentItem): void {
    this.triggerToast(`Downloading document "${doc.name}"...`);
  }

  private triggerToast(msg: string): void {
    this.toastMsg = msg;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3000);
  }
}

