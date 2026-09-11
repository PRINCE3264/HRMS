import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from './base-api.service';
import { DashboardStats, ChartData, AuditLog, SystemSetting, UpcomingBirthday } from '../models';

@Injectable({ providedIn: 'root' })
export class ReportService extends BaseApiService {

  getDashboardStats(): Observable<DashboardStats> {
    return this.http.get<any>(`${this.apiBase}/reports/dashboard-stats`)
      .pipe(map(res => this.unwrap<DashboardStats>(res)));
  }

  getAttendanceTrend(days = 7): Observable<ChartData> {
    return this.http.get<any>(`${this.apiBase}/reports/attendance-trend`, { params: this.buildParams({ days }) })
      .pipe(map(res => this.unwrap<ChartData>(res)));
  }

  getDepartmentDistribution(): Observable<ChartData> {
    return this.http.get<any>(`${this.apiBase}/reports/department-distribution`)
      .pipe(map(res => this.unwrap<ChartData>(res)));
  }

  getPayrollTrend(months = 6): Observable<ChartData> {
    return this.http.get<any>(`${this.apiBase}/reports/payroll-trend`, { params: this.buildParams({ months }) })
      .pipe(map(res => this.unwrap<ChartData>(res)));
  }

  getAuditLogs(module?: string): Observable<AuditLog[]> {
    return this.http.get<any>(`${this.apiBase}/reports/audit-logs`, { params: this.buildParams({ module }) })
      .pipe(map(res => this.unwrap<AuditLog[]>(res)));
  }

  getUpcomingBirthdays(days = 7): Observable<UpcomingBirthday[]> {
    return this.http.get<any>(`${this.apiBase}/reports/upcoming-birthdays`, { params: this.buildParams({ days }) })
      .pipe(map(res => this.unwrap<UpcomingBirthday[]>(res)));
  }
}

@Injectable({ providedIn: 'root' })
export class DashboardService extends BaseApiService {

  getStats(): Observable<DashboardStats> {
    return this.http.get<any>(`${this.apiBase}/dashboard/stats`)
      .pipe(map(res => this.unwrap<DashboardStats>(res)));
  }

  getAttendanceTrend(days = 7): Observable<ChartData> {
    return this.http.get<any>(`${this.apiBase}/dashboard/attendance-trend`, { params: this.buildParams({ days }) })
      .pipe(map(res => this.unwrap<ChartData>(res)));
  }

  getDepartmentDistribution(): Observable<ChartData> {
    return this.http.get<any>(`${this.apiBase}/dashboard/department-distribution`)
      .pipe(map(res => this.unwrap<ChartData>(res)));
  }

  getUpcomingBirthdays(days = 7): Observable<UpcomingBirthday[]> {
    return this.http.get<any>(`${this.apiBase}/dashboard/upcoming-birthdays`, { params: this.buildParams({ days }) })
      .pipe(map(res => this.unwrap<UpcomingBirthday[]>(res)));
  }
}

@Injectable({ providedIn: 'root' })
export class SettingsService extends BaseApiService {

  getSettings(category?: string): Observable<SystemSetting[]> {
    return this.http.get<any>(`${this.apiBase}/settings`, { params: this.buildParams({ category }) })
      .pipe(map(res => this.unwrap<SystemSetting[]>(res)));
  }

  updateSetting(id: string, value: string, description?: string): Observable<SystemSetting> {
    return this.http.put<any>(`${this.apiBase}/settings/${id}`, { value, description })
      .pipe(map(res => this.unwrap<SystemSetting>(res)));
  }
}

@Injectable({ providedIn: 'root' })
export class UserManagementService extends BaseApiService {

  getUsers(): Observable<any[]> {
    return this.http.get<any>(`${this.apiBase}/users`)
      .pipe(map(res => this.unwrap<any[]>(res)));
  }

  getUser(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiBase}/users/${id}`)
      .pipe(map(res => this.unwrap<any>(res)));
  }

  getMe(): Observable<any> {
    return this.http.get<any>(`${this.apiBase}/users/me`)
      .pipe(map(res => this.unwrap<any>(res)));
  }

  updateUser(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiBase}/users/${id}`, data)
      .pipe(map(res => this.unwrap<any>(res)));
  }

  toggleMfa(id: string, enabled: boolean): Observable<boolean> {
    return this.http.post<any>(`${this.apiBase}/users/${id}/toggle-mfa`, enabled)
      .pipe(map(res => true));
  }

  deleteUser(id: string): Observable<boolean> {
    return this.http.delete<any>(`${this.apiBase}/users/${id}`)
      .pipe(map(res => true));
  }
}