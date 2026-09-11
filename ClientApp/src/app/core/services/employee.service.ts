import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from './base-api.service';
import { Employee, PaginatedResponse } from '../models';

export interface EmployeeQuery {
  page?: number;
  pageSize?: number;
  search?: string;
  status?: string;
  departmentId?: string;
  sortBy?: string;
  sortOrder?: string;
}

@Injectable({ providedIn: 'root' })
export class EmployeeService extends BaseApiService {

  getEmployees(query: EmployeeQuery = {}): Observable<PaginatedResponse<Employee>> {
    return this.http.get<any>(`${this.apiBase}/employees`, { params: this.buildParams(query) })
      .pipe(map(res => this.unwrapPaginated<Employee>(res)));
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<any>(`${this.apiBase}/employees/all`)
      .pipe(map(res => this.unwrap<Employee[]>(res)));
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<any>(`${this.apiBase}/employees/${id}`)
      .pipe(map(res => this.unwrap<Employee>(res)));
  }

  getByDepartment(departmentId: string): Observable<Employee[]> {
    return this.http.get<any>(`${this.apiBase}/employees/department/${departmentId}`)
      .pipe(map(res => this.unwrap<Employee[]>(res)));
  }

  getByTeam(teamId: string): Observable<Employee[]> {
    return this.http.get<any>(`${this.apiBase}/employees/team/${teamId}`)
      .pipe(map(res => this.unwrap<Employee[]>(res)));
  }

  createEmployee(data: Partial<Employee>): Observable<Employee> {
    return this.http.post<any>(`${this.apiBase}/employees`, data)
      .pipe(map(res => this.unwrap<Employee>(res)));
  }

  updateEmployee(id: string, data: Partial<Employee>): Observable<Employee> {
    return this.http.put<any>(`${this.apiBase}/employees/${id}`, data)
      .pipe(map(res => this.unwrap<Employee>(res)));
  }

  deleteEmployee(id: string): Observable<boolean> {
    return this.http.delete<any>(`${this.apiBase}/employees/${id}`)
      .pipe(map(res => true));
  }

  setEmploymentStatus(id: string, status: string, exitDate?: string, exitReason?: string): Observable<Employee> {
    return this.http.put<any>(`${this.apiBase}/employees/${id}/status`, { status, exitDate, exitReason })
      .pipe(map(res => this.unwrap<Employee>(res)));
  }
}