import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { AdminEmployeesComponent } from './employees/employees.component';
import { AdminEmployeeFormComponent } from './employees/employee-form.component';
import { AdminEmployeeDetailComponent } from './employees/employee-detail.component';
import { AdminDepartmentsComponent } from './departments/departments.component';
import { AdminDesignationsComponent } from './designations/designations.component';
import { AdminBranchesComponent } from './branches/branches.component';
import { AdminTeamsComponent } from './teams/teams.component';
import { AdminAttendanceComponent } from './attendance/attendance.component';
import { AdminLeaveComponent } from './leave-management/leave-management.component';
import { AdminShiftComponent } from './shift-management/shift-management.component';
import { AdminPayrollComponent } from './payroll/payroll.component';
import { AdminRecruitmentComponent } from './recruitment/recruitment.component';
import { AdminOnboardingComponent } from './onboarding/onboarding.component';
import { AdminPerformanceComponent } from './performance/performance.component';
import { AdminTrainingComponent } from './training/training.component';
import { AdminDocumentsComponent } from './documents/documents.component';
import { AdminAnnouncementsComponent } from './announcements/announcements.component';
import { AdminReportsComponent } from './reports/reports.component';
import { AdminUserManagementComponent } from './user-management/user-management.component';
import { AdminRolesPermissionsComponent } from './roles-permissions/roles-permissions.component';
import { AdminSystemSettingsComponent } from './system-settings/system-settings.component';
import { AdminAuditLogsComponent } from './audit-logs/audit-logs.component';
import { AdminProjectsComponent } from './projects/projects.component';
import { AdminEmployeeManagementComponent } from './management/employee-management/employee-management.component';
import { AdminTlManagementComponent } from './management/tl-management/tl-management.component';
import { AdminHrManagementComponent } from './management/hr-management/hr-management.component';
import { AdminReportingHierarchyComponent } from './org/reporting-hierarchy.component';
import { AdminAttendanceCorrectionsComponent } from './attendance/attendance-corrections.component';
import { AdminAttendanceSummaryComponent } from './attendance/attendance-summary.component';
import { AdminAttendanceRulesComponent } from './attendance/attendance-rules.component';
import { AdminSalaryStructuresComponent } from './payroll/salary-structures.component';
import { AdminPayrollReportsComponent } from './payroll/payroll-reports.component';
import { AdminCompanySettingsComponent } from './settings/company-settings.component';
import { AdminEmailSmsConfigComponent } from './settings/email-sms-config.component';
import { AdminNotificationSettingsComponent } from './settings/notification-settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'employees', component: AdminEmployeesComponent },
  { path: 'employees/add', component: AdminEmployeeFormComponent },
  { path: 'employees/:id/edit', component: AdminEmployeeFormComponent },
  { path: 'employees/:id', component: AdminEmployeeDetailComponent },
  { path: 'departments', component: AdminDepartmentsComponent },
  { path: 'designations', component: AdminDesignationsComponent },
  { path: 'branches', component: AdminBranchesComponent },
  { path: 'teams', component: AdminTeamsComponent },
  { path: 'attendance', component: AdminAttendanceComponent },
  { path: 'leave', component: AdminLeaveComponent },
  { path: 'shifts', component: AdminShiftComponent },
  { path: 'payroll', component: AdminPayrollComponent },
  { path: 'recruitment', component: AdminRecruitmentComponent },
  { path: 'onboarding', component: AdminOnboardingComponent },
  { path: 'performance', component: AdminPerformanceComponent },
  { path: 'training', component: AdminTrainingComponent },
  { path: 'documents', component: AdminDocumentsComponent },
  { path: 'announcements', component: AdminAnnouncementsComponent },
  { path: 'reports', component: AdminReportsComponent },
  { path: 'users', component: AdminUserManagementComponent },
  { path: 'roles', component: AdminRolesPermissionsComponent },
  { path: 'settings', component: AdminSystemSettingsComponent },
  { path: 'audit-logs', component: AdminAuditLogsComponent },
  { path: 'projects', component: AdminProjectsComponent },
  { path: 'employee-management', component: AdminEmployeeManagementComponent },
  { path: 'tl-management', component: AdminTlManagementComponent },
  { path: 'hr-management', component: AdminHrManagementComponent },
  { path: 'reporting-hierarchy', component: AdminReportingHierarchyComponent },
  { path: 'attendance/corrections', component: AdminAttendanceCorrectionsComponent },
  { path: 'attendance/summary', component: AdminAttendanceSummaryComponent },
  { path: 'attendance/rules', component: AdminAttendanceRulesComponent },
  { path: 'payroll/salary-structures', component: AdminSalaryStructuresComponent },
  { path: 'payroll/reports', component: AdminPayrollReportsComponent },
  { path: 'settings/company', component: AdminCompanySettingsComponent },
  { path: 'settings/email-sms', component: AdminEmailSmsConfigComponent },
  { path: 'settings/notifications', component: AdminNotificationSettingsComponent },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}