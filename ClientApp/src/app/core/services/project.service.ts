import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from './base-api.service';
import { Project, ProjectMember, EmployeeOption } from '../models';

@Injectable({ providedIn: 'root' })
export class ProjectService extends BaseApiService {

  getProjects(): Observable<Project[]> {
    return this.http.get<any>(`${this.apiBase}/projects`)
      .pipe(map(res => this.unwrap<Project[]>(res)));
  }

  getAssignedToMe(): Observable<Project[]> {
    return this.http.get<any>(`${this.apiBase}/projects/assigned-to-me`)
      .pipe(map(res => this.unwrap<Project[]>(res)));
  }

  getMyProjects(): Observable<Project[]> {
    return this.http.get<any>(`${this.apiBase}/projects/my`)
      .pipe(map(res => this.unwrap<Project[]>(res)));
  }

  getProject(id: string): Observable<Project> {
    return this.http.get<any>(`${this.apiBase}/projects/${id}`)
      .pipe(map(res => this.unwrap<Project>(res)));
  }

  createProject(data: {
    name: string;
    projectCode?: string;
    description?: string;
    departmentId: string;
    teamId?: string;
    teamLeadId?: string;
    priority: string;
    startDate?: string;
    endDate?: string;
  }): Observable<Project> {
    return this.http.post<any>(`${this.apiBase}/projects`, data)
      .pipe(map(res => this.unwrap<Project>(res)));
  }

  updateProject(id: string, data: {
    name: string;
    description?: string;
    departmentId: string;
    teamId?: string;
    teamLeadId?: string;
    status: string;
    priority: string;
    startDate?: string;
    endDate?: string;
  }): Observable<Project> {
    return this.http.put<any>(`${this.apiBase}/projects/${id}`, data)
      .pipe(map(res => this.unwrap<Project>(res)));
  }

  deleteProject(id: string): Observable<boolean> {
    return this.http.delete<any>(`${this.apiBase}/projects/${id}`)
      .pipe(map(res => true));
  }

  assignTeamLead(id: string, teamLeadId?: string): Observable<Project> {
    return this.http.post<any>(`${this.apiBase}/projects/${id}/assign-team-lead`, { teamLeadId })
      .pipe(map(res => this.unwrap<Project>(res)));
  }

  getTeamLeads(): Observable<EmployeeOption[]> {
    return this.http.get<any>(`${this.apiBase}/projects/team-leads`)
      .pipe(map(res => this.unwrap<EmployeeOption[]>(res)));
  }

  getMembers(id: string): Observable<ProjectMember[]> {
    return this.http.get<any>(`${this.apiBase}/projects/${id}/members`)
      .pipe(map(res => this.unwrap<ProjectMember[]>(res)));
  }

  getCandidates(id: string): Observable<EmployeeOption[]> {
    return this.http.get<any>(`${this.apiBase}/projects/${id}/candidates`)
      .pipe(map(res => this.unwrap<EmployeeOption[]>(res)));
  }

  assignMembers(id: string, employeeIds: string[]): Observable<ProjectMember[]> {
    return this.http.post<any>(`${this.apiBase}/projects/${id}/members`, { employeeIds })
      .pipe(map(res => this.unwrap<ProjectMember[]>(res)));
  }

  removeMember(id: string, employeeId: string): Observable<ProjectMember[]> {
    return this.http.delete<any>(`${this.apiBase}/projects/${id}/members/${employeeId}`)
      .pipe(map(res => this.unwrap<ProjectMember[]>(res)));
  }
}