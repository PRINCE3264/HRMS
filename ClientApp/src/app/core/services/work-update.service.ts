import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from './base-api.service';
import { DailyWorkUpdate, CreateDailyWorkUpdate, UpdateDailyWorkUpdate } from '../models';

@Injectable({ providedIn: 'root' })
export class WorkUpdateService extends BaseApiService {

  getByDate(date?: string): Observable<DailyWorkUpdate[]> {
    return this.http.get<any>(`${this.apiBase}/work-updates`, { params: this.buildParams({ date }) })
      .pipe(map(res => this.unwrap<DailyWorkUpdate[]>(res)));
  }

  getMine(): Observable<DailyWorkUpdate[]> {
    return this.http.get<any>(`${this.apiBase}/work-updates/my`)
      .pipe(map(res => this.unwrap<DailyWorkUpdate[]>(res)));
  }

  getByEmployee(employeeId: string): Observable<DailyWorkUpdate[]> {
    return this.http.get<any>(`${this.apiBase}/work-updates/employee/${employeeId}`)
      .pipe(map(res => this.unwrap<DailyWorkUpdate[]>(res)));
  }

  submit(data: CreateDailyWorkUpdate): Observable<DailyWorkUpdate> {
    return this.http.post<any>(`${this.apiBase}/work-updates/submit`, data)
      .pipe(map(res => this.unwrap<DailyWorkUpdate>(res)));
  }

  update(id: string, data: UpdateDailyWorkUpdate): Observable<DailyWorkUpdate> {
    return this.http.put<any>(`${this.apiBase}/work-updates/${id}`, data)
      .pipe(map(res => this.unwrap<DailyWorkUpdate>(res)));
  }

  delete(id: string): Observable<boolean> {
    return this.http.delete<any>(`${this.apiBase}/work-updates/${id}`)
      .pipe(map(res => true));
  }
}