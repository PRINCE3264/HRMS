import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from './base-api.service';
import { RoleDto, RoleCatalogDto, RoleModuleDto } from '../models';

@Injectable({ providedIn: 'root' })
export class RolesService extends BaseApiService {

  getRoles(): Observable<RoleDto[]> {
    return this.http.get<any>(`${this.apiBase}/roles`)
      .pipe(map(res => this.unwrap<RoleDto[]>(res)));
  }

  getRole(role: string): Observable<RoleDto> {
    return this.http.get<any>(`${this.apiBase}/roles/${role}`)
      .pipe(map(res => this.unwrap<RoleDto>(res)));
  }

  getCatalog(): Observable<RoleCatalogDto> {
    return this.http.get<any>(`${this.apiBase}/roles/modules`)
      .pipe(map(res => this.unwrap<RoleCatalogDto>(res)));
  }

  updateRolePermissions(role: string, permissions: RoleModuleDto[]): Observable<RoleDto> {
    return this.http.put<any>(`${this.apiBase}/roles/${role}/permissions`, { permissions })
      .pipe(map(res => this.unwrap<RoleDto>(res)));
  }

  resetRolePermissions(role: string): Observable<boolean> {
    return this.http.delete<any>(`${this.apiBase}/roles/${role}/permissions`)
      .pipe(map(res => true));
  }
}