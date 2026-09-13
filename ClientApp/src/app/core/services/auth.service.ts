import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User, UserRole, LoginRequest, RegisterRequest, LoginResponse, Permission, PermissionAction } from '../models';
import { ROLE_PERMISSIONS } from '../constants';
import { DynamicRouteService } from './dynamic-route.service';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private tokenSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient, private dynamicRouteService: DynamicRouteService) {
    const sessionUser = sessionStorage.getItem('hrm_user');
    const sessionToken = sessionStorage.getItem('hrm_token');

    if (sessionUser && sessionToken) {
      try {
        this.currentUserSubject.next(JSON.parse(sessionUser));
        this.tokenSubject.next(sessionToken);
      } catch (e) { }
    } else {
      const localUser = localStorage.getItem('hrm_user');
      const localToken = localStorage.getItem('hrm_token');
      if (localUser && localToken) {
        try {
          const userObj = JSON.parse(localUser);
          this.currentUserSubject.next(userObj);
          this.tokenSubject.next(localToken);
          sessionStorage.setItem('hrm_user', localUser);
          sessionStorage.setItem('hrm_token', localToken);
        } catch (e) { }
      }
    }
  }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<any>(`${environment.apiBaseUrl}/auth/login`, credentials).pipe(
      map(res => {
        const data = res?.data ?? res;
        const userWithPerms: User = {
          ...data.user,
          permissions: data.user?.permissions?.length ? data.user.permissions : this.generatePermissions(data.user?.role)
        };
        return { ...data, user: userWithPerms };
      }),
      tap(res => {
        sessionStorage.setItem('hrm_user', JSON.stringify(res.user));
        sessionStorage.setItem('hrm_token', res.token);
        localStorage.setItem('hrm_user', JSON.stringify(res.user));
        localStorage.setItem('hrm_token', res.token);
        this.currentUserSubject.next(res.user);
        this.tokenSubject.next(res.token);
        this.dynamicRouteService.initialize();
      }),
      catchError(err => throwError(() => new Error(err?.error?.message || 'Invalid email or password')))
    );
  }

  register(data: RegisterRequest): Observable<LoginResponse> {
    return this.http.post<any>(`${environment.apiBaseUrl}/auth/register`, data).pipe(
      map(res => {
        const backendUser = res?.data ?? res;
        return {
          user: {
            ...backendUser,
            role: data.role || UserRole.EMPLOYEE,
            permissions: backendUser.permissions?.length ? backendUser.permissions : this.generatePermissions(data.role || UserRole.EMPLOYEE)
          },
          token: '',
          refreshToken: '',
          expiresIn: 3600
        } as LoginResponse;
      }),
      tap(res => {
        sessionStorage.setItem('hrm_user', JSON.stringify(res.user));
        localStorage.setItem('hrm_user', JSON.stringify(res.user));
        this.currentUserSubject.next(res.user);
      }),
      catchError(err => throwError(() => new Error(err?.error?.message || 'Registration failed')))
    );
  }

  switchRole(role: UserRole): void {
    const demoCredentials: Record<UserRole, LoginRequest> = {
      [UserRole.ADMIN]: { email: 'admin@hrm.com', password: 'password123' },
      [UserRole.HR]: { email: 'hr@hrm.com', password: 'password123' },
      [UserRole.TL]: { email: 'tl@hrm.com', password: 'password123' },
      [UserRole.EMPLOYEE]: { email: 'emp@hrm.com', password: 'password123' }
    };
    this.login(demoCredentials[role]).subscribe({
      next: () => undefined,
      error: () => undefined
    });
  }

  logout(): void {
    sessionStorage.removeItem('hrm_user');
    sessionStorage.removeItem('hrm_token');
    localStorage.removeItem('hrm_user');
    localStorage.removeItem('hrm_token');
    this.currentUserSubject.next(null);
    this.tokenSubject.next(null);
  }

  get currentUser(): User | null {
    return this.currentUserSubject.value;
  }

  get token(): string | null {
    return this.tokenSubject.value;
  }

  get isLoggedIn(): boolean {
    return !!this.currentUser && !!this.token;
  }

  get userRole(): UserRole | null {
    return this.currentUser?.role ?? null;
  }

  hasPermission(module: string, action: PermissionAction): boolean {
    if (!this.currentUser) return false;
    const perms = this.currentUser.permissions;
    const modulePerm = perms?.find(p => p.module === module);
    if (modulePerm) return modulePerm.actions.includes(action);
    const rolePerms = ROLE_PERMISSIONS[this.currentUser.role];
    if (!rolePerms) return false;
    const actions = rolePerms[module];
    if (!actions) return false;
    return actions.includes(action);
  }

  hasModuleAccess(module: string): boolean {
    if (!this.currentUser) return false;
    const perms = this.currentUser.permissions;
    if (perms?.some(p => p.module === module)) return true;
    const rolePerms = ROLE_PERMISSIONS[this.currentUser.role];
    if (!rolePerms) return false;
    return module in rolePerms;
  }

  private generatePermissions(role: UserRole): Permission[] {
    const rolePerms = ROLE_PERMISSIONS[role] ?? {};
    return Object.entries(rolePerms).map(([module, actions]) => ({
      module,
      actions
    }));
  }
}