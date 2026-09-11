import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../../shared/shared.module';

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
import { TreeNodeComponent } from './org/tree-node/tree-node.component';
import { AdminAttendanceCorrectionsComponent } from './attendance/attendance-corrections.component';
import { AdminAttendanceSummaryComponent } from './attendance/attendance-summary.component';
import { AdminAttendanceRulesComponent } from './attendance/attendance-rules.component';
import { AdminSalaryStructuresComponent } from './payroll/salary-structures.component';
import { AdminPayrollReportsComponent } from './payroll/payroll-reports.component';
import { AdminCompanySettingsComponent } from './settings/company-settings.component';
import { AdminEmailSmsConfigComponent } from './settings/email-sms-config.component';
import { AdminNotificationSettingsComponent } from './settings/notification-settings.component';

@NgModule({
  declarations: [
    AdminDashboardComponent, AdminEmployeesComponent, AdminEmployeeFormComponent,
    AdminEmployeeDetailComponent, AdminDepartmentsComponent,
    AdminDesignationsComponent, AdminBranchesComponent, AdminTeamsComponent,
    AdminAttendanceComponent, AdminLeaveComponent, AdminShiftComponent,
    AdminPayrollComponent, AdminRecruitmentComponent, AdminOnboardingComponent,
    AdminPerformanceComponent, AdminTrainingComponent, AdminDocumentsComponent,
    AdminAnnouncementsComponent, AdminReportsComponent, AdminUserManagementComponent,
    AdminRolesPermissionsComponent, AdminSystemSettingsComponent, AdminAuditLogsComponent,
    AdminProjectsComponent,
    AdminEmployeeManagementComponent,
    AdminTlManagementComponent,
    AdminHrManagementComponent,
    AdminReportingHierarchyComponent,
    TreeNodeComponent,
    AdminAttendanceCorrectionsComponent,
    AdminAttendanceSummaryComponent,
    AdminAttendanceRulesComponent,
    AdminSalaryStructuresComponent,
    AdminPayrollReportsComponent,
    AdminCompanySettingsComponent,
    AdminEmailSmsConfigComponent,
    AdminNotificationSettingsComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AdminRoutingModule, SharedModule]
})
export class AdminModule {}
