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
import { AdminDepartmentFormComponent } from './departments/department-form.component';
import { AdminDepartmentDetailComponent } from './departments/department-detail.component';
import { AdminDesignationsComponent } from './designations/designations.component';
import { AdminDesignationFormComponent } from './designations/designation-form.component';
import { AdminBranchesComponent } from './branches/branches.component';
import { AdminBranchFormComponent } from './branches/branch-form.component';
import { AdminBranchDetailComponent } from './branches/branch-detail.component';
import { AdminTeamsComponent } from './teams/teams.component';
import { AdminTeamFormComponent } from './teams/team-form.component';
import { AdminTeamDetailComponent } from './teams/team-detail.component';
import { AdminAttendanceComponent } from './attendance/attendance.component';
import { AdminLeaveComponent } from './leave-management/leave-management.component';
import { AdminShiftComponent } from './shift-management/shift-management.component';
import { AdminShiftAddComponent } from './shift-management/add-shift.component';
import { AdminShiftEditComponent } from './shift-management/edit-shift.component';
import { AdminPayrollComponent } from './payroll/payroll.component';
import { AdminRecruitmentComponent } from './recruitment/recruitment.component';
import { AdminJobAddComponent } from './recruitment/add-job.component';
import { AdminJobEditComponent } from './recruitment/edit-job.component';
import { AdminCandidateAddComponent } from './recruitment/add-candidate.component';
import { AdminCandidateEditComponent } from './recruitment/edit-candidate.component';
import { AdminOnboardingComponent } from './onboarding/onboarding.component';
import { AdminOnboardingAddComponent } from './onboarding/add-onboarding.component';
import { AdminOnboardingEditComponent } from './onboarding/edit-onboarding.component';
import { AdminOnboardingDetailComponent } from './onboarding/onboarding-detail.component';
import { AdminPerformanceComponent } from './performance/performance.component';
import { AdminTrainingComponent } from './training/training.component';
import { AdminDocumentsComponent } from './documents/documents.component';
import { AdminAnnouncementsComponent } from './announcements/announcements.component';
import { AdminReportsComponent } from './reports/reports.component';
import { AdminUserManagementComponent } from './user-management/user-management.component';
import { AdminUserAddComponent } from './user-management/add-user.component';
import { AdminUserEditComponent } from './user-management/edit-user.component';
import { AdminRolesPermissionsComponent } from './roles-permissions/roles-permissions.component';
import { AdminSystemSettingsComponent } from './system-settings/system-settings.component';
import { AdminAuditLogsComponent } from './audit-logs/audit-logs.component';
import { AdminProjectsComponent } from './projects/projects.component';
import { AdminProjectAddComponent } from './projects/add-project.component';
import { AdminProjectEditComponent } from './projects/edit-project.component';
import { AdminEmployeeManagementComponent } from './management/employee-management/employee-management.component';
import { AdminTlManagementComponent } from './management/tl-management/tl-management.component';
import { AdminHrManagementComponent } from './management/hr-management/hr-management.component';
import { AdminReportingHierarchyComponent } from './org/reporting-hierarchy.component';
import { TreeNodeComponent } from './org/tree-node/tree-node.component';
import { AdminAttendanceCorrectionsComponent } from './attendance/attendance-corrections.component';
import { AdminAttendanceSummaryComponent } from './attendance/attendance-summary.component';
import { AdminAttendanceRulesComponent } from './attendance/attendance-rules.component';
import { AdminAttendanceRulesAddComponent } from './attendance/add-rule.component';
import { AdminAttendanceRulesEditComponent } from './attendance/edit-rule.component';
import { AdminSalaryStructuresComponent } from './payroll/salary-structures.component';
import { AdminSalaryStructureAddComponent } from './payroll/add-salary-structure.component';
import { AdminSalaryStructureEditComponent } from './payroll/edit-salary-structure.component';
import { AdminPayrollReportsComponent } from './payroll/payroll-reports.component';
import { AdminCompanySettingsComponent } from './settings/company-settings.component';
import { AdminEmailSmsConfigComponent } from './settings/email-sms-config.component';
import { AdminNotificationSettingsComponent } from './settings/notification-settings.component';

@NgModule({
  declarations: [
    AdminDashboardComponent, AdminEmployeesComponent, AdminEmployeeFormComponent,
    AdminEmployeeDetailComponent, AdminDepartmentsComponent, AdminDepartmentFormComponent,
    AdminDepartmentDetailComponent,
    AdminDesignationsComponent, AdminDesignationFormComponent, AdminBranchesComponent, AdminBranchFormComponent, AdminBranchDetailComponent, AdminTeamsComponent, AdminTeamFormComponent, AdminTeamDetailComponent,
    AdminAttendanceComponent, AdminLeaveComponent, AdminShiftComponent, AdminShiftAddComponent, AdminShiftEditComponent,
    AdminPayrollComponent, AdminRecruitmentComponent,
    AdminJobAddComponent, AdminJobEditComponent, AdminCandidateAddComponent, AdminCandidateEditComponent, AdminOnboardingComponent,
    AdminOnboardingAddComponent, AdminOnboardingEditComponent, AdminOnboardingDetailComponent,
    AdminPerformanceComponent, AdminTrainingComponent, AdminDocumentsComponent,
    AdminAnnouncementsComponent, AdminReportsComponent, AdminUserManagementComponent,
    AdminUserAddComponent, AdminUserEditComponent,
    AdminRolesPermissionsComponent, AdminSystemSettingsComponent, AdminAuditLogsComponent,
    AdminProjectsComponent,
    AdminProjectAddComponent, AdminProjectEditComponent,
    AdminEmployeeManagementComponent,
    AdminTlManagementComponent,
    AdminHrManagementComponent,
    AdminReportingHierarchyComponent,
    TreeNodeComponent,
    AdminAttendanceCorrectionsComponent,
    AdminAttendanceSummaryComponent,
    AdminAttendanceRulesComponent,
    AdminAttendanceRulesAddComponent,
    AdminAttendanceRulesEditComponent,
    AdminSalaryStructuresComponent,
    AdminSalaryStructureAddComponent,
    AdminSalaryStructureEditComponent,
    AdminPayrollReportsComponent,
    AdminCompanySettingsComponent,
    AdminEmailSmsConfigComponent,
    AdminNotificationSettingsComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AdminRoutingModule, SharedModule]
})
export class AdminModule {}
