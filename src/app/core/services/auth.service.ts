import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { User, UserRole, LoginRequest, RegisterRequest, LoginResponse, Permission, PermissionAction } from '../models';
import { ROLE_PERMISSIONS } from '../constants';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private tokenSubject = new BehaviorSubject<string | null>(null);

  constructor() {
    const stored = localStorage.getItem('hrm_user');
    if (stored) {
      this.currentUserSubject.next(JSON.parse(stored));
    }
    const token = localStorage.getItem('hrm_token');
    if (token) {
      this.tokenSubject.next(token);
    }
  }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    const mockUsers: Record<string, LoginResponse> = {
      'admin@hrm.com': {
        user: {
          id: '1', email: 'admin@hrm.com', firstName: 'Admin', lastName: 'User',
          role: UserRole.ADMIN, department: 'Administration', designation: 'System Administrator',
          branch: 'Head Office', employeeId: 'ADM001', avatar: '', permissions: []
        },
        token: 'mock-admin-token', refreshToken: 'mock-admin-refresh', expiresIn: 3600
      },
      'hr@hrm.com': {
        user: {
          id: '2', email: 'hr@hrm.com', firstName: 'Sarah', lastName: 'Johnson',
          role: UserRole.HR, department: 'Human Resources', designation: 'HR Manager',
          branch: 'Head Office', employeeId: 'HR001', avatar: '', permissions: []
        },
        token: 'mock-hr-token', refreshToken: 'mock-hr-refresh', expiresIn: 3600
      },
      'tl@hrm.com': {
        user: {
          id: '3', email: 'tl@hrm.com', firstName: 'Michael', lastName: 'Chen',
          role: UserRole.TL, department: 'Engineering', designation: 'Team Lead',
          branch: 'Head Office', employeeId: 'TL001', avatar: '', permissions: [],
        },
        token: 'mock-tl-token', refreshToken: 'mock-tl-refresh', expiresIn: 3600
      },
      'emp@hrm.com': {
        user: {
          id: '4', email: 'emp@hrm.com', firstName: 'Emily', lastName: 'Davis',
          role: UserRole.EMPLOYEE, department: 'Engineering', designation: 'Software Developer',
          branch: 'Head Office', employeeId: 'EMP001', avatar: '', permissions: [],
        },
        token: 'mock-emp-token', refreshToken: 'mock-emp-refresh', expiresIn: 3600
      }
    };

    const response = mockUsers[credentials.email];
    if (response && credentials.password === 'password123') {
      return of(response).pipe(
        delay(800),
        tap(res => {
          const userWithPerms = { ...res.user, permissions: this.generatePermissions(res.user.role) };
          localStorage.setItem('hrm_user', JSON.stringify(userWithPerms));
          localStorage.setItem('hrm_token', res.token);
          this.currentUserSubject.next(userWithPerms);
          this.tokenSubject.next(res.token);
        })
      );
    }
    return throwError(() => new Error('Invalid email or password')).pipe(delay(800));
  }

  register(data: RegisterRequest): Observable<LoginResponse> {
    const newUser: User = {
      id: String(Date.now()),
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      role: data.role || UserRole.EMPLOYEE,
      department: data.department || 'Engineering',
      designation: data.designation || 'Employee',
      branch: 'Head Office',
      employeeId: 'EMP' + Math.floor(1000 + Math.random() * 9000),
      avatar: '',
      permissions: []
    };

    const response: LoginResponse = {
      user: newUser,
      token: `mock-token-${Date.now()}`,
      refreshToken: `mock-refresh-${Date.now()}`,
      expiresIn: 3600
    };

    return of(response).pipe(
      delay(800),
      tap(res => {
        const userWithPerms = { ...res.user, permissions: this.generatePermissions(res.user.role) };
        localStorage.setItem('hrm_user', JSON.stringify(userWithPerms));
        localStorage.setItem('hrm_token', res.token);
        this.currentUserSubject.next(userWithPerms);
        this.tokenSubject.next(res.token);
      })
    );
  }


  switchRole(role: UserRole): void {
    const mockUsers: Record<UserRole, User> = {
      [UserRole.ADMIN]: {
        id: '1', email: 'admin@hrm.com', firstName: 'Admin', lastName: 'User',
        role: UserRole.ADMIN, department: 'Administration', designation: 'System Administrator',
        branch: 'Head Office', employeeId: 'ADM001', avatar: '', permissions: []
      },
      [UserRole.HR]: {
        id: '2', email: 'hr@hrm.com', firstName: 'Sarah', lastName: 'Johnson',
        role: UserRole.HR, department: 'Human Resources', designation: 'HR Manager',
        branch: 'Head Office', employeeId: 'HR001', avatar: '', permissions: []
      },
      [UserRole.TL]: {
        id: '3', email: 'tl@hrm.com', firstName: 'Michael', lastName: 'Chen',
        role: UserRole.TL, department: 'Engineering', designation: 'Team Lead',
        branch: 'Head Office', employeeId: 'TL001', avatar: '', permissions: []
      },
      [UserRole.EMPLOYEE]: {
        id: '4', email: 'emp@hrm.com', firstName: 'Emily', lastName: 'Davis',
        role: UserRole.EMPLOYEE, department: 'Engineering', designation: 'Software Developer',
        branch: 'Head Office', employeeId: 'EMP001', avatar: '', permissions: []
      }
    };

    const targetUser = mockUsers[role];
    if (targetUser) {
      const userWithPerms = { ...targetUser, permissions: this.generatePermissions(role) };
      localStorage.setItem('hrm_user', JSON.stringify(userWithPerms));
      localStorage.setItem('hrm_token', `mock-${role.toLowerCase()}-token`);
      this.currentUserSubject.next(userWithPerms);
      this.tokenSubject.next(`mock-${role.toLowerCase()}-token`);
    }
  }

  logout(): void {
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
    const rolePerms = ROLE_PERMISSIONS[this.currentUser.role];
    if (!rolePerms) return false;
    const modulePerms = rolePerms[module];
    if (!modulePerms) return false;
    return modulePerms.includes(action);
  }

  hasModuleAccess(module: string): boolean {
    if (!this.currentUser) return false;
    const rolePerms = ROLE_PERMISSIONS[this.currentUser.role];
    if (!rolePerms) return false;
    return module in rolePerms;
  }

  private generatePermissions(role: UserRole): Permission[] {
    const rolePerms = ROLE_PERMISSIONS[role];
    return Object.entries(rolePerms).map(([module, actions]) => ({
      module,
      actions
    }));
  }
}
