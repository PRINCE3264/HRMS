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
    'employees-add': { ADMIN: 'admin', HR: 'hr' },
    'employees-edit': { ADMIN: 'admin', HR: 'hr' },
    'employees-detail': { ADMIN: 'admin', HR: 'hr' },
    departments: { ADMIN: 'admin', HR: 'hr' },
    designations: { ADMIN: 'admin', HR: 'hr' },
    branches: { ADMIN: 'admin', HR: 'hr' },
    teams: { ADMIN: 'admin', HR: 'hr' },
    projects: { ADMIN: 'admin', HR: 'hr' },
    'employee-management': { ADMIN: 'admin', HR: 'hr' },
    'tl-management': { ADMIN: 'admin', HR: 'hr' },
    'hr-management': { ADMIN: 'admin' },
    attendance: { ADMIN: 'admin', HR: 'hr' },
    'attendance-corrections': { ADMIN: 'admin', HR: 'hr' },
    'attendance-summary': { ADMIN: 'admin', HR: 'hr' },
    'attendance-rules': { ADMIN: 'admin', HR: 'hr' },
    'attendance-rules-add': { ADMIN: 'admin', HR: 'hr' },
    'attendance-rules-edit': { ADMIN: 'admin', HR: 'hr' },
    leave: { ADMIN: 'admin', HR: 'hr' },
    shifts: { ADMIN: 'admin', HR: 'hr' },
    payroll: { ADMIN: 'admin', HR: 'hr' },
    'salary-structures': { ADMIN: 'admin', HR: 'hr' },
    'payroll-reports': { ADMIN: 'admin', HR: 'hr' },
    recruitment: { ADMIN: 'admin', HR: 'hr' },
    onboarding: { ADMIN: 'admin', HR: 'hr' },
    performance: { ADMIN: 'admin', HR: 'hr' },
    training: { ADMIN: 'admin', HR: 'hr' },
    documents: { ADMIN: 'admin', HR: 'hr' },
    announcements: { ADMIN: 'admin', HR: 'hr', TL: 'tl', EMPLOYEE: 'employee' },
    reports: { ADMIN: 'admin', HR: 'hr' },
    users: { ADMIN: 'admin' },
    roles: { ADMIN: 'admin' },
    settings: { ADMIN: 'admin', HR: 'hr', TL: 'tl', EMPLOYEE: 'employee' },
    'company-settings': { ADMIN: 'admin' },
    'email-sms-config': { ADMIN: 'admin' },
    'notification-settings': { ADMIN: 'admin' },
    'audit-logs': { ADMIN: 'admin' },
    team: { TL: 'tl' },
    'team-attendance': { TL: 'tl' },
    'team-leave': { TL: 'tl' },
    'team-tasks': { TL: 'tl' },
    'team-projects': { TL: 'tl' },
    'team-performance': { TL: 'tl' },
    'team-kpi': { TL: 'tl' },
    'team-reports': { TL: 'tl' },
    'my-profile': { EMPLOYEE: 'employee', TL: 'employee' },
    'my-attendance': { EMPLOYEE: 'employee', TL: 'employee' },
    'check-in-out': { EMPLOYEE: 'employee', TL: 'employee' },
    'break-tracker': { EMPLOYEE: 'employee', TL: 'employee' },
    'daily-work-update': { EMPLOYEE: 'employee', TL: 'employee' },
    'my-leave': { EMPLOYEE: 'employee' },
    'apply-leave': { EMPLOYEE: 'employee' },
    'my-payslips': { EMPLOYEE: 'employee' },
    'my-tasks': { EMPLOYEE: 'employee' },
    'my-projects': { EMPLOYEE: 'employee' },
    'my-performance': { EMPLOYEE: 'employee' },
    'my-documents': { EMPLOYEE: 'employee' },
    notifications: { ADMIN: 'employee', HR: 'employee', TL: 'employee', EMPLOYEE: 'employee' },
    'reporting-hierarchy': { ADMIN: 'admin', HR: 'hr' },
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