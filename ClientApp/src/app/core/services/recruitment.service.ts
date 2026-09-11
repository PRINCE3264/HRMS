import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from './base-api.service';
import { JobOpening, Candidate, CandidateStatus, Interview, InterviewStatus } from '../models';

@Injectable({ providedIn: 'root' })
export class RecruitmentService extends BaseApiService {

  getJobs(status?: string): Observable<JobOpening[]> {
    return this.http.get<any>(`${this.apiBase}/recruitment/jobs`, { params: this.buildParams({ status }) })
      .pipe(map(res => this.unwrap<JobOpening[]>(res)));
  }

  getJob(id: string): Observable<JobOpening> {
    return this.http.get<any>(`${this.apiBase}/recruitment/jobs/${id}`)
      .pipe(map(res => this.unwrap<JobOpening>(res)));
  }

  createJob(data: Partial<JobOpening>): Observable<JobOpening> {
    return this.http.post<any>(`${this.apiBase}/recruitment/jobs`, data)
      .pipe(map(res => this.unwrap<JobOpening>(res)));
  }

  updateJob(id: string, data: Partial<JobOpening>): Observable<JobOpening> {
    return this.http.put<any>(`${this.apiBase}/recruitment/jobs/${id}`, data)
      .pipe(map(res => this.unwrap<JobOpening>(res)));
  }

  deleteJob(id: string): Observable<boolean> {
    return this.http.delete<any>(`${this.apiBase}/recruitment/jobs/${id}`)
      .pipe(map(res => true));
  }

  getCandidates(jobId?: string, status?: string): Observable<Candidate[]> {
    return this.http.get<any>(`${this.apiBase}/recruitment/candidates`, { params: this.buildParams({ jobId, status }) })
      .pipe(map(res => this.unwrap<Candidate[]>(res)));
  }

  createCandidate(data: Partial<Candidate>): Observable<Candidate> {
    return this.http.post<any>(`${this.apiBase}/recruitment/candidates`, data)
      .pipe(map(res => this.unwrap<Candidate>(res)));
  }

  updateCandidate(id: string, status: CandidateStatus, notes?: string, rating?: number): Observable<Candidate> {
    return this.http.put<any>(`${this.apiBase}/recruitment/candidates/${id}`, { status, notes, rating })
      .pipe(map(res => this.unwrap<Candidate>(res)));
  }

  deleteCandidate(id: string): Observable<boolean> {
    return this.http.delete<any>(`${this.apiBase}/recruitment/candidates/${id}`)
      .pipe(map(res => true));
  }

  getInterviews(candidateId?: string, jobId?: string, interviewerId?: string): Observable<Interview[]> {
    return this.http.get<any>(`${this.apiBase}/recruitment/interviews`, { params: this.buildParams({ candidateId, jobId, interviewerId }) })
      .pipe(map(res => this.unwrap<Interview[]>(res)));
  }

  getInterview(id: string): Observable<Interview> {
    return this.http.get<any>(`${this.apiBase}/recruitment/interviews/${id}`)
      .pipe(map(res => this.unwrap<Interview>(res)));
  }

  scheduleInterview(data: Partial<Interview>): Observable<Interview> {
    return this.http.post<any>(`${this.apiBase}/recruitment/interviews`, data)
      .pipe(map(res => this.unwrap<Interview>(res)));
  }

  updateInterview(id: string, data: Partial<Interview>): Observable<Interview> {
    return this.http.put<any>(`${this.apiBase}/recruitment/interviews/${id}`, data)
      .pipe(map(res => this.unwrap<Interview>(res)));
  }

  updateInterviewStatus(id: string, data: { status: InterviewStatus; feedback?: string; rating?: number }): Observable<Interview> {
    return this.http.put<any>(`${this.apiBase}/recruitment/interviews/${id}/status`, data)
      .pipe(map(res => this.unwrap<Interview>(res)));
  }

  deleteInterview(id: string): Observable<boolean> {
    return this.http.delete<any>(`${this.apiBase}/recruitment/interviews/${id}`)
      .pipe(map(res => true));
  }
}