import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from './base-api.service';
import { Notification } from '../models';

@Injectable({ providedIn: 'root' })
export class NotificationService extends BaseApiService {

  getNotifications(isRead?: boolean): Observable<Notification[]> {
    return this.http.get<any>(`${this.apiBase}/notifications`, { params: this.buildParams({ isRead }) })
      .pipe(map(res => this.unwrap<Notification[]>(res)));
  }

  getUnreadCount(): Observable<number> {
    return this.http.get<any>(`${this.apiBase}/notifications/unread-count`)
      .pipe(map(res => this.unwrap<number>(res)));
  }

  markRead(id: string): Observable<boolean> {
    return this.http.put<any>(`${this.apiBase}/notifications/${id}/read`, {})
      .pipe(map(res => true));
  }

  markAllRead(): Observable<boolean> {
    return this.http.put<any>(`${this.apiBase}/notifications/read-all`, {})
      .pipe(map(res => true));
  }

  delete(id: string): Observable<boolean> {
    return this.http.delete<any>(`${this.apiBase}/notifications/${id}`)
      .pipe(map(res => true));
  }
}