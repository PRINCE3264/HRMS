import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from './base-api.service';
import { ReportingNode, ReportingFlat } from '../models';

@Injectable({ providedIn: 'root' })
export class OrganizationService extends BaseApiService {

  getReportingHierarchy(specificEmployeeId?: string): Observable<ReportingNode[]> {
    return this.http.get<any>(`${this.apiBase}/org/reporting-hierarchy`,
      { params: this.buildParams({ employeeId: specificEmployeeId }) })
      .pipe(map(res => this.unwrap<ReportingNode[]>(res)));
  }

  getReportingMap(): Observable<ReportingFlat[]> {
    return this.http.get<any>(`${this.apiBase}/org/reporting-map`)
      .pipe(map(res => this.unwrap<ReportingFlat[]>(res)));
  }
}