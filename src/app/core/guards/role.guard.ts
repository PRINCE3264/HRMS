import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, Route, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserRole } from '../models';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | boolean | UrlTree {
    const expectedRoles = route.data['roles'] as UserRole[];
    if (!expectedRoles || expectedRoles.length === 0) return true;

    const currentRole = this.authService.userRole;
    if (currentRole && expectedRoles.includes(currentRole)) {
      return true;
    }
    return this.router.createUrlTree(['/unauthorized']);
  }

  canLoad(route: Route): boolean {
    const expectedRoles = route.data?.['roles'] as UserRole[];
    if (!expectedRoles || expectedRoles.length === 0) return true;

    const currentRole = this.authService.userRole;
    return !!currentRole && expectedRoles.includes(currentRole);
  }
}