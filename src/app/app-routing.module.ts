import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { RoleRedirectGuard } from './core/guards/role-redirect.guard';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'dashboard' } },
      { path: 'employees', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'employees' } },
      { path: 'employees/add', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'employees-add' } },
      { path: 'employees/:id/edit', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'employees-edit' } },
      { path: 'employees/:id', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'employees-detail' } },
      { path: 'departments', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'departments' } },
      { path: 'designations', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'designations' } },
      { path: 'branches', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'branches' } },
      { path: 'teams', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'teams' } },
      { path: 'attendance', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'attendance' } },
      { path: 'leave', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'leave' } },
      { path: 'shifts', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'shifts' } },
      { path: 'payroll', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'payroll' } },
      { path: 'recruitment', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'recruitment' } },
      { path: 'onboarding', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'onboarding' } },
      { path: 'performance', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'performance' } },
      { path: 'training', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'training' } },
      { path: 'documents', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'documents' } },
      { path: 'announcements', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'announcements' } },
      { path: 'reports', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'reports' } },
      { path: 'users', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'users' } },
      { path: 'roles', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'roles' } },
      { path: 'settings', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'settings' } },
      { path: 'audit-logs', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'audit-logs' } },
      { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule), canLoad: [RoleGuard], data: { roles: ['ADMIN', 'HR', 'TL', 'EMPLOYEE'] } },
      { path: 'team', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'team' } },
      { path: 'team/attendance', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'team-attendance' } },
      { path: 'team/leave', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'team-leave' } },
      { path: 'team/tasks', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'team-tasks' } },
      { path: 'team/performance', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'team-performance' } },
      { path: 'team/kpi', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'team-kpi' } },
      { path: 'team/reports', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'team-reports' } },
      { path: 'tl', loadChildren: () => import('./modules/team-lead/team-lead.module').then(m => m.TeamLeadModule), canLoad: [RoleGuard], data: { roles: ['TL'] } },
      { path: 'my-profile', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'my-profile' } },
      { path: 'my-attendance', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'my-attendance' } },
      { path: 'check-in-out', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'check-in-out' } },
      { path: 'break-tracker', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'break-tracker' } },
      { path: 'daily-work-update', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'daily-work-update' } },
      { path: 'my-leave', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'my-leave' } },
      { path: 'apply-leave', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'apply-leave' } },
      { path: 'my-payslips', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'my-payslips' } },
      { path: 'my-tasks', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'my-tasks' } },
      { path: 'my-performance', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'my-performance' } },
      { path: 'my-documents', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'my-documents' } },
      { path: 'notifications', canActivate: [RoleRedirectGuard], children: [], data: { feature: 'notifications' } },
      { path: 'hr', loadChildren: () => import('./modules/hr/hr.module').then(m => m.HrModule), canLoad: [RoleGuard], data: { roles: ['HR'] } },
      { path: 'employee', loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule), canLoad: [RoleGuard], data: { roles: ['ADMIN', 'HR', 'TL', 'EMPLOYEE'] } },
    ]
  },
  {
    path: 'unauthorized',
    loadChildren: () => import('./shared/components/unauthorized/unauthorized.module').then(m => m.UnauthorizedModule)
  },
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}