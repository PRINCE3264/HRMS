import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from './base-api.service';
import { CompanyProfile, NotificationPreference, EmailSmsConfig } from '../models';

@Injectable({ providedIn: 'root' })
export class SystemConfigService extends BaseApiService {

  getCompanyProfile(): Observable<CompanyProfile> {
    return this.http.get<any>(`${this.apiBase}/system-settings/company-profile`)
      .pipe(map(res => this.unwrap<CompanyProfile>(res)));
  }

  updateCompanyProfile(data: Partial<CompanyProfile>): Observable<CompanyProfile> {
    return this.http.put<any>(`${this.apiBase}/system-settings/company-profile`, data)
      .pipe(map(res => this.unwrap<CompanyProfile>(res)));
  }

  getNotificationPreferences(query: { eventName?: string } = {}): Observable<NotificationPreference[]> {
    return this.http.get<any>(`${this.apiBase}/system-settings/notification-preferences`, { params: this.buildParams(query) })
      .pipe(map(res => this.unwrap<NotificationPreference[]>(res)));
  }

  updateNotificationPreference(id: string, data: { emailEnabled?: boolean; smsEnabled?: boolean; inAppEnabled?: boolean }): Observable<NotificationPreference> {
    return this.http.put<any>(`${this.apiBase}/system-settings/notification-preferences/${id}`, data)
      .pipe(map(res => this.unwrap<NotificationPreference>(res)));
  }

  getEmailSmsConfig(): Observable<EmailSmsConfig> {
    return this.http.get<any>(`${this.apiBase}/system-settings/email-sms-config`)
      .pipe(map(res => this.unwrap<EmailSmsConfig>(res)));
  }

  saveEmailSmsConfig(settings: Record<string, string>): Observable<boolean> {
    return this.http.put<any>(`${this.apiBase}/system-settings/email-sms-config`, { settings })
      .pipe(map(res => true));
  }
}