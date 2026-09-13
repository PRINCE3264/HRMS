import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HrRoutingModule } from './hr-routing.module';
import { SharedModule } from '../../shared/shared.module';
import {
  GridModule,
  PageService,
  SortService,
  FilterService,
  ToolbarService,
  ExcelExportService,
  PdfExportService,
  ColumnChooserService,
  ResizeService,
  ReorderService
} from '@syncfusion/ej2-angular-grids';

import { HrDashboardComponent } from './dashboard/dashboard.component';
import { HrEmployeesComponent } from './employees/employees.component';
import { HrDepartmentsComponent } from './departments/departments.component';
import { HrTeamsComponent } from './teams/teams.component';
import { HrProjectsComponent } from './projects/projects.component';
import { HrProjectAddComponent } from './projects/add-project.component';
import { HrProjectEditComponent } from './projects/edit-project.component';
import { HrAttendanceComponent } from './attendance/attendance.component';
import { HrAttendanceCorrectionsComponent } from './attendance/attendance-corrections.component';
import { HrAttendanceSummaryComponent } from './attendance/attendance-summary.component';
import { HrAttendanceRulesComponent } from './attendance/attendance-rules.component';
import { HrAttendanceRulesAddComponent } from './attendance/add-rule.component';
import { HrAttendanceRulesEditComponent } from './attendance/edit-rule.component';
import { HrLeaveComponent } from './leave-management/leave-management.component';
import { HrShiftComponent } from './shift-management/shift-management.component';
import { HrPayrollComponent } from './payroll/payroll.component';
import { HrRecruitmentComponent } from './recruitment/recruitment.component';
import { HrJobAddComponent } from './recruitment/add-job.component';
import { HrCandidateAddComponent } from './recruitment/add-candidate.component';
import { HrInterviewScheduleComponent } from './recruitment/schedule-interview.component';
import { HrInterviewEditComponent } from './recruitment/edit-interview.component';
import { HrOnboardingComponent } from './onboarding/onboarding.component';
import { HrOnboardingAddComponent } from './onboarding/add-onboarding.component';
import { HrOnboardingEditComponent } from './onboarding/edit-onboarding.component';
import { HrOnboardingDetailComponent } from './onboarding/onboarding-detail.component';
import { HrPerformanceComponent } from './performance/performance.component';
import { HrTrainingComponent } from './training/training.component';
import { HrDocumentsComponent } from './documents/documents.component';
import { HrAnnouncementsComponent } from './announcements/announcements.component';
import { HrReportsComponent } from './reports/reports.component';
import { HrEmployeeFormComponent } from './employees/employee-form/employee-form.component';
import { HrEmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { HrDepartmentFormComponent } from './departments/department-form/department-form.component';
import { HrDepartmentDetailComponent } from './departments/department-detail/department-detail.component';
import { HrTeamFormComponent } from './teams/team-form/team-form.component';
import { HrTeamDetailComponent } from './teams/team-detail/team-detail.component';
import { HrShiftAddComponent } from './shift-management/add-shift.component';
import { HrShiftEditComponent } from './shift-management/edit-shift.component';

@NgModule({
  declarations: [
    HrDashboardComponent,
    HrEmployeesComponent,
    HrDepartmentsComponent,
    HrTeamsComponent,
    HrProjectsComponent,
    HrProjectAddComponent,
    HrProjectEditComponent,
    HrAttendanceComponent,
    HrAttendanceCorrectionsComponent,
    HrAttendanceSummaryComponent,
    HrAttendanceRulesComponent,
    HrAttendanceRulesAddComponent,
    HrAttendanceRulesEditComponent,
    HrLeaveComponent,
    HrShiftComponent,
    HrPayrollComponent,
    HrRecruitmentComponent,
    HrJobAddComponent,
    HrCandidateAddComponent,
    HrInterviewScheduleComponent,
    HrInterviewEditComponent,
    HrOnboardingComponent,
    HrOnboardingAddComponent,
    HrOnboardingEditComponent,
    HrOnboardingDetailComponent,
    HrPerformanceComponent,
    HrTrainingComponent,
    HrDocumentsComponent,
    HrAnnouncementsComponent,
    HrReportsComponent,
    HrEmployeeFormComponent,
    HrEmployeeDetailComponent,
    HrDepartmentFormComponent,
    HrDepartmentDetailComponent,
    HrTeamFormComponent,
    HrTeamDetailComponent,
    HrShiftAddComponent,
    HrShiftEditComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    HrRoutingModule, SharedModule,
    GridModule
  ],
  providers: [
    PageService, SortService, FilterService, ToolbarService,
    ExcelExportService, PdfExportService, ColumnChooserService,
    ResizeService, ReorderService
  ]
})
export class HrModule {}
