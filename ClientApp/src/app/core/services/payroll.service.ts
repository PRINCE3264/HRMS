import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from './base-api.service';
import { PayrollRecord, Payslip, PaginatedResponse } from '../models';

@Injectable({ providedIn: 'root' })
export class PayrollService extends BaseApiService {

  getPayroll(query: { page?: number; pageSize?: number; search?: string; month?: string; year?: number; status?: string } = {}): Observable<PaginatedResponse<PayrollRecord>> {
    return this.http.get<any>(`${this.apiBase}/payroll`, { params: this.buildParams(query) })
      .pipe(map(res => this.unwrapPaginated<PayrollRecord>(res)));
  }

  getByEmployee(employeeId: string): Observable<PayrollRecord[]> {
    return this.http.get<any>(`${this.apiBase}/payroll/employee/${employeeId}`)
      .pipe(map(res => this.unwrap<PayrollRecord[]>(res)));
  }

  getMyPayroll(): Observable<PayrollRecord[]> {
    return this.http.get<any>(`${this.apiBase}/payroll/my`)
      .pipe(map(res => this.unwrap<PayrollRecord[]>(res)));
  }

  create(data: Partial<PayrollRecord>): Observable<PayrollRecord> {
    return this.http.post<any>(`${this.apiBase}/payroll`, data)
      .pipe(map(res => this.unwrap<PayrollRecord>(res)));
  }

  updateStatus(id: string, status: string): Observable<PayrollRecord> {
    return this.http.put<any>(`${this.apiBase}/payroll/${id}/status`, JSON.stringify(status), { headers: { 'Content-Type': 'application/json' } })
      .pipe(map(res => this.unwrap<PayrollRecord>(res)));
  }

  getMyPayslip(month: string, year: number): Observable<Payslip> {
    return this.http.get<any>(`${this.apiBase}/payroll/payslip/my`, { params: this.buildParams({ month, year }) })
      .pipe(map(res => this.unwrap<Payslip>(res)));
  }

  getPayslip(payrollId: string): Observable<Payslip> {
    return this.http.get<any>(`${this.apiBase}/payroll/payslip/${payrollId}`)
      .pipe(map(res => this.unwrap<Payslip>(res)));
  }

  delete(id: string): Observable<boolean> {
    return this.http.delete<any>(`${this.apiBase}/payroll/${id}`)
      .pipe(map(res => true));
  }
}