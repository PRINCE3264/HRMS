import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from './base-api.service';
import { Training, Onboarding } from '../models';

@Injectable({ providedIn: 'root' })
export class TrainingService extends BaseApiService {

  getTrainings(): Observable<Training[]> {
    return this.http.get<any>(`${this.apiBase}/trainings`)
      .pipe(map(res => this.unwrap<Training[]>(res)));
  }

  createTraining(data: Partial<Training>): Observable<Training> {
    return this.http.post<any>(`${this.apiBase}/trainings`, data)
      .pipe(map(res => this.unwrap<Training>(res)));
  }

  updateTraining(id: string, data: Partial<Training>): Observable<Training> {
    return this.http.put<any>(`${this.apiBase}/trainings/${id}`, data)
      .pipe(map(res => this.unwrap<Training>(res)));
  }

  deleteTraining(id: string): Observable<boolean> {
    return this.http.delete<any>(`${this.apiBase}/trainings/${id}`)
      .pipe(map(res => true));
  }

  enroll(trainingId: string): Observable<Training> {
    return this.http.post<any>(`${this.apiBase}/trainings/${trainingId}/enroll`, {})
      .pipe(map(res => this.unwrap<Training>(res)));
  }

  getOnboardings(): Observable<Onboarding[]> {
    return this.http.get<any>(`${this.apiBase}/onboarding`)
      .pipe(map(res => this.unwrap<Onboarding[]>(res)));
  }

  getOnboarding(id: string): Observable<Onboarding> {
    return this.http.get<any>(`${this.apiBase}/onboarding/${id}`)
      .pipe(map(res => this.unwrap<Onboarding>(res)));
  }

  createOnboarding(data: Partial<Onboarding>): Observable<Onboarding> {
    return this.http.post<any>(`${this.apiBase}/onboarding`, data)
      .pipe(map(res => this.unwrap<Onboarding>(res)));
  }

  updateTask(taskId: string, isCompleted: boolean): Observable<Onboarding> {
    return this.http.put<any>(`${this.apiBase}/onboarding/tasks/${taskId}`, JSON.stringify(isCompleted), { headers: { 'Content-Type': 'application/json' } })
      .pipe(map(res => this.unwrap<Onboarding>(res)));
  }
}