import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from './base-api.service';
import { ManagedEmployee, TeamLeadManagement } from '../models';

@Injectable({ providedIn: 'root' })
export class ManagementService extends BaseApiService {

  getEmployees(role?: string): Observable<ManagedEmployee[]> {
    const params = role && role !== 'ALL' ? { role } : undefined;
    return this.http.get<any>(`${this.apiBase}/management/employees`, {
      params: this.buildParams(params)
    }).pipe(map(res => this.unwrap<ManagedEmployee[]>(res)));
  }

  getTeamLeads(): Observable<TeamLeadManagement[]> {
    return this.http.get<any>(`${this.apiBase}/management/team-leads`)
      .pipe(map(res => this.unwrap<TeamLeadManagement[]>(res)));
  }

  getHrMembers(): Observable<ManagedEmployee[]> {
    return this.http.get<any>(`${this.apiBase}/management/hr`)
      .pipe(map(res => this.unwrap<ManagedEmployee[]>(res)));
  }

  assignRole(employeeId: string, role: string): Observable<ManagedEmployee> {
    return this.http.put<any>(`${this.apiBase}/management/role`, { employeeId, role })
      .pipe(map(res => this.unwrap<ManagedEmployee>(res)));
  }
}