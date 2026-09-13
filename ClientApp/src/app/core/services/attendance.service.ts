import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from './base-api.service';
import { Attendance, Shift, ShiftAssignment, PaginatedResponse } from '../models';
import { AttendanceCorrection, AttendanceSummary, AttendanceRule } from '../models';

export interface AttendanceQuery {
  page?: number;
  pageSize?: number;
  search?: string;
  date?: string;
}

@Injectable({ providedIn: 'root' })
export class AttendanceService extends BaseApiService {

  getRecords(query: AttendanceQuery = {}): Observable<PaginatedResponse<Attendance>> {
    return this.http.get<any>(`${this.apiBase}/attendance`, { params: this.buildParams(query) })
      .pipe(map(res => this.unwrapPaginated<Attendance>(res)));
  }

  getByDate(date: string): Observable<Attendance[]> {
    return this.http.get<any>(`${this.apiBase}/attendance/date/${date}`)
      .pipe(map(res => this.unwrap<Attendance[]>(res)));
  }

  getByEmployee(employeeId: string, startDate?: string, endDate?: string): Observable<Attendance[]> {
    return this.http.get<any>(`${this.apiBase}/attendance/employee/${employeeId}`,
      { params: this.buildParams({ startDate, endDate }) })
      .pipe(map(res => this.unwrap<Attendance[]>(res)));
  }

  getToday(): Observable<Attendance> {
    return this.http.get<any>(`${this.apiBase}/attendance/today`)
      .pipe(map(res => this.unwrap<Attendance>(res)));
  }

  checkIn(data: { latitude?: number; longitude?: number; location?: string; notes?: string }): Observable<Attendance> {
    return this.http.post<any>(`${this.apiBase}/attendance/check-in`, data)
      .pipe(map(res => this.unwrap<Attendance>(res)));
  }

  checkOut(data: { latitude?: number; longitude?: number; location?: string; notes?: string }): Observable<Attendance> {
    return this.http.post<any>(`${this.apiBase}/attendance/check-out`, data)
      .pipe(map(res => this.unwrap<Attendance>(res)));
  }

  startBreak(data: { breakType?: string; reason?: string }): Observable<any> {
    return this.http.post<any>(`${this.apiBase}/attendance/break/start`, data)
      .pipe(map(res => this.unwrap<any>(res)));
  }

  endBreak(): Observable<any> {
    return this.http.post<any>(`${this.apiBase}/attendance/break/end`, {})
      .pipe(map(res => this.unwrap<any>(res)));
  }

  private defaultShiftsList = [
    {
      id: '1',
      name: 'Morning Shift',
      code: 'SH-01',
      startTime: '07:00 AM',
      endTime: '04:00 PM',
      breakDurationMinutes: 60,
      lateGracePeriodMinutes: 15,
      workingDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      assignedEmployees: 86,
      status: 'ACTIVE',
      themeClass: 'theme-morning',
      icon: 'fas fa-sun',
      color: '#f59e0b',
      description: 'Morning operational shift operating from 07:00 AM to 04:00 PM'
    },
    {
      id: '2',
      name: 'General Shift',
      code: 'SH-02',
      startTime: '09:00 AM',
      endTime: '06:00 PM',
      breakDurationMinutes: 60,
      lateGracePeriodMinutes: 15,
      workingDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      assignedEmployees: 167,
      status: 'ACTIVE',
      themeClass: 'theme-general',
      icon: 'fas fa-building',
      color: '#4f46e5',
      description: 'Standard corporate shift operating from 09:00 AM to 06:00 PM'
    }
  ];

  getLocalShifts(): any[] {
    const stored = localStorage.getItem('hrm_shifts');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {}
    }
    localStorage.setItem('hrm_shifts', JSON.stringify(this.defaultShiftsList));
    return [...this.defaultShiftsList];
  }

  saveLocalShifts(shifts: any[]): void {
    localStorage.setItem('hrm_shifts', JSON.stringify(shifts));
  }

  getShifts(): Observable<Shift[]> {
    return this.http.get<any>(`${this.apiBase}/shifts`)
      .pipe(map(res => this.unwrap<Shift[]>(res)));
  }

  createShift(data: Partial<Shift>): Observable<Shift> {
    return this.http.post<any>(`${this.apiBase}/shifts`, data)
      .pipe(map(res => this.unwrap<Shift>(res)));
  }

  updateShift(id: string, data: Partial<Shift>): Observable<Shift> {
    return this.http.put<any>(`${this.apiBase}/shifts/${id}`, data)
      .pipe(map(res => this.unwrap<Shift>(res)));
  }

  deleteShift(id: string): Observable<boolean> {
    return this.http.delete<any>(`${this.apiBase}/shifts/${id}`)
      .pipe(map(res => true));
  }

  getAssignments(): Observable<ShiftAssignment[]> {
    return this.http.get<any>(`${this.apiBase}/shifts/assignments`)
      .pipe(map(res => this.unwrap<ShiftAssignment[]>(res)));
  }

  createAssignment(data: Partial<ShiftAssignment>): Observable<ShiftAssignment> {
    return this.http.post<any>(`${this.apiBase}/shifts/assignments`, data)
      .pipe(map(res => this.unwrap<ShiftAssignment>(res)));
  }

  getSummary(query: { startDate?: string; endDate?: string } = {}): Observable<AttendanceSummary[]> {
    return this.http.get<any>(`${this.apiBase}/attendance/summary`, { params: this.buildParams(query) })
      .pipe(map(res => this.unwrap<AttendanceSummary[]>(res)));
  }

  getTeamSummary(startDate?: string, endDate?: string): Observable<AttendanceSummary[]> {
    return this.http.get<any>(`${this.apiBase}/attendance/summary/team`, { params: this.buildParams({ startDate, endDate }) })
      .pipe(map(res => this.unwrap<AttendanceSummary[]>(res)));
  }

  getLateArrivals(query: { employeeId?: string; from?: string; to?: string; page?: number; pageSize?: number } = {}): Observable<PaginatedResponse<any>> {
    return this.http.get<any>(`${this.apiBase}/attendance/late-arrivals`, { params: this.buildParams(query) })
      .pipe(map(res => this.unwrapPaginated<any>(res)));
  }

  getCorrections(query: { status?: string; employeeId?: string; page?: number; pageSize?: number } = {}): Observable<PaginatedResponse<AttendanceCorrection>> {
    return this.http.get<any>(`${this.apiBase}/attendance/corrections`, { params: this.buildParams(query) })
      .pipe(map(res => this.unwrapPaginated<AttendanceCorrection>(res)));
  }

  requestCorrection(data: Partial<AttendanceCorrection>): Observable<AttendanceCorrection> {
    return this.http.post<any>(`${this.apiBase}/attendance/corrections`, data)
      .pipe(map(res => this.unwrap<AttendanceCorrection>(res)));
  }

  reviewCorrection(id: string, data: { status: string; rejectionReason?: string }): Observable<AttendanceCorrection> {
    return this.http.put<any>(`${this.apiBase}/attendance/corrections/${id}`, data)
      .pipe(map(res => this.unwrap<AttendanceCorrection>(res)));
  }

  getRules(): Observable<AttendanceRule[]> {
    return this.http.get<any>(`${this.apiBase}/attendance/rules`)
      .pipe(map(res => this.unwrap<AttendanceRule[]>(res)));
  }

  createRule(data: Partial<AttendanceRule>): Observable<AttendanceRule> {
    return this.http.post<any>(`${this.apiBase}/attendance/rules`, data)
      .pipe(map(res => this.unwrap<AttendanceRule>(res)));
  }

  updateRule(id: string, data: Partial<AttendanceRule>): Observable<AttendanceRule> {
    return this.http.put<any>(`${this.apiBase}/attendance/rules/${id}`, data)
      .pipe(map(res => this.unwrap<AttendanceRule>(res)));
  }

  deleteRule(id: string): Observable<boolean> {
    return this.http.delete<any>(`${this.apiBase}/attendance/rules/${id}`)
      .pipe(map(res => true));
  }
}