import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrDashboardComponent } from './dashboard/dashboard.component';
import { HrEmployeesComponent } from './employees/employees.component';
import { HrDepartmentsComponent } from './departments/departments.component';
import { HrTeamsComponent } from './teams/teams.component';
import { HrAttendanceComponent } from './attendance/attendance.component';
import { HrLeaveComponent } from './leave-management/leave-management.component';
import { HrShiftComponent } from './shift-management/shift-management.component';
import { HrPayrollComponent } from './payroll/payroll.component';
import { HrRecruitmentComponent } from './recruitment/recruitment.component';
import { HrOnboardingComponent } from './onboarding/onboarding.component';
import { HrPerformanceComponent } from './performance/performance.component';
import { HrTrainingComponent } from './training/training.component';
import { HrDocumentsComponent } from './documents/documents.component';
import { HrAnnouncementsComponent } from './announcements/announcements.component';
import { HrReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HrDashboardComponent },
  { path: 'employees', component: HrEmployeesComponent },
  { path: 'departments', component: HrDepartmentsComponent },
  { path: 'teams', component: HrTeamsComponent },
  { path: 'attendance', component: HrAttendanceComponent },
  { path: 'leave', component: HrLeaveComponent },
  { path: 'shifts', component: HrShiftComponent },
  { path: 'payroll', component: HrPayrollComponent },
  { path: 'recruitment', component: HrRecruitmentComponent },
  { path: 'onboarding', component: HrOnboardingComponent },
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
