import { Injectable } from '@angular/core';
import { PermissionAction } from '../models';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class PermissionService {
  constructor(private authService: AuthService) {}

  can(module: string, action: PermissionAction): boolean {
    return this.authService.hasPermission(module, action);
  }

  canView(module: string): boolean {
    return this.can(module, PermissionAction.VIEW);
  }

  canCreate(module: string): boolean {
    return this.can(module, PermissionAction.CREATE);
  }

  canUpdate(module: string): boolean {
    return this.can(module, PermissionAction.UPDATE);
  }

  canDelete(module: string): boolean {
    return this.can(module, PermissionAction.DELETE);
  }

  canApprove(module: string): boolean {
    return this.can(module, PermissionAction.APPROVE);
  }

  canExport(module: string): boolean {
    return this.can(module, PermissionAction.EXPORT);
  }
}
