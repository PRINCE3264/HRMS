import { Injectable } from '@angular/core';
import { UserRole } from '../models';
import { ROLE_LABELS, ROLE_PERMISSIONS } from '../constants';
import { AuthService } from './auth.service';
import { PermissionAction } from '../models';

@Injectable({ providedIn: 'root' })
export class RoleService {
  constructor(private authService: AuthService) {}

  get currentRole(): UserRole | null {
    return this.authService.userRole;
  }

  get roleLabel(): string {
    const role = this.currentRole;
    return role ? ROLE_LABELS[role] : 'Unknown';
  }

  hasRole(role: UserRole): boolean {
    return this.currentRole === role;
  }

  hasAnyRole(roles: UserRole[]): boolean {
    const current = this.currentRole;
    return current ? roles.includes(current) : false;
  }

  hasPermission(module: string, action: PermissionAction): boolean {
    return this.authService.hasPermission(module, action);
  }

  hasModuleAccess(module: string): boolean {
    return this.authService.hasModuleAccess(module);
  }

  getAccessibleModules(): string[] {
    const role = this.currentRole;
    if (!role) return [];
    const perms = ROLE_PERMISSIONS[role];
    return perms ? Object.keys(perms) : [];
  }
}
