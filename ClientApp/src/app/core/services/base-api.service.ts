import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ApiResponse, PaginatedResponse } from '../models';

@Injectable({ providedIn: 'root' })
export class BaseApiService {

  constructor(protected http: HttpClient) { }

  protected get apiBase(): string {
    return environment.apiBaseUrl;
  }

  protected buildParams(params?: Record<string, any>): HttpParams {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        const value = params[key];
        if (value !== null && value !== undefined && value !== '') {
          httpParams = httpParams.set(key, String(value));
        }
      });
    }
    return httpParams;
  }

  protected unwrap<T>(response: ApiResponse<T>): T {
    return response.data;
  }

  protected unwrapPaginated<T>(response: ApiResponse<PaginatedResponse<T>>): PaginatedResponse<T> {
    return response.data;
  }
}