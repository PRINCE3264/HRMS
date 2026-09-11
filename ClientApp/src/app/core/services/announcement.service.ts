import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from './base-api.service';
import { Announcement, Document } from '../models';

@Injectable({ providedIn: 'root' })
export class AnnouncementService extends BaseApiService {

  getAnnouncements(role?: string): Observable<Announcement[]> {
    return this.http.get<any>(`${this.apiBase}/announcements`, { params: this.buildParams({ role }) })
      .pipe(map(res => this.unwrap<Announcement[]>(res)));
  }

  getAnnouncement(id: string): Observable<Announcement> {
    return this.http.get<any>(`${this.apiBase}/announcements/${id}`)
      .pipe(map(res => this.unwrap<Announcement>(res)));
  }

  create(data: Partial<Announcement>): Observable<Announcement> {
    return this.http.post<any>(`${this.apiBase}/announcements`, data)
      .pipe(map(res => this.unwrap<Announcement>(res)));
  }

  update(id: string, data: Partial<Announcement>): Observable<Announcement> {
    return this.http.put<any>(`${this.apiBase}/announcements/${id}`, data)
      .pipe(map(res => this.unwrap<Announcement>(res)));
  }

  delete(id: string): Observable<boolean> {
    return this.http.delete<any>(`${this.apiBase}/announcements/${id}`)
      .pipe(map(res => true));
  }
}

@Injectable({ providedIn: 'root' })
export class DocumentService extends BaseApiService {

  getDocuments(employeeId?: string, category?: string): Observable<Document[]> {
    return this.http.get<any>(`${this.apiBase}/documents`, { params: this.buildParams({ employeeId, category }) })
      .pipe(map(res => this.unwrap<Document[]>(res)));
  }

  getMyDocuments(): Observable<Document[]> {
    return this.http.get<any>(`${this.apiBase}/documents/mine`)
      .pipe(map(res => this.unwrap<Document[]>(res)));
  }

  uploadDocument(file: File, employeeId?: string, category?: string): Observable<Document> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    if (employeeId) formData.append('employeeId', employeeId);
    if (category) formData.append('category', category);
    return this.http.post<any>(`${this.apiBase}/documents/upload`, formData)
      .pipe(map(res => this.unwrap<Document>(res)));
  }

  downloadDocument(id: string): Observable<Blob> {
    return this.http.get(`${this.apiBase}/documents/download/${id}`, { responseType: 'blob' });
  }

  deleteDocument(id: string): Observable<boolean> {
    return this.http.delete<any>(`${this.apiBase}/documents/${id}`)
      .pipe(map(res => true));
  }
}