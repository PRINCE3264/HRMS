import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from './base-api.service';
import { Department, Designation, Branch, Team } from '../models';

@Injectable({ providedIn: 'root' })
export class DepartmentService extends BaseApiService {

  getDepartments(): Observable<Department[]> {
    return this.http.get<any>(`${this.apiBase}/departments`)
      .pipe(map(res => this.unwrap<Department[]>(res)));
  }

  getDepartment(id: string): Observable<Department> {
    return this.http.get<any>(`${this.apiBase}/departments/${id}`)
      .pipe(map(res => this.unwrap<Department>(res)));
  }

  createDepartment(data: Partial<Department>): Observable<Department> {
    return this.http.post<any>(`${this.apiBase}/departments`, data)
      .pipe(map(res => this.unwrap<Department>(res)));
  }

  updateDepartment(id: string, data: Partial<Department>): Observable<Department> {
    return this.http.put<any>(`${this.apiBase}/departments/${id}`, data)
      .pipe(map(res => this.unwrap<Department>(res)));
  }

  deleteDepartment(id: string): Observable<boolean> {
    return this.http.delete<any>(`${this.apiBase}/departments/${id}`)
      .pipe(map(res => true));
  }

  getDesignations(): Observable<Designation[]> {
    return this.http.get<any>(`${this.apiBase}/designations`)
      .pipe(map(res => this.unwrap<Designation[]>(res)));
  }

  createDesignation(data: Partial<Designation>): Observable<Designation> {
    return this.http.post<any>(`${this.apiBase}/designations`, data)
      .pipe(map(res => this.unwrap<Designation>(res)));
  }

  updateDesignation(id: string, data: Partial<Designation>): Observable<Designation> {
    return this.http.put<any>(`${this.apiBase}/designations/${id}`, data)
      .pipe(map(res => this.unwrap<Designation>(res)));
  }

  deleteDesignation(id: string): Observable<boolean> {
    return this.http.delete<any>(`${this.apiBase}/designations/${id}`)
      .pipe(map(res => true));
  }

  getBranches(): Observable<Branch[]> {
    return this.http.get<any>(`${this.apiBase}/branches`)
      .pipe(map(res => this.unwrap<Branch[]>(res)));
  }

  createBranch(data: Partial<Branch>): Observable<Branch> {
    return this.http.post<any>(`${this.apiBase}/branches`, data)
      .pipe(map(res => this.unwrap<Branch>(res)));
  }

  updateBranch(id: string, data: Partial<Branch>): Observable<Branch> {
    return this.http.put<any>(`${this.apiBase}/branches/${id}`, data)
      .pipe(map(res => this.unwrap<Branch>(res)));
  }

  deleteBranch(id: string): Observable<boolean> {
    return this.http.delete<any>(`${this.apiBase}/branches/${id}`)
      .pipe(map(res => true));
  }

  getTeams(): Observable<Team[]> {
    return this.http.get<any>(`${this.apiBase}/teams`)
      .pipe(map(res => this.unwrap<Team[]>(res)));
  }

  createTeam(data: Partial<Team>): Observable<Team> {
    return this.http.post<any>(`${this.apiBase}/teams`, data)
      .pipe(map(res => this.unwrap<Team>(res)));
  }

  deleteTeam(id: string): Observable<boolean> {
    return this.http.delete<any>(`${this.apiBase}/teams/${id}`)
      .pipe(map(res => true));
  }
}