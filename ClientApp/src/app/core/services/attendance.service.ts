import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from './base-api.service';
import { Attendance, Shift, ShiftAssignment, PaginatedResponse } from '../models';

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
}