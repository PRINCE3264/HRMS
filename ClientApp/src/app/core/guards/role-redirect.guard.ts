import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserRole } from '../models';

type RouteMap = Partial<Record<UserRole, string>>;

@Injectable({ providedIn: 'root' })
export class RoleRedirectGuard implements CanActivate {
  private featureModules: Record<string, RouteMap> = {
    dashboard: { ADMIN: 'admin', HR: 'hr', TL: 'tl', EMPLOYEE: 'employee' },
    employees: { ADMIN: 'admin', HR: 'hr' },
    'employees-add': { ADMIN: 'admin', HR: 'admin' },
    'employees-edit': { ADMIN: 'admin', HR: 'admin' },
    'employees-detail': { ADMIN: 'admin', HR: 'admin' },
    departments: { ADMIN: 'admin', HR: 'hr' },
    designations: { ADMIN: 'admin' },
    branches: { ADMIN: 'admin' },
    teams: { ADMIN: 'admin', HR: 'hr' },
    attendance: { ADMIN: 'admin', HR: 'hr' },
    leave: { ADMIN: 'admin', HR: 'hr' },
    shifts: { ADMIN: 'admin', HR: 'hr' },
    payroll: { ADMIN: 'admin', HR: 'hr' },
    recruitment: { ADMIN: 'admin', HR: 'hr' },
    onboarding: { ADMIN: 'admin', HR: 'hr' },
    performance: { ADMIN: 'admin', HR: 'hr' },
    training: { ADMIN: 'admin', HR: 'hr' },
    documents: { ADMIN: 'admin', HR: 'hr' },
    announcements: { ADMIN: 'admin', HR: 'hr', TL: 'tl', EMPLOYEE: 'employee' },
    reports: { ADMIN: 'admin', HR: 'hr' },
    users: { ADMIN: 'admin' },
    roles: { ADMIN: 'admin' },
    settings: { ADMIN: 'admin', HR: 'admin', TL: 'admin', EMPLOYEE: 'admin' },
    'audit-logs': { ADMIN: 'admin' },
    team: { TL: 'tl' },
    'team-attendance': { TL: 'tl' },
    'team-leave': { TL: 'tl' },
    'team-tasks': { TL: 'tl' },
    'team-performance': { TL: 'tl' },
    'team-kpi': { TL: 'tl' },
    'team-reports': { TL: 'tl' },
    'my-profile': { EMPLOYEE: 'employee' },
    'my-attendance': { EMPLOYEE: 'employee' },
    'check-in-out': { EMPLOYEE: 'employee' },
    'break-tracker': { EMPLOYEE: 'employee' },
    'daily-work-update': { EMPLOYEE: 'employee' },
    'my-leave': { EMPLOYEE: 'employee' },
    'apply-leave': { EMPLOYEE: 'employee' },
    'my-payslips': { EMPLOYEE: 'employee' },
    'my-tasks': { EMPLOYEE: 'employee' },
    'my-performance': { EMPLOYEE: 'employee' },
    'my-documents': { EMPLOYEE: 'employee' },
    notifications: { ADMIN: 'employee', HR: 'employee', TL: 'employee', EMPLOYEE: 'employee' },
  };

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): UrlTree {
    const feature = route.data['feature'] as string;
    const role = this.authService.userRole;
    const targetModule = feature && role ? this.featureModules[feature]?.[role] : undefined;

    if (!targetModule) {
      return this.router.createUrlTree(['/unauthorized']);
    }

    const tree = this.router.parseUrl(state.url);
    const segments = tree.root.children['primary']?.segments.map(s => s.path) ?? [];
    return this.router.createUrlTree(['/' + targetModule, ...segments], {
      queryParams: tree.queryParams,
      fragment: tree.fragment ?? undefined
    });
  }
}