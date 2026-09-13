import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrEmployeeFormComponent } from './employees/employee-form/employee-form.component';
import { HrEmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { HrDepartmentFormComponent } from './departments/department-form/department-form.component';
import { HrDepartmentDetailComponent } from './departments/department-detail/department-detail.component';
import { HrTeamFormComponent } from './teams/team-form/team-form.component';
import { HrTeamDetailComponent } from './teams/team-detail/team-detail.component';
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
import { HrShiftAddComponent } from './shift-management/add-shift.component';
import { HrShiftEditComponent } from './shift-management/edit-shift.component';
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

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HrDashboardComponent },
  { path: 'employees', component: HrEmployeesComponent },
  { path: 'employees/add', component: HrEmployeeFormComponent },
  { path: 'employees/:id/edit', component: HrEmployeeFormComponent },
  { path: 'employees/:id', component: HrEmployeeDetailComponent },
  { path: 'departments', component: HrDepartmentsComponent },
  { path: 'departments/add', component: HrDepartmentFormComponent },
  { path: 'departments/:id/edit', component: HrDepartmentFormComponent },
  { path: 'departments/:id', component: HrDepartmentDetailComponent },
  { path: 'teams', component: HrTeamsComponent },
  { path: 'teams/add', component: HrTeamFormComponent },
  { path: 'teams/:id/edit', component: HrTeamFormComponent },
  { path: 'teams/:id', component: HrTeamDetailComponent },
  { path: 'projects', component: HrProjectsComponent },
  { path: 'projects/add', component: HrProjectAddComponent },
  { path: 'projects/:id/edit', component: HrProjectEditComponent },
  { path: 'attendance', component: HrAttendanceComponent },
  { path: 'attendance/corrections', component: HrAttendanceCorrectionsComponent },
  { path: 'attendance/summary', component: HrAttendanceSummaryComponent },
  { path: 'attendance/rules', component: HrAttendanceRulesComponent },
  { path: 'attendance/rules/add', component: HrAttendanceRulesAddComponent },
  { path: 'attendance/rules/:id/edit', component: HrAttendanceRulesEditComponent },
  { path: 'leave', component: HrLeaveComponent },
  { path: 'shifts', component: HrShiftComponent },
  { path: 'shifts/add', component: HrShiftAddComponent },
  { path: 'shifts/:id/edit', component: HrShiftEditComponent },
  { path: 'payroll', component: HrPayrollComponent },
  { path: 'recruitment', component: HrRecruitmentComponent },
  { path: 'recruitment/jobs/add', component: HrJobAddComponent },
  { path: 'recruitment/candidates/add', component: HrCandidateAddComponent },
  { path: 'recruitment/interviews/schedule', component: HrInterviewScheduleComponent },
  { path: 'recruitment/interviews/:id/edit', component: HrInterviewEditComponent },
  { path: 'onboarding', component: HrOnboardingComponent },
  { path: 'onboarding/add', component: HrOnboardingAddComponent },
  { path: 'onboarding/:id/edit', component: HrOnboardingEditComponent },
  { path: 'onboarding/:id', component: HrOnboardingDetailComponent },
  { path: 'performance', component: HrPerformanceComponent },
  { path: 'training', component: HrTrainingComponent },
  { path: 'documents', component: HrDocumentsComponent },
  { path: 'announcements', component: HrAnnouncementsComponent },
  { path: 'reports', component: HrReportsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule {}
