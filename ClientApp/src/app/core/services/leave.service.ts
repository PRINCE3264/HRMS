import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from './base-api.service';
import { LeaveRequest, LeaveBalance, LeaveStatus, PaginatedResponse } from '../models';

@Injectable({ providedIn: 'root' })
export class LeaveService extends BaseApiService {

  getRequests(query: { page?: number; pageSize?: number; search?: string; status?: string } = {}): Observable<PaginatedResponse<LeaveRequest>> {
    return this.http.get<any>(`${this.apiBase}/leave`, { params: this.buildParams(query) })
      .pipe(map(res => this.unwrapPaginated<LeaveRequest>(res)));
  }

  getPending(): Observable<LeaveRequest[]> {
    return this.http.get<any>(`${this.apiBase}/leave/pending`)
      .pipe(map(res => this.unwrap<LeaveRequest[]>(res)));
  }

  getMyLeave(): Observable<LeaveRequest[]> {
    return this.http.get<any>(`${this.apiBase}/leave/my`)
      .pipe(map(res => this.unwrap<LeaveRequest[]>(res)));
  }

  getByEmployee(employeeId: string): Observable<LeaveRequest[]> {
    return this.http.get<any>(`${this.apiBase}/leave/employee/${employeeId}`)
      .pipe(map(res => this.unwrap<LeaveRequest[]>(res)));
  }

  apply(data: { leaveType: string; startDate: string; endDate: string; reason: string }): Observable<LeaveRequest> {
    return this.http.post<any>(`${this.apiBase}/leave/apply`, data)
      .pipe(map(res => this.unwrap<LeaveRequest>(res)));
  }

  approveOrReject(id: string, status: LeaveStatus, comments?: string): Observable<LeaveRequest> {
    return this.http.post<any>(`${this.apiBase}/leave/${id}/approve-or-reject`, { status, comments })
      .pipe(map(res => this.unwrap<LeaveRequest>(res)));
  }

  cancel(id: string): Observable<boolean> {
    return this.http.post<any>(`${this.apiBase}/leave/${id}/cancel`, {})
      .pipe(map(res => true));
  }

  getBalances(): Observable<LeaveBalance[]> {
    return this.http.get<any>(`${this.apiBase}/leave/balances`)
      .pipe(map(res => this.unwrap<LeaveBalance[]>(res)));
  }

  getBalancesByEmployee(employeeId: string): Observable<LeaveBalance[]> {
    return this.http.get<any>(`${this.apiBase}/leave/balances/employee/${employeeId}`)
      .pipe(map(res => this.unwrap<LeaveBalance[]>(res)));
  }
}