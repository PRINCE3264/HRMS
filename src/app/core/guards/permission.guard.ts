import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { PermissionAction } from '../models';

@Injectable({ providedIn: 'root' })
export class PermissionGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | boolean | UrlTree {
    const requiredModule = route.data['module'] as string;
    const requiredAction = route.data['action'] as PermissionAction;

    if (!requiredModule || !requiredAction) return true;

    if (this.authService.hasPermission(requiredModule, requiredAction)) {
      return true;
    }
    return this.router.createUrlTree(['/unauthorized']);
  }
}
